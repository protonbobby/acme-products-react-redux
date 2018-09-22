import React from 'react';
import { connect } from 'react-redux';

//import {  } from '../store';

const Product = (props) => {
  return (
    <div>

    </div>
  )
}

//________________________________
const mapDispatchToProps = dispatch => ({
  createProduct: item => dispatch(createProduct(item))
});
export default connect(null, mapDispatchToProps)(Product);
