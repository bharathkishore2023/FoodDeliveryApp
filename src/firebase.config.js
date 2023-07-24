import {getApp,getApps,initializeApp} from 'firebase/app';
import {getFirestore} from "firebase/firestore";
import {getStorage} from "firebase/storage";

const firebaseConfig = {
    apiKey: "AIzaSyAZKU7yrw7E9Bx1kPgPZTCH6wlKijHHOpE",
    authDomain: "food-delivery-app-af393.firebaseapp.com",
    databaseURL: "https://food-delivery-app-af393-default-rtdb.firebaseio.com",
    projectId: "food-delivery-app-af393",
    storageBucket: "food-delivery-app-af393.appspot.com",
    messagingSenderId: "1090287802377",
    appId: "1:1090287802377:web:07a839953420b528ea40d8"
  };

  const app=getApps.length>0 ? getApp() :initializeApp(firebaseConfig)

  const firestore=getFirestore(app);
  const storage=getStorage(app);

  export{app,firestore,storage};