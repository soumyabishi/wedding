import firebase from 'firebase/app'
import 'firebase/firestore'
if (!firebase.apps.length) {
  const config = {
    apiKey: 'AIzaSyCTbCqKxaXPz983kJ1kxhuFLQMsrNcBB5w',
    authDomain: 'hey-user-d915c.firebaseapp.com',
    databaseURL: 'https://hey-user-d915c.firebaseio.com',
    projectId: 'hey-user-d915c',
    storageBucket: 'hey-user-d915c.appspot.com',
    messagingSenderId: '241091784282',
    appId: '1:241091784282:web:b2fa39f98a80bd01da7263',
    measurementId: 'G-K0KR7QB9TD',
  }
  firebase.initializeApp(config)
}
const fireDb = firebase.firestore()
export { fireDb }
