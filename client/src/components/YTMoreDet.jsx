import React from "react";
import { useLocation } from "react-router-dom";

const YTMoreDet = () => {
  const location = useLocation();
  const channel = location.state?.channel; // ✅ Get channel data

  if (!channel) {
    return <p className="text-center text-red-500">No channel data found!</p>;
  }

  return (
    <div className="p-6 max-w-2xl mx-auto bg-white shadow-md rounded-xl">
      <h2 className="text-2xl font-bold text-gray-900">{channel.name} | {channel.industry}</h2>
      <p className="text-gray-600 mt-2">{channel.About}</p>

      <div className="grid grid-cols-2 gap-4 mt-6 text-gray-700">
        <div>
          <p className="font-semibold">Business Location</p>
          <p>{channel.location}</p>
        </div>
        <div>
          <p className="font-semibold">Site Age</p>
          <p>{channel.age}</p>
        </div>
        <div>
          <p className="font-semibold">Monthly Profit</p>
          <p className="text-green-600 font-bold">USD ${channel.netProfit} /mo</p>
        </div>
      </div>
    </div>
  );
};

export default YTMoreDet;
