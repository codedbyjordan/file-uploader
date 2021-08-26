import React, { useState } from 'react';
import ProgressBar from './ProgressBar';

const UploadForm = () => {

  const [file, setFile] = useState(null)
  const [error, setError] = useState(null)

  const fileInputChangeHandler = (e) => {
    let selectedFile = e.target.files[0] // if user clicks 'cancel' then selectedFile will be undefined
    if(selectedFile) {
      setFile(selectedFile)
    } else {
      setError('Error: No file selected') // todo: update error text
    }
  }

  return (
    <form>
      <label>
        <input type="file" onChange={fileInputChangeHandler} />
        <span>+</span>
      </label>
      <div className="output">
        {error && <h1>{error}</h1>}
        {file && <h1>{file.name}</h1>}
        {file && <ProgressBar file={file} resetFile={() => setFile(null)}/>}
      </div>
    </form>
  );
}

export default UploadForm;
