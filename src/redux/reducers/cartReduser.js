// const SET_TOTAL_COUNT = 'SET_TOTAL_COUNT'
// const SET_TOTAL_PRICE = 'SET_TOTAL_PRICE'
const ADD_ITEM_TO_CART = 'ADD_ITEM_TO_CART'

const initialState = {
  cart: {},
  totalPrice: 0,
  totalCount: 0,
}
export const cartReducer = (state = initialState, action) => {
  switch (action.type) {
    case ADD_ITEM_TO_CART:
      return {
        ...state,
        cart: {
          ...state.items,
          [action.payload.id]: !state.cart[action.payload.id]
            ? [action.payload]
            : [...state.cart[action.payload.id], action.payload],
        },
      }
    default:
      return state
  }
}

export const addProductsToCartActionCreator = (payload) => ({ type: ADD_ITEM_TO_CART, payload })
