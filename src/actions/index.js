export const ADD_TO_CART = 'ADD_TO_CART'
export const RAISE_ERROR = 'RAISE_ERROR'

export function addToCart ( product ) {
  return {
    type: ADD_TO_CART,
    product
  }
}

export function raiseError () {
  return {
    type: RAISE_ERROR
  }
}
