import { call, put, takeLatest } from "redux-saga/effects";
import { getPostRequest, likePostfail, likePostSuccess } from "../../features/posts/postSlice";
import { addLike } from "../../services/posts/addLike";

function* workAddLike({payload}:any):any{
    try{
    const res = yield call(addLike,payload)
     if(res.status==201){
        yield put(likePostSuccess())
        yield put(getPostRequest())
     }else{
        yield put(likePostfail({error:true,message:"something went wrong"}))
     }}
     catch(e:any){
        console.log(e.message);
        yield put(likePostfail({error:true,message:e.message}))
     }
}

function* addLikeSaga(){
    yield takeLatest('posts/likePostRequest',workAddLike)
}
export default addLikeSaga