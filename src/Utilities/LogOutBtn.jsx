import React, { useContext } from "react";
import { errorMessage, successMessage } from "./sweetAlerts";
import { useNavigate } from "react-router";
import AuthContext from "../Context/AuthContext";

const LogOutBtn = () => {
  const { loggedOutUser } = useContext(AuthContext);
  const navigate = useNavigate();
  const handleLogOut = () => {
    loggedOutUser()
      .then(() => {
        successMessage("You have successfully logged out").then(() => {
          navigate("/");
        });
      })
      .catch((error) => {
        const errorText = error.message;
        errorMessage(errorText);
      });
  };
  return (
    <div>
      <button onClick={handleLogOut} className="primaryColor font-bold">
        Log Out
      </button>
    </div>
  );
};

export default LogOutBtn;
