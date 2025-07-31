import { useState } from "react";
import { Link, useNavigate } from "react-router";
import authService from "../appwrite/auth";
import { Button, Input } from "./index";
import { useDispatch } from "react-redux";
import { login as storeLogin } from "../features/authSlice";
import { useForm } from "react-hook-form";

const Register = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const { register, handleSubmit } = useForm();
  const [error, setError] = useState("");

  const createAcc = async (data) => {
    setError("");

    try {
      const session = await authService.createAccount(data);

      if (session) {
        const userData = await authService.getCurrentUser();

        // We are updating the state in authSlice login.
        if (userData) dispatch(storeLogin({ userData }));
        navigate("/dashboard");
      }
    } catch (error) {
      setError(error.message);
      throw new Error(
        `Error in Register.jsx:: in register func :: ${error.message}`
      );
    }
  };

  return (
    <div>
      <div>
        <h2 className="text-center text-2xl font-bold leading-tight">
          Register your account
        </h2>
        <p className="mt-2 text-center text-base text-black/60">
          Already have an account?&nbsp;
          <Link
            to="/login"
            className="font-medium text-primary transition-all duration-200 hover:underline"
          >
            Login
          </Link>
        </p>
        {error && <p className="text-red-600 mt-8 text-center">{error}</p>}
        <form onSubmit={handleSubmit(createAcc)}>
          <div>
            <Input
              label="Username: "
              placeholder="Enter your username or name"
              type="text"
              {...register("username", {
                required: true,
              })}
            />

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
              Create Account
            </Button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Register;
