import React, {Component} from 'react';
import './BaseLayout.css';
import 'bootstrap/dist/css/bootstrap.css';
// import {BookList} from './BookList'
// import {AddBook} from './AddBook'
import {NavLink} from 'react-router-dom'
import { connect } from 'react-redux'
import { Fragment } from 'react';
import {
  Navbar, NavbarBrand, Nav, NavItem,
} from 'react-bootstrap';
import {
  Container, Row, Col,Card, CardBody, CardTitle, CardSubtitle, CardText, Button
} from 'react-bootstrap';
// import {DeleteBook} from './DeleteBook'
// import {UpdateBook} from './UpdateBook'
// import {BrowserRouter, Switch, Route} from 'react-router-dom'


  class Menu extends Component {

  render() {
    return (
     <div>
      <Fragment>
      <Navbar color="light" light-expand="md" bg='light'>
      
      
      <NavbarBrand>
      <NavLink to="/">Home</NavLink>
      <NavLink  to="/golf">golf </NavLink>
      </NavbarBrand>

      <Nav className="ml-auto" navbar>
      <NavItem className="d-flex align-items-center">
      {this.props.isAuth?<NavLink className="font-weight-bold topbar" to="/view-all-books">View All Books </NavLink>:null}
      </NavItem>
      <NavItem className="d-flex align-items-center">
      {this.props.isAuth ?<NavLink className="font-weight-bold topbar" to="/add-book"> Add Book </NavLink>:null}
      </NavItem>
      <NavItem className="d-flex align-items-center">
      {this.props.isAuth ?<NavLink className="font-weight-bold topbar" to="/delete-book"> Delete Book</NavLink>:null}
      </NavItem>
      <NavItem className="d-flex align-items-center">
      {!this.props.isAuth ?<NavLink className="font-weight-bold topbar" to="/login"> login </NavLink>:null}
      </NavItem>
      <NavItem className="d-flex align-items-center">
      {this.props.isAuth ?<NavLink className="font-weight-bold topbar" to="/logout"> logout </NavLink>:null}
      </NavItem>
      <NavItem className="d-flex align-items-center">
      {!this.props.isAuth ?<NavLink className="font-weight-bold topbar" to="/register"> Register</NavLink>:null}
      </NavItem>
      </Nav>
      
     
      </Navbar>
     </Fragment>
     </div>
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
        <Footer/>
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