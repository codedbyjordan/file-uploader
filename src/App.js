import React from 'react';
import Title from './components/Title'
import ImageGrid from './components/ImageGrid';
import UploadForm from './components/UploadForm';
import useUser from './hooks/useUser';

function App() {

  const [user, signIn, signOut] = useUser()

  return (
    
    <div className="App">
      <Title/>
      {user.loggedIn &&
        <>
          <UploadForm/>
          <ImageGrid/>
        </>
      }
    </div>
  );
}

export default App;
