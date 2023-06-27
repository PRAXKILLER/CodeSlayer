import React from "react";
import Navbar from "../components/Headers/Navbar/Navbar";

function HomeLayout({ children }) {
  return (
    <div
      className="w-full flex flex-col min-h-screen"
      style={{ fontFamily: "cursive" }}
    >
      <Navbar />
      {children}
    </div>
  );
}

export default HomeLayout;
