import { combineReducers, createStore, applyMiddleware } from 'redux';

import logger from 'redux-logger';
import thunk from 'redux-thunk';
import axios from 'axios';

const ACTIONS = {
  LOAD_PRODUCTS: 'LOAD_PRODUCTS',
  CREATE_PRODUCT: 'CREATE_PRODUCT',
  DELETE_PRODUCT: 'DELETE_PROUCT',
};

//ACTION CREATORS
const _loadProducts = products => {
  return {
    type: ACTIONS.LOAD_PRODUCTS,
    products,
  }
}
const _createProduct = product => {
  return {
    type: ACTIONS.CREATE_PRODUCT,
    product,
  }
}
const _deleteProduct = product => {
  return {
    type: ACTIONS.DELETE_PRODUCT,
    product,
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

const productsReducer = (state = initialState, action) => {
  switch (action.type) {
    case ACTIONS.LOAD_PRODUCTS:
      return action.products

    case ACTIONS.CREATE_PRODUCT:
      return [...state, action.product]

    case ACTIONS.DELETE_PRODUCT:
      return state.filter(product => product.id !== action.product.id)
  }
  return state;
}

const reducer = combineReducers({
  products: productsReducer,
});

//THUNKS
export const loadProducts = () => {
  return (dispatch) => {
    return axios.get('/api/products')
      .then(response => response.data)
      .then(products => dispatch(_loadProducts(products)))
      .catch(e => console.log(e));
  }
}
export const createProduct = (product) => {
  return (dispatch) => {
    return axios.post('/api/products', product)
      .then(response => response.data)
      .then(product => dispatch(_createProduct(product)))
      .catch(e => console.log(e));
  }
}
export const deleteProduct = (product, history) => {
  return (dispatch) => {
    axios.delete(`/api/products/${product.id}`)
      .then(response => response.data)
      .then(() => dispatch(_deleteProduct(product)))
      .then(() => history && history.push('/products'))
      .catch(e => console.log(e));
  }
}

export default createStore(reducer, applyMiddleware(logger, thunk));
