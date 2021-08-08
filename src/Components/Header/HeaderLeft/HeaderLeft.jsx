import React from 'react'
import { NavLink } from 'react-router-dom'
import styled from './HeaderLeft.module.scss'
const HeaderLeft = React.memo(() => {
  return (
    <>
      <NavLink to="/">
        <div className={styled.header__left}>
          <img alt="Header_logo" width={100} height={80} src={'/img/assets/header_logo.png'} />
          <div className={styled.header__info}>
            <h3>React Supermarket</h3>
            <p>Кращі продукти , за нижчими цінами</p>
          </div>
        </div>
      </NavLink>
    </>
  )
})
export default HeaderLeft
