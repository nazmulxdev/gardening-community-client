import { NavLink, Outlet } from "react-router";
import WebLogo from "../Components/WebLogo";
import Avatar from "../Components/Avatar";
import ThemeHandler from "../Utilities/ThemeHandler";
import LogOutBtn from "../Utilities/LogOutBtn";
import { CiLogout } from "react-icons/ci";
import Footer from "../Components/Footer";
const DashBoardLayOut = () => {
  return (
    <div className="drawer md:drawer-open">
      <input id="my-drawer-2" type="checkbox" className="drawer-toggle" />
      <div className="drawer-content flex flex-col ">
        <div className="navbar backGround w-full justify-between md:hidden">
          <div className="md:hidden">
            <label
              htmlFor="my-drawer-2"
              aria-label="open sidebar"
              className="btn btn-square btn-ghost"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                className="inline-block h-6 w-6 stroke-current"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M4 6h16M4 12h16M4 18h16"
                ></path>
              </svg>
            </label>
          </div>
          <div className="mx-2 md:hidden px-2 flex justify-between items-center">
            <Avatar></Avatar>
            <ThemeHandler></ThemeHandler>
          </div>
        </div>
        {/* Page content here */}
        <div className="my-4 md:my-14">
          <Outlet></Outlet>
        </div>
      </div>
      <div className="drawer-side">
        <label
          htmlFor="my-drawer-2"
          aria-label="close sidebar"
          className="drawer-overlay"
        ></label>
        <ul className="menu p-4 w-80 min-h-full flex flex-col justify-between bg-base-200 text-base-content">
          {/* Sidebar content here */}
          <div>
            <li>
              <div>
                <WebLogo></WebLogo>
                <ThemeHandler></ThemeHandler>
              </div>
            </li>
            <hr className="w-full border-t-2 border-[#05a540]" />
            <li>
              <NavLink to="/dashboard" end>
                Dashboard
              </NavLink>
            </li>
            <li>
              <NavLink to="/dashboard/allGardeningTips">
                All Gardening Tips
              </NavLink>
            </li>
            <li>
              <NavLink to="/dashboard/shareGardeningTips">
                Share Gardening Tips
              </NavLink>
            </li>
            <li>
              <NavLink to="/dashboard/myGardeningTips">My Shared Tips</NavLink>
            </li>
          </div>{" "}
          <li className="mb-4">
            <hr className="w-full border-t-2 border-[#05a540]" />
            <div>
              <CiLogout className="primaryColor"></CiLogout>
              <LogOutBtn></LogOutBtn>
            </div>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default DashBoardLayOut;
