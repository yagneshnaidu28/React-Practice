import { useState } from 'react'
import Display from "./components/componentone.jsx"
import State from './components/state_demo.jsx'
import Effect from './components/use_effect.jsx'
import { DataBinding } from './components/propsdrilling_databinding.jsx'
import  { PropDrilling }  from './components/propsdrilling_databinding.jsx'
import './App.css'
import data from "./data/data.js"

function App() {

  return (
    <>
    <PropDrilling message="this is message"/>
     {/* <DataBinding/>

     <Effect/>
    <State/>
    
      <h2>Employee Details</h2>

      {data.map((data) => 
        <Display name={data.name} role={data.role}/>
      )} */}
      
    </> 
  )
}

export default App
