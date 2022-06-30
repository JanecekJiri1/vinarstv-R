import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import React, { useState } from "react";

import Navigation from "./components/Navigation";
import Main from "./components/Main";
import Wine from "./components/Wine";
import About from "./components/About";
import Contact from "./components/Contact";

function App() {
  const [show, setShow] = useState(true);
  return (
    <>
      <BrowserRouter>
        <div className="App">
          <div>
            <Navigation />
            <Routes>
              <Route path="/" element={<Main />} />
              <Route path="/Wine" element={<Wine />} />
              <Route path="/About" element={<About />} />
              <Route path="/Contact" element={<Contact />} />
            </Routes>
          </div>
        </div>
      </BrowserRouter>
    </>
  );
}

export default App;
