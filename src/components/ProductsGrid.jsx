import React from 'react'
import '../styles/productsGrid.css'
import PropTypes from 'prop-types'
import { addToCart } from '../actions'
import { connect } from 'react-redux'

const ProductsGrid = (props) => {
  const { products, addToCart } = props
  return (
      <section id="products-grid">
        {products.map(product => (
          <div className="product-container" key={product.id}>
            <img alt={product.name} className="product-image" src={product.url}></img>
            <div className="overlay">
              <button className="cta-text" onClick={() => addToCart(product)}>Add To Cart</button>
            </div>
            <p>{product.name}</p>
          </div>
        ))}
      </section>
  )
}

ProductsGrid.propTypes = {
  products: PropTypes.array.isRequired,
  addToCart: PropTypes.func.isRequired
}

const mapStateToProps = (cart) => {
  return {
    cart
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    addToCart: (data) => dispatch(addToCart(data))
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(ProductsGrid)

///// SOME IDEAS FOR THE 'OUT OF STOCK' MODAL

// import Modal from 'react-awesome-modal'

// <Modal visible={props.availabilty} width="400" height="110" effect="fadeInUp" onClickAway={() => this.closeModal()}>
//   <div>
//       <p>Unfortunately the product is 'Out Of Stock'</p>
//       <a onClick={() => this.closeModal()}>&times;</a>
//   </div>
// </Modal>

// closeModal() {
//   this.setState({ props.availabilty : false })
// }

/////
