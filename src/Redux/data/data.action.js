import axios from "axios";
import * as types from "./data.actionTypes";
const getProperty=()=>async(dispatch)=>{
  dispatch({type:types.DATA_LOADING})
    try{
   let res= await axios.get("https://json-server-backend.onrender.com/property");
   console.log(res.data)
   dispatch({type:types.DATA_SUCCESS,payload:res.data});
  }
  catch(err){
    console.log(err);
    dispatch({type:types.DATA_ERROR});
  }
}
const getPropertySearch=(value)=>async(dispatch)=>{
  dispatch({type:types.DATA_LOADING})
    try{
   let res= await axios.get(`https://json-server-backend.onrender.com/property?q=${value}`);
   console.log(res.data)
   dispatch({type:types.DATA_SUCCESS,payload:res.data});
  }
  catch(err){
    console.log(err);
    dispatch({type:types.DATA_ERROR});
  }
}
export {getProperty,getPropertySearch};