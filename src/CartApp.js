import React, { Component } from 'react'
import './CartApp.css'
import ReactLoading from 'react-loading'
import { checkStatus } from './utils/checkStatus'
import Header from './components/Header'
import ProductsGrid from './components/ProductsGrid'
import Modal from 'react-awesome-modal'

class CartApp extends Component {
  state = {
    products: [],
    isLoaded: false,
    isModalVisible: false
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

  closeModal() {
    this.setState({ isModalVisible : false })
  }

  render() {
    const { products, isLoaded, isModalVisible } = this.state
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

        <Modal visible={isModalVisible} width="400" height="110" effect="fadeInUp" onClickAway={() => this.closeModal()}>
          <div id="modal-warning">
              <p>Unfortunately the product is 'Out Of Stock'</p>
              <a onClick={() => this.closeModal()}>&times;</a>
          </div>
        </Modal>

      </div>
    );
  }
}

export default CartApp
