import { useState, useCallback, useEffect, useRef, useMemo } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  const [length, setLength] = useState(8);
  const [numberAllowed, setNumberAllowed] = useState(false)
  const [specialCharAllowed, setSpecialCharAllowed] = useState(false)
  const [password, setPassword] = useState('')

  const generatePassword = useCallback(() => {
    let pass = ''
    let alphabets = "AaBbCcDdEeFfGgHhIiJjKkLlMmNnOoPpQqRrSsTtUuVvWwXxYyZz"
    if (numberAllowed){
      alphabets += "0123456789"
    }
    if (specialCharAllowed) {
      alphabets += "!@#$%^&*()_+-="
    }
    for(let i= 1; i<length; i++){
      const index = (Math.random() * alphabets.length + 1)
      pass += alphabets.charAt(index)
    }
    setPassword(pass)
    console.log(password)
  }, [length, numberAllowed, specialCharAllowed])

  useEffect(() => {
    generatePassword()
  }, [length, numberAllowed, specialCharAllowed])

  const passwordRef = useRef(null)
  
  const copyPasswordToClipboard = () => {
    window.navigator.clipboard.writeText(password)
    passwordRef.current.select()
  }


  return (
    <div className='w-full max-w-md mx-auto shadow-md rounded-lg px-4 py-3 my-8 bg-gray-400 text-red-500'>
      <h1 className='text-3xl font-bold mb-2 justify-center text-center'>Password Generator</h1>
      <div className='flex shadow rounded-lg overflow-hidden mb-4'>
        <input type="text"
         value={password}
         className='outline-none w-full py-1 px-3'
         placeholder='password'
         readOnly 
         ref={passwordRef} />
        <button className='outline-none bg-purple-600 text-white px-3 py-0.5 shrink-0' onClick={copyPasswordToClipboard}>copy</button>
      </div>

      <div className='flex text-sm gap-x-2'>
        <input type="range" min={6} max={25} value={length}    //here we used "range" as input type and we are setting the value of this "length" using the callback function in which are calling "setLength" function which takes the parameter from the cursor pointer when moved left/right. 
        className='cursor-pointer' onChange={(evnt) => setLength(evnt.target.value) }/>  
        <label htmlFor="length">Length: {length}</label> 
      </div>
      <div className='flex text-sm gap-x-2'>
        <input type="checkbox" defaultChecked={numberAllowed} 
        onChange={() => {
          setNumberAllowed((previousVal) => !previousVal)       //we are siimply reversing the previous value. Like if it was unchecked then we are checking and vice versa.
        }}
        />
        <label htmlFor="number">Numbers</label>
      </div>
      <div className='flex text-sm gap-x-2'>
        <input type="checkbox" defaultChecked={specialCharAllowed}
        onChange={() => {
          setSpecialCharAllowed((allowed) => !allowed)
        }} />
        <label htmlFor="charInp">Special Characters</label>
      </div>

    </div>

  )
}

export default App