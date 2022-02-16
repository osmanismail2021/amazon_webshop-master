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

        dispatch({
          type: "SET_USER",
          user: authUser
        })

      } else {
        dispatch({
          type: "SET_USER",
          user: null
        })
      }
    })
  }, []);

  return (

    <Router>
      <Routes>
        <Route path="/"  element={<Home/>} >
          <Header/>
            <Home/>
        </Route>
          
        <Route path="/checkout"  element={<Checkout/>} >
          <Header/>
            <Checkout/>
        </Route>

        <Route path="/login" element={<Login/>} >
          <Login/>
        </Route>
      </Routes>
    </Router>

  );

}



export default App;
