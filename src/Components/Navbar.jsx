import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import { FontAwesomeIcon as FA } from '@fortawesome/react-fontawesome'

const Navbar = () => {
  const [click, setClick] = useState(false);
  const handleClick = () => setClick(!click);

  //const handleNav = () => setshowNav(!setshowNav);

  return (
    <nav className='pt-1 hide'>     
        <div className='d-flex'>
        <h2 className='fw-bold pb-5'><span className='text-danger'>Dev</span>challenges.io</h2> 
        <span onClick={handleClick}><FA className='pt-4' icon={click ? 'times': 'bars'} /></span>  
        </div>
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