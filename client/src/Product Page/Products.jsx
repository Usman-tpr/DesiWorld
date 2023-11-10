import { useState, useEffect } from 'react'
import Navbar from '../Navbar/Navbar'
import { Link } from 'react-router-dom'
import axios from 'axios'
import './Products.css'
import Loader from '../loader/Loader'



const Products = () => {
    const [top, setTop] = useState('mt-5 pt-1')
    const [products, setProduct] = useState([])
    const [imageLoaded, setImageLoaded] = useState(false);

    window.addEventListener('scroll', () => {
        if (window.scrollY > 50) {
            setTop('test ')
        }
        else {
            setTop("mt-5 pt-1 test")
        }
    })

    const getProducts = async () => {
        const response = await axios.get('http://localhost:5000/getProducts')
        // console.log(response.data.products)
        setProduct(response.data.products)




    }
    useEffect(() => {
        getProducts();
    }, [])

    return (
        <>
            <Navbar />


            <div className="container mt-5 pt-5 " onLoad={() => setImageLoaded(true)}>
            {!imageLoaded && <Loader />}
                <div className="row">
                    {products && products.map((product) => {
                        

                        return (
                            <div className="col-sm-4 d-flex justify-content-around mt-5">
                                <Link className="product card" to={`/buy/${product._id}`}>
                                    <img
                                        src={`http://localhost:5000/uploads/images/${product.image}`}
                                        className="me-2"
                                        width="100%"
                                        height="auto"
                                        onLoad={() => setImageLoaded(true)} // Set imageLoaded to true when the image is loaded
                                    />
                                    {!imageLoaded && <Loader />}
                                    <h4 className='mt-5 fw-bold mx-2 left-line'>{product.title}</h4>
                                    <h5 className='mt-4 mb-4 fw-bold mx-2 '>Price : {product.price}/-</h5>
                                    {/* <Link  className="shop-btn mx-2 text-center mt-auto fw-bolder ">Buy Now !</Link> */}
                                </Link>
                            </div>
                        );
                    })}

                </div>
            </div>


        </>
    )
}

export default Products