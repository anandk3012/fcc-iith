import { initializeApp } from 'firebase/app'
import { getAuth } from "firebase/auth"
import { getFirestore, setDoc, doc, addDoc, collection,query,where,updateDoc, getDocs } from 'firebase/firestore'

const firebaseConfig = {
  apiKey: "AIzaSyCnJ4D4QLDdNFhUmkKwskB0QiyuPm1sx7w",
  authDomain: "fcc-iith.firebaseapp.com",
  projectId: "fcc-iith",
  databaseURL: "https://fcc-iith-default-rtdb.asia-southeast1.firebasedatabase.app/",
  storageBucket: "fcc-iith.appspot.com",
  messagingSenderId: "28047910645",
  appId: "1:28047910645:web:de1ef5bfac91ab5ad047bc",
  measurementId: "G-3QGGTTF4CW"
};

const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
const db = getFirestore(app);

export async function writeUser(userData) {
  try {
    const usersCollection = collection(db, 'users');
    const querySnapshot = await getDocs(query(usersCollection, where("email", "==", userData.email)));

    if (querySnapshot.size === 0) {
      // If no user with the same email exists, create a new document
      const newUserRef = await addDoc(usersCollection, {
        name: userData.name,
        email: userData.email,
        institution: userData.institution,
        age: userData.age,
        phoneNumber: userData.phoneNumber
      });
      console.log("New user added with ID: ", newUserRef.id);
    } else {
      // If user with the same email exists, update the existing document
      const docRef = querySnapshot.docs[0].ref;
      await updateDoc(docRef, {
        name: userData.name,
        institution: userData.institution,
        age: userData.age,
        phoneNumber: userData.phoneNumber
      });
      console.log("User details updated for ID: ", querySnapshot.docs[0].id);
    }
  } catch (error) {
    console.error("Error writing user document: ", error);
  }
}


export { auth, db };
export default app;
