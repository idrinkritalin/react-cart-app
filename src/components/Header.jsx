import React from 'react'
import '../styles/header.css'
import shopLogo from '../img/shop-logo.png'
import cartIcon from '../img/cart.svg'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'

const Header = (props) => {
  return (
    <header>
      <div className="shop-logo">
        <a rel="noopener noreferrer" target="_blank" href="http://www.nosto.com">
          <img alt="shop" src={shopLogo}></img>
        </a>
      </div>
      <div className="cart-section">
        <img alt="cart" src={cartIcon}></img>
        <div>
          <span>{props.cart.length}</span>
        </div>
      </div>
    </header>
  )
}

Header.propTypes = {
  cart: PropTypes.array.isRequired
}

const mapStateToProps = (cart) => {
  return {
    cart
  }
}

export default connect(mapStateToProps)(Header)
