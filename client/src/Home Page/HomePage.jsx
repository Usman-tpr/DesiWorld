import { useState, useEffect } from 'react'
import Navbar from '../Navbar/Navbar'
import './HomePage.css'
import { BiArrowFromLeft } from 'react-icons/bi'
import Footer from './Footer/Footer'
import { Link } from 'react-router-dom'
import { FaStar,FaStarHalfAlt } from "react-icons/fa";
import axios from 'axios'
import { IoLinkOutline } from "react-icons/io5";
import Product from '../Single Product/Product'
const HomePage = () => {
    const [products, setProduct] = useState([])
    const getProducts = async () => {
        const response = await axios.get('http://localhost:5000/getProducts')
        const products = response.data.products;
        setProduct(products)


    }
    useEffect(() => {
        getProducts();
    }, [])
    return (
        <>
            <Navbar />
            <div className="container mt-5 pt-5 header">
                <img src="/images/facebook.png" className='side-icons' alt="" />
                <img src="/images/instagram.png" className='insta' alt="" />
                <img src="/images/tiktok.png" className='tik' alt="" />
                <img src="/images/twitter.png" className='twitter' alt="" />

                <div className="row d-flex justify-content-around align-items-center side-images">
                    <div className="col-lg-4 col-12">

                        <img src="/images/header-image.png" alt="" className='header-image' />
                    </div>
                    <div className="col-lg-4 col-12 mt-lg-0 mt-5 text-lg-start text-center">
                        <h3 className='fw-bold'>Best Quality Products</h3>
                        <h1 className='mt-3 fw-bold'>Join The Organic Movement!</h1>
                        <div className="mt-4">
                            <Link className='shop-btn ' to='/products'>Shop Now!</Link>
                        </div>
                    </div>
                </div>
            </div>
            <div className="about mt-5 pt-3 ">
                <div className="container ">
                    <div className="row d-flex justify-content-around align-items-center">
                        <div className="col-sm-3 text-center">
                            <img src="/images/images.jpeg" className='rounded-3' alt="" />
                        </div>
                        <div className="col-sm-4 ">
                            <h2 className='fw-bold mt-lg-0 mt-3'>Lorem ipsum dolor</h2>
                            <p className=''>
                                Lorem ipsum dolor sit amet consectetur adipisicing elit. Illum quam quos doloribus ipsam nostrum amet quidem dicta id, fuga asperiores. Odit ratione at illo incidunt doloremque nemo consequatur quia asperiores?

                            </p>
                        </div>
                    </div>
                </div>
            </div>

            <div className="container mt-5 pt-5">
                <div className="row text-center d-flex justify-content-center">
                    <div className="col-lg-4 col-12">
                        <h1 className='fw-bold product-title '>Recently Added</h1>
                    </div>

                </div>
                <div className="row">
                    {products && products.map((product) => {
                        return (
                            <Link className="col-sm-4 d-flex link justify-content-around mt-5" to={`/buy/${product._id}`}>

                                <div className="product card " >
                                    <img src={`http://localhost:5000/uploads/images/${product.image}`} alt="" className='me-2' width='100%' height='auto' />
                                    <h4 className='mt-5 fw-bold mx-2 p-2'>{product.title}</h4>
                                    <h5 className='mt-4 mb-4 fw-bold mx-2 p-2 text-color'>Price : {product.price}/-</h5>
                                    <h6 className='fw-bold px-3 '>Reviews:  <FaStar  className='text-color'/> <FaStar className='text-color'/> <FaStar className='text-color'/> <FaStarHalfAlt className='text-color'/></h6>

                                    <Link class="shop-btn link  mx-2 text-center mt-auto fw-bolder">Buy Now !</Link>
                                </div>

                            </Link>
                        )
                    })}
                </div>
                


                <div className="row text-center mt-5 ">
                    <div className="col d-flex align-items-center justify-content-center">
                        <Link className='shop-btn' to='/products'>Explore All <BiArrowFromLeft size={30} /></Link>
                    </div>
                </div>
            </div>

            {/* <div className="container mt-5 pt-3">
                <div className="row d-flex justify-content-center text-center">
                    <div className="col-4">
                        <h1 className="fw-bold product-title">
                            Sale on Products
                        </h1>
                    </div>
                </div>
                <div className="row d-flex justify-content-around mt-4 pt-4">
                    <div class="card" style={{ width: '18rem' }}>
                        <div class="sale-container d-flex justify-content-end">
                            <p className='sale-text'>-50%</p>
                            <img src="/images/pngwing.com.png" className='sale-image' alt="" width='70px' height='70px'/>
                        </div>
                        <img src="/images/images.jpeg" class="card-img-top" alt="..." />
                        <div class="card-body">
                            <h5 class="card-title">Lorem, ipsum dolor.</h5>
                            <p className='fw-bold'>Price : 999/-</p>
                            <button href="#" class="shop-btn">Buy Now</button>
                        </div>
                    </div>
                    <div class="card" style={{ width: '18rem' }}>
                    <div class="sale-container d-flex justify-content-end">
                            <p className='sale-text'>-50%</p>
                            <img src="/images/pngwing.com.png" className='sale-image' alt="" width='70px' height='70px'/>
                        </div>
                        <img src="/images/images.jpeg" class="card-img-top" alt="..." />
                        <div class="card-body">
                            <h5 class="card-title">Lorem, ipsum dolor.</h5>
                            <p className='fw-bold'>Price : 999/-</p>
                            <button href="#" class="shop-btn">Buy Now</button>
                        </div>
                    </div>
                    <div class="card" style={{ width: '18rem' }}>
                    <div class="sale-container d-flex justify-content-end">
                            <p className='sale-text'>-50%</p>
                            <img src="/images/pngwing.com.png" className='sale-image' alt="" width='70px' height='70px'/>
                        </div>
                        <img src="/images/images.jpeg" class="card-img-top" alt="..." />
                        <div class="card-body">
                            <h5 class="card-title">Lorem, ipsum dolor.</h5>
                            <p className='fw-bold'>Price : 999/-</p>
                            <button href="#" class="shop-btn">Buy Now</button>
                        </div>
                    </div>
                </div>
                <div className="row text-center mt-5 bg-light">
                <div className="col d-flex align-items-center justify-content-center">
                <button className='shop-btn'>Explore All <BiArrowFromLeft size={30}/></button>
                </div>
                </div>
            </div> */}


            <div className="container mt-5 pt-5 about text-white rounded-4">
                <div className="row text-center d-flex justify-content-center">
                    <div className="col-lg-5 col-12">
                        <h1 className='fw-bold product-title '>Featured Products </h1>
                    </div>

                </div>

                <div className="row">
                    <Link className="col-sm-4 d-flex link justify-content-around mt-5" >

                        <div className="product card" >
                            <img src='/images/f1.png' alt="" className='me-2' width='90%' height='auto' />
                            <h4 className='mt-1 fw-bold mx-2 p-2'>Pistachio Roasted (Pista) with Shell</h4>
                            <h5 className=' mb-2 fw-bold mx-2 p-2 text-color'>RS : 4000/-</h5>
                            <h6 className='fw-bold px-3 '>Reviews: <FaStar  className='text-color'/> <FaStar  className='text-color'/> <FaStar className='text-color'/> <FaStar className='text-color'/> <FaStarHalfAlt className='text-color'/></h6>
                            <Link class="btn-bg link  mx-2 text-center mt-auto fw-bolder ">Buy Now !</Link>
                        </div>

                    </Link>
                    <Link className="col-sm-4 d-flex link justify-content-around mt-5" >

                        <div className="product card " >
                            <img src='/images/f2.png' alt="" className='me-2' width='90%' height='auto' />
                            <h4 className='mt-1 fw-bold mx-2 p-2'>Mix Dry Fruits - 200g | Himalayan Chef</h4>
                            <h5 className=' mb-2 fw-bold mx-2 p-2 text-color'>RS : 4000/-</h5>
                            <h6 className='fw-bold px-3 '>Reviews: <FaStar  className='text-color'/> <FaStar  className='text-color'/> <FaStar className='text-color'/> <FaStar className='text-color'/> <FaStarHalfAlt className='text-color'/></h6>

                            <Link class="btn-bg link  mx-2 text-center mt-auto fw-bolder">Buy Now !</Link>
                        </div>

                    </Link>
                    <Link className="col-sm-4 d-flex link justify-content-around mt-5" >

                        <div className="product card " >
                            <img src='/images/f3.png' alt="" className='mx-3' width='90%' height='auto' />
                            <h4 className='mt-1 fw-bold mx-2 p-2'>Pistachio Roasted (Pista) with Shell</h4>
                            <h5 className='mb-2 fw-bold mx-2 p-2 text-color'>RS : 4000/-</h5>
                            <h6 className='fw-bold px-3 '>Reviews: <FaStar  className='text-color'/> <FaStar  className='text-color'/> <FaStar className='text-color'/> <FaStar className='text-color'/> <FaStarHalfAlt className='text-color'/></h6>

                            <Link class=" link  mx-2 text-center mt-auto fw-bolder btn-bg">Buy Now !</Link>
                        </div>

                    </Link>
                </div>
            </div>
            <div className="container mt-5 pt-5  rounded-4">
                <div className="row text-center d-flex justify-content-center">
                    <div className="col-lg-5 col-12">
                        <h1 className='fw-bold product-title '>Products On Discount! </h1>
                    </div>

                </div>

                <div className="row">
                    <Link className="col-sm-4 d-flex link justify-content-around mt-5" >
                       
                        <div className="product card" >
                            <img src="/images/pngwing.com.png" className='sale-image ms-auto' alt="" width='50px'/>
                            <h6 className='fw-bold ms-auto sale-text'>-50%</h6>
                            <img src='/images/f1.png' alt="" className='me-2' width='90%' height='auto' />
                            <h4 className='mt-1 fw-bold mx-2 p-2'>Pistachio Roasted (Pista) with Shell</h4>
                            <h5 className=' mb-2 fw-bold mx-2 p-2 text-color'>RS : <strike>4000</strike> 1500/-</h5>
                            <h6 className='fw-bold px-3 '>Reviews: <FaStar  className='text-color'/> <FaStar  className='text-color'/> <FaStar className='text-color'/> <FaStar className='text-color'/> <FaStarHalfAlt className='text-color'/></h6>
                            <Link class="btn-bg link  mx-2 text-center mt-auto fw-bolder ">Buy Now !</Link>
                        </div>

                    </Link>
                    <Link className="col-sm-4 d-flex link justify-content-around mt-5" >

                        <div className="product card " >
                        <img src="/images/pngwing.com.png" className='sale-image ms-auto' alt="" width='50px'/>
                            <h6 className='fw-bold ms-auto sale-text'>-50%</h6>
                            <img src='/images/f2.png' alt="" className='me-2' width='90%' height='auto' />
                            <h4 className='mt-1 fw-bold mx-2 p-2'>Mix Dry Fruits - 200g | Himalayan Chef</h4>
                            <h5 className=' mb-2 fw-bold mx-2 p-2 text-color'>RS : <strike>4000</strike> 1500/-</h5>
                            <h6 className='fw-bold px-3 '>Reviews: <FaStar  className='text-color'/> <FaStar  className='text-color'/> <FaStar className='text-color'/> <FaStar className='text-color'/> <FaStarHalfAlt className='text-color'/></h6>

                            <Link class="btn-bg link  mx-2 text-center mt-auto fw-bolder">Buy Now !</Link>
                        </div>

                    </Link>
                    <Link className="col-sm-4 d-flex link justify-content-around mt-5" >

                        <div className="product card " >
                        <img src="/images/pngwing.com.png" className='sale-image ms-auto' alt="" width='50px'/>
                            <h6 className='fw-bold ms-auto sale-text'>-50%</h6>
                            <img src='/images/f3.png' alt="" className='mx-3' width='90%' height='auto' />
                            <h4 className='mt-1 fw-bold mx-2 p-2'>Pistachio Roasted (Pista) with Shell</h4>
                            <h5 className='mb-2 fw-bold mx-2 p-2 text-color'>RS : <strike>4000</strike> 2000/-</h5>
                            <h6 className='fw-bold px-3 '>Reviews: <FaStar  className='text-color'/> <FaStar  className='text-color'/> <FaStar className='text-color'/> <FaStar className='text-color'/> <FaStarHalfAlt className='text-color'/></h6>

                            <Link class=" link  mx-2 text-center mt-auto fw-bolder btn-bg">Buy Now !</Link>
                        </div>

                    </Link>
                </div>
            </div>

            <div className="container mt-5 custom_counter_container">
                <div className="row ">
                    <div className="col-12">
                        <h1 className=' fw-bold text-success text-center mt-5 mb-5'>Customer Reviews:</h1>
                    </div>
                </div>
            </div>

            <div className="container mt-4">
                <div className="row ">

                    <div className="col-lg-4 col-sm-12 d-flex justify-content-center align-items-center flex-column ">
                        <img className='chair_img' alt="" />
                        <h3 className='chair_name p-3'>Haris Ahmad</h3>
                        <p className='text-center chair_aim'>The youth office empowers and supports local youth through diverse programs.</p>
                        <p className='fw-bold text-color'>See Details <IoLinkOutline size={30}/></p>
                    </div>
                    <div className="col-lg-4 col-sm-12  d-flex justify-content-center align-items-center flex-column border-start border-end border-success border-3 chair_col">
                        <img className='chair_img ' alt="" />
                        <h3 className='chair_name p-3'>M Saad Imam Tariq</h3>
                        <p className='text-center chair_aim'>We're dedicated to nurturing leadership skills and personal growth</p>
                        <p className='fw-bold text-color'>See Details <IoLinkOutline size={30} /> </p>
                    </div>
                    <div className="col-lg-4 col-sm-12 d-flex justify-content-center align-items-center flex-column">
                        <img className='chair_img' alt="" />
                        <h3 className='chair_name p-3'>Jibran</h3>
                        <p className='text-center chair_aim'>A hub of inspiration, connecting youth with opportunities to make a difference.</p>
                        <p className='fw-bold text-color'>See Details <IoLinkOutline size={30}/></p>
                    </div>

                </div>
            </div>

             <div className="container mt-5 pt-5 about rounded-5">
                <div className="row d-flex justify-content-center">
                    <div className="col-7">
                        <h3 className='fw-bold'>Subscribe For every Products arrival</h3>
                    <form className="d-flex ms-auto mt-4" role="search">
                            <input className="form-control me-2 footer_input" type="search" placeholder="Your email" aria-label="Search" />
                            <a className="btn btn-success" type="submit">Subscribe</a>
                        </form>
                    </div>
                </div>
             </div>
        </>
    )
}

export default HomePage