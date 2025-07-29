import React, { useState } from "react";
import { Link, useNavigate } from "react-router";
import authService from "../appwrite/auth";
import { Button, Input } from "./index";
import { useDispatch } from "react-redux";
import { login as storeLogin } from "../features/authSlice";
import { useForm } from "react-hook-form";

const Login = () => {
  //   const navigate = useNavigate();
  const dispatch = useDispatch();

  const { register, handleSubmit } = useForm();
  const [error, setError] = useState("");

  const login = async (data) => {
    setError("");

    try {
      const session = await authService.userLogin(data);

      if (session) {
        const userData = await authService.getCurrentUser();

        // We are updating the state in authSlice login.
        if (userData) dispatch(storeLogin(userData));
        // navigate("/");
      }
    } catch (error) {
      setError(error.message);
      throw new Error(`Error in Login.jsx:: in login func :: ${error.message}`);
    }
  };

  return (
    <div>
      <div>
        <h2 className="text-center text-2xl font-bold leading-tight">
          Sign in to your account
        </h2>
        <p className="mt-2 text-center text-base text-black/60">
          Don&apos;t have any account?&nbsp;
          {/* <Link
            to="/signup"
            className="font-medium text-primary transition-all duration-200 hover:underline"
          >
            Sign Up
          </Link> */}
        </p>
        {error && <p className="text-red-600 mt-8 text-center">{error}</p>}
        <form onSubmit={handleSubmit(login)}>
          <div>
            <Input
              label="Email: "
              placeholder="Enter your email"
              type="email"
              {...register("email", {
                required: true,
                validate: {
                  checkPattern: (value) =>
                    /^\w+([.-]?\w+)*@\w+([.-]?\w+)*(\.\w{2,3})+$/.test(value) ||
                    "Email address must be a valid address",
                },
              })}
            />

            <Input
              label="Password: "
              type="password"
              {...register("password", {
                required: true,
              })}
            />

            <Button type="submit" className="w-full">
              Sign in
            </Button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Login;
