import React, { Component } from 'react'
import './CartApp.css'
import ReactLoading from 'react-loading'
import { checkStatus } from './utils/checkStatus'
import Header from './components/Header'
import ProductsGrid from './components/ProductsGrid'

class CartApp extends Component {
  state = {
    products: [],
    isLoaded: false
  }

  componentDidMount() {
    const server = 'http://localhost:4000/products'

    fetch(server)
      .then(checkStatus)
      .then(response => response.json())
      .then(json => {
        this.setState({products:json, isLoaded:true})
      });
  }

  render() {
    const { products, isLoaded } = this.state
    return (
      <div className="CartApp">
        <Header/>

        { isLoaded ? (
          <ProductsGrid
            products={products}
          />
        ) : (
          <div className="loading-spin">
            <ReactLoading type='spin' color='#299ABF' height='50' width='50' />
            <p>Loading products...</p>
          </div>
        ) }

      </div>
    );
  }
}

export default CartApp
