import React from "react";

const useBase = () => {
  const baseUrl = import.meta.env.VITE_BASE_URL;
  return baseUrl;
};

export default useBase;
