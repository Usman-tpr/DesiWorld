import React from 'react'
import { Link } from 'react-router-dom'
import './Navbar.css'
const Navbar = () => {
  return (
    <div className=" bg-light">
      <div className="container">
        <div className="row d-flex justify-content-between align-items-center">
          <div className="col-3"><h2>Website Logo</h2></div>
          <div className="col-8 nav-items d-flex justify-content-between align-items-center">
            <Link to='/'>Home</Link>
            <Link to='/products'>
              Desi Products
            </Link>
            <Link to='' >Cloths & Shoes</Link>
            <Link href="">Cosmatics</Link>
            <Link href="">Perfumes</Link>
            <Link href="">Gadgets</Link>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Navbar