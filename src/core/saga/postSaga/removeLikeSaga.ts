import { call, put, takeLatest } from "redux-saga/effects";
import { getPostRequest, removeLikefail, removeLikeSuccess } from "../../features/posts/postSlice";
import { removeLike } from "../../services/posts/removeLike";

function* workAddLike({payload}:any):any{
    try{
    const res = yield call(removeLike,payload)
     if(res.status==200){
        yield put(removeLikeSuccess())
        yield put(getPostRequest())
     }else{
        yield put(removeLikefail({error:true,message:"something went wrong"}))
     }}
     catch(e:any){
        console.log(e.message);
        yield put(removeLikefail({error:true,message:e.message}))
     }
}

function* removeLikeSaga(){
    yield takeLatest('posts/removeLikeRequest',workAddLike)
}
export default removeLikeSaga