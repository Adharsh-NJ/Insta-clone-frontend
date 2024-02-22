import { createSlice } from "@reduxjs/toolkit";

const initialState={
    user:{
        _id: null,
        username: null,
        name: null,
        password:null,
        followers: [],
        following: [],
        posts: [],
        comments: [],
    } ,
    allUsers:[{
        _id:null,
        username:null
    }],
    error:{
     status:false,
     message:null
    },
     isLoading:false
 }
const userDetailsSlice = createSlice({
    name:"userDetails",
initialState,
reducers:{
    getUserDetails:(state,action)=>{
    state.isLoading = true
    },
    getUserDetailsSuccess:(state,action)=>{
        state.isLoading=false
        state.user = action.payload
    },
    getUserDetailsFail:(state,action)=>{
        state.isLoading=false
        state.error  = action.payload
    },
    getUsersDetails:(state)=>{
        state.isLoading = true
    },
    getUsersDetailsSuccess:(state,action)=>{
        state.isLoading = false
        state.allUsers = action.payload
    },
    getUsersDetailsFail:(state,action)=>{
        state.isLoading=false
        state.error  = action.payload
    },
}
})
export const{getUserDetails,getUserDetailsSuccess,getUserDetailsFail,getUsersDetails,getUsersDetailsFail,getUsersDetailsSuccess}= userDetailsSlice.actions
export default userDetailsSlice.reducer