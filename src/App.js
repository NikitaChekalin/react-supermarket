import React from 'react'

import { useDispatch } from 'react-redux'
import { fetchProducts } from './redux/async/fetch'
import { Route } from 'react-router-dom'
import Header from './Components/Header/Header'
import Footer from './Components/Footer/Footer'

import Home from './pages/Home/Home'
import Cart from './pages/Cart/Cart'

function App() {
  const dispatch = useDispatch()
  React.useEffect(
    () => {
      dispatch(fetchProducts())
    },
    // eslint-disable-next-line react-hooks/exhaustive-deps
    []
  )

  return (
    <div className="wrapper">
      <Header />
      <div className="content">
        <div className="container">
          <Route exact path="/" component={Home}></Route>
          <Route exact path="/cart" component={Cart}></Route>
        </div>
      </div>
      <Footer />
    </div>
  )
}

export default App
