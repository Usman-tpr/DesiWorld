import { useState, useEffect } from 'react'
import './Product.css'
import Navbar from '../Navbar/Navbar'
import { useParams } from 'react-router-dom'
import axios from 'axios'
const Product = () => {
    const { id } = useParams();
    const [products, setProducts] = useState([]);
    let [totalPrice, setTotalPrice] = useState()
    const [count, setCount] = useState(1)
    const [cross, setCross] = useState('no-drop')
    const increase = () => {
        setCount(count + 1)
        
        setTotalPrice(totalPrice + products.price);
        setCross('')
    }
    const decrease = () => {
       
        if (count === 1) {
            setCross('no-drop')
        }
        else {
            
            setTotalPrice(totalPrice - products.price );
            setCount(count - 1)
            console.log(products.price -= products.price)
        }
    }


    const getAllEvents = async () => {
        try {
            console.log(id)
            const product = await axios.get(`http://localhost:5000/singleProduct/${id}`);
            console.log(product.data.products)
            setProducts(product.data.products)
            setTotalPrice(product.data.products.price);
        } catch (error) {
            console.error(error);
        }
    };

    useEffect(() => {
        getAllEvents();
    }, []);
    return (
        <>
            <Navbar />
            <div className="container">
                <div className="row">
                    <div className="col-6 single-product">
                        <img src={`http://localhost:5000/uploads/images/${products.image}`} alt="" />
                        <h2>{products.title}</h2>
                        <p>{products.desc}</p>
                        <h3>RS : {products.price} /-</h3>

                    </div>
                    <div className="col-6 mt-5">
                        <form>
                            <div class="mb-3">
                                <label for="exampleInputEmail1" class="form-label">Name</label>
                                <input type="email" class="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" />
                            </div>
                            <div class="mb-3">
                                <label for="phone" class="form-label">Phone Number</label>
                                <input type="text" class="form-control" id="phone" />
                            </div>
                            <div class="mb-3">
                                <label for="Address" class="form-label">Address </label>
                                <input type="text" class="form-control" id="Address" />
                            </div>
                            <div class="mb-3 col-4">
                                <label for="Address" class="form-label">Quantity </label>
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
        </>
    )
}

export default Product