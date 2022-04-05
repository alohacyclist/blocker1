import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import reportWebVitals from "./reportWebVitals";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Home, Profile, Login, Signup, CoinDetail } from "./routes";

ReactDOM.render(
  <React.StrictMode>

    <BrowserRouter>
      <Routes>
        <Route path="/*" element={<Home />} />
        <Route path="/:id/coin" element={<CoinDetail />} />
        <Route path="/profile" element={<Profile />} />
        <Route path="/signup" element={<Signup />} />
        <Route path="/login" element={<Login />} />
      </Routes>
    </BrowserRouter>
  </React.StrictMode>,
  document.getElementById("root")
);

reportWebVitals();
