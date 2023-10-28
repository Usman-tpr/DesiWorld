import {useState} from 'react'
import './Product.css'
import Navbar from '../Navbar/Navbar'
const Product = () => {
    const [count,setCount] = useState(1)
    const [cross,setCross] = useState('no-drop')
    const increase = () =>{
      setCount(count+1)
      setCross('')
    }
    const decrease = () =>{
        
        if(count===1){
            setCross('no-drop')
        }
        else {
            setCount(count-1)
        }
      
    }
    return (
        <>
            <Navbar />
            <div className="container">
                <div className="row">
                    <div className="col-6">
                        <img src="/images/card1.jpeg" alt="" />
                        <h2>Lorem ipsum dolor sit amet consectetur.</h2>
                        <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Provident, odit?</p>
                        <h3>Price:1000</h3>

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
                            <div class="mb-3 col-3">
                                <label for="Address" class="form-label">Quantity </label>
                                <div className='quantity d-flex justify-content-between align-items-center'>
                                    <span className={`quantity-item ${cross}`} onClick={decrease}>-</span>
                                    <span className='quantity-item'>{count}</span>
                                    <span className='quantity-item' onClick={increase}>+</span>
                                </div>
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