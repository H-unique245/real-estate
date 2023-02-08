import {applyMiddleware, combineReducers, compose, legacy_createStore} from 'redux'
import { authReducer } from './auth/auth.reducer';
import thunk from "redux-thunk";
import { dataReducer } from './data/data.reducer';
const rootReducer= combineReducers({auth:authReducer,data:dataReducer})
export const Store= legacy_createStore(rootReducer,compose(applyMiddleware(thunk)));