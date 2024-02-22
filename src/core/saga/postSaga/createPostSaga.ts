import { call, put, takeEvery} from "redux-saga/effects";
import { createPostRequestFail, createPostRequestSuccess} from "../../features/posts/postSlice";
import { createPost } from "../../services/posts/createPost";

function* workCreatePost({payload}:any):any{
    try{
    const res = yield call(createPost,payload)
     if(res.status==201){
        yield put(createPostRequestSuccess(res.data))
     }else{
        yield put(createPostRequestFail({error:true,message:"something went wrong"}))
     }}
     catch(e:any){
        yield put(createPostRequestFail({error:true,message:e.message}))
     }
}

function* createPostSaga(){
    yield takeEvery('posts/createPostRequest',workCreatePost)
}
export default createPostSaga