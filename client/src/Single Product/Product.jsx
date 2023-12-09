import { useState, useEffect } from 'react'
import './Product.css'
import Navbar from '../Navbar/Navbar'
import { useParams } from 'react-router-dom'
import axios from 'axios'
import {toast} from 'react-toastify'
import Loader from '../loader/Loader'
import { FaStar,FaStarHalfAlt } from "react-icons/fa";
const Product = () => {
    const { id } = useParams();
    const [products, setProducts] = useState([]);
    let [totalPrice, setTotalPrice] = useState()
    const [count, setCount] = useState(1)
    const [cross, setCross] = useState('no-drop')
    const [imageLoaded, setImageLoaded] = useState(false);
    const increase = () => {
        setCount(count + 1)
        setTotalPrice(prevTotalPrice => prevTotalPrice + products.price);
        setCross('')
        
    }
    const decrease = () => {
        if (count === 1) {
            setCross('no-drop')
        }
        else {
            console.log(products.price)
            setTotalPrice(prevTotalPrice => prevTotalPrice - products.price)
            setCount(count - 1)
  }
    }
         const getAllEvents = async () => {
        try {
            console.log(id)
            const product = await axios.get(`http://localhost:5000/singleProduct/${id}`);
            setProducts(product.data.products)
            setTotalPrice(product.data.products.price);
        } catch (error) {
            console.error(error);
        }
    };

    useEffect(() => {
        getAllEvents();
    }, []);

     const [name , setName] = useState();
     const [number , setNumber] = useState();
     const [address , setAddress] = useState();
     const [city , setCity] = useState();
     const [province, setProvince] = useState();
     
    const handleSubmit = async (e) => {
        e.preventDefault();
        const data = {
            name: name, 
            number: number, 
            address: address, 
            items: count, 
            city: city, 
            province:province,
            title: products.title, 
        };
        
             const response = await axios.post('http://localhost:5000/address',data)
             if(response.data.success){
                toast.success('Product Will be soon at Your doorsteps')
             }
             else{
                toast.error(response.data.error)
             }
    }
    return (
        <>
            <Navbar />
            {
                products && (
                    <div className="container">
                        <div className="row d-flex justify-content-between">
                            
                            <div className="col-sm-6 single-product mt-5">
                            <h2 className='btn btn-success fw-bold'>Product Details</h2>
                                <img src={`http://localhost:5000/uploads/images/${products.image}`} className='mt-4' onLoad={() => setImageLoaded(true)} width='500px' height='auto'/>
                                {!imageLoaded && <Loader />}
                                <h2 className='mt-5 fw-bold'>{products.title}</h2>
                                <p className='mt-3 fw-bold '>{products.desc}</p>
                                <h3 className='mt-3 fw-bold'>RS : {products.price} /-</h3>
                                <h4 className='fw-bold  '>Reviews: <FaStar  className='text-color'/> <FaStar  className='text-color'/> <FaStar className='text-color'/> <FaStar className='text-color'/> <FaStarHalfAlt className='text-color'/></h4>
                                
                                <h4 className='btn-bg '>Add Your Review</h4>


                            </div>
                            <div className="col-sm-4 mt-5">
                                <h5 className='btn-bg fw-bold'>Please Fill the Form to Place Order </h5>
                                <form onSubmit={handleSubmit}>
                                    <div class="mb-3">
                                        <label for="exampleInputEmail1" class="form-label">Name</label>
                                        <input type="text" class="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" onChange={((e)=> setName(e.target.value))} />
                                    </div>
                                    <div class="mb-3">
                                        <label for="phone" class="form-label">Phone Number</label>
                                        <input type="text" class="form-control" id="phone" onChange={((e)=> setNumber(e.target.value))}/>
                                    </div>
                                    <div class="mb-3">
                                        <label for="Address" class="form-label">Address </label>
                                        <input type="text" class="form-control" id="Address" onChange={((e)=> setAddress(e.target.value))}/>
                                    </div>
                                    <div class="mb-3">
                                        <label for="city" class="form-label">City </label>
                                     <input type="text" class="form-control" id="city" onChange={((e)=> setCity(e.target.value))}/>
                                    </div>
                                    <div class="mb-3">
                                        <label for="province" class="form-label">Province </label>
                                        <input type="text" class="form-control" id="province" onChange={((e)=> setProvince(e.target.value))}/>
                                    </div>
                                    <div class="mb-3 col-4">
                                        <label for="province" class="form-label">Quantity </label>
                                        <div className='quantity d-flex justify-content-between align-items-center'>
                                            <span className={`quantity-item ${cross}`} onClick={decrease}>-</span>
                                            <span className='quantity-item'>{count}</span>
                                            <span className='quantity-item' onClick={increase}>+</span>
                                        </div>
                                        <h5 className='fw-bold mt-3'>Total Price :  {totalPrice} </h5>
                                    </div>

                                    <button type="submit" class="shop-btn">Order</button>
                                </form>
                            </div>
                        </div>
                    </div>
                )
           
           }

<div className="container mt-5 pt-5">
    <div className="row"><h2>Related Products</h2></div>
            <div className="row">
                <div className="col-2 ">
                    <img src="/images/honey1.png" alt="" width='200px'/>
                </div>
                <div className="col-2">
                    <img src="/images/honey.png" alt="" width='200px'/>
                </div>
                <div className="col-2">
                    <img src="/images/f1.png" alt="" width='200px'/>
                </div>
                <div className="col-2">
                    <img src="/images/f2.png" alt="" width='200px'/>
                </div>
                <div className="col-2">
                    <img src="/images/f3.png" alt="" width='200px'/>
                </div>
                <div className="col-2">
                    <img src="/images/header-image.png" className='mt-4' alt="" width='200px'/>
                </div>
            </div>
         </div>
        </>
    )
}

export default Product