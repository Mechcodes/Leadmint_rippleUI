import React from "react";
import RegistrationReferralsChart from "../utils/RegistrationReferralsChart";
import { chartData } from "../utils/ChartData";
import { Link } from "react-router-dom";

const Analytics = () => {
  return (
    <div className="flex-1 p-4 bg-gray-50 min-h-screen">
      {/* Header */}
      <h2 className="text-2xl font-bold text-gray-700 mb-6">Analytics</h2>
      
      {/* Stats Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-6">
        <Link to="/users">
        <div className="bg-white p-6 border border-gray-200 rounded-lg shadow-md hover:shadow-lg transition-shadow duration-300 ease-in-out cursor-pointer">
          <h3 className="text-lg font-semibold text-gray-600">Users</h3>
          <p className="text-3xl font-bold text-green-600">140</p>
        </div>
        </Link>
        <div className="bg-white p-6 border border-gray-200 rounded-lg shadow-md hover:shadow-lg transition-shadow duration-300 ease-in-out cursor-pointer">
          <h3 className="text-lg font-semibold text-gray-600">Referral Users</h3>
          <p className="text-3xl font-bold text-blue-600">64</p>
        </div>
        <div className="bg-white p-6 border border-gray-200 rounded-lg shadow-md hover:shadow-lg transition-shadow duration-300 ease-in-out cursor-pointer">
          <h3 className="text-lg font-semibold text-gray-600">This Week Users</h3>
          <p className="text-3xl font-bold text-gray-700">679</p>
        </div>
        <div className="bg-white p-6 border border-gray-200 rounded-lg shadow-md hover:shadow-lg transition-shadow duration-300 ease-in-out cursor-pointer">
          <h3 className="text-lg font-semibold text-gray-600">This Month Users</h3>
          <p className="text-3xl font-bold text-gray-700">22,727</p>
        </div>
        <div className="bg-white p-6 border border-gray-200 rounded-lg shadow-md hover:shadow-lg transition-shadow duration-300 ease-in-out cursor-pointer">
          <h3 className="text-lg font-semibold text-gray-600">Today's Organic Users</h3>
          <p className="text-3xl font-bold text-green-600">76</p>
        </div>
        <div className="bg-white p-6 border border-gray-200 rounded-lg shadow-md hover:shadow-lg transition-shadow duration-300 ease-in-out cursor-pointer">
          <h3 className="text-lg font-semibold text-gray-600">Last Month Users</h3>
          <p className="text-3xl font-bold text-gray-700">71,291</p>
        </div>
      </div>

      {/* Date Range Button */}
      <div className="mb-6 text-center">
        <button className="bg-blue-400 text-white px-5 py-2 rounded-lg hover:bg-blue-500 transition duration-300 ease-in-out">
          Select Date Range
        </button>
      </div>

      {/* Chart Section */}
      <h2 className="text-2xl font-bold text-gray-700 mb-4 text-center">
        Last 7 Days: Registrations vs Referrals
      </h2>
      <div className="bg-white p-6 border border-gray-200 rounded-lg shadow-md w-full max-w-5xl mx-auto">
        <RegistrationReferralsChart data={chartData} />
      </div>
    </div>
  );
};

export default Analytics;
