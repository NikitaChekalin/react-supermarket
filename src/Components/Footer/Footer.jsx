import React from 'react'
import { NavLink } from 'react-router-dom'
import styled from './Footer.module.scss'
const Footer = () => {
  return (
    <footer className={styled.footer}>
      <div className={styled.container}>
        <div className={styled.footer__inner}>
          <div className={styled.footer__block}>
            <h4 className={styled.footer__title}>Наша Адреса</h4>
            <address className={styled.footer__address}>
              <div>21007 Вінниця Головна Площа</div>
              <div>Соборна 39 / 5</div>
            </address>
          </div>
          <div className={styled.footer__block}>
            <h4 className={styled.footer__title}>Розкажи про нас друзям!</h4>
            <NavLink to="https://www.facebook.com/">
              <img src={'/img/assets/facebook.png'} alt="Facebook"></img>
            </NavLink>
            <NavLink to="https://www.youtube.com/">
              <img src={'/img/assets/YT.png'} alt="YouTube"></img>
            </NavLink>
            <NavLink to="https://www.instagram.com/">
              <img src={'/img/assets/instagram.png'} alt="Instagram"></img>
            </NavLink>
          </div>
          <div className={styled.footer__block}>
            <h4 className={styled.footer__title}>Про нас</h4>
            <div className={styled.footer__text}>
              Ми є найбільш сучасним супермаркетом у місті , переможці конкурсу : "Кращий магазин
              року 2021". З 2018 року провідні партнери та спонсори футбольний змагань .
            </div>
          </div>
        </div>
      </div>
      <div className={styled.footer_copyright}>
        <div className={styled.container}>
          <div className={styled.copyright__text}>
            <div>Copyright ☢ 2021 React Supermarket. All Rights Reserved</div>
            <div>Made by Nikita Chekalin</div>
          </div>
        </div>
      </div>
    </footer>
  )
}
export default Footer
