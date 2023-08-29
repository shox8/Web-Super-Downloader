import React from "react";
import { Route, Routes } from "react-router-dom";
import Web from "./web";
import Instagram from "./instagram";
import Youtube from "./youtube";
import Tiktok from "./tiktok";
import Facebook from "./facebook";

function App() {
  return (
    <Routes>
      <Route path="/" element={<Web />} />
      <Route path="/instagram" element={<Instagram />} />
      <Route path="/youtube" element={<Youtube />} />
      <Route path="/tiktok" element={<Tiktok />} />
      <Route path="/facebook" element={<Facebook />} />
    </Routes>
  );
}

export default App;
