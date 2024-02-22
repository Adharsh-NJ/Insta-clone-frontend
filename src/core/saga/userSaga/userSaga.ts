import {call,put,select,takeEvery} from "redux-saga/effects"
import { getUserDetailsFail, getUserDetailsSuccess } from "../../features/userDetails/userDetailsSlice";
import { fetchUser } from "../../services/user/user";

function* workGetUserFetch({payload}:any):any{
    try{
        const id =  payload
    const res = yield id&&call(fetchUser,id)
     if(res.status==200){
        yield put(getUserDetailsSuccess(res.data))
     }else{
        yield put(getUserDetailsFail({error:true,message:"something went wrong"}))
     }}
     catch(e:any){
        console.log(e.message);
        yield put(getUserDetailsFail({error:true,message:e.message}))
     }
}

function* userSaga(){
    yield takeEvery('userDetails/getUserDetails',workGetUserFetch)
}



export default userSaga