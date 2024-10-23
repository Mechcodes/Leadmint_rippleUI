import React from "react";
import { Link } from "react-router-dom";
import { chartData } from "../utils/ChartData";
import RegistrationReferralsChart from "../utils/RegistrationReferralsChart";

const Home = () => {
  return (
    <div className="flex flex-row min-h-screen bg-gray-50">

      
      <div className="w-64 h-auto bg-gray-200 border-r border-gray-200 p-5 flex flex-col justify-between">
        <div className="flex flex-col items-center">
          <h1 className="font-bold text-xl text-gray-700 mb-6">Appzest</h1>
          <ul className="space-y-4">
            <li>
              <Link
                to=""
                className="flex items-center text-gray-600 hover:bg-gray-100 p-2 rounded-lg transition duration-300"
              >
                <span className="ml-2 flex">
                  <img
                    className="w-6 mr-3"
                    src="https://img.icons8.com/?size=100&id=wdfmkgweCGDk&format=png&color=000000"
                    alt="Logo"
                  />
                  Analytics
                </span>
              </Link>
            </li>
            <li>
              <Link
                to=""
                className="flex items-center text-gray-600 hover:bg-gray-100 p-2 rounded-lg transition duration-300"
              >
                <span className="ml-2 flex">
                  <img
                    className="w-6 mr-3"
                    src="https://img.icons8.com/?size=100&id=22118&format=png&color=000000"
                    alt="Logo"
                  />
                  Users
                </span>
              </Link>
            </li>
            <li>
              <Link
                to=""
                className="flex items-center text-gray-600 hover:bg-gray-100 p-2 rounded-lg transition duration-300"
              >
                <span className="ml-2 flex">
                  <img
                    className="w-6 mr-3"
                    src="https://img.icons8.com/?size=100&id=11668&format=png&color=000000"
                    alt="Logo"
                  />
                  Notifications
                </span>
              </Link>
            </li>
            <li>
              <Link
                to=""
                className="flex items-center text-gray-600 hover:bg-gray-100 p-2 rounded-lg transition duration-300"
              >
                <span className="ml-2 flex">
                  <img
                    className="w-6 mr-3"
                    src="https://img.icons8.com/?size=100&id=22128&format=png&color=000000"
                    alt="Logo"
                  />
                  Transactions
                </span>
              </Link>
            </li>
          </ul>
        </div>


        <div className="flex flex-col items-center mt-6">
          <Link to="/login">
            <button class="btn btn-primary w-full mb-2 bg-blue-500 text-white px-4 py-2 rounded-lg hover:bg-blue-800 transition duration-300 ease-in-out">Sign In</button>
          </Link>
          <Link to="/register">
            <button className="btn btn-secondary w-full bg-purple-500 text-white px-4 py-2 rounded-lg hover:bg-purple-800 transition duration-300 ease-in-out ">Sign Up</button>
          </Link>
        </div>

        <div className="flex items-center justify-between w-full pt-4 border-t border-gray-600">
          <div className="avatar avatar-ring avatar-md">
            <div className="dropdown-container">
              <div className="dropdown">
                <label
                  className="btn btn-ghost flex cursor-pointer px-0"
                  tabIndex="0"
                >
                  <img
                    src="https://i.pravatar.cc/150?u=a042581f4e29026024d"
                    alt="avatar"
                    className="rounded-full"
                  />
                </label>
              </div>
            </div>
          </div>
          <span className="mr-5 text-lg font-bold text-black flex">
            Rajat Bora
          </span>
        </div>
      </div>

      <div className="flex-1 p-3  ">
        <h2 className="text-xl font-bold text-gray-700 mb-4">Analytics</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-5 ">

        <div class="card bg-white p-6 border border-gray-200 rounded-lg shadow-lg hover:shadow-xl transition-shadow duration-300 ease-in-out cursor-pointer">
        <h3 className="font-bold text-gray-600">Users</h3>
        <p className="text-2xl font-semibold text-green-600">140</p>
          </div>


          <div class="card bg-white p-6 border border-gray-200 rounded-lg shadow-lg hover:shadow-xl transition-shadow duration-300 ease-in-out cursor-pointer">
          <h3 className="font-bold text-gray-600">Referral Users</h3>
          <p className="text-2xl font-semibold text-blue-600">64</p>
          </div>


          <div class="card bg-white p-6 border border-gray-200 rounded-lg shadow-lg hover:shadow-xl transition-shadow duration-300 ease-in-out cursor-pointer">
          <h3 className="font-bold text-gray-600">This Week Users</h3>
            <p className="text-2xl font-semibold text-gray-700">679</p>
          </div>


          <div class="card bg-white p-6 border border-gray-200 rounded-lg shadow-lg hover:shadow-xl transition-shadow duration-300 ease-in-out cursor-pointer">
          <h3 className="font-bold text-gray-600">This Month Users</h3>
            <p className="text-2xl font-semibold text-gray-700">22,727</p>
          </div>

          <div class="card bg-white p-6 border border-gray-200 rounded-lg shadow-lg hover:shadow-xl transition-shadow duration-300 ease-in-out cursor-pointer">
          <h3 className="font-bold text-gray-600">Today's Organic Users</h3>
            <p className="text-2xl font-semibold text-green-600">76</p>
          </div>


          <div class="card bg-white p-6 border border-gray-200 rounded-lg shadow-lg hover:shadow-xl transition-shadow duration-300 ease-in-out cursor-pointer">
          <h3 className="font-bold  text-gray-600">Last Month Users</h3>
          <p className="text-2xl font-semibold text-gray-700">71,291</p>
          </div>
        </div>

        <div className="mb-5">
          <button class="btn btn-secondary bg-blue-500 text-white px-4 py-2 rounded-lg hover:bg-blue-800 transition duration-300 ease-in-out">
            Select Date Range
          </button>
        </div>

        <h2 className="text-2xl font-bold text-gray-700 mb-4">
          Last 7 Days: Registrations vs Referrals
        </h2>
        <div className="bg-white p-4 border border-gray-200 rounded-lg shadow-lg w-2/4 m-auto ">
          <RegistrationReferralsChart data={chartData} />
        </div>
      </div>
    </div>
  );
};

export default Home;
