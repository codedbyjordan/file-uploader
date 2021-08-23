import React, { useEffect } from 'react';
import useStorage from '../hooks/useStorage';

const ProgressBar = ({file, resetFile}) => {

  const {progress, error, fileUrl } = useStorage(file)

  useEffect(() => {
    if(fileUrl)
      resetFile()
  }, [fileUrl, resetFile])

  return (
    <div className='progress-bar'>
      <progress value={progress} max={100} style={{width: '100%'}}></progress>
    </div>
  );
}

export default ProgressBar;
