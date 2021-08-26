import React from 'react'
import useUser from '../hooks/useUser';
import Title from './Title';
import UploadForm from './UploadForm'
import ImageGrid from './FileGrid'

const Home = () => {

  const [user] = useUser()

  return (
    <div>
      {user.loggedIn ?
        <>
          <Title>Hello, {user.displayName}</Title>
          <UploadForm/>
          <ImageGrid/>
        </>
      
      :

        <Title>Welcome!</Title>
      }

    </div>
  );
}

export default Home;
