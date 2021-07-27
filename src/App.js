import Header from './Components/Header/Header'
import Card from './Components/Card/Card'

function App() {
  const icecreamArr = [
    {
      id: 0,
      title: ' Морозиво Дитяче',
      price: 20,
      imageUrl: '/img/icecream/ice_cream_dityache.png',
    },
    {
      id: 1,
      title: ' Морозиво Ескімос',
      price: 15,
      imageUrl: '/img/icecream/ice_cream_escimos.png',
    },
    {
      id: 2,
      title: ' Морозиво Каштан',
      price: 17,
      imageUrl: '/img/icecream/ice_cream_kashtan.png',
    },
    {
      id: 3,
      title: ' Морозиво Хрещатик',
      price: 35,
      imageUrl: '/img/icecream/ice_cream_khreshatyk.png',
    },
    {
      id: 4,
      title: ' Морозиво Лімо 1995',
      price: 21,
      imageUrl: '/img/icecream/ice_cream_limo_1955.png',
    },
    {
      id: 5,
      title: ' Морозиво Monaco',
      price: 50,
      imageUrl: '/img/icecream/ice_cream_monaco.png',
    },
    {
      id: 6,
      title: ' Морозиво Oliver Smith',
      price: 34,
      imageUrl: '/img/icecream/ice_cream_oliver_smith.png',
    },
    {
      id: 7,
      title: ' Морозиво Повна Чаша',
      price: 9,
      imageUrl: '/img/icecream/ice_cream_povna_chasha.png',
    },
    {
      id: 8,
      title: ' Морозиво Смородинове',
      price: 28,
      imageUrl: '/img/icecream/ice_cream_strawbery.png',
    },
    {
      id: 9,
      title: ' Морозиво Супер-Шоколад',
      price: 12,
      imageUrl: '/img/icecream/ice_cream_super_shokolad.png',
    },
  ]
  return (
    <div className="wrapper">
      <Header />
      <div className="content">
        <h1>Товари у наявності</h1>
        <div className="icecream">
          {icecreamArr && icecreamArr.map((item, index) => <Card key={index} {...item} />)}
        </div>
      </div>
    </div>
  )
}

export default App
