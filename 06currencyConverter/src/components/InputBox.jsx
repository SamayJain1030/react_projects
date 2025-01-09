import React from 'react'

//what we are trying to achieve here?
//Here we are designing an input box which will use as a component multiple times in our project, so we are passing props which can further cutomised as per the requirement.

///id sutff Reactid hook, get why it is used ? 33:25 lecture time

function InputBox({    //here we are passing the props for this components
    label,
    amount,
    onAmountChange,
    onCurrencyChange,         //functions to be triggered on an event change in this InputBox
    currencyOptions = [],     //array for storing all types of currencies
    selectedCurrency = "usd",   //default currency selected is 'usd'
    amountDisabled = false,      //as user will be entering the amount and then we will need something in the second parameter which will be converted value and there we will use this Disabled
    currencyDisabled = false,
    className = "",
}) {
  return (
    <div className={`bg-white p-3 rounded-lg text-sm flex ${className}`}>   {/* that "${className}" came from props*/}
      <div className='w-1-2'>
        <label className='text-black/40 mb-2 inline-block'>{label}</label>   {/*again this {label} came from props*/}
        <input
        type='number'
        className='outline-none w-full bg-transparent py-1.5'
        disabled={amountDisabled}
        value={amount}
        onChange={(e) => {onAmountChange && onAmountChange(Number(e.target.value))}}></input>    {/*why we use "&&" with the same function ? 
        The logical AND insertion ensures that even if the onAmountChange function is not defined somehow the system will not throw any error. As if it is not defined it will not execute the second part where it tries to grab value from the onChange event 'e'
        By defining this "&&" the code ensures that the function is only invoked if it is defined.*/}
      </div>
      <div className='w-1/2 flex flex-wrap justify-end text-right'>
      <p className='text-black/40 mb-2 w-full'>Currency Type</p>
      <select className='rounded-lg px-1 py-1 bg-gray-100 cursor-pointer outline-none'
      value={selectedCurrency}
      onChange={(e) => {onCurrencyChange && onCurrencyChange(e.target.value)}}
      disabled={currencyDisabled}>
        {currencyOptions.map((currency) => (                   //inside this select, we are injecting the all types of currency using map function in which we calling it as a callback with option attribute whose value is currencyType
            <option key={currency} value={currency}>{currency}</option>
        ))}
      </select>
      </div>
    </div>
  )
}

export default InputBox
