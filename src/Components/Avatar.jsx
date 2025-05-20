import { useState } from "react";

const Avatar = () => {
  const [open, setOpen] = useState(false);

  return (
    <div className="relative inline-block text-left">
      {/* Tooltip and Avatar */}
      <div
        className="tooltip tooltip-bottom"
        data-tip="Your Profile"
        onClick={() => setOpen(!open)}
      >
        <div className="avatar avatar-online cursor-pointer">
          <div className="w-12 rounded-full">
            <img src="https://i.pravatar.cc/300" alt="User" />
          </div>
        </div>
      </div>
      {open && (
        <ul className="menu menu-sm dropdown-content mt-2 p-2 shadow backGround rounded-box w-52 absolute right-0 z-50">
          <li>
            <a>Logout</a>
          </li>
        </ul>
      )}
    </div>
  );
};

export default Avatar;
