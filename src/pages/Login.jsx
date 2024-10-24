import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [rememberMe, setRememberMe] = useState(false);
  const [errors, setErrors] = useState({});
  const navigate = useNavigate(); 

  const validate = () => {
    let validationErrors = {};
    const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

    if (!email) {
      validationErrors.email = "Email is required.";
    } else if (!emailPattern.test(email)) {
      validationErrors.email = "Please enter a valid email address.";
    }

    if (!password) {
      validationErrors.password = "Password is required.";
    }

    setErrors(validationErrors);
    return Object.keys(validationErrors).length === 0;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (validate()) {
      navigate('/home');
      alert("Login Successful");

    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-r from-blue-200 to-white flex items-center justify-center">
      <div className="mx-auto flex w-full max-w-sm flex-col gap-6">
        <div className="flex flex-col items-center">
          <h1 className="text-3xl font-bold text-gray-800">Sign In</h1>
          <p className="text-md font-semibold mt-5 text-gray-600">
            Sign in to access your account
          </p>
        </div>
        <form
          onSubmit={handleSubmit}
          className="form-group space-y-4 bg-white p-6 rounded-lg shadow-lg"
        >
          <div className="form-field">
            <label className="form-label text-md font-semibold text-gray-700">
              Email address
            </label>
            <input
              type="email"
              className="input max-w-full border border-gray-300 rounded-md p-2 focus:outline-none focus:ring-2 focus:ring-blue-400 bg-gray-50 text-black" 
              placeholder="abcd@xyz.com"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
            {errors.email && (
              <p className="text-red-500 text-xs mt-1">{errors.email}</p>
            )}
          </div>

          <div className="form-field">
            <label className="form-label text-md font-semibold text-gray-700">
              Password
            </label>
            <input
              type="password"
              className="input max-w-full border border-gray-300 rounded-md p-2 focus:outline-none focus:ring-2 focus:ring-blue-400 text-black bg-gray-50"
              placeholder="Type here"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />
            {errors.password && (
              <p className="text-red-500 text-xs mt-1">{errors.password}</p>
            )}
          </div>

          <div className="form-field flex justify-between items-center">
            <div className="flex items-center gap-2">
              <input
                type="checkbox"
                className="checkbox"
                checked={rememberMe}
                onChange={() => setRememberMe(!rememberMe)}
              />
              <span className="text-gray-700 text-md font-semibold">
                Remember Me
              </span>
            </div>
            <button
              type="button"
              className="text-blue-500 text-md font-semibold text-sm"
            >
              Forgot your password?
            </button>
          </div>

          <div className="form-field pt-5">
            <button
              type="submit"
              className="btn btn-primary w-full bg-blue-500 text-white rounded-md p-2 hover:bg-blue-600 transition duration-300 ease-in-out"
            >
              Sign in
            </button>
          </div>

          <div className="form-field">
            <p className="text-center text-sm text-gray-700">
              Don't have an account?{" "}
              <Link to="/register">
                <button type="button" className="text-blue-500 underline">
                  Sign up
                </button>
              </Link>
            </p>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Login;
