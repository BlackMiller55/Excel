import { useState } from "react";
import "antd/dist/reset.css";
import "./App.css";
import { Home } from "./views/Home";
import { Login } from "./views/LogIn";
import { ErrorPage } from "./views/ErrorPage";
// import { Pacients } from "./views/Pacients";
import { Routes, Route } from "react-router-dom";
import useAuth from "./Hooks/useAuth";
import { Layout } from "./views/Layout";
import { AuthCheck } from "./Helpers/AuthCheck";

import { Credentials } from "./Helpers/Credentials";

function App() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="login" element={<Login />} />
      {/* <Route path="pacients" element={<Pacients />} /> */}
    </Routes>
  );
}

export default App;
