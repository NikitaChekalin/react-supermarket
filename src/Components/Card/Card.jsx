import styled from './Card.module.scss'
import React from 'react'

export default function Card({
  title,
  imageUrl,
  price,
  id,
  onClickAddProduct,
  addedCountProducts,
}) {
  const [addedItem, setAddedItem] = React.useState(false)
  const [favoriteItem, setFavoriteItemItem] = React.useState(false)
  const onAddProduct = () => {
    const obj = { id, title, imageUrl, price }
    onClickAddProduct(obj)
    setAddedItem(!addedItem)
  }
  return (
    <div className={styled.card}>
      <div className={styled.favorite}>
        <img
          onClick={() => setFavoriteItemItem(!favoriteItem)}
          width={25}
          height={24}
          src={favoriteItem ? '/img/assets/favorite.png' : '/img/assets/noFavorite.png'}
          alt="efee"
        />
      </div>
      <img width={230} src={imageUrl} alt="Sneakers 1" />
      <p>{title}</p>
      <div className={styled.card__info}>
        <div className={styled.card__main}>
          <span>Вартість:</span>
          <b>{price} грн</b>
        </div>

        <button className={styled.button} onClick={onAddProduct}>
          +{addedCountProducts && <i>{addedCountProducts}</i>}
        </button>
      </div>
    </div>
  )
}
