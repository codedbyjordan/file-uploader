import React from 'react';
import useFirestore from '../hooks/useFirestore';
import Image from './Image';
import { deleteFile } from '../firebase/firebaseFunctions.js'
import useUser from '../hooks/useUser';

const ImageGrid = () => {

  const [user] = useUser()
  const { docs } = useFirestore(user.id)
  

  return (
    <div className="img-grid">
      { docs && docs.map(doc => (
        <div className="img-wrap" key={doc.id}>
          <Image url={doc.url} deleteImage={ () => deleteFile(user.id, doc.id, doc.fileName) } key={doc.id}></Image>
        </div>
      ))}      
    </div>
  );
}

export default ImageGrid;
