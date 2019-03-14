 
 import firebase from 'firebase'
 const db_connect =
  {    apiKey: "AIzaSyAnkZ3d_Tzbxgil1ywsfN9c7QSKO7dONLo",
    authDomain: "react-69331.firebaseapp.com",
    databaseURL: "https://react-69331.firebaseio.com",
    projectId: "react-69331",
    storageBucket: "react-69331.appspot.com",
    messagingSenderId: "5175412824"
  };
  
  const fire = firebase.initializeApp(db_connect);
  export default fire;
