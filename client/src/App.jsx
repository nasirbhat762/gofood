import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Features from "./screens/Features";
import Home from "./screens/Home";
import Signup from "./screens/Signup";
import Login from "./screens/Login";

export default function App() {
  return (
    <Router>
      <Routes>
        <Route exact path="/" element={<Home />} />
        <Route exact path="/features" element={<Features />} />
        <Route exact path="/signup" element={<Signup />} />
        <Route exact path="/login" element={<Login />} />
      </Routes>
    </Router>
  );
}
