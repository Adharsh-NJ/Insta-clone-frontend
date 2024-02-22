import { createSlice } from "@reduxjs/toolkit";

const initialState={
comment:false,
   error:{
    status:false,
    message:null
   },
    isLoading:false
}
const commentSlice = createSlice({
    name:"comments",
    initialState,
    reducers:{
      createCommentRequest:(state,action)=>{
          state = initialState
            state.isLoading=true
         },
         createCommentSuccess:(state,action)=>{
          state.comment =true
            state.isLoading=false
         },
         createCommentFail:(state,action)=>{
            state = initialState
            state.error = action.payload
            state.isLoading=false
         }
    }
})

export const {createCommentRequest,createCommentSuccess,createCommentFail} = commentSlice.actions
export default commentSlice.reducer