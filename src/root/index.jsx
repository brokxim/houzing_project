import React from "react";
import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import { HomePage } from "../pages/Home";
import { PropertiesPage } from "../pages/Properties";

const Root = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/home" element={<HomePage />} />
        <Route path="/properties" element={<PropertiesPage />} />
        <Route path="/" element={<Navigate to={"home"} />} />
        <Route path="*" element={<h1>404 NOT FOUND</h1>} />
      </Routes>
    </BrowserRouter>
  );
};

export default Root;
