
// setting up the initial state
const initialState = {
  counter: 100,
  books: ['Book 1','Book 2'],
  isAuthenticated: false
}

// creating the reducer
const reducer = (state = initialState,action) => {

  if(action.type == 'INC_COUNTER') {
    return {
      ...state,
      counter: state.counter + 1
    }
  } else if(action.type == 'DEC_COUNTER') {
    return {
      ...state,
      counter: state.counter - 1
    }
  } else if(action.type == 'ADD_COUNTER') {
    return {
      ...state,
      counter: state.counter + action.value
    }
  }

  return state
}

// exporting reducer so it can importing in different js files
export default reducer
