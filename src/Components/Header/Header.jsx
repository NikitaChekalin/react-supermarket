import React from 'react'
import { NavLink } from 'react-router-dom'
import styled from './Header.module.scss'
// import Loader from '../Loader/Loader'
import AudioPlayer from '../../Components/AudioPlayer/AudioPlayer'
import { useSelector } from 'react-redux'
import HeaderLeft from './HeaderLeft/HeaderLeft'
const Header = React.memo(() => {
  const { totalCount, totalPrice } = useSelector(({ cart }) => cart)
  return (
    <header>
      <HeaderLeft />
      <AudioPlayer audioUrl={'/music/back.mp3'} play={true} />
      <ul className={styled.header__right}>
        <NavLink to="/cart">
          <li>
            <img width={60} height={35} src={'/img/assets/countProducts.png'} alt="Shopping_cart" />
            <span>{totalCount} шт</span>
            <img width={60} height={35} src={'/img/assets/shop_card.png'} alt="Shopping_cart" />
            <span>{totalPrice} грн</span>
          </li>
        </NavLink>
      </ul>
    </header>
  )
})
export default Header
