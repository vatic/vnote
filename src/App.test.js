import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';

import bootstrap from 'bootstrap/dist/css/bootstrap.min.css';

it('renders without crashing', () => {
  const div = document.createElement('div');
  ReactDOM.render(<App />, div);
});
