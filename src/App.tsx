import React from 'react';
import logo from './logo.svg';
import { useState } from "react"
import './App.css';
import { BrowserRouter as Router } from "react-router-dom"
import NavBar from "./components/NavBar/NavBar"
import Header from "./components/Header/Header"
import About from "./components/About/About"
import  Experience from "./components/Experience/Experience"
import  Technologies from "./components/Technologies/Technologies"
import Contact from "./components/Contact/ContactForm"
import Network from "./components/Network/Network"
import Sidebar from './components/SideBar/Sidebar';

function App() {

  const [isOpen, setOpen ] = useState(false)

  const toggle = () => {
    setOpen(!isOpen)
  }

  return (
    <div className="App">
    <Router>
      <Sidebar isOpen ={isOpen} toggle={toggle}/>
      <NavBar toggle={toggle} />
      <Header/>
      <About/>
       <Experience/> 
       <Technologies/> 
      <Contact/>
      <Network/>
    </Router>
    </div>
  );
}

export default App;
