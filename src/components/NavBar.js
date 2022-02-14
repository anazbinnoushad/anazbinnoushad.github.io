import React from 'react'
import './NavBar.css'

function NavBar() {
  return (
    <div className='title_navigation_bar'>
        <div className="navigation_bar_logo">
                <h4 className="nav_logo"> hello </h4>
            </div>
            <div className="navigation_bar_navs">
                <a href="#about">About</a>
                <a href="#skills">Skills</a>
                <a href="#contact">Contact</a>
            </div>
    </div>
  )
}

export default NavBar