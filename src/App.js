import React, { useEffect } from "react";
import "./App.css";
import {BrowserRouter as Router, Route, Routes}
 from "react-router-dom";
import Header from "./Header";
import Home from "./Home";
import Checkout from "./Checkout";
import Login from "./Login";
import { useStateValue } from "./StateProvider";
import { auth } from "./firebase";




function App() {
  const [{basket}, dispatch] = useStateValue();

  useEffect(() => {
    auth.onAuthStateChanged((authUser) => {
      if (authUser) {

      } else {
        
      }
    })
  }, []);

  return (

    <Router>

     

        <Header/>
        <Routes>
        
          <Route path="/"  element={<Home/>} />
          
          <Route path="/Checkout"  element={<Checkout />}  />

          <Route path="/Login" element={<Login />}/>

        </Routes>

    </Router>

  );

}



export default App;
