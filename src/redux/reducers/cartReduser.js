const ADD_ITEM_TO_CART = 'ADD_ITEM_TO_CART'
const CLEAR_ALL_CART = 'CLEAR_ALL_CART'

const initialState = {
  items: {},
  totalPrice: 0,
  totalCount: 0,
}
const getTotalPrice = (arr) => arr.reduce((sum, obj) => Number(obj.price) + sum, 0)
export const cartReducer = (state = initialState, action) => {
  //обчислюємо в Redux всі значення для того , щоб в UI  не робити зайвих обчислень
  switch (action.type) {
    case ADD_ITEM_TO_CART:
      //!перевіряємо чи є в Redux ключ х , якщо такого ключа немає створи  в items 1 масив у якого 1 об'єкт , якщо такий ключ є то перествори такий масив і в кінець додай новий об'єкт
      const currentproductItems = !state.items[action.payload.id]
        ? [action.payload]
        : [...state.items[action.payload.id].items, action.payload]

      //  *  створюємо об'єкт для того щоб звертатись до нього та отримувати кожен раз актуальні дані
      const checkedObj = {
        ...state.items,
        [action.payload.id]: {
          items: currentproductItems,
          totalPrice: getTotalPrice(currentproductItems),
        },
      }
      const items = Object.values(checkedObj).map((obj) => obj.items) //
      const finishedArr = items.flat() //!

      return {
        ...state,
        items: checkedObj,
        totalCount: finishedArr.length,
        totalPrice: finishedArr.reduce((sum, obj) => Number(obj.price) + sum, 0),
        // *  , використовуємо метод об'єкта values для отримання масиву , flat() - об'єднуємо масиви  та отримуємо дані
        // * потрібно для підрахунку тих самих продуктів  які були вже додані 2 і більше раз
      }
    case CLEAR_ALL_CART:
      return { items: {}, totalPrice: 0, totalCount: 0 }
    default:
      return state
  }
}

export const addProductsToCartActionCreator = (payload) => ({ type: ADD_ITEM_TO_CART, payload })
export const deleteAllProductsFromCartActionCreator = () => ({ type: CLEAR_ALL_CART })
