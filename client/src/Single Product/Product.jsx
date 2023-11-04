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
     
    const handleSubmit = async (e) => {
        e.preventDefault();
        const data = {
            name: name, // assuming `name` is a variable containing the name value
            number: number, // assuming `number` is a variable containing the number value
            address: address, // assuming `address` is a variable containing the address value
            items: count, // assuming `count` is a variable containing the count value
            title: products.title, // assuming `products.title` is where you get the title value
        };
             const response = await axios.post('http://localhost:5000/address',data)
             console.log(response)
    }
    return (
        <>
            <Navbar />
            {
                products && (
                    <div className="container">
                        <div className="row">
                            <div className="col-sm-6 single-product">
                                <img src={`http://localhost:5000/uploads/images/${products.image}`} alt="" />
                                <h2>{products.title}</h2>
                                <p>{products.desc}</p>
                                <h3>RS : {products.price} /-</h3>

                            </div>
                            <div className="col-sm-6 mt-5">
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
                )
            }
        </>
    )
}

export default Product