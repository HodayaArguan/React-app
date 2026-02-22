import React from 'react'
// import { Link, NavLink } from 'react-router'
import { Link, NavLink } from 'react-router-dom';

const Header = () => {
    return (
        <nav style={{ backgroundColor: "red", width: "100vw", position: "fixed", top: "0px", right: '0px', left: "0px", justifyContent: "space-around", height: "40px", display: "flex" }}>
            {/* <div>
                <a href='/'>Home Page</a>
            </div>
            <div>
                <a href='/about'>About</a>
            </div>
            <div>
                <a href='/contact'>Contact</a>
            </div> */}

            {/* <div>
                <Link to='/'>Home Page</Link>
            </div>
            <div>
                <Link to='/about'>About</Link>
            </div>
            <div>
                <Link to='/contact'>Contact</Link>
            </div> */}

            <div>
                <NavLink to='/' style={({ isActive }) => ({ color: isActive ? "green" : "white" })}>Home Page</NavLink>
            </div>
            <div>
                <NavLink to='/about' style={({ isActive }) => ({ color: isActive ? "green" : "white" })}>About</NavLink>
            </div>
            <div>
                <NavLink to='/contact' style={({ isActive }) => ({ color: isActive ? "green" : "white" })}>Contact</NavLink>
            </div>
            <div>
                <NavLink to='/users' style={({ isActive }) => ({ color: isActive ? "green" : "white" })}>Users</NavLink>
            </div>
            <div>
                <NavLink to='/countries' style={({ isActive }) => ({ color: isActive ? "green" : "white" })}>countries</NavLink>
            </div>
        </nav>
    )
}

export default Header