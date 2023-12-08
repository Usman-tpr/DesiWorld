import React from 'react'
import './Footer.css'
const Footer = () => {
  return (
    <div className="container-fluid footer p-4 mt-5 ">
        <div className="row d-flex justify-content-center">
            <div className="col-12 d-flex flex-column justify-content-between align-items-center">
            <div className='footer-images'>
                <img src="/images/tiktok.png" alt="" />
                <img src="/images/facebook.png" alt="" />
                <img src="/images/twitter.png" alt="" />
                <img src="/images/instagram.png" alt="" />
            </div>
            <div className=" col-9 footer-text mt-5 d-flex justify-content-between">
                <p>Copyright © 2023 All rights reserved DesiShop</p>
                <p>Privacy Policy</p>
                <p>Terms & Conditions</p>
            </div>
            </div>
        </div>
    </div>
  )
}

export default Footer