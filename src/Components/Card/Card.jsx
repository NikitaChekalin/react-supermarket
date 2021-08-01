import styled from './Card.module.scss'
import React from 'react'

export default function Card({ title, imageUrl, price, id, onClickAddProduct }) {
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

        <img
          onClick={onAddProduct}
          className={styled.card__plus}
          src={addedItem ? '/img/assets/added.png' : '/img/assets/pluc.png'}
          width={50}
          height={29}
          alt=""
        />
      </div>
    </div>
  )
}
