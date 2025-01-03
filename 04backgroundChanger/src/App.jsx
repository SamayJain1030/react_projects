import { useState } from 'react'
import './App.css'

function App() {
  const [color, setColor] = useState('yellow')
  function changeColor(color){
    setColor(color)
  }
  return (
    <div className='w-full h-screen duration-200' style={{backgroundColor: color, justifyContent: 'center', display: 'flex', alignItems: 'center'}}>
      <div className="p-2 bg-white rounded-full shadow-md flex gap-2"
        style={{ justifyContent: 'center', alignItems: 'center' }}>
        <button
        onClick={() => changeColor("red")}   //here we used the callback function as the function that we are passing in "onClick" needs to be passed as reference 
        //and the whenever we want to pass a function as a reference with some parameter then we need to use the callback function method.
        className='outline-none px-4 py-1 rounded-full shadow-lg text-black m-10' style={{backgroundColor: "white"}}>Red</button>
        <button 
        onClick={() => setColor("blue")}    //you even can use the setColor function firectly instead of creating new changeColor function.
        className='outline-none px-4 py-1 rounded-full shadow-lg text-black m-10' style={{backgroundColor: "white"}}>Blue</button>
        <button 
        onClick={() => changeColor("green")}
        className='outline-none px-4 py-1 rounded-full shadow-lg text-black m-10' style={{backgroundColor: "white"}}>Green</button>
      </div>
    </div>
  )
}

export default App
