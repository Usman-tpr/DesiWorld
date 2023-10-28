import React from 'react'
import { Link} from 'react-router-dom'
import './Navbar.css'
const Navbar = () => {
  return (
         <div className=" bg-light">
        <div className="container">
        <div className="row d-flex justify-content-between align-items-center">
            <div className="col-3"><h2>Website Logo</h2></div>
            <div className="col-6 nav-items d-flex justify-content-between align-items-center">
             <Link to='/'>HOME</Link>
              <Link href="">ABOUT</Link>
              <Link to = '/products' >PRODUCTS</Link>
              <Link href="">CONTACT US</Link>
              <Link href="">LOGIN</Link>
            </div>
          </div>
        </div>
         </div>
  )
}

export default Navbar