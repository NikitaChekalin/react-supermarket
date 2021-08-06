const ADD_ITEM_TO_CART = 'ADD_ITEM_TO_CART'
const CLEAR_ALL_CART = 'CLEAR_ALL_CART'
const REMOVE_ITEM_FROM_CART = 'REMOVE_ITEM_FROM_CART'
const PLUS_ITEM_INTO_CART = 'PLUS_ITEM_INTO_CART'
const MINUS_ITEM_INTO_CART = 'MINUS_ITEM_INTO_CART'

const initialState = {
  items: {},
  totalPrice: 0,
  totalCount: 0,
}
const getTotalPrice = (arr) => arr.reduce((sum, obj) => Number(obj.price) + sum, 0)

export const cartReducer = (state = initialState, action) => {
  //обчислюємо в Redux всі значення для того , щоб в UI  не робити зайвих обчислень
  switch (action.type) {
    case ADD_ITEM_TO_CART: {
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
    }
    case CLEAR_ALL_CART:
      return { items: {}, totalPrice: 0, totalCount: 0 }

    case REMOVE_ITEM_FROM_CART:
      const item = { ...state.items }
      const totalPrice = item[action.payload].totalPrice // отримуємо дані видаляємого елемента для майбутнього обрахунку суми та к-ль елементів
      const totalCount = item[action.payload].items.length

      delete item[action.payload] // видаляємо потрібний нам елемент через передачу id
      return {
        ...state,
        items: item,
        totalPrice: state.totalPrice - totalPrice,
        totalCount: state.totalCount - totalCount,
      }

    case PLUS_ITEM_INTO_CART: {
      const item = { ...state.items }
      const newItem = [...state.items[action.payload].items, state.items[action.payload].items[0]]
      const currentProductPrice = Number(item[action.payload].items[0].price)

      return {
        ...state,
        items: {
          ...state.items,
          [action.payload]: {
            items: newItem,
            totalPrice: getTotalPrice(newItem),
          },
        },
        totalCount: state.totalCount + 1,
        totalPrice: state.totalPrice + currentProductPrice,
      }
    }

    case MINUS_ITEM_INTO_CART: {
      const item = { ...state.items }
      const currentItemCount = item[action.payload].items.length
      const oldProduct = state.items[action.payload].items
      const newItemMinus =
        oldProduct.length > 1 ? state.items[action.payload].items.slice(1) : oldProduct
      const newItems = {
        ...state.items,
        [action.payload]: { items: newItemMinus, totalPrice: getTotalPrice(newItemMinus) },
      }
      // мне нужно будет понять при помощи totalPrice можно ли отнять стоимость 1 продукта от сумы в блоке id
      // console.log(newItems[action.payload].items[0].price, 'Цена Продукта  по индексу 0 ') //!
      // console.log(newItems[action.payload].totalPrice, 'newItems - totalPrice') //!
      const getSumOfItems = Object.values(newItems)
        .map((item) => item.totalPrice)
        .reduce((a, b) => b + a)

      const getPrice = (newItemObj) => {
        if (newItemObj[action.payload].totalPrice > newItemObj[action.payload].items[0].price) {
          const totalPrice = state.totalPrice - newItemObj[action.payload].items[0].price
          return totalPrice
        } else {
          return getSumOfItems
        }
      }

      const getTotalCount = (currentProductsLenth, defaultState) => {
        if (currentProductsLenth > 1) {
          return defaultState.totalCount - 1
        } else {
          return defaultState.totalCount
        }
      }
      return {
        ...state,
        items: newItems,
        totalPrice: getPrice(newItems),
        totalCount: getTotalCount(currentItemCount, state),
      }
    }
    default:
      return state
  }
}

export const addProductsToCartActionCreator = (payload) => ({ type: ADD_ITEM_TO_CART, payload })
export const deleteAllProductsFromCartActionCreator = () => ({ type: CLEAR_ALL_CART })
export const removeProductFromCartActionCreator = (id) => ({
  type: REMOVE_ITEM_FROM_CART,
  payload: id,
})

export const plusProductIntoCartActionCreator = (id) => ({
  type: PLUS_ITEM_INTO_CART,
  payload: id,
})
export const minusProductIntoCartActionCreator = (id) => ({
  type: MINUS_ITEM_INTO_CART,
  payload: id,
})

// const getTotalCount = (arr, arrRes) => {
//   if (arr[action.payload].items.length > 1) return arrRes.totalCount - 1
//   else {
//     return arrRes.totalCount
//   }
// }
