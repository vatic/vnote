import 'bootstrap/dist/css/bootstrap.css';
import 'font-awesome/css/font-awesome.css';


// import jquery from 'jquery';
// window.$ = window.jQuery=jquery;
// require('bootstrap/dist/js/bootstrap');

import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { Router, Route, IndexRoute} from 'react-router';

import {browserHistory} from 'react-router';

import configureStore from './store/configureStore';

import App from './containers/app/App';
import NotesPage from './containers/note/NotesPage';

import './index.css';

const store = configureStore();

ReactDOM.render(
  <Provider store={store}>
    <Router history={browserHistory}>
        <Route path="/" component={App} >
          <IndexRoute component={NotesPage}/>
        </Route>
    </Router>
  </Provider>,
  document.getElementById('root')
);
