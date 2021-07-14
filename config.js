import firebase from 'firebase'
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyDLTCuneU7uDU2eVETaubOMHyBCpUSfMwo",
  authDomain: "schoolattendenceapp-39718.firebaseapp.com",
  databaseURL: "https://schoolattendenceapp-39718-default-rtdb.firebaseio.com",
  projectId: "schoolattendenceapp-39718",
  storageBucket: "schoolattendenceapp-39718.appspot.com",
  messagingSenderId: "144936046992",
  appId: "1:144936046992:web:917fa5499f1b93201ba315",
  measurementId: "G-1GGEGZCZQG"
};
firebase.initializeApp(firebaseConfig)
export default firebase.database()