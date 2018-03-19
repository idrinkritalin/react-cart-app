import React from 'react'
import ReactDOM from 'react-dom'
import './index.css'
import CartApp from './CartApp'
import registerServiceWorker from './registerServiceWorker'
import { createStore } from 'redux'
import reducer from './reducers'

const store = createStore(
  reducer,
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
)

console.log(store)

ReactDOM.render(<CartApp store={store} />, document.getElementById('root'))
registerServiceWorker();
