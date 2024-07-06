import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import {BrowserRouter,Routes,Route} from "react-router-dom"
import Home from "./components/Home";
import Footer from "./components/Footer"
import Header from "./components/Header";
import Pageb from "./components/Pageb";
import Pagec from "./components/Pagec";

function App() {
  return (
    <>
    <BrowserRouter>
    <Header></Header>
    
    <Routes>
  
      <Route path="/" element={<Home></Home>}></Route>
      <Route path="/pageb" element={<Pageb></Pageb>}></Route>
      <Route path="/pagec" element={<Pagec></Pagec>}></Route>
        
     
      
    </Routes>
    <Footer></Footer>
    </BrowserRouter>

      
   
    </>
  );
}

export default App;
