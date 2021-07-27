import Header from './Components/Header/Header'
import Card from './Components/Card/Card'
import React from 'react'
import { useSelector } from 'react-redux'
function App() {
  const products = useSelector((state) => state.cart.items)
  console.log(products)
  // const dispatch = useDispatch()
  return (
    <div className="wrapper">
      <Header />
      <div className="content">
        <h1>Товари у наявності</h1>
        <div className="icecream">
          {products && products.map((item, index) => <Card key={index} {...item} />)}
        </div>
      </div>
    </div>
  )
}

export default App
