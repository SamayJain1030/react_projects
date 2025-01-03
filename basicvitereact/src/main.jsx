import { createRoot } from 'react-dom/client'
import React from 'react'
import App from './App.jsx'

const reactElement = {
  type: "a",
  props: {
      href: "https://google.com",
      target: "_blank"
  },
  children: "click me to visit Google"
}

const AnotherElement = (
  <a href="https://google.com" target='_blank'>Visit Google</a>   
)      //if you want to create element like this in react then the naming convention should be followed as First letter should be capital

const reactElement2 = React.createElement(     //this is actual form of jsx being evaluated. like it takes each component and renders.
  'a',
  {href: 'https://google.com', target: '_blank'},
  'click to visit aaaaa google'
)       //if you create element using React then there is no need to follow any naming convention rules.

createRoot(document.getElementById('root')).render(
  //<App />
  //AnotherElement  
  reactElement2
)

//I want to render an object which we used in customreact folder to be rendered inside this file
//so above is the implementation of it in react.
