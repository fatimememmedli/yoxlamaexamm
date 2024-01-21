import React from 'react'
import "./Categories.scss"
function Categories() {
  return (
    <section id="categories">
        <div className="container">
            <div className="head-text">
            <p className='head'>Shop for Different Categories</p>
            <p className="desc">Who are in extremely love with eco friendly system.</p>
            </div>
            <div className="images">
                <div className="left">
                    <div className="left-top">
                        <div className="image">
                            <img src="https://preview.colorlib.com/theme/shop/img/c1.jpg.webp" alt="" />
                        </div>
                        <div className="image">
                            <img src="https://preview.colorlib.com/theme/shop/img/c2.jpg.webp" alt="" />
                        </div>
                    </div>
                    <div className="left-bottom">
                        <img src="https://preview.colorlib.com/theme/shop/img/c3.jpg.webp" alt="" />
                    </div>
                </div>
                <div className="right">
                    <img src="https://preview.colorlib.com/theme/shop/img/c4.jpg.webp" alt="" />
                </div>
            </div>
        </div>
    </section>
  )
}

export default Categories
