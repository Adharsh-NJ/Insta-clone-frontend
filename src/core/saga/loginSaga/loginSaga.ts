import {call,put,takeLatest} from "redux-saga/effects"
import { getLoginFail, getLoginSuccess } from "../../features/login/loginSlice";
import { login } from "../../services/auth/login/login"
import { fetchUser } from "../../services/user/user";

function* workGetLoginFetch({payload}:any):any{
    try{
    const res = yield sessionStorage.getItem("userId")?call(fetchUser,payload):call(login,payload)
     if(res.status==200){
        yield put(getLoginSuccess(res.data))
     }else{
        yield put(getLoginFail({error:true,message:"something went wrong"}))
     }}
     catch(e:any){
        yield put(getLoginFail({error:true,message:e.message}))
     }
}

function* loginSaga(){
    yield takeLatest('login/getLoginFetch',workGetLoginFetch)
}
export default loginSaga