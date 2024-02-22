import { call, put, takeEvery } from "redux-saga/effects";
import { getUsersDetailsFail, getUsersDetailsSuccess } from "../../features/userDetails/userDetailsSlice";
import { fetchUsers } from "../../services/user/users";

function* workGetUsersFetch():any{
    try{
    const res = yield call(fetchUsers)
     if(res.status==200){
        yield put(getUsersDetailsSuccess(res.data))
     }else{
        yield put(getUsersDetailsFail({error:true,message:"something went wrong"}))
     }}
     catch(e:any){
        console.log(e.message);
        yield put(getUsersDetailsFail({error:true,message:e.message}))
     }
}

function* usersSaga(){
    yield takeEvery('userDetails/getUsersDetails',workGetUsersFetch)
}

export default usersSaga