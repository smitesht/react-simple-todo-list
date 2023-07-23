import React from "react";
import { Outlet } from "react-router-dom";
import Navbar from "../components/navbar/Navbar";

const HomeLayout = () => {
  return (
    <div>
      <Navbar />
      <main className="main-container">
        <Outlet />
      </main>
    </div>
  );
};

export default HomeLayout;
