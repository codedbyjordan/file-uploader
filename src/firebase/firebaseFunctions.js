import firebaseConfig from './config'
import firebase from 'firebase/app'
import 'firebase/storage'
import 'firebase/firestore'


// Initialize Firebase
firebase.initializeApp(firebaseConfig)

const projectStorage = firebase.storage()
const projectFirestore = firebase.firestore()
const createTimestamp = firebase.firestore.FieldValue.serverTimestamp
const deleteField = firebase.firestore.FieldValue.delete

export { 
  projectStorage,
  projectFirestore,
  createTimestamp,
  deleteField,
}