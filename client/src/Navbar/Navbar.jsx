import React from 'react'
import './Navbar.css'
const Navbar = () => {
  return (
         <div className=" bg-light">
        <div className="container">
        <div className="row d-flex justify-content-between align-items-center">
            <div className="col-3"><h2>Website Logo</h2></div>
            <div className="col-6 nav-items d-flex justify-content-between align-items-center">
              <a href="">HOME</a>
              <a href="">ABOUT</a>
              <a href="">PRODUCTS</a>
              <a href="">CONTACT US</a>
              <a href="">LOGIN</a>
            </div>
          </div>
        </div>
         </div>
  )
}

export default Navbar