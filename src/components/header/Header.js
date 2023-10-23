import React from 'react';
import './header.css';
import { Link } from 'react-router-dom';

const Header = () => {
  return (
    <header>
        <ul>
            <li>Filter By:</li>
            <li><Link style={{textDecoration: 'none', color: 'black'}} to="/unread">Unread</Link></li>
            <li><Link style={{textDecoration: 'none', color: 'black'}} to="/read">Read</Link></li>
            <li><Link style={{textDecoration: 'none', color: 'black'}} to="/favorites">Favorites</Link></li>
        </ul>
    </header>
  )
}

export default Header