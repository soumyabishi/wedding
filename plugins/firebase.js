import firebase from 'firebase/app'
import 'firebase/firestore'
if (!firebase.apps.length) {
  const config = {
    apiKey: 'AIzaSyCsF8gOmN11MJOE5bqsJIjOxVDUlHhZWS8',
    authDomain: 'wedding-714df.firebaseapp.com',
    databaseURL: 'https://wedding-714df-default-rtdb.firebaseio.com',
    projectId: 'wedding-714df',
    storageBucket: 'wedding-714df.appspot.com',
    messagingSenderId: '539013510539',
    appId: '1:539013510539:web:4c20dbd645eb23bbe86b8e',
    measurementId: 'G-2ZZ5CLT5ZW',
  }
  firebase.initializeApp(config)
}
const fireDb = firebase.firestore()
export { fireDb }
