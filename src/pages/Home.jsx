import React from 'react'
import { useSelector } from 'react-redux'
import Card from '../Components/Card/Card'

const Home = () => {
  const products = useSelector((state) => state.cart.items)
  return (
    <>
      <h1>Товари у наявності</h1>
      <div className="icecream">
        {products && products.map((item, index) => <Card key={index} {...item} />)}
      </div>
    </>
  )
}

export default Home
