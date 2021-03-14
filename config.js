import firebase from 'firebase';
require('@firebase/firestore')

var firebaseConfig = {
    apiKey: "AIzaSyCnt6MvtPZuVeIsiiRAyzv-erq0bNNdkzM",
    authDomain: "sunlight-99352.firebaseapp.com",
    projectId: "sunlight-99352",
    storageBucket: "sunlight-99352.appspot.com",
    messagingSenderId: "285881625183",
    appId: "1:285881625183:web:f59e4124458b21fa3b89ea"
  };
  // Initialize Firebase
  firebase.initializeApp(firebaseConfig);
  export default firebase.firestore();