import React, {Component} from 'react';
import { connect } from 'react-redux'



class Login extends Component {
    constructor(){
        super()
        this.state={
            userName: "",
            password:""
           

        }

    }

    

    handleTextBoxChange = (e) => {

        this.setState({
          //note that this is an array in order to create the states
          [e.target.name]: e.target.value
        })
      
      }

      handleSaveUserClick = () => {
      fetch('http://localhost:8080/login', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
          body: JSON.stringify({
           
            userName: this.state.userName,
            password: this.state.password
          })
        })
        
        .then(response => response.json())
        .then(result => {
            if(result===true) {
            
              console.log("USER Autherized")
             
          
              this.props.history.push('/view-all-books')
              this.props.onResultTrue()
              
              
            } else{
              this.props.history.push('/')
            }
                
            
          })
        
        }
  

    render(){
        return(
            <div>
            <h1>Login</h1>
            <input type="text" onChange={this.handleTextBoxChange} placeholder="user name" name="userName" />
            <input type="password" onChange={this.handleTextBoxChange} placeholder="password" name="password" />
            <button onClick={this.handleSaveUserClick}>Login</button>
            </div>
        )
    }
}
const mapDispatchToProps = (dispatch)=>{
  return {
    onResultTrue: ()=> dispatch({type:'IS_AUTHENTICATED'})
  }
}

const mapStateToProps =(state)=>{
  return{
    isAuth: state.isAuthenticated
  }
}


export default connect(mapStateToProps,mapDispatchToProps)(Login) 