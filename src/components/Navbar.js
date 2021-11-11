import React from 'react'
import ToggleNavbarItem from './ToggleNavbarItem'

const Navbar = () => {
    return (
        <>
          <nav className="navbar">
            <ul className="navbar-ul">
                <li className="navbar-li">
                    <a className="navbar-link" href="#">Home</a>
                </li>
                    <ToggleNavbarItem />
                <li className="navbar-li">
                    <a className="navbar-link" href="#">About us</a>
                </li>
                <li className="navbar-li">
                    <a className="navbar-link" href="#">Products</a>
                </li>
                <li className="navbar-li">
                    <a className="navbar-link" href="#">Shop</a>
                </li>
                <li className="navbar-li"><button className="add-btn btn" label="Add">Login</button></li>
            </ul>
          </nav>  
        </>
    )
}

export default Navbar
