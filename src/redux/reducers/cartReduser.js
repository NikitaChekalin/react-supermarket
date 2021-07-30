const initialState = {
  cart: [],
  items: [],
  isLoaded: false,
}
export const productReducer = (state = initialState, action) => {
  switch (action.type) {
    case '':
      return { ...state, items: action.payload, isLoaded: true }
    default:
      return state
  }
}

export const addProductsToCartActionCreator = (payload) => ({ type: '', payload })
