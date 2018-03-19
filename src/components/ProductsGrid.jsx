import React, { Component } from 'react'
import '../styles/productsGrid.css'
import PropTypes from 'prop-types'

class ProductsGrid extends Component {
  render() {
    const { products, onAddToCart } = this.props
    return (
      <section id="products-grid">
        {products.map(product => (
          <div className="product-container" key={product.id}>
            <img alt={product.name} className="product-image" src={product.url}></img>
            <div className="overlay">
              <button className="cta-text" onClick={() => onAddToCart(product)}>Add To Cart</button>
            </div>
            <p>{product.name}</p>
          </div>
        ))}
      </section>
    );
  }

  static propTypes = {
    products: PropTypes.array.isRequired,
    onAddToCart: PropTypes.func.isRequired
  }
}

export default ProductsGrid
