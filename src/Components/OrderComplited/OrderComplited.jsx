import React from 'react'
import { NavLink } from 'react-router-dom'
import styled from './OrderComplited.module.scss'
const OrderComplited = ({ title, description, image }) => {
  return (
    <div className={styled.cart__empty}>
      <img className={styled.cart__empty__img} src={image} alt="CartEmpty" />
      <h2 className={styled.cart__empty__title}>{title}</h2>
      <p className={styled.cart__empty__info}>{description}</p>
      <NavLink to="/" className={styled.btn__cart__confirm}>
        Повернутись Назад
      </NavLink>
    </div>
  )
}

export default OrderComplited
