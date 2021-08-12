import React from 'react'
import "./Header.css"

const Header = () => {
    return (
        <header>
            <img src="https://www.docplanner.com/img/logo-default-group-en.svg?v=1" alt="logo" />
            <ul className="nav-menu">
                <li>About us</li>
                <li>Career</li>
                <li>Departement</li>
            </ul>
        </header>
    )
}

export default Header
