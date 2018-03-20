export const ADD_TO_CART = 'ADD_TO_CART'

export function addToCart ({ product, name }) {
  return {
    type: ADD_TO_CART,
    product
  }
}
