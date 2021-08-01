import React from 'react'
import { Link } from 'react-router-dom'
import styled from './Header.module.scss'
// import Loader from '../Loader/Loader'
import AudioPlayer from '../../Components/AudioPlayer/AudioPlayer'
import { useSelector } from 'react-redux'
export default function Header() {
  const { totalCount, totalPrice } = useSelector(({ cart }) => cart)
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
      <AudioPlayer audioUrl={'/music/back_2.mp3'} play={true} />
      <ul className={styled.header__right}>
        <Link to="/cart">
          <li>
            <img width={60} height={35} src={'/img/assets/countProducts.png'} alt="Shopping_cart" />
            <span>{totalCount}</span>

            <img width={60} height={35} src={'/img/assets/shop_card.png'} alt="Shopping_cart" />
            <span>{totalPrice} грн</span>
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
