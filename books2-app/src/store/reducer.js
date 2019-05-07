const initialState = {
    
    books:[],
    
    isAuthenticated: false,
    isRegistered:false

  }


const reducer = (state = initialState,action) => {

    if (action.type == 'IS_AUTHENTICATED') {
        return {
            ...state,
            isAuthenticated: action.token != null ? true : false
        }
    }else if (action.type=='LOGOUT'){
        return {
            ...state,
        isAuthenticated: false

        }
    }

    
  
    return state
  }
  
  // exporting reducer so it can importing in different js files
  export default reducer