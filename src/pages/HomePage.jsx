import React from 'react';
import { Link } from 'react-router-dom';
const HomePage = () => {
  return (
    <div className="min-h-screen flex flex-col justify-between bg-gray-50 px-4 py-6">
      {/* Header Section */}
      <header className="bg-blue-200 text-gray-900 p-8 rounded-lg shadow-md text-center">
        <h1 className="text-3xl md:text-5xl font-bold">Welcome to AppZest</h1>
        <p className="mt-4 text-lg md:text-xl">Your go-to platform for amazing content.</p>
      </header>

      {/* Main Section */}
      <section className="flex-1 text-center text-black mt-10">
        <h2 className="text-2xl md:text-4xl text-black font-semibold mb-6">Explore Our Features</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <div className="bg-white p-6 rounded-lg shadow-lg hover:scale-105 transition-transform">
            <h3 className="text-xl md:text-2xl  font-bold mb-4">Feature 1</h3>
            <p className="text-gray-600">Discover new and exciting features with ease.</p>
          </div>
          <div className="bg-white p-6 rounded-lg shadow-lg hover:scale-105 transition-transform">
            <h3 className="text-xl md:text-2xl font-bold mb-4">Feature 2</h3>
            <p className="text-gray-600">Enhance your experience with our intuitive platform.</p>
          </div>
          <div className="bg-white p-6 rounded-lg shadow-lg hover:scale-105 transition-transform">
            <h3 className="text-xl md:text-2xl font-bold mb-4">Feature 3</h3>
            <p className="text-gray-600">Stay updated with the latest trends and developments.</p>
          </div>
        </div>
        {/* Main Section */}
      <section className="flex-1 flex flex-col justify-center items-center mt-10 md:mt-20 text-center">
        
        <div className="flex flex-col sm:flex-row space-y-4 sm:space-y-0 sm:space-x-6">
          <Link to="/login">
            <button className="bg-blue-500 text-white px-6 py-3 rounded-lg hover:bg-blue-700 transition duration-300 ease-in-out w-40 sm:w-auto">
              Sign In
            </button>
          </Link>
          <Link to="/register">
            <button className="bg-purple-500 text-white px-6 py-3 rounded-lg hover:bg-purple-700 transition duration-300 ease-in-out w-40 sm:w-auto">
              Sign Up
            </button>
          </Link>
        </div>
      </section>
      </section>

      {/* Footer Section */}
      <footer className="bg-blue-100 text-gray-700 text-center py-4 rounded-lg shadow-inner mt-10">
        <p>&copy; 2024 AppZest. All rights reserved.</p>
      </footer>
    </div>
  );
};

export default HomePage;
