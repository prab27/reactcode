import { useState } from 'react'

import './App.css'

function App() {

 let [counter,setCounter] = useState(15)

 //let counter=5

 const addValue= () =>{
  console.log("clicked",Math.random());
  if(counter<20){
  setCounter(counter+1)
  }

 }
 const removeValue =( ) => {
  if(counter>0){
  setCounter(counter-1)
  }
 }

  return (
    <>
    <h1>chai aur react</h1>
    <h2>Counter value : {counter}</h2>
    <button
    onClick={addValue}>Add value</button>
    <br/>
    <button
    onClick ={removeValue}>remove value</button>
     
    </>
  )
}

export default App
