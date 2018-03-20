import {
  ADD_TO_CART,
  RAISE_ERROR
} from '../actions'

const initialCartState = []

function cart (state = initialCartState, action) {
  const { product } = action

  switch (action.type) {
    case ADD_TO_CART :
      return [
        ...state,
        product
      ]
    case RAISE_ERROR :
      return state
    default :
      return state
  }
}

export default cart
