import React from 'react';
import { connect } from 'react-redux';
import NativeListener from 'react-native-listener';


import { deleteProduct } from '../store';

const ProductList = ({ products, deleteProduct }) => {
  const handleButtonClick = (event) => {
    event.preventDefault()
  }

  return (
    <ul>
      {
        products.map(product => {
          return <li key={product.id}>
            {product.name} ({product.rating}/10)

            <NativeListener onClick={handleButtonClick}>
              <button onClick={() => deleteProduct(product)}>x</button>
            </NativeListener>

          </li>
        })
      }
    </ul>
  );
}

//________________________________
const mapStateToProps = state => ({ products: state });
const mapDispatchToProps = dispatch => ({
  deleteProduct: (product) => { dispatch(deleteProduct(product)) }
});
export default connect(mapStateToProps, mapDispatchToProps)(ProductList);


