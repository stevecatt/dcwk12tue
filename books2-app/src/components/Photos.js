import React, {Component} from 'react';
import { connect } from 'react-redux'


class Photos extends Component {
    constructor(){
        super()
        this.state={
            photo:[]
        }
    }
    

    componentDidMount() {

        let url = 'https://jsonplaceholder.typicode.com/photos'

        fetch(url)
        .then(response => response.json())
        .then(json => { 
            this.props.onPhotosFetched(json)
        })
    }


    render(){
        return(
            <h1>photo</h1>
        )
    }



}

const mapDispatchToProps = (dispatch) => {
    return {
      onPhotosFetched: (photos) => dispatch({type: 'PHOTO_FETCHED', photos:photos})
    }
  }
  
export default connect(null,mapDispatchToProps)(Photos)