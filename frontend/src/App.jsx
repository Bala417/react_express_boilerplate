import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import axios from "axios";
import { Routes, Route } from "react-router";
import Login from "./pages/Login";
import Dashboard from "./pages/Dashboard";
import Layout from "./components/Layout";
import TaskForm from "./pages/entry/TaskForm";

function App() {
  const BASEURL = import.meta.env.VITE_APP_BASEURL;

  return (
    <>
      <Routes>
        <Route index path="/" element={<Login />} />
        <Route path="/" element={<Layout />}>
          <Route path="home" element={<Dashboard />} />
          <Route path="task" element={<TaskForm />} />
        </Route>
      </Routes>
    </>
  );
}

export default App;
