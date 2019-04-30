import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';
import { Provider } from 'react-redux'
import {BrowserRouter, Switch, Route} from 'react-router-dom'
import BaseLayout from './components/BaseLayout'
import {AddBook} from './components/AddBook'
import {BookList} from './components/BookList'
import {DeleteBook} from './components/DeleteBook'
import {UpdateBook} from './components/UpdateBook'
import Login from './components/Login'
import Register from './components/Register'
import {NavLink} from 'react-router-dom'
import {createStore} from 'redux'
import reducer from './store/reducer'

const store = createStore(reducer,window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__())

ReactDOM.render(
    <Provider store={store}>
    <BrowserRouter>
        <BaseLayout>
        <Switch >
  
            <Route path="/" exact component={App} />
            <Route path="/view-all-books" component={BookList} />
            <Route path="/add-book" component={AddBook} />
            <Route path="/delete-book" component={DeleteBook} />
            <Route path="/update-book/:id/:name/:genre/:publisher/:year" component={UpdateBook} />
            <Route path="/register" component={Register} />
            <Route path="/login" component={Login} />
        </Switch>
        </BaseLayout>
    </BrowserRouter>
    </Provider>, 
    
    document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
