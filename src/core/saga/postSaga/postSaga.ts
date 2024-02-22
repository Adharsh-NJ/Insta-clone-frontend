import {call,put,takeLatest} from "redux-saga/effects"
import { getPostFail, getPostSuccess } from "../../features/posts/postSlice";
import { getPosts } from "../../services/posts/getPosts";

function* workGetPostFetch():any{
    try{
    const res = yield call(getPosts)
     if(res.status==200){
        yield put(getPostSuccess(res.data))
     }else{
        yield put(getPostFail({error:true,message:"something went wrong"}))
     }}
     catch(e:any){
        console.log(e.message);
        yield put(getPostFail({error:true,message:e.message}))
     }
}

function* postSaga(){
    yield takeLatest('posts/getPostRequest',workGetPostFetch)
}
export default postSaga