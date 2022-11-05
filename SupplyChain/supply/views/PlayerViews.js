import React from 'react';

const exports = {};

// Player views must be extended.
// It does not have its own Wrapper view.

exports.Done = class extends React.Component {
  render() {
    const {productPrice, productId, productName, productImage, productArea, productManufactureDate} = this.props;
    return (
      <div>
        <h2>Transaction Successful.</h2>
        <br />
        <h3>Payment have been made for the Product. </h3>
        Product Area: {productArea || 'Unknown'}
        <br />
        Product Image: 
        <br />
        <img src={productImage || 'https://propertywiselaunceston.com.au/wp-content/themes/property-wise/images/no-image@2x.png'}/>
        <br />
        Product Price: {productPrice || 'Unknown'}
        <br />
        Product ID: {productId || 'Unknown'}
        <br />
        Product Name: {productName || 'Unknown'}
        <br />
        Product Manufacture Date: {productManufactureDate || 'Unknown'}
        <br />
      </div>
    );
  }
}


exports.Timeout = class extends React.Component {
  render() {
    return (
      <div>
        There's been a timeout. (Someone took too long.)
      </div>
    );
  }
}

export default exports;