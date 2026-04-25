import React from "react";
import { Outlet } from "react-router-dom";
import MainHeader from "../components/MainHeader";
import MainFooter from "../components/MainFooter";

function MainLayout() {
  return (
    <>
      <MainHeader />
      <div className="container mx-auto lg:px-12 md:px-6 px-3 py-10">
        <Outlet />
      </div>
      <MainFooter />
    </>
  );
}

export default MainLayout;
