import {
  ADD_TO_CART
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
    default :
      return state
  }
}

export default cart
