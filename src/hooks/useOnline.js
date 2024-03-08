import React, { useState } from "react";

const useOnline = () => {
  const [online, setOnline] = useState(false);
  console.log("befor", online);

  window.addEventListener("load", () => {
    setOnline(navigator.onLine);
  });

  window.addEventListener("online", () => {
    setOnline(true);
  });
  window.addEventListener("offline", () => {
    setOnline(false);
  });

  console.log("after", online);

  return online;
};

export default useOnline;
