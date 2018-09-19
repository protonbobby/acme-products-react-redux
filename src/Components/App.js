import React, { Component } from 'react';
import { HashRouter as Router, Route } from 'react-router-dom'
import { connect } from 'react-redux';

import { loadProducts } from '../store';
import Nav from './Nav';
import Product from './Product';
import ProductList from './ProductList'

class App extends Component {
  componentDidMount() {
    this.props.loadProducts
  }

  render() {
    return (
      <div>
        <Nav />

        <Router>
          <div>
            <Route path='/api/products/create' render={() => <Product />}></Route>
            <Route path='/api/products' render={() => <ProductList />}></Route>
          </div>
        </Router>
      </div>
    )
  }
}

//________________________________
const mapStateToProps = state => ({ products: state });
const mapDispatchToProps = dispatch => ({ loadProducts: dispatch(loadProducts()) });

export default connect(mapStateToProps, mapDispatchToProps)(App);
