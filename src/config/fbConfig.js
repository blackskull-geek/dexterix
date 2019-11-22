import firebase from "firebase/app"
import "firebase/firestore";
import 'firebase/auth'

var firebaseConfig = {
    apiKey: "AIzaSyCUQwY_G0pqvc2vflu2Uc1JJLSQPKrpjmE",
    authDomain: "dexterixsolution.firebaseapp.com",
    databaseURL: "https://dexterixsolution.firebaseio.com",
    projectId: "dexterixsolution",
    storageBucket: "dexterixsolution.appspot.com",
    messagingSenderId: "390858783586",
    appId: "1:390858783586:web:b30ab0ab4a65915b910a3b",
    measurementId: "G-MBZDX3DRM7"
  };

  firebase.initializeApp(firebaseConfig)
  firebase.firestore().settings({ timestampsInSnapshots: true})

export default firebase;