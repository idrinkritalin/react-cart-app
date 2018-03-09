import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import CartApp from './CartApp';
import registerServiceWorker from './registerServiceWorker';

ReactDOM.render(<CartApp />, document.getElementById('root'));
registerServiceWorker();
