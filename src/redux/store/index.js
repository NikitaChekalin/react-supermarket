import { createStore, combineReducers, applyMiddleware } from 'redux'
import { composeWithDevTools } from 'redux-devtools-extension'
import { productReducer } from '../reducers/productReducer'
import { cartReducer } from '../reducers/cartReduser'

import thunk from 'redux-thunk'

import { persistStore, persistReducer } from 'redux-persist'
import storage from 'redux-persist/lib/storage'

const persistConfig = {
  key: 'root',
  storage,
}
const rootReducer = combineReducers({ products: productReducer, cart: cartReducer })
const persistedReducer = persistReducer(persistConfig, rootReducer)

// export const store = () => {
//   let store = createStore(persistedReducer, composeWithDevTools(applyMiddleware(thunk)))
//   let persistor = persistStore(store)
//   return { store, persistor }
// }
export const store = createStore(persistedReducer, composeWithDevTools(applyMiddleware(thunk)))
export const persistor = persistStore(store)
