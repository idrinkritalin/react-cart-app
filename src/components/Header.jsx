import React, { Component } from 'react'
import '../styles/header.css'
import shopLogo from '../img/shop-logo.png'
import cartIcon from '../img/cart.svg'
import PropTypes from 'prop-types'

class Header extends Component {
  render() {
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
            <span>{this.props.cartedItems.length}</span>
          </div>
        </div>
      </header>
    );
  }

  static propTypes = {
    cartedItems: PropTypes.array.isRequired
  }
}

export default Header
