import React from 'react'
import { Link } from 'gatsby'
import SearchBar from '../search/SearchBar'
import './Header.css'

const Header = () => {
  return (
    <header className="header">
      <div className="header-content">
        <Link to="/" className="logo">
          Documentation
        </Link>
        <SearchBar />
        <nav className="nav-links">
          <Link to="/tags">Tags</Link>
          <Link to="/groups">Groups</Link>
        </nav>
      </div>
    </header>
  )
}

export default Header 
