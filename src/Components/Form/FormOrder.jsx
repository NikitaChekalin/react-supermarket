import React from 'react'
import './FormOrder.scss'
// import { useSelector } from 'react-redux'
//   const cart = useSelector((state) => state.cart.items)
const FormOrder = ({ onClickSetOrder }) => {
  const [name, setName] = React.useState('')
  const [surname, setSurname] = React.useState('')
  const [address, setAddress] = React.useState('')
  const [phone, setPhone] = React.useState('')

  const handlerName = (e) => {
    setName(e.target.value)
  }
  const handlerSurname = (e) => {
    setSurname(e.target.value)
  }
  const handlerAddress = (e) => {
    setAddress(e.target.value)
  }
  const handlerPhone = (e) => {
    setPhone(e.target.value)
  }

  const setOrder = () => {
    const userInfo = { name: name, surname: surname, address: address, phone: phone }
    if ((!name, !surname, !address, !phone)) {
      alert('Для замовлення потрібно заповнити усі поля')
      return false
    } else {
      onClickSetOrder(userInfo)
    }
  }
  return (
    <form className="decor">
      <div className="form-left-decoration"></div>
      <div className="form-right-decoration"></div>
      <div className="circle"></div>
      <div className="form-inner">
        <h3>Оформіть замовлення</h3>
        <input onChange={handlerName} type="text" placeholder="Ваше ім'я..." />
        <input onChange={handlerSurname} type="text" placeholder="Ваша фамілія..." />
        <input onChange={handlerAddress} type="address" placeholder="Адреса..." />
        <input onChange={handlerPhone} type="phone" placeholder="Телефон..." />
        <div className="form-button" onClick={setOrder}>
          Замовити
        </div>
      </div>
    </form>
  )
}

export default FormOrder
