import authReducer from "./authreducer";
import { combineReducers} from 'redux';
import storage from 'redux-persist/lib/storage'
import {persistReducer} from 'redux-persist'
import autoMergeLevel2 from "redux-persist/es/stateReconciler/autoMergeLevel2";

const commonConfig = {
    storage,
    stateReconsiler: autoMergeLevel2
}

const authConfig = {
    ...commonConfig,
    key:'auth',
    whitelist: ['isLoggedIn', 'token']
}

const rootReducer = combineReducers({
    auth: persistReducer(authConfig, authReducer)
})