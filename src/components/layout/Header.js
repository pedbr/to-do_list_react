import React from 'react';
import { Link } from 'react-router-dom';

function Header() {
    return (
        <header style= {headerStyle}>
            <h1>Todo List.</h1>
            <Link style={linkStyle} to="/">home</Link> | <Link style={linkStyle} to="/about">about</Link>
        </header>
    )
}

const headerStyle = {
    background: '#FAEBD7',
    color: '#000',
    textAlign: 'center',
    padding: '10px',
    fontFamily: 'DM Serif Display',
    fontSize: '22px',
}

const linkStyle = {
    color: '#000',
    textDecoration: 'none',
}

export default Header