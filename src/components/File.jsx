import React, { useState } from 'react'
import { FaFile } from 'react-icons/fa'

const File = ({type, url, deleteImage}) => {
  
  const [deleteIsShown, setDeleteIsShown] = useState(false);

  const download = () => {
    let xhr = new XMLHttpRequest();
    xhr.responseType = 'blob';
    xhr.onload = (event) => {
      var blob = xhr.response;
    };
    xhr.open('GET', url);
    xhr.send();
  }

  return (
    <>
    
    <div 
      className='container'
      onMouseOver={() => setDeleteIsShown(true)}
      onMouseOut={() => setDeleteIsShown(false)}
      onClick = {download}
    >

      {type.includes('image') ? <img src={url}/> : <div className="file"><FaFile className="fileIcon"/></div>}
      
    </div>
      {deleteIsShown && 
        <button 
          className="delete-btn"
          onClick={deleteImage}
        >
          X
        </button>
      }
    </>
  );
}

export default File;
