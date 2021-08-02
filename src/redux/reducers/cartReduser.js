const ADD_ITEM_TO_CART = 'ADD_ITEM_TO_CART'

const initialState = {
  items: {},
  totalPrice: 0,
  totalCount: 0,
}
export const cartReducer = (state = initialState, action) => {
  switch (action.type) {
    case ADD_ITEM_TO_CART:
      //  *  створюємо об'єкт для того щоб звертатись до нього та отримувати кожен раз актуальні дані
      const checkedObj = {
        //!
        ...state.items,
        [action.payload.id]: !state.items[action.payload.id]
          ? [action.payload]
          : [...state.items[action.payload.id], action.payload],
      }
      const finishedArr = Object.values(checkedObj).flat() //!

      return {
        ...state,
        items: checkedObj,
        totalPrice: finishedArr.reduce((sum, obj) => Number(obj.price) + sum, 0),
        totalCount: finishedArr.length,
        // *  , використовуємо метод об'єкта values для отримання масиву , flat() - об'єднуємо масиви  та отримуємо дані
        //потрібно для підрахунку тих самих продуктів  які були вже додані 2 і більше раз
      }
    default:
      return state
  }
}

export const addProductsToCartActionCreator = (payload) => ({ type: ADD_ITEM_TO_CART, payload })
