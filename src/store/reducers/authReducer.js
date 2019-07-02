const initState = {
  user: {},
  authError: null
};

const authReducer = (state = initState, action) => {
  switch (action.type) {
    case 'SIGNIN_SUCCESS':
      return {
        ...state,
        user: action.payload,
        authError: null
      };
    case 'SIGNIN_ERROR':
      return {
        ...state,
        authError: action.error
      };
    case 'SIGNUP_SUCCESS':
      return {
        ...state,
        user: action.payload,
        authError: null
      };
    case 'SIGNUP_ERROR':
      return {
        ...state,
        authError: action.error
      };
    case 'SIGNOUT_SUCCESS':
      return state;
    case 'DECODE_TOKEN':
      return {
        ...state,
        user: action.payload
      }
    case 'RESET_PASSWORD':
      return {
        ...state,
        massege: action.payload
      };

    case 'DATA_USER':
      return {
        ...state,
        user: action.payload
      }
    default: return state;
  }
};

export default authReducer;