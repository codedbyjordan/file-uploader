import { useEffect, useState } from 'react';
import { projectStorage, projectFirestore, createTimestamp } from '../firebase/firebaseFunctions';

const fileNameWithId = (str) => {
  str = str.split(/(?=.png|.jpg|.jpeg|.txt)/)
  let extension = str.pop()
  str.push(Date.now(), extension)

  return str.join().replace(',', '')
}

const useStorage = (file, collection) => {
  const [progress, setProgress] = useState(0)
  const [error, setError] = useState(null)
  const [fileUrl, setFileUrl] = useState(null)

  useEffect(() => {
    // add unique id onto image name
    const fileName = fileNameWithId(file.name)

    const collectionRef = projectFirestore.collection(collection)

    const storageRef = projectStorage.ref(fileName)

    storageRef.put(file).on('state_changed', (snapshot) => {
      setProgress((snapshot.bytesTransferred / snapshot.totalBytes) * 100)
    }, (error) => {
      setError(error)
    }, async () => {
      // on complete
      const url = await storageRef.getDownloadURL()
      setFileUrl(url)
      collectionRef.add({name: fileName, url: url, type: file.type, createdAt: createTimestamp()})
    })

  }, [file, collection])

  return [progress, error, fileUrl]

}

export default useStorage;
