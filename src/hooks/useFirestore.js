import { useState, useEffect } from 'react'
import { projectFirestore } from '../firebase/firebaseFunctions';

const useFirestore = (collectionName) => {
  
  const [docs, setDocs] = useState([])
  const [collection, setCollection] = useState(collectionName)

  useEffect(() => {
    const unsubFromCollection = projectFirestore.collection(collection)
      .orderBy('createdAt', 'desc')
      .onSnapshot(snapshot => { // fired once, then whenever a change occurs in a collection
        let documents = []
        snapshot.forEach(document => {
          documents.push({...document.data(), id: document.id})
        })
        setDocs(documents)
      })

    return () => unsubFromCollection
  }, [collection])

  

  return { docs, setCollection }

}

export default useFirestore;
