import { useState } from 'react'
import './App.css'

function App() {
  //let counter = 15
  const [counter, setCounter] = useState(15)

  const addValue = () => {
    setCounter(counter + 1);
    setCounter(counter + 1);
    setCounter(counter + 1);
    setCounter(counter + 1);   //here even if you are calling the setCounter function for 4 times it will not update the counter value 4 times you will still see on the ui the same +1 counter.
    //this due to badging issue of react. this can be solved by giving a callback function as paramter to setCounter function. check in removeValue function below
    console.log(counter)       //observe in inspect it will show one less as the current coutner is not updated with latest +1.
  }

  const removeValue = () => {
    setCounter((counter) => counter - 1)
    setCounter((counter) => counter - 1)
    setCounter((counter) => counter - 1)      //here the counter will be decremented by 3 as we are updating the coutner using a callback.
  }

  return (
    <>
      <h1>Samay is Learning React</h1>
      <h2>Counter value : {counter}</h2>
      <button onClick={addValue}>Add value</button> {" "}
      <button onClick={removeValue}>Remove value</button>
      <p>footer: {counter}</p>
    </>
  )
}

export default App
