import React,{Component} from 'react';
import { connect } from 'react-redux'


class Counter extends Component {

constructor() {
  super()


}




  render() {
    return (
      <div>
        <h1>{this.props.ctr}</h1>
        <button onClick={() => this.props.onIncrementCounter()}>Increment</button>
        <button onClick={() => this.props.onDecrementCounter()}>Decrement</button>
          <button onClick={() => this.props.onAddCounter()}>ADD +5</button>
      </div>
    )
  }

}

// map global state to props
const mapStateToProps = (state) => {
  return {
      ctr: state.counter // this.props.ctr
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    // this.props.onIncrementCounter
    onIncrementCounter: () => dispatch({type: 'INC_COUNTER'}),
    onDecrementCounter: () => dispatch({type: 'DEC_COUNTER'}),
    onAddCounter: () => dispatch({type: 'ADD_COUNTER', value: 5})
  }
}


export default connect(mapStateToProps,mapDispatchToProps)(Counter)
