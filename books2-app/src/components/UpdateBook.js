import React, {Component} from 'react';
//import {Link, NavLink} from 'react-router-dom'

export class UpdateBook extends Component {
  constructor(){
    super()
    this.state = {
      name: "",
      genre:"",
      publisher:"",
      year:"",
      path: "",
      id:""
    }
  }

  viewAllBooks =() => {
    console.log("hopefully going back to view all books")
   
    this.props.history.push('/view-all-books')
    
    
 }
  

  
  handleTextBoxChange = (e) => {

    this.setState({
      [e.target.name]: e.target.value
    })
  
  }
  
  handleUpdateBookClick = () => {
  
    
  
    fetch('http://localhost:8080/api/update-book', {
  method: 'POST',
  headers: {
    'Content-Type': 'application/json'
  },
    body: JSON.stringify({
      name: this.state.name,
      year: this.state.year,
      genre: this.state.genre,
      publisher: this.state.publisher,
      id:this.state.id
    })
  })
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
  componentDidMount(){
    console.log(this.props.match.params.id)
    this.setState({
      id: this.props.match.params.id,
      name:this.props.match.params.name,
      genre:this.props.match.params.genre,
      publisher:this.props.match.params.publisher,
      year: this.props.match.params.year

    })
    
  }

  
  render() {
    return (
      <div>
        <h1>Update {this.state.name}</h1>
        
        <input type="text" onChange={this.handleTextBoxChange} name="name" value={this.state.name}/>
        <input type="text" onChange={this.handleTextBoxChange} name="genre" value={this.state.genre}/>
       <input type="text" onChange={this.handleTextBoxChange}  name="publisher" value={this.state.publisher} />
        <input type="text" onChange={this.handleTextBoxChange} name="year" value={this.state.year} />
        <button onClick={this.handleUpdateBookClick}>Save</button>
      </div>
    )
  }

}
