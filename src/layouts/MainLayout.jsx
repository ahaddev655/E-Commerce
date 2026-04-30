import React from "react";
import { Outlet } from "react-router-dom";
import MainHeader from "../components/MainHeader";
import MainFooter from "../components/MainFooter";

// Destructure props correctly using { }
function MainLayout({ search, setSearch }) {
  return (
    <>
      <MainHeader setSearch={setSearch} search={search} />
      <div className="max-w-7xl mx-auto px-4 md:px-10">
        {/* Now search and setSearch are valid variables */}
        <Outlet context={{ search, setSearch }} />
      </div>
      <MainFooter />
    </>
  );
}

export default MainLayout;
