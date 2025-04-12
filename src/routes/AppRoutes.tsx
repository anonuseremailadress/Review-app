import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "../pages/Home";
import Review from "../pages/Review";

const AppRoutes = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/review/:documentId" element={<Review />} />
      </Routes>
    </Router>
  );
};

export default AppRoutes;