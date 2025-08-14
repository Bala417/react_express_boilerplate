import React, { useEffect, useState } from "react";
import Header from "./Header";
import Navbar from "./Navbar";
import { Outlet } from "react-router-dom";
import api from "../utils/api";
import Loading from "../utils/Loading";

const Layout = () => {
  const [isLoading, setIsLoading] = useState(false);
  const [approved, setApproved] = useState(false);

  const verifyAuth = async () => {
    try {
      setIsLoading(true);
      const response = await api.get(`/auth/verify`);
      console.log(response.data);
      if (response.status === 200) {
        setApproved(true);
      }
      setIsLoading(false);
    } catch (error) {
      setIsLoading(false);
      console.log(error);
    }
  };
  useEffect(() => {
    verifyAuth();
  }, []);

  if (isLoading) {
    return <Loading />;
  }

  if (approved)
    return (
      <div>
        <Header />
        <Navbar />
        <Outlet />
      </div>
    );
};

export default Layout;
