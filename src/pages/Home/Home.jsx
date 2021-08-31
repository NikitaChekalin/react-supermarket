import React from 'react'
import Card from '../../Components/Card/Card'
import Loader from '../../Components/Loader/Loader'
import { useSelector, useDispatch } from 'react-redux'
import { addProductsToCartActionCreator } from '../../redux/reducers/cartReduser'
import Title from '../../Components/Title/Title'
const Home = React.memo(() => {
  const products = useSelector((state) => state.products.items)
  const cart = useSelector((state) => state.cart.items)
  const isLoaded = useSelector((state) => state.products.isLoaded)

  const dispatch = useDispatch()
  const addProductToCart = (obj) => {
    dispatch(addProductsToCartActionCreator(obj))
  }
  return (
    <>
      <Title title="Товари у наявності"></Title>

      <div className="icecream">
        {isLoaded ? (
          products.map((obj) => (
            <Card
              addedCountProducts={cart[obj.id] && cart[obj.id].items.length}
              onClickAddProduct={addProductToCart}
              key={obj.id}
              {...obj}
            />
          ))
        ) : (
          <Loader />
        )}
      </div>
    </>
  )
})

export default Home
