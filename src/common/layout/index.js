import React from "react";
import Navbar from "../navbar";

function Layout({ children }) {
  return (
    <div className="grid grid-rows-[60px,1fr]">
      <Navbar />
      <div className="h-full p-4">{children}</div>
    </div>
  );
}

export default Layout;
