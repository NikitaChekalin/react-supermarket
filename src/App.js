import Header from './Components/Header/Header'
import Card from './Components/Card/Card'
import React from 'react'
import { useSelector, useDispatch } from 'react-redux'
import Footer from './Components/Footer/Footer'
import { fetchProducts } from './redux/async/fetch'
function App() {
  const products = useSelector((state) => state.cart.items)
  const dispatch = useDispatch()
  React.useEffect(() => {
    dispatch(fetchProducts())
  }, [])
  return (
    <>
      <div className="wrapper">
        <Header />
        <div className="slider"></div>
        <div className="content">
          <h1>Товари у наявності</h1>
          <div className="icecream">
            {products && products.map((item, index) => <Card key={index} {...item} />)}
          </div>
        </div>
        <Footer />
      </div>
    </>
  )
}

export default App
