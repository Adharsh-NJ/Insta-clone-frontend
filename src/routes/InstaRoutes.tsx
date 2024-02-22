import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import { Routes_Name } from "../constants/routesContants/routesConstants";
import AuthPage from "../containers/authPage/AuthPage";
import HomePage from "../containers/homePage/HomePage";
import ProfilePage from "../containers/profilePage/ProfilePage";
import ProtectedRoutes from "./ProtectedRoutes";

const InstaRoutes = () => {
  return (
    <Router>
      <Routes>
        <Route path={Routes_Name.login} element={<AuthPage />} />
        <Route path={Routes_Name.profile} element={
        <ProtectedRoutes>
          <ProfilePage />
        </ProtectedRoutes>
        } />
        <Route path={Routes_Name.home} element={
        <ProtectedRoutes>
          <HomePage />
        </ProtectedRoutes>
        } />
        <Route path="*" element={<AuthPage />} />
      </Routes>
    </Router>
  );
};

export default InstaRoutes;
