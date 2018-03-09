import React from 'react';
import ReactDOM from 'react-dom';
import CartApp from './CartApp';

it('renders without crashing', () => {
  const div = document.createElement('div');
  ReactDOM.render(<CartApp />, div);
  ReactDOM.unmountComponentAtNode(div);
});
