import React from "react";
import { Button, TextField } from "@mui/material";
import { useForm } from "react-hook-form";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import api from "../utils/api";

const Login = () => {
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm({
    defaultValues: {
      username: "",
      password: "",
    },
  });
  const BASEURL = import.meta.env.VITE_APP_BASEURL;
  const navigate = useNavigate();
  const onSubmit = async (data) => {
    console.log("data", data);
    try {
      const response = await api.post(`/auth/login`, data);

      navigate("home");
    } catch (error) {
      console.log(error);
    }
  };
  return (
    <div className="flex items-center align-middle h-screen justify-center">
      <form
        onSubmit={handleSubmit(onSubmit)}
        className="flex flex-col w-1/5 gap-5 "
      >
        <TextField
          id="username"
          label="username"
          variant="outlined"
          size="small"
          {...register("username", { required: "username is requried" })}
        />
        {errors.username && (
          <p className="text-red-600">{errors.username.message}</p>
        )}

        <TextField
          id="password"
          label="password"
          variant="outlined"
          type="password"
          size="small"
          {...register("password", { required: "password is requried" })}
        />
        {errors.password && (
          <p className="text-red-600">{errors.password.message}</p>
        )}
        <Button variant="contained" type="submit">
          Login
        </Button>
      </form>
    </div>
  );
};

export default Login;
