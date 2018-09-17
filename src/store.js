import { createStore, applyMiddleware } from 'redux';

import logger from 'redux-logger';
import thunk from 'redux-thunk';
import axios from 'axios';

//ACTIONS
const LOAD_PRODUCTS = 'LOAD_PRODUCTS';
const CREATE_PRODUCT = 'CREATE_PRODUCT';
const DELETE_PRODUCT = 'DELETE_PROUCT';

//ACTION CREATORS
const $LOAD_PRODUCTS = products => {

  return {
    type: LOAD_PRODUCTS,
    products,
  }
}
const $CREATE_PRODUCT = product => {
  return {
    type: CREATE_PRODUCT,
    product,
  }
}
const $DELETE_PRODUCT = id => {
  return {
    type: DELETE_PRODUCT,
    id,
  }
}

//THUNKS
const loadProducts = () => {
  return (dispatch, getState) => {
    return axios.get('/api/products')
      .then(response => response.data)
      .then(products => dispatch($LOAD_PRODUCTS(products)))
      .catch(e => console.error(e))
  }
}
const createProduct = product => {
  return (dispatch, getState) => {
    return axios.post('/api/users', product)
      .then(response => response.data)
      .then(product => dispatch($CREATE_PRODUCT(product)))
  }
}
const deleteProduct = product => {
  return (dispatch, getState) => {
    axios.delete(`/api/products/${product.id}`)
      .then(() => dispatch($DELETE_PRODUCT(product)))
  }
}

//REDUCER(S)
const initialState = {
  products: [{ id: 1, name: 'bob', rating: 2 }, { id: 2, name: 'alana', rating: 10 }]
}


const reducer = (state = initialState, action) => {
  switch (action.type) {
    case LOAD_PRODUCTS:
      const copy = Object.create({ products: action.products })
      copy.products = action.products;
      return copy;
      break;
    case CREATE_PRODUCT:
      return 1;
      break;
    case DELETE_PRODUCT:
      state = state.filter(product => product.id !== action.id)
      break;
    default: return state;
  }
}

const store = createStore(reducer, applyMiddleware(logger, thunk));

export default store;
export { loadProducts, createProduct, deleteProduct }
