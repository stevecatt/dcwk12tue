import React, {Component} from 'react';
import './BaseLayout.css';
// import {BookList} from './BookList'
// import {AddBook} from './AddBook'
import {NavLink} from 'react-router-dom'
import { connect } from 'react-redux'
// import {DeleteBook} from './DeleteBook'
// import {UpdateBook} from './UpdateBook'
// import {BrowserRouter, Switch, Route} from 'react-router-dom'


  class Menu extends Component {

  render() {
    return (
      <ul className="menu">
      {!this.props.isAuth ?<li><NavLink to="/" className="link">Home</NavLink></li>:null}
      {this.props.isAuth?<li><NavLink to="/view-all-books">View All Books</NavLink></li>:null}
      {this.props.isAuth ?<li><NavLink to="/add-book">Add Book</NavLink></li>:null}
      {this.props.isAuth ?<li><NavLink to="/delete-book">Delete Book</NavLink></li>:null}
      {!this.props.isAuth ?<li><NavLink to="/login">login</NavLink></li>:null}
      {!this.props.isAuth ?<li><NavLink to="/register">Register</NavLink></li>:null}
      
      </ul>
    )
  }
}

 class Footer extends Component {

  render() {
    return (
      <div className="footer">Copyright 2019</div>
    )
  }

}

class BaseLayout extends Component {

  render() {
    return (
      <div>
        <Menu isAuth = {this.props.isAuth} isReq = {this.props.isReg}/>
          {this.props.children}
        <Footer />
      </div>
    )
  }

}


const mapStateToProps =(state)=>{
  return{
    isAuth: state.isAuthenticated
  }
}
export default connect(mapStateToProps)(BaseLayout)