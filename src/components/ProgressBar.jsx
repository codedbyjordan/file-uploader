import React, { useContext, useEffect } from 'react';
import { UserContext } from '../contexts/User';
import useStorage from '../hooks/useStorage';

const ProgressBar = ({file, resetFile}) => {

  const { user, userDispatch } = useContext(UserContext)

  const {progress, error, fileUrl} = useStorage(file, user.id)

  useEffect(() => {
    if(fileUrl)
      resetFile()
  }, [fileUrl, resetFile])

  console.log(progress)

  return (
    <div className='progress-bar'>
      <progress value={progress} max={100} style={{width: '100%'}}></progress>
    </div>
  );
}

export default ProgressBar;
