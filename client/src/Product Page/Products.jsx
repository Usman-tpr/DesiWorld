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
            

            <div className="container mt-5 pt-5 ">
                <div className="row d-flex justify-content-around">
                {products.map((product)=>{
                        
                        return(
                            <div className="card col-lg-3 col-10 mt-2 gap-3 mx-1 mt-5" >
                        <img src={`http://localhost:5000/uploads/images/${product.image}`} className='card-image' width='100%' height='auto' />
                        <div class="card-body">
                            <h5 class="card-title">{product.title}</h5>
                            <p class="card-text">{product.desc}</p>
                            <p>RS.{product.price}</p>
                            <Link to={`/buy/${product._id}`} class="shop-btn  mt-auto ">Buy Now</Link>
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