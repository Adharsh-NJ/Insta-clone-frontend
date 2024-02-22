import { createSlice } from "@reduxjs/toolkit";

const initialState={
   user:{
    token:null,
    username: null,
    name: null,
    userId: null
   } ,
   error:{
    status:false,
    message:null
   },
    isLoading:false
}
const loginSlice = createSlice({
    name:"login",
    initialState,
    reducers:{
         getLoginFetch:(state,action)=>{
            state.isLoading=true
         },
         getLoginSuccess:(state,action)=>{
          state.user =action.payload
            state.isLoading=false
         },
         getLoginFail:(state,action)=>{
            state = initialState
            state.error = action.payload
            state.isLoading=false
         },
         getRegisterFetch:(state,action)=>{
            state.isLoading=true
         }
    }
})

export const {getLoginFetch,getLoginSuccess,getLoginFail,getRegisterFetch} = loginSlice.actions
export default loginSlice.reducer