import { useState } from 'react'
import './App.css'
import useCurrencyInfo from './hooks/useCurrencyInfo'
import {InputBox} from './components/index.js'
function App() {
  const [amount, setAmount] = useState(0)
  const [from, setFrom] = useState('usd')
  const [to, setTo] = useState('inr')
  const [convertedAmt, setConvertedAmt] = useState(0)

  const currencyInfo = useCurrencyInfo(from)   //here we are fetching all currencies info with respect to the currency passed inside in "from"
  const options = Object.keys(currencyInfo)

  const conversion = () => {
    setConvertedAmt(amount * currencyInfo[to])   //in this function we converting the one currency to another
  }

  const swap = () => {      //this swap operation same as like swapping source & destination in irtc app
    setFrom(to)            //or before swap conversion was from usd to inr 
    setTo(from)             //after swap conversion becomes from inr to usd
    //setConvertedAmt(amount)
    //setAmount(convertedAmt)    //amounts are also going to inter-change
  }

  return (
    <div className='w-full h-screen flex flex-wrap justify-center items-center bg-cover bg-no-repeat'
    style={{backgroundImage: `url(https://images.pexels.com/photos/4386158/pexels-photo-4386158.jpeg?auto=compress&cs=tinysrgb&w=600)`}}>
      <div className='w-full'>
        <div className='w-full max-w-md mx-auto border border-gray-50 rounded-lg p-5 backdrop-blur-sm bg-white/30'>
          <form onSubmit={(e) => {    ///as we want to trigger an event to the conversion function we are using 'onSubmit' for this form element
            e.preventDefault()
            conversion()
          }}>
            <div className='w-full mb-1'>
              <InputBox 
              label="from"
              amount={amount}
              currencyOptions={options}
              onCurrencyChange={(currency) => {setFrom(currency)} }
              onAmountChange={(amount) => {setAmount(amount)}}
              selectedCurrency = {from}/>
            </div>
            <div className='relative w-full h-0.5'>
              <button className='absolute left-1/2 -translate-x-1/2 -translate-y-1/2 border-2 border-white rounded-md bg-blue-500 text-white px-2 py-0.5' 
              onClick={swap}>Swap</button>
            </div>
            <div className='w-full mb-1'>
              <InputBox 
              label="to"
              amount={convertedAmt}
              amountDisabled={true}   ///as this field shouldn't be edited by user once as this the "convertedAmt" calculated from conversion function
              currencyOptions={options}
              onCurrencyChange={(currency) => {setTo(currency)} }
              onAmountChange={(amount) => {setAmount(amount)}}
              selectedCurrency = {to}/>
            </div>
            <button type='submit' className='w-full bg-violet-500 text-white px-4 py-3 rounded-lg'>
              Convert {from.toUpperCase()} to {to.toUpperCase()}</button>
          </form>
        </div>
      </div>
    </div>
  )
}

export default App
