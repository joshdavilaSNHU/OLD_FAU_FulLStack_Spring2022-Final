import { initializeApp } from 'firebase/app';
import { getFirestore, collection, getDocs } from 'firebase/firestore/lite';
// Follow this pattern to import other Firebase services
// import { } from 'firebase/<service>';

// TODO: Replace the following with your app's Firebase project configuration
const firebaseConfig = {
  apiKey: "AIzaSyCJ95HfkWf0p5uMW-Fc4q-ayfBFJoSPCPY",
  authDomain: "josh-davila-final.firebaseapp.com",
  databaseURL: "https://josh-davila-final-default-rtdb.firebaseio.com",
  projectId: "josh-davila-final",
  storageBucket: "josh-davila-final.appspot.com",
  messagingSenderId: "41735083566",
  appId: "1:41735083566:web:adfaa92e413ae3f1b7f1bf",
  measurementId: "G-VLK7GBECPP"
};

const app = initializeApp(firebaseConfig);
const db = getFirestore(app);

// Get a list of cities from your database
async function getCities(db) {
  const citiesCol = collection(db, 'cities');
  const citySnapshot = await getDocs(citiesCol);
  const cityList = citySnapshot.docs.map(doc => doc.data());
  return cityList;
}
