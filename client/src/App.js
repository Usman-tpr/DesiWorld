import React from 'react'
import { BrowserRouter , Routes , Route} from 'react-router-dom'
import HomePage from './Home Page/HomePage'
import Products from './Product Page/Products'
import Product from './Single Product/Product'
import Admin from './Admin Page/Admin'
const App = () => {
  return (
    <BrowserRouter>
    <Routes>
      <Route path='/' element={ <HomePage /> } />
       <Route path='/products' element = { <Products />} />
       <Route path='/buy/:id' element = { <Product />} />
       <Route path='/admin' element = { <Admin />} />
    </Routes>
    </BrowserRouter>
  )
}

export default App