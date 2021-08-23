import React from 'react';
import useFirestore from '../hooks/useFirestore';
import Image from './Image';
import deleteFile from '../deleteFile'

const ImageGrid = () => {

  const { docs } = useFirestore('images')

  return (
    <div className="img-grid">
      { docs && docs.map(doc => (
        <div className="img-wrap" key={doc.id}>
          <Image url={doc.url} deleteImage={ () => deleteFile('images', doc.id, doc.fileName) } key={doc.id}></Image>
        </div>
      ))}      
    </div>
  );
}

export default ImageGrid;
