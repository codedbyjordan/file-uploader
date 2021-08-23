import { projectStorage, projectFirestore } from "./firebase/firebaseFunctions"

const deleteFile = async(collection, id, fileName) => {
  const storageRef = projectStorage.ref(fileName)
  var dbRef = projectFirestore.collection(collection).doc(id)
  await storageRef.delete()
  await dbRef.delete()
}

export default deleteFile