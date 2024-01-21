import React from 'react'
import { Link } from "react-router-dom";
import "./navbar.scss"
function Navbar() {
  return (
    <div className='navbar'>
      <div className="container">
      <div className="logo">
        <img src="https://preview.colorlib.com/theme/shop/img/logo.png.webp" alt="" />
      </div>
      <div className="links">
        <Link to="/" className='link'>Home</Link>
        <Link to="/add" className='link'>Add</Link>
        <Link to="/basket" className='link'>Basket</Link>
        <Link className='link'>Men </Link>
        <Link className='link'>Women </Link>

      </div>
      </div>
    </div>
  )
}

export default Navbar
