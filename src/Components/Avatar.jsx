import { useContext, useState } from "react";
import AuthContext from "../Context/AuthContext";
import { errorMessage, successMessage } from "../Utilities/sweetAlerts";
import { useNavigate } from "react-router";
import defaultPic from "../assets/114-1149878_setting-user-avatar-in-specific-size-without-breaking.png";

const Avatar = () => {
  const [open, setOpen] = useState(false);
  const { loggedOutUser, presentUser } = useContext(AuthContext);
  console.log(presentUser.photoURL);
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
    <div className="relative inline-block text-left">
      {/* Tooltip and Avatar */}
      <div
        className="tooltip tooltip-bottom"
        data-tip={presentUser?.displayName}
        onClick={() => setOpen(!open)}
      >
        <div className="avatar avatar-online cursor-pointer">
          <div className="w-12 rounded-full">
            <img
              src={presentUser ? presentUser.photoURL : defaultPic}
              alt="User"
            />
          </div>
        </div>
      </div>
      {open && (
        <ul className="menu menu-sm dropdown-content mt-2 p-2 shadow backGround rounded-box w-52 absolute right-0 z-50">
          <li>
            <button onClick={handleLogOut} className="primaryColor font-bold">
              Log Out
            </button>
          </li>
        </ul>
      )}
    </div>
  );
};

export default Avatar;
