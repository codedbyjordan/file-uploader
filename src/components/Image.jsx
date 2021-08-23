import React, { useState } from 'react';

const Image = ({url, deleteImage}) => {

  const [deleteIsShown, setDeleteIsShown] = useState(false);

  return (
    <>
    
    <div className='img-container'>
      <img 
        src={url}
        alt="uploaded image"
        onMouseOver={() => setDeleteIsShown(true)}
        onMouseOut={() => setDeleteIsShown(false)}
      />
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

export default Image;
