import React from 'react';
import { connect } from 'react-redux';
import faker from 'faker';

import { createProduct, deleteProduct } from '../store';

const ProductList = ({ products, createProduct, deleteProduct }) => {
  return (
    <div>
      <button onClick={createProduct}>Create Product</button>
      <ul>
        {
          products.map(product => {
            return (
              <li key={product.id}>
                {product.name} ({product.rating}/10)
              <button onClick={() => deleteProduct(product)}>x</button></li>
            )
          })
        }
      </ul>
    </div>
  );
};

//________________________________
const mapStateToProps = ({ products }) => ({ products });
const mapDispatchToProps = (dispatch) => {
  return {
    deleteProduct: (product) => dispatch(deleteProduct(product)),
    createProduct: () => dispatch(createProduct({
      name: faker.commerce.product().toString(),
      rating: faker.random.number(10)
    }))
  };
}
export default connect(mapStateToProps, mapDispatchToProps)(ProductList);


