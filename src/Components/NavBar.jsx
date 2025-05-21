import React, { useContext } from "react";
import ThemeHandler from "../Utilities/ThemeHandler";
import { NavLink, useLocation } from "react-router";
import webLogo from "../assets/—Pngtree—green sprout leaf logo design_7431531.png";
import Avatar from "./Avatar";
import AuthContext from "../Context/AuthContext";

const NavBar = () => {
  const { presentUser } = useContext(AuthContext);
  const location = useLocation();
  const privateLinks = (
    <>
      <li>
        <NavLink to="/shareGardenTips">ShareGardenTips</NavLink>
      </li>
      <li>
        <NavLink to="/myTips">MyTips</NavLink>
      </li>
    </>
  );
  const links = (
    <>
      <li>
        <NavLink to="/">Home</NavLink>
      </li>
      <li>
        <NavLink to="/exploreGardeners">ExploreGardeners</NavLink>
      </li>
      <li>
        <NavLink to="/browseTips">BrowseTips</NavLink>
      </li>
      {presentUser ? privateLinks : ""}
    </>
  );
  const loginsButton = (
    <div className="flex space-x-2">
      <NavLink state={location.state} to="/login" className="btn my-btn">
        Login
      </NavLink>
      <NavLink state={location.state} to="/register" className="btn my-btn">
        Register
      </NavLink>
    </div>
  );
  return (
    <div className="backGround shadow-sm">
      <div className="navbar max-w-screen-2xl mx-auto">
        <div className="navbar-start">
          <div className="dropdown">
            <div tabIndex={0} role="button" className="btn btn-ghost md:hidden">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-5 w-5"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                {" "}
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M4 6h16M4 12h8m-8 6h16"
                />{" "}
              </svg>
            </div>
            <ul
              tabIndex={0}
              className="menu menu-sm dropdown-content backGround rounded-box z-1 mt-3 w-52 p-2 shadow"
            >
              {links}
            </ul>
          </div>
          <div className="flex justify-center items-center">
            <img className="w-16 lg:w-20" src={webLogo} alt="webLogo" />
            <p className="font-bold hidden md:block">
              <span className="text-green-500">Green</span>Circle
            </p>
          </div>
        </div>
        <div className="navbar-center hidden md:flex">
          <ul className="menu menu-horizontal px-1 font-bold">{links}</ul>
        </div>
        <div className="navbar-end space-x-2">
          {presentUser ? <Avatar></Avatar> : loginsButton}

          <ThemeHandler></ThemeHandler>
        </div>
      </div>
    </div>
  );
};

export default NavBar;
