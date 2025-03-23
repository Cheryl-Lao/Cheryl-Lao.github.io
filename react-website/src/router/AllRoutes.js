/*import React from "react";
import Preview from "../views/Preview";
import HomeLight from "../views/all-home-version/HomeLight";
import RtlHomeLight from "../views/all-home-version/RtlHomeLight";
import NotFound from "../views/NotFound";
import { Routes, Route } from "react-router-dom";
import About from "../components/about/AboutMain";

const AllRoutes = () => {
  return (
    <>
      <Routes>
        <Route path="/" element={<HomeLight />} />
        <Route path="/about" element={<About />} />

        <Route path="/home-light" element={<HomeLight />} />
        <Route path="/rtl-home-light" element={<RtlHomeLight />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </>
  );
};

export default AllRoutes;
*/


import React from "react";
import { Routes, Route } from "react-router-dom";
import Layout from "../views/all-home-version/Layout";
import Home from "../components/Home";
import About from "../components/about/AboutMain";
import ServiceMain from "../components/service/ServiceMain";
import Portfolio from "../components/PortfolioCreative";
import News from "../components/News";
import Contact from "../components/Contact";
import NotFound from "../views/NotFound";

const AllRoutes = () => {
  return (
    <Routes>
      {/* Routes Wrapped in Layout */}
      <Route path="/" element={<Layout />}>
        <Route index element={<Home />} />
        <Route path="about" element={<About />} />
        <Route path="work" element={<ServiceMain />} />
        <Route path="education" element={<Portfolio />} />
        <Route path="projects" element={<Portfolio />} />
        {/*<Route path="news" element={<News />} />*/}
        <Route path="contact" element={<Contact />} />
      </Route>

      {/* 404 Page */}
      <Route path="*" element={<NotFound />} />
    </Routes>
  );
};

export default AllRoutes;