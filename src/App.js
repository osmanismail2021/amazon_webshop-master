import "./App.css";
import {BrowserRouter as Router, Route, Routes} from "react-router-dom";
import Header from "./Header";
import Home from "./Home";
import Checkout from "./Checkout";
import Login from "./Login";
import 'bootstrap/dist/css/bootstrap.min.css';
import ContactUs from './contactForm';
import React, { useEffect } from "react";
import { auth } from "./firebase";
import { useStateValue } from "./StateProvider";





function App() {
  const [{ user }, dispatch] = useStateValue();

  useEffect(() => {
    const unsubscribe = auth.onAuthStateChanged((authUser) => {
      if (authUser) {

        dispatch({
          type: "SET_USER",
          user: authUser,
        })

      } else {
        dispatch({
          type: "SET_USER",
          user: null
        })
      }
    });
    return () => {
      unsubscribe();
    };
  }, []);

  
  

  return (

    <Router>
    <Header/>
      <Routes>
      
        <Route path="/"  element={<Home/>} />
        <Route path="/Checkout"  element={<Checkout/>} />
        <Route path="/Login" element={<Login/>} />
        <Route path="/contactForm" element={<ContactUs/>} />
        
      </Routes>
    </Router>

    



  );

}



export default App;
