import { all } from "redux-saga/effects";

// all Saga
import createCommentSaga from "./commentsSaga/commentsSaga";
import loginSaga from "./loginSaga/loginSaga";
import addLikeSaga from "./postSaga/addLikeSaga";
import createPostSaga from "./postSaga/createPostSaga";
import postSaga from "./postSaga/postSaga";
import removeLikeSaga from "./postSaga/removeLikeSaga";
import registerSaga from "./registerSaga/registerSaga";
import userSaga from "./userSaga/userSaga";
import usersSaga from "./userSaga/usersSaga";

export default function* rootSaga() {
  yield all([
    loginSaga(),
    registerSaga(),
    userSaga(),
    usersSaga(),
    postSaga(),
    createPostSaga(),
    createCommentSaga(),
    addLikeSaga(),
    removeLikeSaga()
  ]);
}