import {useState , useEffect} from 'react'
import Navbar from '../Navbar/Navbar'
import {Link} from 'react-router-dom'
import axios from 'axios'
import './Products.css'
const Products = () => {
    const [top , setTop] = useState('mt-5 pt-1')
    const [products, setProduct] = useState([])
    window.addEventListener('scroll',()=>{
        if(window.scrollY>50){
              setTop('test ')
        }
        else{
            setTop("mt-5 pt-1 test")
        }
    })

    const getProducts = async () =>{
        const response = await  axios.get('http://localhost:5000/getProducts')
        // console.log(response.data.products)
        setProduct(response.data.products)
     
    
    }
    useEffect(()=>{
        getProducts();
    },[])

    return (
        <>
            <Navbar />
            <div className={`container-fluid  fixed-top ${top} d-flex justify-content-center`}>
                {/* <div className="row d-flex justify-content-around align-items-center product-cate">
                    <div className="col-1">Honey</div>
                    <div className="col-2">Dry Fruits</div>
                    <div className="col-1">Salajit</div>
                    <div className="col-1">Mix</div>
                    <div className="col-1">Others</div>
                </div> */}

                <div className="ani... ">
                    <h1 className='fw-bold mt-4'>Explore All Our Products</h1>
                </div>
            </div>

            <div className="container mt-5 pt-5 ">
                <div className="row d-flex justify-content-around">
                {products.map((product)=>{
                        
                        return(
                            <div className="card col-sm-3 mt-2" >
                        <img src={`http://localhost:5000/uploads/images/${product.image}`}  />
                        <div class="card-body">
                            <h5 class="card-title">{product.title}</h5>
                            <p class="card-text">{product.desc}</p>
                            <p>RS.{product.price}</p>
                            <Link to={`/buy/${product._id}`} class="shop-btn abc">Buy Now</Link>
                        </div>
                    </div>
                        )

                })}
                    

                </div>
            </div>
        </>
    )
}

export default Products