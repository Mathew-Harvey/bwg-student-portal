import firebase from 'firebase';

// Your web app's Firebase configuration
var firebaseConfig = {
    apiKey:"AIzaSyBHIdj6KPxrftUrQ-_QcsNgClXBdokAzVg",
    authDomain:"bwg-student-portal-dev.firebaseapp.com",
    projectId: "bwg-student-portal-dev",
    storageBucket: "bwg-student-portal-dev.appspot.com",
    messagingSenderId: "912139319203",
    appId: "1:912139319203:web:5d6cec0845ac1c32be4c16"
  };
  // Initialize Firebase
  const fire= firebase.initializeApp(firebaseConfig);

  export default fire;