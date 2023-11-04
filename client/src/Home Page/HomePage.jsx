import {useState, useEffect} from 'react'
import Navbar from '../Navbar/Navbar'
import './HomePage.css'
import {BiArrowFromLeft} from 'react-icons/bi'
import Footer from './Footer/Footer'
import { Link } from 'react-router-dom'
import axios from 'axios'
const HomePage = () => {
    const [products, setProduct] = useState([])
    const getProducts = async () =>{
        const response = await  axios.get('http://localhost:5000/getProducts')
        const products = response.data.products.slice(0, 1);
        setProduct(products)
     
    
    }
    useEffect(()=>{
        getProducts();
    },[])
    return (
        <>
            <Navbar />
            <div className="container mt-5 pt-5">
            <img src="/images/facebook.png" className='side-icons' alt="" width='30px' height='30px'/>
            <img src="/images/instagram.png" className='insta' alt="" width='30px' height='30px'/>
            <img src="/images/tiktok.png" className='tik' alt="" width='30px' height='30px'/>
            <img src="/images/twitter.png" className='twitter' alt="" width='30px' height='30px'/>

                <div className="row d-flex justify-content-around align-items-center side-images">
                    <div className="col-lg-4 col-12">

                        <img src="/images/header-image.png" alt="" width='400px' height='300px' />
                    </div>
                    <div className="col-lg-4 col-12 mt-lg-0 mt-5">
                        <h3 className='fw-bold'>Best Quality Products</h3>
                        <h1 className='my-3 fw-bold'>Join The Organic Movement!</h1>
                        <Link className='shop-btn' to='/products'>Shop Now!</Link>
                    </div>
                </div>
            </div>
            <div className="about mt-5 pt-3">
                <div className="container ">
                    <div className="row d-flex justify-content-around align-items-center">
                        <div className="col-sm-3 text-center">
                            <img src="/images/images.jpeg" className='rounded-3' alt="" />
                        </div>
                        <div className="col-sm-4 ">
                            <h2 className='fw-bold '>Lorem ipsum dolor</h2>
                            <p>
                                Lorem ipsum dolor sit amet consectetur adipisicing elit. Illum quam quos doloribus ipsam nostrum amet quidem dicta id, fuga asperiores. Odit ratione at illo incidunt doloremque nemo consequatur quia asperiores?

                            </p>
                        </div>
                    </div>
                </div>
            </div>

            <div className="container mt-5 pt-5">
                <div className="row text-center d-flex justify-content-center">
                    <div className="col-4">
                        <h1 className='fw-bold product-title'>Best Products</h1>
                    </div>

                </div>
                <div className="row">
                    {products && products.map((product) =>{
                        return(
                            <div className="col-sm-4 d-flex justify-content-around mt-2">

                        <div className="product card">
                            <img src={`http://localhost:5000/uploads/images/${product.image}`} alt="" className='me-2' width='300px' height='auto'/>
                            <h4 className='mt-2 fw-bold mx-2'>{product.title}</h4>
                            <h5 className='mt-2 mb-4 fw-bold mx-2'>Price : {product.price}/-</h5>
                             <Link to={`/buy/${product._id}`} class="shop-btn  mx-2 text-center">Buy Now</Link>
                        </div>
                        
                    </div>
                        )
                    })}
                </div>
                

                <div className="row text-center mt-5 bg-light">
                <div className="col d-flex align-items-center justify-content-center">
                <button className='shop-btn'>Explore All <BiArrowFromLeft size={30}/></button>
                </div>
                </div>
            </div>

            <div className="container mt-5 pt-3">
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
                            {/* <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p> */}
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
                            {/* <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p> */}
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
                            {/* <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p> */}
                            <button href="#" class="shop-btn">Buy Now</button>
                        </div>
                    </div>
                </div>
                <div className="row text-center mt-5 bg-light">
                <div className="col d-flex align-items-center justify-content-center">
                <button className='shop-btn'>Explore All <BiArrowFromLeft size={30}/></button>
                </div>
                </div>
            </div>

            <Footer />
        </>
    )
}

export default HomePage