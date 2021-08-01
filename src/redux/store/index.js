import { createStore, combineReducers, applyMiddleware } from 'redux'
import { composeWithDevTools } from 'redux-devtools-extension'
import thunk from 'redux-thunk'
import { productReducer } from '../reducers/productReducer'
import { cartReducer } from '../reducers/cartReduser'
const rootReducers = combineReducers({ products: productReducer, cart: cartReducer })
export const store = createStore(rootReducers, composeWithDevTools(applyMiddleware(thunk)))
