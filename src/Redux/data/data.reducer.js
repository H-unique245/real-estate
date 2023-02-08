import * as types from "./data.actionTypes";

let dataState={
    loading:false,
    error:false,
    data:[],
}

export const dataReducer=(state=dataState,{type,payload})=>{
   switch(type) {
     case types.DATA_ERROR: {
        return {
            ...state,
            error: true,
            loading:false
        }
     }
     case types.DATA_LOADING: {
        return {
            ...state,
            error: false,
            loading:true
        }
     }
     case types.DATA_SUCCESS: {
        return {
            ...state,
            error: false,
            loading:false,
            data:payload
        }
     }
       default :{
          return state;
       }
   }

}