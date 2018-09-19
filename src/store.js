import { createStore, applyMiddleware } from 'redux';

import logger from 'redux-logger';
import thunk from 'redux-thunk';
import axios from 'axios';

const ACTIONS = {
  LOAD_PRODUCTS: 'LOAD_PRODUCTS',
  CREATE_PRODUCT: 'CREATE_PRODUCT',
  DELETE_PRODUCT: 'DELETE_PROUCT',
};

//ACTION CREATORS
const loadProductsCreator = products => {
  return {
    type: ACTIONS.LOAD_PRODUCTS,
    products,
  }
}
const createProductCreator = product => {
  return {
    type: ACTIONS.CREATE_PRODUCT,
    product,
  }
}
const deleteProductCreator = product => {
  return {
    type: ACTIONS.DELETE_PRODUCT,
    product,
  }
}

//THUNKS
export const loadProducts = () => {
  return (dispatch, getState) => {
    return axios.get('/api/products')
      .then(response => response.data)
      .then(products => dispatch(loadProductsCreator(products)))
      .catch(e => console.log(e))
  }
}
export const createProduct = product => {
  return (dispatch, getState) => {
    return axios.post('/api/products', product)
      .then(response => response.data)
      .then(product => dispatch(createProductCreator(product)))
      .catch(e => console.log(e))
  }
}
export const deleteProduct = product => {
  return (dispatch, getState) => {
    axios.delete(`/api/products/${product.id}`)
      .then(() => dispatch(deleteProductCreator(product)))
      .catch(e => console.log(e))
  }
}

//REDUCER(S)
const initialState = [
  /* products: [{
      name: 'Sonic',
      rating: 10,
  },{}]
  */
];

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case ACTIONS.LOAD_PRODUCTS:
      return action.products

    case ACTIONS.CREATE_PRODUCT:
      return [...state, action.products]

    case ACTIONS.DELETE_PRODUCT:
      return state.filter(product => product.id !== action.id)
  }
  return state;
}

const store = createStore(reducer, applyMiddleware(logger, thunk));
export default store;
