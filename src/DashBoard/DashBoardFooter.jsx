import React from "react";

const DashBoardFooter = () => {
  return (
    <footer className="footer sm:footer-horizontal footer-center bg-base-300 text-base-content p-4">
      <aside>
        <p>
          Copyright © {new Date().getFullYear()} - All right reserved by{" "}
          <span className="primaryColor">Green</span>Circle
        </p>
      </aside>
    </footer>
  );
};

export default DashBoardFooter;
