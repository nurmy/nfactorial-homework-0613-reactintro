import React from 'react'

import Logo from '../Logo/Logo.js'
import Search from '../Search/Search.js'
import Date from '../Date/Date.js'

import './NavBar.css'

function NavBar(props) {
    return (
        <div className="navbar">
            <div className="leftNav">
                <Logo src="https://upload.wikimedia.org/wikipedia/commons/f/fb/Noun_15537_ccElliotVerhaeren_travel.svg" />
                <Search />
            </div>
            <div className="rightNav">
                <Date />
            </div>
        </div>
    )
}

export default NavBar
