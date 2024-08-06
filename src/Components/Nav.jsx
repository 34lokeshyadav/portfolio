import React from 'react'
import { Link } from 'react-router-dom'

const Nav = () => {
  return (
    <div className='nav'>
        <h2>Protfolio</h2>
        <div className="part2">
        <Link to='/'>Home</Link>
        <Link to='/about'>About</Link>
        <Link to='/service'>Service</Link>
        <Link to='/contact '>Contact</Link>
        </div>
    </div>
  )
}

export default Nav