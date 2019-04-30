import React, {Component} from 'react';

export class AddBook extends Component {
  constructor(){
    super()
    this.state = {
      name: "",
      genre:"",
      publisher:"",
      year:"",
    }
  }

  viewAllBooks =() => {
    console.log("hopefully going back to view all books")
   
    this.props.history.push('/view-all-books')
    
    
 }
  

  handleTextBoxChange = (e) => {

    this.setState({
      //note that this is an array in order to create the states
      [e.target.name]: e.target.value
    })
  
  }
  
  handleSaveBookClick = () => {
  
    
  
    fetch('http://localhost:8080/api/books', {
  method: 'POST',
  headers: {
    'Content-Type': 'application/json'
  },
    body: JSON.stringify({
      name: this.state.name,
      year: this.state.year,
      genre: this.state.genre,
      publisher: this.state.publisher
    })
  })
  // this .then aint workking
  .then(response => response.json())
  .then(result => {
      if(result.success) {
        console.log("success")
        // go fetch the books from the server and display it
        this.viewAllBooks()
      } else {
        // show some error
      }
    })
  
  }
  

  render() {
    return (
      <div>
        <h1>Add A Book</h1>
        <input type="text" onChange={this.handleTextBoxChange} placeholder="Enter name" name="name" />
        <input type="text" onChange={this.handleTextBoxChange} placeholder="Enter genre" name="genre" />
       <input type="text" onChange={this.handleTextBoxChange} placeholder="Enter publisher" name="publisher" />
        <input type="text" onChange={this.handleTextBoxChange} placeholder="Enter year" name="year" />
        <button onClick={this.handleSaveBookClick}>Save</button>
      </div>
    )
  }

}
