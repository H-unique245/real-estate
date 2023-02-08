import * as types from "./auth.actionTypes";

let authState={
    loading:false,
    error:false,
    errorMessage:null,
    isLogin:false,
    isAuth:false,
    authToken:null,
    user:!!JSON.parse(localStorage.getItem("user"))
}

export const authReducer=(state=authState,{type,payload})=>{
   switch(type) {
     case types.AUTH_ERROR: {
        return {
            ...state,
            error: true,
            isAuth:false,
            errorMessage:payload,
            loading:false
        }
     }
     case types.AUTH_LOADING: {
        return {
            ...state,
            error: false,
            isAuth:false,
            loading:true
        }
     }
     case types.AUTH_REGISTER_SUCCESS: {
        return {
            ...state,
            error: false,
            isAuth:true,
            loading:false
        }
     }
     case types.AUTH_LOGIN_SUCCESS: {
        localStorage.setItem("user",JSON.stringify(payload.user))
        return {
            ...state,
            error: false,
            isLogin:true,
            authToken: payload.token,
            user:payload.user,
            loading:false
        }
     }
     case types.AUTH_LOGOUT: {
        localStorage.removeItem("user");
        return {
            ...state,
            error: false,
            isAuth:false,
            isLogin:false,
            loading:false,
        }
     }
       default :{
          return state;
       }
   }

}