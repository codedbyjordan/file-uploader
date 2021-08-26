import React, { useState } from 'react'
import { FaFile } from 'react-icons/fa'

const File = ({type, url, deleteFile}) => {
  
  const [deleteIsShown, setDeleteIsShown] = useState(false);

  return (
    <>
    
    <div 
      className='container'
      onMouseOver={() => setDeleteIsShown(true)}
      onMouseOut={() => setDeleteIsShown(false)}
      onClick = {() => window.location = url}
    >

      {type.includes('image') ? <img src={url}/> : <div className="file"><FaFile className="fileIcon"/></div>}
    </div>

    {deleteIsShown && 
      <button 
        className="delete-btn"
        onClick={deleteFile}
      >
        X
      </button>
    }

    </>
  );
}

export default File;
