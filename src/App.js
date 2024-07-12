import React from "react";
import { Route, Routes } from "react-router-dom";



import Home from "./pages/Home";
import Service from "./pages/Services";
import Contact from "./pages/Contact";
import Blog from "./pages/Blog";
import Realisation from "./pages/Realisation";

export default function App() {
  return (
    <div className="App">
      <nav>
        <Routes>
          <Route path="/" element={<Home />}></Route>
          <Route path="/Service" element={<Service />}></Route>
          <Route path="/Contact" element={<Contact />}></Route>
          <Route path="/Blog" element={<Blog />}></Route>
          <Route path="/Realisation" element={<Realisation />}></Route>
        </Routes>
      </nav>
    </div>
  );
}

