import React from 'react';
import { HashRouter as Router, Link } from 'react-router-dom';
import { connect } from 'react-redux';

const Nav = ({ products }) => {
  return (
    <div>
      <Link
        to="/products"
        className='reactNav'
        replace>Products ({products.length})</Link>
    </div>
  )
}

//________________________________
const mapStateToProps = state => ({ products: state });
export default connect(mapStateToProps, null)(Nav)
