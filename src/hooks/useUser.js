import { useContext } from "react"
import { UserContext } from "../contexts/User";
import { firebaseAuth, googleAuthProvider } from '../firebase/firebaseFunctions';

const useUser = () => {

  const { user, userDispatch } = useContext(UserContext)

  const signIn = () => {
    firebaseAuth.signInWithPopup(googleAuthProvider).then((result) => {
      userDispatch({
        type: 'sign_in',
        payload: {
          displayName: result.user.displayName,
          email: result.user.email,
          id: result.user.uid
        }
      })
    }).catch(err => console.log(err))
  }
  
  const signOut = () => {
    firebaseAuth.signOut().then((data) => {
      userDispatch({type: 'sign_out'})
    }).catch(err => {
      console.log(err)
    })
  }

  return [user, signIn, signOut]

}

export default useUser