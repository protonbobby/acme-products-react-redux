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
        <Router>
          <div>
            <Route component={Nav} />
            <Route exact path='/products' component={ProductList}></Route>
            {/* <Route path='/products/:id' render={(history, match) => <Product id={match.params.id * 1} history={history} />}></Route> */}
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
