import { createSlice } from "@reduxjs/toolkit";

const initialState={
    post:{
        _id: null,
        image: [],
        content: null,
        likes: [],
        user:null,
        comments: [],
    } ,
    error:{
     status:false,
     message:null
    },
     isLoading:false,
     createPostIsloading:true
 }
const postsSlice = createSlice({
    name:"posts",
initialState,
reducers:{
    getPostRequest:(state)=>{
    state.isLoading = true
    },
    getPostSuccess:(state,action)=>{
        state.isLoading=false
        state.post = action.payload
    },
    getPostFail:(state,action)=>{
        state.isLoading=false
        state.error  = action.payload
    },
    createPostRequest:(state,action)=>{
        state.isLoading = true
        state.createPostIsloading=true
    },
    createPostRequestSuccess:(state,action)=>{
        state.isLoading=false
        state.createPostIsloading=false
    },
    createPostRequestFail:(state,action)=>{
        state.isLoading=false
        state.error  = action.payload
    },
    likePostRequest:(state,action)=>{
        state.isLoading=true
    },
    likePostSuccess:(state)=>{
        state.isLoading = false
    },
    likePostfail:(state,action)=>{
        state.isLoading=false
        state.error  = action.payload
    },
    removeLikeRequest:(state,action)=>{
        state.isLoading=true
    },
    removeLikeSuccess:(state)=>{
        state.isLoading = false
    },
    removeLikefail:(state,action)=>{
        state.isLoading=false
        state.error  = action.payload
    }
}
})
export const{removeLikeRequest,removeLikeSuccess,removeLikefail,getPostRequest,getPostSuccess,getPostFail,createPostRequest,createPostRequestSuccess,createPostRequestFail,likePostRequest,likePostSuccess,likePostfail}= postsSlice.actions
export default postsSlice.reducer