import { useState } from 'react'
import Display from "./components/componentone.jsx"
import './App.css'
import data from "./data/data.js"

function App() {

  return (
    <>
      <h2>Employee Details</h2>

      {data.map((data) => 
        <Display name={data.name} role={data.role}/>
      )}
      
    </>
  )
}

export default App
