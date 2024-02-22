import { configureStore } from "@reduxjs/toolkit";
import createSagaMiddleware from 'redux-saga'
import authReducer from '../features/auth/authSlice'
import loginReducer from "../features/login/loginSlice";
import postReducer from "../features/posts/postSlice";
import userReducer from "../features/userDetails/userDetailsSlice";
import rootSaga from "../saga/rootSaga";
 
const saga = createSagaMiddleware()
const store = configureStore({
    reducer:{
        "auth":authReducer,
        "login":loginReducer,
        "user":userReducer,
        "posts":postReducer

    },
    middleware:[saga]
})
saga.run(rootSaga)

export default store