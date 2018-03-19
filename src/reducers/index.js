import {
  ADD_TO_CART
} from '../actions'

const initialCartState = []

function cart (state = initialCartState, action) {
  const {item} = action

  switch (action.type) {
    case ADD_TO_CART :
      return [
        ...state,
        item.name
      ]
    default :
      return state
  }
}

export default cart
