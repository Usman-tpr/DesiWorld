import {useState} from 'react'
import Navbar from '../Navbar/Navbar'
import {Link} from 'react-router-dom'
import './Products.css'
const Products = () => {
    const [top , setTop] = useState('mt-5 pt-1')
    window.addEventListener('scroll',()=>{
        if(window.scrollY>50){
              setTop('test ')
        }
        else{
            setTop("mt-5 pt-1 test")
        }
    })

    return (
        <>
            <Navbar />
            <div className={`container-fluid  fixed-top ${top}`}>
                <div className="row d-flex justify-content-around align-items-center product-cate">
                    <div className="col-1">Honey</div>
                    <div className="col-2">Dry Fruits</div>
                    <div className="col-1">Salajit</div>
                    <div className="col-1">Mix</div>
                    <div className="col-1">Others</div>
                </div>
            </div>

            <div className="container mt-5 pt-5 ">
                <div className="row d-flex justify-content-around">
                    <div class="card" style={{ width: "18rem" }}>
                        <img src="/images/card1.jpeg" class="card-img-top" alt="..." />
                        <div class="card-body">
                            <h5 class="card-title">Card title</h5>
                            <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                            <Link to='/buy' class="shop-btn">Buy Now</Link>
                        </div>
                    </div>

                    <div class="card" style={{ width: "18rem" }}>
                        <img src="/images/images.jpeg" class="card-img-top" alt="..." />
                        <div class="card-body">
                            <h5 class="card-title">Card title</h5>
                            <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                            <Link to='/buy' class="shop-btn">Buy Now</Link>
                        </div>
                    </div>
                    <div class="card" style={{ width: "18rem" }}>
                        <img src="/images/card1.jpeg" class="card-img-top" alt="..." />
                        <div class="card-body">
                            <h5 class="card-title">Card title</h5>
                            <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                            <Link to='/buy' class="shop-btn">Buy Now</Link>
                        </div>
                    </div>
                    <div class="card" style={{ width: "18rem" }}>
                        <img src="/images/card1.jpeg" class="card-img-top" alt="..." />
                        <div class="card-body">
                            <h5 class="card-title">Card title</h5>
                            <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                            <Link to='/buy' class="shop-btn">Buy Now</Link>
                        </div>
                    </div>

                </div>
            </div>
        </>
    )
}

export default Products