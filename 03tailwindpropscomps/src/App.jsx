import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Card from './components/card'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <h1 className='text-3xl bg-green-500 p-3 rounded-md'>Vite with Tailwind</h1>
      <Card username="Samay Kahate" post="software engineer"/>
      <Card />  {/*here i am not passing any props so it will took default of the props passed in card.jsx*/}
      <Card />    
    </>
  )
}

export default App
