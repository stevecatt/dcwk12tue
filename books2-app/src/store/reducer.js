const initialState = {
    
    books:[],
    
    isAuthenticated: false,
    isRegistered:false

  }


const reducer = (state = initialState,action) => {

    if (action.type == 'IS_AUTHENTICATED') {
        return {
            ...state,
            isAuthenticated : true
        }
    }else if (action.type=='IS_REGISTERED'){
        return {
            ...state,
        isRegistered : true

        }
    }

    
  
    return state
  }
  
  // exporting reducer so it can importing in different js files
  export default reducer