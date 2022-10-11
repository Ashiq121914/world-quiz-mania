import React from "react";
import { Outlet } from "react-router-dom";
import NavBars from "../components/NavBars/NavBars";

const Main = () => {
  return (
    <div>
      <NavBars></NavBars>
      <Outlet></Outlet>
    </div>
  );
};

export default Main;
