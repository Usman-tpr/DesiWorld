import React from 'react'
import { BrowserRouter , Routes , Route} from 'react-router-dom'
import HomePage from './Home Page/HomePage'
import Products from './Product Page/Products'
import Product from './Single Product/Product'
import Admin from './Admin Page/Admin'
import Adress from './Admin Page/Adress'
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import Loader from './loader/Loader'
import { FaSortDown } from 'react-icons/fa'
import Footer from './Home Page/Footer/Footer'
const App = () => {
  return (
    <BrowserRouter>
    <ToastContainer />
    <Routes>
      <Route path='/' element={ <HomePage /> } />
       <Route path='/products' element = { <Products />} />
       <Route path='/buy/:id' element = { <Product />} />
       <Route path='/admin' element = { <Admin />} />
       <Route path='/address' element = { <Adress />} />
       <Route path='/add' element = { <Loader />} />
    
    </Routes>
  
    </BrowserRouter>
  )
}

export default App