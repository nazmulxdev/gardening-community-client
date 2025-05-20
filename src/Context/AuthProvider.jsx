import React from "react";
import AuthContext from "./AuthContext";

const AuthProvider = ({ children }) => {
  const authData = {
    name: "nazmul",
    email: "nazmulxdev@gmail.com",
  };
  return <AuthContext value={authData}>{children}</AuthContext>;
};

export default AuthProvider;
