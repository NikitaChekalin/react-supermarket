import styled from './Card.module.scss'
import React from 'react'

export default function Card({ title, imageUrl, price }) {
  const [addedItem, setAddedItem] = React.useState(false)
  return (
    <div className={styled.card}>
      <div className={styled.favorite}>
        <img width={25} height={24} src={'/img/assets/favorite.png'} alt="efee" />
      </div>
      <img width={200} src={imageUrl} alt="Sneakers 1" />
      <p>{title}</p>
      <div className={styled.card__info}>
        <div className={styled.card__main}>
          <span>Вартість:</span>
          <b>{price} грн</b>
        </div>

        <img
          onClick={() => setAddedItem(!addedItem)}
          className={styled.card__plus}
          src={addedItem ? '/img/assets/added.png' : '/img/assets/pluc.png'}
          width={80}
          height={45}
          alt=""
        />
      </div>
    </div>
  )
}
