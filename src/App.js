import React, { useEffect, useState } from "react";
import Login from "./components/Login";
import Dashboard from "./components/Dashboard";
import "./App.css";

const code = new URLSearchParams(window.location.search).get("code");

const App = () => {
  return <div>{code ? <Dashboard /> : <Login />}</div>;
};

export default App;
