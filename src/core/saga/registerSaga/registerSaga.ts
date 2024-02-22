import { call, put, takeLatest } from "redux-saga/effects";
import { getLoginFail, getLoginSuccess } from "../../features/login/loginSlice";
import { register } from "../../services/auth/register/register";

function* workRegister({payload}:any):any{
    try{
   const res = yield call(register,payload)
   if(res.status==200){
    yield put(getLoginSuccess(res.data))
    }
    }catch(e:any){
        console.log(e.message);
        yield put(getLoginFail({error:true,message:e.message}))
     }
}

export default function* registerSaga(){
yield takeLatest("login/getRegisterFetch",workRegister)
}