import React from 'react'
import "./hero.scss"
function Hero() {
  return (
    <section id="hero">
        <div className="left">
            <img src="https://preview.colorlib.com/theme/shop/img/header-img.png.webp" alt="" />
        </div>
        <div className="right">
        <p className='sale1'><span>Flat</span> 75%Off</p>
                <p className="sale">
                IT’S HAPPENING
                THIS SEASON!
                </p>
                <button>PURCHASE NOW</button>
        </div>
    </section>
  )
}

export default Hero
