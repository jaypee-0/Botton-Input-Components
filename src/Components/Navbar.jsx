import React from 'react'
import { Link } from 'react-router-dom'
import { FontAwesomeIcon as FA } from '@fortawesome/react-fontawesome'

const Navbar = () => {
  return (
    <nav className='pt-1 expand'>
        <h2 className='fw-bold pb-5'><span className='text-danger'>Dev</span>challenges.io</h2>
        <ul className='pl-0'>
            <Link to='/buttons'><li className='nav-items'>Colors</li></Link>
            <Link to='/buttons'><li className='nav-items'>Typography</li></Link>
            <Link to='/buttons'><li className='nav-items'>Spaces</li></Link>
            <Link to='/buttons'><li className='nav-items'>Buttons</li></Link>
            <Link to='/inputs'><li className='nav-items'>Inputs</li></Link>
            <Link to='/buttons'><li className='nav-items'>Grids</li></Link>
        </ul>
    </nav>
  )
}

export default Navbar