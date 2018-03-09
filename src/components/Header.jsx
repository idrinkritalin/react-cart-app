import React, { Component } from 'react';
import logo from '../img/vimcar-logo.svg';
import cartImg from '../img/cart.svg';
import PropTypes from 'prop-types';

class Header extends Component {
  render() {
    return (
      <div>
        <p>{this.props.cartedItems.length}</p>
        <img alt="logo" src={cartImg}></img>
      </div>
    );
  }

  static propTypes = {
    cartedItems: PropTypes.array.isRequired
  }
}

export default Header;
