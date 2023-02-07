import {applyMiddleware, combineReducers, compose, legacy_createStore} from 'redux'
import { authReducer } from './auth/auth.reducer';
import thunk from "redux-thunk";
const rootReducer= combineReducers({auth:authReducer})
export const Store= legacy_createStore(rootReducer,compose(applyMiddleware(thunk)));