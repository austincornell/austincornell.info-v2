import logo from './logo.svg';
import './App.css';
import Home from './Pages/Home';
import About from './Pages/About';
import Education from './Pages/Education';
import WorkHistory from './Pages/WorkHistory';
import { BrowserRouter as Router, Route, Routes, useLocation} from "react-router-dom";
import React, { Component } from "react";

// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyAgUuTeJ_T1u5QV2vEkn6I4FE8RQ8Ym-ic",
  authDomain: "austincornell-v2.firebaseapp.com",
  projectId: "austincornell-v2",
  storageBucket: "austincornell-v2.appspot.com",
  messagingSenderId: "184157349060",
  appId: "1:184157349060:web:83f80a6c3414f407a91591",
  measurementId: "G-RPCJPQMJTQ"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);


function App() {
  //Tracking location for for animate presence
  const location = useLocation();
  return (
    <div className="App">
          <Routes location={location} key="location.key">
            <Route path="/" exact element={<Home/>} />
            <Route path="/about" exact element={<About/>} />
            <Route path="/education" exact element={<Education/>} />
            <Route path="/workHistory" exact element={<WorkHistory/>} />
          </Routes>
    </div>
  );
}

export default App;
