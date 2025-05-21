import React, { useEffect, useState } from "react";

const ActiveGardeners = () => {
  const [activeGardeners, setActiveGardeners] = useState([]);
  useEffect(() => {
    fetch("http://localhost:3000/activeGardeners")
      .then((res) => res.json())
      .then((data) => {
        setActiveGardeners(data);
      });
  }, []);

  console.log(activeGardeners);
  return (
    <div>
      <p>this is all active gardeners</p>
    </div>
  );
};

export default ActiveGardeners;
