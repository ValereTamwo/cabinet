import React from 'react'
import { Link } from 'react-router-dom'
import '../App.css'


function Button(props) {
  return (
    <>
      <button onClick={props.action}  className={`btn-${props.color} btn text-dark  `}>
           <Link to='/rdv' className='nav-link'>{props.label}</Link> 
      </button> 
    </>

  )
}

export default Button