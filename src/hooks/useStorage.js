import React, { useReducer, useEffect } from 'react';
import { projectStorage, projectFirestore, createTimestamp } from '../firebase/firebaseFunctions';

const initialState = {
  progress: 0,
  error: '',
  fileUrl: ''
}

const storageReducer = (state, action) => {
  switch(action.type) {
    case 'update_progress':
      return {
        ...state,
        progress: action.payload
      }
    case 'error':
      return {
        error: action.payload
      }

    case 'set_url':
      return {
        ...state,
        error: null,
        fileUrl: action.payload
      }
  }
}

const fileNameWithId = (str) => {
  str = str.split(/(?=.png|.jpg|.jpeg)/)
  let extension = str.pop()
  str.push(Date.now(), extension)

  return str.join().replace(',', '')
}

const useStorage = (file) => {
  const [storage, storageDispatch] = useReducer(storageReducer, initialState)
  const collectionRef = projectFirestore.collection('images')

  console.log(file)

  useEffect(() => {
    // add unique id onto image name
    const fileName = fileNameWithId(file.name)

    const storageRef = projectStorage.ref(fileName)

    storageRef.put(file).on('state_changed', (snapshot) => {
      storageDispatch({type: 'update_progress', payload: (snapshot.bytesTransferred / snapshot.totalBytes) * 100})
    }, (error) => {
      storageDispatch({type: 'error', payload: error})
    }, async () => {
      // on complete
      const url = await storageRef.getDownloadURL()
      collectionRef.add({fileName, url, createdAt: createTimestamp()})
      storageDispatch({type: 'set_url', payload: url})
    })

  }, [file])

  

  return storage

}

export default useStorage;
