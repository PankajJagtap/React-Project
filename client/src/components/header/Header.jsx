import React from 'react'
import './Header.css'
import Navbar from './navbar/Navbar'

function Header() {
  return (
    <div className='header'>
        <h1 style={{padding:0, margin:0}}>Header</h1>
      <Navbar/>
    </div>
  )
}

export default Header