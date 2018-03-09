import React, { Component } from 'react';
import PropTypes from 'prop-types';

class ProductsGrid extends Component {
  render() {
    const { products, onAddToCart } = this.props
    return (
      <div>
        {products.map(product => (
          <div key={product.id}>
            <img alt={product.name} src={product.url}></img>
            <p>{product.name}</p>
            <button onClick={() => onAddToCart(product)}>Add To Cart</button>
          </div>
        ))}
      </div>
    );
  }

  static propTypes = {
    products: PropTypes.array.isRequired,
    onAddToCart: PropTypes.func.isRequired
  }

}

export default ProductsGrid;
