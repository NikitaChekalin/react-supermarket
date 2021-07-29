import React from 'react'

import { useDispatch } from 'react-redux'
import { fetchProducts } from './redux/async/fetch'
import { Route } from 'react-router-dom'

import Header from './Components/Header/Header'
import Footer from './Components/Footer/Footer'

import Home from './pages/Home'
import Cart from './pages/Cart'

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
    <>
      <div className="wrapper">
        <Header />
        <div className="content">
          <Route path="/" component={Home} exact />
          <Route path="/cart" component={Cart} exact />
        </div>
        <Footer />
      </div>
    </>
  )
}

export default App
