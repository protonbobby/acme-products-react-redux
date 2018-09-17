import React from 'react';
import { connect } from 'react-redux';

import { deleteProduct } from '../store';

const ProductList = ({ products = [], deleteProduct }) => {
  return (
    <ul>
      {
        products.map(product => {
          return <li key={product.id}>{product.name} {product.rating}
            <button onClick={() => deleteProduct(product.id)}>x</button>
          </li>
        })
      }
    </ul>
  );
}

const mapStateToProps = (state) => {
  return {
    products: state.products
  };
}

const mapDispatchToProps = (dispatch) => {
  return {
    deleteProduct: (id) => dispatch(deleteProduct(id))
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(ProductList);
