import React, { useState } from "react";
import { Link, useNavigate } from 'react-router-dom';

const Register = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
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
    } else if (password.length < 6) {
      validationErrors.password = "Password should be at least 6 characters.";
    }

    if (password !== confirmPassword) {
      validationErrors.confirmPassword = "Passwords do not match.";
    }

    setErrors(validationErrors);
    return Object.keys(validationErrors).length === 0;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (validate()) {
      alert("Registration Successful");
      navigate('/login');
    }
  };

  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gradient-to-r from-blue-100 to-white p-4">
      <div className="w-full max-w-sm p-8 bg-white shadow-lg rounded-lg border border-gray-200">
        <div className="flex flex-col items-center mb-6">
          <h1 className="text-3xl font-bold text-gray-800">Sign Up</h1>
          <p className="text-sm text-gray-500">Create a new account</p>
        </div>
        <form onSubmit={handleSubmit} className="space-y-4">
          <div className="form-field">
            <label className="form-label text-gray-700">Email address</label>
            <input
              type="email"
              className="input text-black max-w-full border border-gray-300 rounded-md p-2 bg-blue-50 focus:outline-none focus:ring-2 focus:ring-blue-400"
              placeholder="Type here"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
            {errors.email && (
              <p className="text-red-500 text-xs mt-1">{errors.email}</p>
            )}
          </div>

          <div className="form-field">
            <label className="form-label text-gray-700">Password</label>
            <input
              type="password"
              className="input text-black max-w-full border border-gray-300 rounded-md p-2 bg-blue-50 focus:outline-none focus:ring-2 focus:ring-blue-400"
              placeholder="Type here"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />
            {errors.password && (
              <p className="text-red-500 text-xs mt-1">{errors.password}</p>
            )}
          </div>

          <div className="form-field">
            <label className="form-label  text-gray-700">Confirm Password</label>
            <input
              type="password"
              className="input max-w-full text-black border border-gray-300 rounded-md p-2 bg-blue-50 focus:outline-none focus:ring-2 focus:ring-blue-400"
              placeholder="Confirm your password"
              value={confirmPassword}
              onChange={(e) => setConfirmPassword(e.target.value)}
            />
            {errors.confirmPassword && (
              <p className="text-red-500 text-xs mt-1">
                {errors.confirmPassword}
              </p>
            )}
          </div>

          <div className="form-field pt-5">
            <button
              type="submit"
              className="btn btn-primary w-full bg-blue-500 text-white rounded-md p-2 hover:bg-blue-600 transition duration-300 ease-in-out"
            >
              Sign Up
            </button>
          </div>

          <div className="form-field">
            <p className="text-center text-sm text-gray-500">
              Already have an account?{" "}
              <Link to="/login" className="text-blue-500 underline">
                Sign in
              </Link>
            </p>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Register;
