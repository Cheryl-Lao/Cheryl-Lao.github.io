import React from "react";
import Preview from "../views/Preview";
import HomeLight from "../views/all-home-version/HomeLight";
import RtlHomeLight from "../views/all-home-version/RtlHomeLight";
import NotFound from "../views/NotFound";
import { Routes, Route } from "react-router-dom";

const AllRoutes = () => {
  return (
    <>
      <Routes>
        <Route path="/" element={<Preview />} />
        <Route path="/home-light" element={<HomeLight />} />
        <Route path="/rtl-home-light" element={<RtlHomeLight />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </>
  );
};

export default AllRoutes;
