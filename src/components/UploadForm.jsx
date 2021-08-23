import React, { useReducer } from 'react';
import ProgressBar from './ProgressBar';

const initialState = {
  file: null,
  error: null
}

const fileReducer = (state, action) => {
  switch(action.type) {

    case 'set_file':
      return {
        file: action.payload,
        error: null
      }

    case 'error':
      return {
        file: null,
        error: action.payload
      }

    case 'reset':
      return {
        file: null,
        error: null
      }
    
    default:
      return state
  }
}

const UploadForm = () => {

  const [file, fileDispatch] = useReducer(fileReducer, initialState)
  const allowedFileTypes = ['image/png', 'image/jpeg']

  const fileInputChangeHandler = (e) => {
    let selectedFile = e.target.files[0] // if user clicks 'cancel' then selectedFile will be undefined
    if(selectedFile && allowedFileTypes.includes(selectedFile.type)) {
      fileDispatch({type: 'set_file', payload: selectedFile})
    } else {
      fileDispatch({type: 'error', payload: 'Error: Selected file is not of type PNG or JPG/JPEG'})
    }
  }

  return (
    <form>
      <label>
        <input type="file" onChange={fileInputChangeHandler} />
        <span>+</span>
      </label>
      <div className="output">
        {file.error && <h1>{file.error}</h1>}
        {file.file && <h1>{file.file.name}</h1>}
        {file.file && <ProgressBar file={file.file} resetFile={() => fileDispatch({type: 'reset'})}/>}
      </div>
    </form>
  );
}

export default UploadForm;
