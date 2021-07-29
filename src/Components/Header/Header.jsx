import React from 'react'
import { Link } from 'react-router-dom'
import styled from './Header.module.scss'

export default function Header() {
  return (
    <header>
      <Link to="/">
        <div className={styled.header__left}>
          <img alt="Header_logo" width={100} height={80} src={'/img/assets/header_logo.png'} />
          <div className={styled.header__info}>
            <h3>React Supermarket</h3>
            <p>Кращі продукти , за нижчими цінами</p>
          </div>
        </div>
      </Link>

      <ul className={styled.header__right}>
        <Link to="/cart">
          <li>
            <img width={60} height={35} src={'/img/assets/shop_card.png'} alt="Shopping_cart" />
            <span>30 грн</span>
          </li>
        </Link>
        <Link to="/user">
          <li>
            <img width={35} height={35} src={'/img/assets/header_user.png'} alt="USER" />
          </li>
        </Link>
      </ul>
    </header>
  )
}
