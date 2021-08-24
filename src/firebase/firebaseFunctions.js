import firebaseConfig from './config'
import firebase from 'firebase/app'
import 'firebase/storage'
import 'firebase/firestore'
import 'firebase/auth'


// Initialize Firebase
firebase.initializeApp(firebaseConfig)

const projectStorage = firebase.storage()
const projectFirestore = firebase.firestore()
const createTimestamp = firebase.firestore.FieldValue.serverTimestamp
const deleteField = firebase.firestore.FieldValue.delete

// auth
const firebaseAuth = firebase.auth()
const googleAuthProvider = new firebase.auth.GoogleAuthProvider();

const deleteFile = async(collection, id, fileName) => {
  const storageRef = projectStorage.ref(fileName)
  var dbRef = projectFirestore.collection(collection).doc(id)
  await storageRef.delete()
  await dbRef.delete()
}

export async function getCurrentUser() {
  const currUser = await firebaseAuth.currentUser
  return currUser
}

export { 
  projectStorage,
  projectFirestore,
  createTimestamp,
  deleteField,
  deleteFile,
  firebaseAuth,
  googleAuthProvider,
}