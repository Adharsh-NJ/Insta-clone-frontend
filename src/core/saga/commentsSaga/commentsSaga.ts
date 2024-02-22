import { call, put, takeEvery } from "redux-saga/effects";
import { createPostRequestFail, createPostRequestSuccess, getPostRequest } from "../../features/posts/postSlice";
import { addComment } from "../../services/comments/addComment";

function* workCreateComment({payload}:any):any{
    try{
    const res = yield call(addComment,payload)
     if(res.status==200||res.status==201){
        yield put(createPostRequestSuccess(res.data))
        yield put(getPostRequest())
      //   yield put(getUserDetails())
     }else{
        yield put(createPostRequestFail({error:true,message:"something went wrong"}))
     }}
     catch(e:any){
        yield put(createPostRequestFail({error:true,message:e.message}))
     }
}

function* createCommentSaga(){
    yield takeEvery('comments/createCommentRequest',workCreateComment)
}
export default createCommentSaga