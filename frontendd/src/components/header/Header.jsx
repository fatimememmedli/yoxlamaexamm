import React from 'react'
import "./header.scss"
function Header() {
  return (
    <section id='header'>
    <div className="container">
    <div className="left">
        <button>050555555</button>
        <button>colorlib@gmail.com</button>
    </div>
    <div className="right">
        <button>login</button>
    </div>
    </div>
   </section>
  )
}

export default Header
