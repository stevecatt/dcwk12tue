import React, {Component} from 'react';
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

    fetch(url)
    .then(response => response.json())
    .then(json => {
       this.setState({
        books: json
        
      })
      //callback(json)
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
            return <div key={index}>         
                             <li>{book.book_name}</li>
                             <li>{book.book_genre}</li>
                             <li>{book.book_publisher}</li>
                             <li>{book.book_year}</li>
                           
                             <button onClick={()=>this.updateBook(book.id,book.book_name,book.book_genre,book.book_publisher,book.book_year)}>Update Book Info</button>
                        
                           
                    </div> 
        })
        
        return(
            
           
            <div>
              <h1>Here Be Books</h1>
             
             <ul>{bookListItems}</ul>
            </div>
        
        )
        
    }
  }

  


