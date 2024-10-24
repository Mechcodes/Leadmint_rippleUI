import React, { useState } from "react";
import { Link } from "react-router-dom";

const Sidebar = () => {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);

  const toggleSidebar = () => {
    setIsSidebarOpen(!isSidebarOpen);
  };

  return (
    <>

      <div className="sm:block md:hidden p-4 z-50">
        <button
          onClick={toggleSidebar}
          className="text-gray-700 focus:outline-none"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-8 w-8"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M4 6h16M4 12h16m-7 6h7"
            />
          </svg>
        </button>
      </div>


      {isSidebarOpen && (
        <div
          className="fixed h-screen inset-0 bg-gray-200 bg-opacity-75 z-40"
          onClick={toggleSidebar}
        >
          <div
            className="w-64 h-screen bg-gray-200 border-r border-gray-200 p-5 flex flex-col justify-between transition-all duration-300"
            onClick={(e) => e.stopPropagation()}
          >
            <div className="flex flex-col items-center">
              <Link onClick={toggleSidebar} to="/home">
                <h1 className=" cursor-pointer font-bold text-xl text-gray-700 mb-6">
                  Appzest

                </h1>
              </Link>

              <ul className="space-y-4">
                <li>
                  <Link
                    to="/analytics"
                    className="flex items-center text-gray-600 hover:bg-gray-100 p-2 rounded-lg transition duration-300"
                    onClick={toggleSidebar}
                  >
                    <span className="ml-2 flex">
                      <img
                        className="w-6 mr-3"
                        src="https://img.icons8.com/?size=100&id=wdfmkgweCGDk&format=png&color=000000"
                        alt="Analytics"
                      />
                      Analytics
                    </span>
                  </Link>
                </li>
                <li>
                  <Link
                    to="/users"
                    className="flex items-center text-gray-600 hover:bg-gray-100 p-2 rounded-lg transition duration-300"
                    onClick={toggleSidebar}
                  >
                    <span className="ml-2 flex">
                      <img
                        className="w-6 mr-3"
                        src="https://img.icons8.com/?size=100&id=22118&format=png&color=000000"
                        alt="Users"
                      />
                      Users
                    </span>
                  </Link>
                </li>
                <li>
                  <Link
                    to="/notifications"
                    className="flex items-center text-gray-600 hover:bg-gray-100 p-2 rounded-lg transition duration-300"
                    onClick={toggleSidebar}
                  >
                    <span className="ml-2 flex">
                      <img
                        className="w-6 mr-3"
                        src="https://img.icons8.com/?size=100&id=11668&format=png&color=000000"
                        alt="Notifications"
                      />
                      Notifications
                    </span>
                  </Link>
                </li>
                <li>
                  <Link
                    to="/transactions"
                    className="flex items-center text-gray-600 hover:bg-gray-100 p-2 rounded-lg transition duration-300"
                    onClick={toggleSidebar}
                  >
                    <span className="ml-2 flex">
                      <img
                        className="w-6 mr-3"
                        src="https://img.icons8.com/?size=100&id=22128&format=png&color=000000"
                        alt="Transactions"
                      />
                      Transactions
                    </span>
                  </Link>
                </li>
              </ul>
            </div>

            <div className="mt-6">
              <Link to="/login">
                <button className="btn btn-primary w-full mb-2 bg-blue-500 text-white px-4 py-2 rounded-lg hover:bg-blue-800 transition duration-300 ease-in-out">
                  Sign In
                </button>
              </Link>
              <Link to="/register">
                <button className="btn btn-secondary w-full bg-purple-500 text-white px-4 py-2 rounded-lg hover:bg-purple-800 transition duration-300 ease-in-out">
                  Sign Up
                </button>
              </Link>
            </div>

            <div className="flex items-center justify-between w-full pt-4 border-t border-gray-600">
              <span className="mr-5 text-lg font-bold text-black flex">
                Rajat Bora
              </span>
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
            </div>
          </div>
        </div>
      )}


      <div className="hidden relative rounded-lg ml-0 m-3 md:block w-64 h-auto bg-gray-200 border-r border-gray-200 p-5 flex-col justify-between ">
        <div>
          <Link to="/home">
            <h1 className="cursor-pointer font-bold text-xl text-gray-700 mb-6 text-center hover:text-blue-500 hover:bg-gray-100 p-2 rounded transition duration-300 ease-in-out">
              Appzest
            </h1>
          </Link>

          <ul className="space-y-4">
            <li>
              <Link
                to="/analytics"
                className="flex items-center text-gray-600 hover:bg-gray-100 p-2 rounded-lg transition duration-300"
              >
                <span className="ml-2 flex items-center">
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
                to="/users"
                className="flex items-center text-gray-600 hover:bg-gray-100 p-2 rounded-lg transition duration-300"
              >
                <span className="ml-2 flex items-center">
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
                to="/notifications"
                className="flex items-center text-gray-600 hover:bg-gray-100 p-2 rounded-lg transition duration-300"
              >
                <span className="ml-2 flex items-center">
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
                to="/transactions"
                className="flex items-center text-gray-600 hover:bg-gray-100 p-2 rounded-lg transition duration-300"
              >
                <span className="ml-2 flex items-center">
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

        <div className="mt-40">
          <Link to="/login">
            <button className="btn btn-primary w-full mb-8 bg-blue-500 text-white px-4 py-2 rounded-lg hover:bg-blue-800 transition duration-300 ease-in-out">
              Sign In
            </button>
          </Link>
          <Link to="/register">
            <button className="btn btn-secondary w-full bg-purple-500 text-white px-4 py-2 rounded-lg hover:bg-purple-800 transition duration-300 ease-in-out">
              Sign Up
            </button>
          </Link>
        </div>

        <div className="flex absolute bottom-2 left-0 items-center justify-between w-full pt-4 border-t border-gray-600">
        <div className="avatar ml-5 avatar-ring avatar-md">
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
    </>
  );
};

export default Sidebar;
