import React,{Component} from 'react';
import { connect } from 'react-redux'

class Counter extends Component {
    constructor(){
        super()
    }

    render(){
        return(
            <div>
               <h1>{this.props.ctr}</h1>
                 <button onClick={() => this.props.onIncrementCounter()}>Increment</button>
                 <button onClick={() => this.props.onDecrementCounter()}>Decrement</button>
                <button onClick={() => this.props.onAddCounter()}>ADD +10</button>
                <button onClick={() => this.props.onSubCounter()}>SUB +10</button>
            </div>
        )
    }
}

const mapStateToProps = (state) => {
    return {
        ctr: state.counter // this.props.ctr
    }
  }

const mapDispatchToProps =(dispatch)=>{
    return {
        onIncrementCounter: ()=>dispatch({type: 'INC_COUNTER'}),
        onDecrementCounter: ()=>dispatch({type: 'DEC_COUNTER'}),
        onAddCounter:()=>dispatch({type:'ADD_COUNTER',value:10}),
        onSubCounter:()=>dispatch({type:'SUB_COUNTER',value:10})
    }
}


export default connect(mapStateToProps,mapDispatchToProps)(Counter)