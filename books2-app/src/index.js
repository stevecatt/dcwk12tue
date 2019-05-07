import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import 'bootstrap/dist/css/bootstrap.css';
import * as serviceWorker from './serviceWorker';
import { Provider } from 'react-redux'
import {BrowserRouter, Switch, Route} from 'react-router-dom'
import BaseLayout from './components/BaseLayout'
import {AddBook} from './components/AddBook'
import {BookList} from './components/BookList'
import {DeleteBook} from './components/DeleteBook'
import {UpdateBook} from './components/UpdateBook'
import {Golf} from './components/Golf'
import Login from './components/Login'
import Register from './components/Register'
//import {NavLink} from 'react-router-dom'
import {createStore} from 'redux'
import reducer from './store/reducer'
import Photos from './components/Photos'
import { Fragment } from 'react';
import {
  Navbar, NavbarBrand, Nav, NavItem,
} from 'react-bootstrap';
import {
    Container, Row, Col,Card, CardBody, CardTitle, CardSubtitle, CardText, Button
  } from 'react-bootstrap';

import { setAuthenticationHeader } from './utils/authenticate'
// you can call requireAuth anything
import requireAuth from './components/requireAuth'


const store = createStore(reducer,window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__())

setAuthenticationHeader(localStorage.getItem('jwtoken'))

ReactDOM.render(
    <Provider store={store}>
    <BrowserRouter>
        <BaseLayout>
        <Switch >
  
            <Route path="/" exact component={App} />
            <Route path="/view-all-books" component={BookList} />
            <Route path="/add-book" component={requireAuth(AddBook)} />
            <Route path="/delete-book" component={requireAuth(DeleteBook)} />
            <Route path="/update-book/:id/:name/:genre/:publisher/:year" component={requireAuth(UpdateBook)} />
            <Route path="/register" component={Register} />
            <Route path="/login" component={Login} />
            <Route path="/golf" component={Golf} />
            <Route path="/photo" component={Photos} />
        </Switch>
        </BaseLayout>
    </BrowserRouter>
    </Provider>, 
    
    document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
