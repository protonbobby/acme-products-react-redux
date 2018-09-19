import React from 'react';
import { HashRouter as Router, Link } from 'react-router-dom';
import { connect } from 'react-redux';

const Nav = ({ products }) => {
  return (
    <nav>
      <Router>
        <div>

          <Link
            to="/api/products"
            className='reactNav'
            replace>Products ({products.length})</Link>

          <Link
            to="/api/products/create"
            className='reactNav'
            replace>Create Product</Link>

        </div>
      </Router>
    </nav>
  )
}

//________________________________
const mapStateToProps = state => ({ products: state });
export default connect(mapStateToProps, null)(Nav)
