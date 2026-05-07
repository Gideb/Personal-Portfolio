import React from "react";
import { Routes, Route } from "react-router-dom";
import MainLayout from "../components/layout/MainLayout";

import Home from "../pages/Home";
import About from "../pages/About";
import Projects from "../pages/Projects";
import Works from "../pages/Works";
import ProjectDetails from "../pages/ProjectDetails";
import Contact from "../pages/Contact"

const AppRoutes = () => {
  return (
    <Routes>
      <Route element={<MainLayout />}>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/projects" element={<Projects />} />
        <Route path="/works" element={<Works />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/works/:slug" element={<ProjectDetails />} />
      </Route>
    </Routes>
  );
};

export default AppRoutes;
