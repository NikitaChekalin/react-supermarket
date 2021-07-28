import axios from 'axios'
import { fetchProductsActionCreator } from '../reducers/productReducer'
export const fetchProducts = () => async (dispatch) => {
  const res = await axios.get('https://61003fa2bca46600171cf7ea.mockapi.io/products')
  dispatch(fetchProductsActionCreator(res.data))
}
