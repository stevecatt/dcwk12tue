import React,{Component} from 'react';
import logo from './logo.svg';
import './App.css';
import Counter from "./Counter"
import DisplayCounter from './DisplayCounter'
import BookList from './BookList'

class App extends Component {

  render() {
    return (
      <div>
        <h1>App</h1>
        <BookList />
        <Counter />
        <DisplayCounter />
      </div>
    )
  }

}

export default App;
