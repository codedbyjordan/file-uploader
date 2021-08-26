import React from 'react';
import useFirestore from '../hooks/useFirestore';
import { deleteFile } from '../firebase/firebaseFunctions.js'
import useUser from '../hooks/useUser';
import File from './File';

const FileGrid = () => {

  const [user] = useUser()
  const { docs } = useFirestore(user.id)
  

  return (
    <div className="grid">
      { docs && docs.map(doc => (
        <div className="wrap" key={doc.id}>
          <File type={doc.type} url={doc.url} deleteFile={ () => deleteFile(user.id, doc.id, doc.fileName) } key={doc.id}/>
        </div>
      ))}      
    </div>
  );
}

export default FileGrid;
