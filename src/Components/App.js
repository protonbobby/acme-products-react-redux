import React, { Component } from 'react';

import store, { loadProducts } from '../store';
import Nav from './Nav';
import Product from './Product';
import ProductList from './ProductList'

class App extends Component {
  componentDidMount() {
    store.dispatch(loadProducts());
  }

  render() {
    return (
      <div>
        <p>Hello World</p>
        <hr />
        <Nav />
        <ProductList />
      </div>
    )
  }
}

export default App;
