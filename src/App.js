import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Navbarg from "./Components/Navbars";
import MainContent from "./Components/MainPage";




function App() {
  return (
    <Router>
    
 
 <div id="wrapper">
   
    <Navbarg/>
     
     <div className="main-div">
    <Routes >
    <Route path="/"  element={<MainContent/>}/>
    

    
</Routes>
</div>
</div>

    </Router>
)
}

export default App;
