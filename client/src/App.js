import React from 'react'
import { BrowserRouter , Routes , Route} from 'react-router-dom'
import HomePage from './Home Page/HomePage'
const App = () => {
  return (
    <BrowserRouter>
    <Routes>
      <Route path='/' element={ <HomePage /> } />
    </Routes>
    </BrowserRouter>
  )
}

export default App