const ADD_PRODUCT_TO_CART = 'ADD_PRODUCT_TO_CART'
const REMOVE_PRODUCT_FROM_CART = 'REMOVE_PRODUCT_FROM_CART'

const initialState = {
  items: [
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
  ],
  totalPrice: 0,
  totalCount: 0,
}

export const productReducer = (state = initialState, action) => {
  switch (action.type) {
    case ADD_PRODUCT_TO_CART:
      const obj = {
        ...state.items,
        [action.payload.id]: !state.items[action.payload.id]
          ? [action.payload]
          : [...state.items[action.payload.id], action.payload],
      }
      const resultArr = Object.values(obj).flat()
      return {
        ...state,
        items: obj,
        totalCount: resultArr.length,
        totalPrice: resultArr.reduce((sum, obj) => Number(obj.price) + sum, 0),
      }

    case REMOVE_PRODUCT_FROM_CART:
      return { ...state, totalCount: action.payload }
    default:
      return state
  }
}
