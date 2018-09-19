import React from 'react';
import { connect } from 'react-redux';
import faker from 'faker';

import { createProduct } from '../store';

const Product = ({ createProduct }) => {
  const rating = Math.floor(Math.random() * 10) + 1;
  const name = faker.commerce.product().toString();

  return (
    <div>
      <button onClick={() =>
        createProduct({
          name,
          rating,
        })}>
        Add a new product!</button>
    </div>
  )
}

//________________________________
const mapDispatchToProps = dispatch => ({
  createProduct: item => dispatch(createProduct(item))
});
export default connect(null, mapDispatchToProps)(Product);
