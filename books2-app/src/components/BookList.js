import React, {Component} from 'react';
import './BaseLayout.css';
import 'bootstrap/dist/css/bootstrap.css';
import {
  Container, Row, Col,Card, CardBody, CardTitle, CardSubtitle, CardText, Button, Table
} from 'react-bootstrap';
import axios from 'axios';
import { setAuthenticationHeader } from '../utils/authenticate';


//import {Books} from './Books'
//import {Link, NavLink} from 'react-router-dom'

export class BookList extends Component {
  constructor(){
    super()
    this.state= {
      books:[]

    }

  

    
  }
  updateBook =(id,name,genre,publisher,year) => {
    console.log(id)
    let updateBookLink = "/update-book/"+id+"/"+name+"/"+genre+"/"+publisher+"/"+year
    this.props.history.push(updateBookLink)
    
    
 }

  getAllBooks = ()=>{
    let url = 'http://localhost:8080/api/books'

    axios.get(url)
    .then(response => {
      this.setState({
        books: response.data
    })
       
        
      
      
    })
  }

  componentDidMount() {
    console.log(this.props.match)
    this.getAllBooks()

  }

  render() {
    
        let books= this.state.books
        let bookListItems = books.map((book, index)=>{
        
           //make sure the button calls a function {() => this.props.removeTaskCallback(task) if trying to pass something like "task"}
            return <tbody key={index}>
                            
                            <tr>
                             <td>{book.book_name}</td>
                             <td>{book.book_genre}</td>
                             <td>{book.book_publisher}</td>
                             <td>{book.book_year}</td>

                         
                             </tr>
                             <button onClick={()=>this.updateBook(book.id,book.book_name,book.book_genre,book.book_publisher,book.book_year)}>Update Book Info</button>
                        
                          </tbody>
                    
                    
        })
        
        return(
            
           
            <div>
              <h1>Here Be Books</h1>
             
             <table>
               <th>Title</th>
               <th>Genre</th>
               <th>Publisher</th>
               <th>year</th>
             {bookListItems}
             </table>
            </div>
        
        )
        
    }
  }

  


