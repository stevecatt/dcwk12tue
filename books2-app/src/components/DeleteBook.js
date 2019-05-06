import React, {Component} from 'react';
import axios from 'axios';


export class DeleteBook extends Component{
    constructor(){
        super()
        this.state= {
            books:[],
            name:"",
            year:"",
            genre:"",
            publisher:"",
            id:""
        }
    }



    getAllBooks = ()=>{
        let url = 'http://localhost:8080/api/books'
    
        axios.get(url)
        .then(response =>  {
           this.setState({
            books: response.data
            
          })
          //callback(json)
        })
      }
    
    componentDidMount() {
      console.log(this.props.match)
    
        this.getAllBooks()
    
      }
    
    removeBook = (book) =>  {
        console.log("sending shit to the server")
        console.log(book)
        axios.post('http://localhost:8080/api/delete-book', {
        method: 'POST',
        
        id: book,
        
    })
  .then(response => {
      if(response.data.success === true) {
        console.log(response.data.success)
        // go fetch the books from the server and display it
        this.getAllBooks()
      } else {
        // show some error
      }
    })
    
 
  }
     
    


    render(){
        let books = this.state.books

        let bookListItems = books.map((book, index)=>{
        
           //make sure the button calls a function {() => this.props.removeTaskCallback(task) if trying to pass something like "task"}
            return <div key={index}>         
                             <li>{book.book_name}</li>
                             <button onClick={()=>this.removeBook(book.id)}>Delete</button>
                        
                            
                    </div>
        })
        
        return(
            
           
            <div>
              <h1>Here Be Less Books</h1>
              <ul>{bookListItems}</ul>
            </div>
        
        )
        
    }
}

