import "./App.css";

import React, { useState } from "react";
import { GoogleLogin } from "react-google-login";
import ReactDOM from "react-dom";
import { useEffect } from "react";
import axios from "axios";

import { BrowserRouter, Route, Routes } from "react-router-dom";
import HomePage from "./pages/HomePage/HomePage";
import AddForms from "./pages/AddForms/AddForms";

//const clientId = "926589748534-haun8k580htm3scicreql3a1gsh3f2ta.apps.googleusercontent.com";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <>
          <Route path="/" element={<HomePage />} />
          <Route path="/AddForms" element={<AddForms />} />
        </>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
