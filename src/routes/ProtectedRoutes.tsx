import React, { useEffect } from "react";
import { useDispatch } from "react-redux";
import { Navigate } from "react-router-dom";
import { Routes_Name } from "../constants/routesContants/routesConstants";
import { getLoginFetch } from "../core/features/login/loginSlice";
import { getPostRequest } from "../core/features/posts/postSlice";
import { getUsersDetails } from "../core/features/userDetails/userDetailsSlice";

const ProtectedRoutes = (props: any) => {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getUsersDetails());
  }, []);
  if (!sessionStorage.getItem("user")) {
    return <Navigate to={Routes_Name.login} />;
  } else {
    const user = sessionStorage.getItem("userId");
    dispatch(getLoginFetch(user));
    dispatch(getPostRequest());
    return props.children;
  }
};

export default ProtectedRoutes;
