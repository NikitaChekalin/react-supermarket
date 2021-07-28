const FETCH_PRODUCTS = 'FETCH_PRODUCTS'

const initialState = {
  items: [],
  isLoaded: false,
}
export const productReducer = (state = initialState, action) => {
  switch (action.type) {
    case FETCH_PRODUCTS:
      return { ...state, items: action.payload, isLoaded: true }
    default:
      return state
  }
}

export const fetchProductsActionCreator = (payload) => ({ type: FETCH_PRODUCTS, payload })
