import axios from "axios";
import * as types from "./auth.actionTypes";
const RegisterUser=(data)=>async(dispatch)=>{
  dispatch({type:types.AUTH_LOADING})
    try{
   let res= await axios.post("https://revision-server-adkv.onrender.com/users",data);
   console.log(res.data)
   dispatch({type:types.AUTH_REGISTER_SUCCESS});
  }
  catch(err){
    console.log(err);
    dispatch({type:types.AUTH_ERROR});
  }
}
const LoginUser=(data)=>async(dispatch)=>{
    dispatch({type:types.AUTH_LOADING})
      try{
     let res= await axios.post("https://revision-server-adkv.onrender.com/login",data);
     console.log(res.data)
     dispatch({type:types.AUTH_LOGIN_SUCCESS,payload:res.data});
    }
    catch(err){
      console.log(err);
      dispatch({type:types.AUTH_ERROR,payload:err.response.data});
    }
  }
export {RegisterUser,LoginUser};