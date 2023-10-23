import React from 'react'
import Navbar from '../Navbar/Navbar'
import './HomePage.css'
const HomePage = () => {
    return (
        <>
            <Navbar />
            <div className="container mt-5 pt-5">
                <div className="row d-flex justify-content-around align-items-center">
                    <div className="col-4">
                        <img src="/images/header-image.png" alt="" width='400px' height='300px' />
                    </div>
                    <div className="col-4">
                        <h3 className='fw-bold'>Best Quality Products</h3>
                        <h1 className='mt-3 fw-bold'>Join The Organic Movement!</h1>
                        <button className='shop-btn'>Shop Now!</button>
                    </div>
                </div>
            </div>
            <div className="about mt-5 pt-3">
                <div className="container ">
                    <div className="row d-flex justify-content-around align-items-center">
                        <div className="col-3">
                            <img src="/images/images.jpeg" className='rounded-3' alt="" />
                        </div>
                        <div className="col-4">
                            <h2 className='fw-bold'>Lorem ipsum dolor</h2>
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
                    <div className="col-12 d-flex justify-content-around mt-2">
                    
                        <div className="product">
                            <img src="/images/card1.jpeg" alt="" />
                            <h4 className='mt-2 fw-bold'>Lorem ipsum dolor sit.</h4>
                             <h5 className='mt-2 fw-bold'>Price : 999/-</h5>

                        </div>
                        <div className="product">
                            <img src="/images/card1.jpeg" alt="" />
                            <h4 className='mt-2 fw-bold'>Lorem ipsum dolor sit.</h4>
                             <h5 className='mt-2 fw-bold'>Price : 999/-</h5>

                        </div>
                    </div>
                </div>
                <div className="row">
                    <div className="col-12 d-flex justify-content-around mt-2">
                    
                        <div className="product">
                            <img src="/images/card1.jpeg" alt="" />
                            <h4 className='mt-2 fw-bold'>Lorem ipsum dolor sit.</h4>
                             <h5 className='mt-2 fw-bold'>Price : 999/-</h5>

                        </div>
                        <div className="product">
                            <img src="/images/card1.jpeg" alt="" />
                            <h4 className='mt-2 fw-bold'>Lorem ipsum dolor sit.</h4>
                             <h5 className='mt-2 fw-bold'>Price : 999/-</h5>

                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default HomePage