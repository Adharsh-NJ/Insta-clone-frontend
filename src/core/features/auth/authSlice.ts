import { createSlice } from "@reduxjs/toolkit";

const initialState={
   user:{
    token:null,
    username: null,
    name: null,
    id: null
   } ,
    isLoading:false
}
const authSlice = createSlice({
    name:"auth",
    initialState,
    reducers:{
         getAuthFetch:(state,action)=>{
            state.isLoading=true
         },
         getAuthSuccess:(state,action)=>{
          state.user =action.payload
            state.isLoading=false
         },
         getAuthFail:(state)=>{
            state.isLoading=false
         }
    }

})
export const {getAuthFetch,getAuthFail,getAuthSuccess} = authSlice.actions
export default authSlice.reducer