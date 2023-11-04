import React from 'react'
import { Link } from 'react-router-dom'
import './Navbar.css'
const Navbar = () => {

  return ( 


    <>
         {/* <div className=" bg-light">
        <div className="container">

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

         </div> */}



         {/* 2nd navbar*/}
         
         <nav class="navbar navbar-expand-lg bg-body-secondary custom-navbar">
  <div class="container">
    <a class="navbar-brand " href="#">Navbar</a>
    <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
      <span class="navbar-toggler-icon"></span>
    </button>
    <div class="collapse navbar-collapse" id="navbarSupportedContent">
      <ul class="navbar-nav ms-auto  mb-2 mb-lg-0">
        <li class="nav-item mx-4">
          <a class="nav-link custom-nav" aria-current="page" href="#">HOME</a>
        </li>
        <li class="nav-item mx-4">
          <a class="nav-link  custom-nav" aria-current="page" href="#">ABOUT</a>
        </li>
        <li class="nav-item mx-4">
          <a class="nav-link custom-nav" aria-current="page" href="#">PRODUCTS</a>
        </li>
        <li class="nav-item mx-4">
          <a class="nav-link custom-nav" aria-current="page" href="#">CONTACT US</a>
        </li>
        <li class="nav-item mx-4">
          <a class="nav-link custom-nav" aria-current="page" href="#">LOGIN </a>
        </li>



      </ul>

    </div>
  </div>
</nav>


    </>





      </div>
    </div>

  )
}

export default Navbar