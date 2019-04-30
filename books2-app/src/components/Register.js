import React, {Component} from 'react';
import { connect } from 'react-redux'

class Register extends Component {
    constructor(){
        super()
        this.state={
            firstName: "",
            lastName: "",
            userName: "",
            password: ""

        }



    }

    handleTextBoxChange = (e) => {

        this.setState({
          //note that this is an array in order to create the states
          [e.target.name]: e.target.value
        })
      
      }

      handleSaveUserClick = () => {
  
    
  
        fetch('http://localhost:8080/register', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
        body: JSON.stringify({
          firstName: this.state.firstName,
          lastName: this.state.lastName,
          userName: this.state.userName,
          password: this.state.password
        })
      })
      
      .then(response => response.json())
      .then(result => {
          if(result.exists) {
            console.log("user exists")
            
            
          } else if (result.success){
            console.log(result.success)
           
            this.props.history.push('/login')
            this.props.onResultTrue()
          }else{
              console.log("error")
          }
        })
      
      }

    render(){
        return(
            <div>
            <h1>Register</h1>
            <input type="text" onChange={this.handleTextBoxChange} placeholder="first name" name="firstName" />
            <input type="text" onChange={this.handleTextBoxChange} placeholder="last name" name="lastName" />
            <input type="text" onChange={this.handleTextBoxChange} placeholder="user name" name="userName" />
            <input type="password" onChange={this.handleTextBoxChange} placeholder="password" name="password" />
            <button onClick={this.handleSaveUserClick}>Register</button>
            </div>
        )
    }
}

const mapDispatchToProps = (dispatch)=>{
  return {
    onResultTrue: ()=> dispatch({type:'IS_REGISTERED'})
  }
}

const mapStateToProps =(state)=>{
  return{
    isReg: state.isRegistered
  }
}
export default connect(mapStateToProps,mapDispatchToProps)(Register) 