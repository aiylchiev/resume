import React from 'react'
import classes from './Header.module.css'
import Navigation from './Navigation'
function Header() {
    return (
        <header className={classes.header}>
            <Navigation/>
        </header>
    )
}
export default Header;