import React, { useEffect } from 'react';
import useStorage from '../hooks/useStorage';
import useUser from '../hooks/useUser';

const ProgressBar = ({file, resetFile}) => {

  const [ user ] = useUser()
  const [progress, error, fileUrl] = useStorage(file, user.id)

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
