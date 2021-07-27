import { createStore, combineReducers, applyMiddleware } from 'redux'
import { composeWithDevTools } from 'redux-devtools-extension'
import thunk from 'redux-thunk'
import { productReducer } from '../reducers/productReducer'
const rootReducers = combineReducers({ cart: productReducer })
export const store = createStore(rootReducers, composeWithDevTools(applyMiddleware(thunk)))
