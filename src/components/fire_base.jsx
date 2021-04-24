import firebase from "firebase/app"
import "firebase/storage"


const firebaseConfig = {
    apiKey: "AIzaSyC3ZZs_J-WXJR2-0s-V_XS-cL98PSPQChI",
    authDomain: "cyduck-3be89.firebaseapp.com",
    databaseURL: "https://cyduck-3be89.firebaseio.com",
    projectId: "cyduck-3be89",
    storageBucket: "cyduck-3be89.appspot.com",
    messagingSenderId: "809270325989",
    appId: "1:809270325989:web:0a0883d611ced9086f1a0c",
    measurementId: "G-EBYN4PJV24"
  };


  firebase.initializeApp(firebaseConfig)

  const storage=firebase.storage();

  export {storage,firebase as default}