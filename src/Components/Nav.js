import React from 'react'
import { HashRouter as Router, Link, Route, Switch } from 'react-router-dom'
import Product from './Product';
import ProductList from './ProductList';

export default () => {

  return (
    <Router>
      <div>

        <nav>
          <Link className='reactNav' to="/api/products" replace>Products</Link>
          <Link className='reactNav' to="/api/products/create" replace>Create Product</Link>
        </nav>

        <div>
          <Route path='/api/products/create' render={() => <div>Bye</div>}></Route>

          <Route exact path='/api/products' render={() => <ProductList />}></Route>
        </div>

      </div>
    </Router>
  )
}
