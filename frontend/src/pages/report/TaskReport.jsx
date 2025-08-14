import axios from "axios";
import React, { useEffect, useState } from "react";
import api from "../../utils/api";

const TaskReport = () => {
  const BASEURL = import.meta.env.VITE_APP_BASEURL;

  const fetchTaskReport = async () => {
    const response = await api.get("/task/fetch_all");

    console.log("response", response);
  };

  useEffect(() => {
    fetchTaskReport();
  }, []);

  return <div>TaskReport</div>;
};

export default TaskReport;
