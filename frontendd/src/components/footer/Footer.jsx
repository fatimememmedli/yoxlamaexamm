import React from 'react'
import "./footer.scss"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faRightLong } from '@fortawesome/free-solid-svg-icons'
function Footer() {
  return (
    <footer>
        <div className="container">
            <div className="top">
                <div className=" section section1">
                    <p className="head">About us</p>
                    <p className="desc">Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore dolore magna aliqua.</p>

                </div>
                <div className="section section2">
                    <p className="head">Newsletter</p>
                    <p className="desc">Stay update with our latest

</p>
<div className="input-button"><input placeholder='enter email' type="text" /><button><FontAwesomeIcon icon={faRightLong} /></button></div>

                </div>
                <div className=" section section3">
                    <p className="head">Instagram feed</p>
                    <div className="images">
                        <div className="images-top">
                        <div className="image">
                            <img src="https://preview.colorlib.com/theme/shop/img/i3.jpg.webp" alt="" />
                        </div>
                        <div className="image">
                            <img src="https://preview.colorlib.com/theme/shop/img/i3.jpg.webp" alt="" />
                        </div>
                        <div className="image">
                            <img src="https://preview.colorlib.com/theme/shop/img/i3.jpg.webp" alt="" />
                        </div>
                        <div className="image">
                            <img src="https://preview.colorlib.com/theme/shop/img/i3.jpg.webp" alt="" />
                        </div>
                        </div>

                       <div className="images-bottom">
                       <div className="image">
                            <img src="https://preview.colorlib.com/theme/shop/img/i3.jpg.webp" alt="" />
                        </div>
                        <div className="image">
                            <img src="https://preview.colorlib.com/theme/shop/img/i3.jpg.webp" alt="" />
                        </div>
                        <div className="image">
                            <img src="https://preview.colorlib.com/theme/shop/img/i3.jpg.webp" alt="" />
                        </div>
                        <div className="image">
                            <img src="https://preview.colorlib.com/theme/shop/img/i3.jpg.webp" alt="" />
                        </div>
                       </div>
                    </div>
                </div>
                <dic className="section section4">
                    <p className="head">Follow Us</p>
                    <p className="desc">
                    Let us be social


                    </p>
                </dic>
            </div>
            <div className="bottom">
            Copyright ©2024 All rights reserved | This template is made with  by Colorlib
            </div>
        </div>
    </footer>
  )
}

export default Footer
