import { initializeApp } from 'firebase/app';
import { getAuth } from 'firebase/auth';

const firebaseApp = initializeApp({
  apiKey: 'AIzaSyBAHHLxh03LyBaHDp-c4PWYsbJWlzMoaN0',

  authDomain: 'delivery-project-2cee2.firebaseapp.com',

  projectId: 'delivery-project-2cee2',

  storageBucket: 'delivery-project-2cee2.appspot.com',

  messagingSenderId: '592579817861',

  appId: '1:592579817861:web:fd6392718a33329ebf14ec',

  measurementId: 'G-NBVW85B6LC',
});

export const auth = getAuth(firebaseApp);
