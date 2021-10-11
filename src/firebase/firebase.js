import firebase from 'firebase/app';

const firebaseConfig = {
  apiKey: 'AIzaSyCIih_A3dd2MSX7BIz8mhp5PaRSJHWving',
  authDomain: 'love-percentage-c2c00.firebaseapp.com',
  projectId: 'love-percentage-c2c00',
  storageBucket: 'love-percentage-c2c00.appspot.com',
  messagingSenderId: '1085389806426',
  appId: '1:1085389806426:web:45d06f8d79b0b2ea37f163',
  measurementId: 'G-TD545XD0MP',
};

firebase.initializeApp(firebaseConfig);

export {firebase};
