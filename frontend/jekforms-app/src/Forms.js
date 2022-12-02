import React from 'react'
import './App.css'

const Forms = ({text, onClick}) => { 
  return (
    <button className='btn'
    onClick={onClick}>
        {text}  
    </button> 
  )
}

export default Forms
