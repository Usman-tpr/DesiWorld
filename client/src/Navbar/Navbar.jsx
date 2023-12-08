import React from 'react'
import { Link } from 'react-router-dom'
import './Navbar.css'
const Navbar = () => {

  return ( 


    <>
  


         {/* 2nd navbar*/}
         
         <nav class="navbar navbar-expand-lg  custom-navbar">
  <div class="container">
    <a class="navbar-brand fw-bold text-color" >Desi Shop</a>
    <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
      <span class="navbar-toggler-icon"></span>
    </button>
    <div class="collapse navbar-collapse" id="navbarSupportedContent">
      <ul class="navbar-nav ms-auto  mb-2 mb-lg-0">
        <li class="nav-item mx-4">
          <Link class="nav-link custom-nav" aria-current="page" to='/' >HOME</Link>
        </li>
        <li class="nav-item mx-4">
          <Link class="nav-link  custom-nav" aria-current="page" to='/products' >Desi Products</Link>
        </li>
        <li class="nav-item mx-4">
          <Link class="nav-link custom-nav" aria-current="page"  > Cloths & Shoes  </Link>
        </li>
        <li class="nav-item mx-4">
          <Link class="nav-link custom-nav" aria-current="page" >Cosmatics</Link>
        </li>
        <li class="nav-item mx-4">
          <Link class="nav-link custom-nav" aria-current="page" >Gadgets </Link>
        </li>



      </ul>

    </div>
  </div>
</nav>


    </>





    

  )
}

export default Navbar