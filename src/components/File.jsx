import React, { useState } from 'react'
import { FaFile, FaFileVideo } from 'react-icons/fa'

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
      <div className="file">
        {type.includes('image') && <img src={url}/> } 
        {type.includes('text') && <FaFile className="fileIcon"/>}
        {type.includes('video') && <FaFileVideo className="fileIcon"/>}
      </div>
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
