import { useState } from 'react'
import Display from "./components/componentone.jsx"
import State from './components/state_demo.jsx'
import Effect from './components/use_effect.jsx'
import  { PropDrilling,DataBinding }  from './components/propsdrilling_databinding.jsx'
import Home from './router_all/home.jsx'
import Contact from './router_all/contact.jsx'
import About from './router_all/about.jsx'
import './App.css'
import data from "./data/data.js"
import {Routes,Route} from "react-router-dom";
import NavBarr from './components/navbar.jsx'

function App() {

  return (
    <>
    <NavBarr/>
{    <Routes>
      <Route path="/home" element={<Home/>}/>
      <Route path="/contact" element={<Contact/>}/>
       <Route path="/about" element={<About/>}/>  
       <Route path='*' element={<>nothing to show bitch</>}/>
    </Routes>}


    </>



    
  
    // {/* <Router/> */}
    // {/* <PropDrilling message="this is message"/> */}
    //  {/* <DataBinding/>

    //  <Effect/>
    // <State/>
    
    //   <h2>Employee Details</h2>

    //   {data.map((data) => 
    //     <Display name={data.name} role={data.role}/>
    //   )} */}
      
    
  )
}

export default App
