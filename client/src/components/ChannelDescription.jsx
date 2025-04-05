import React from "react";

const ChannelDescription = ({ channel }) => {
  return (
    <div className="mt-4 p-4 bg-gray-100 shadow-md rounded-lg">
      <h2 className="text-xl font-bold">{channel.name}</h2>
      <p><strong>Owner:</strong> {channel.owner}</p>
      <p><strong>Location:</strong> {channel.place}</p>
      <p><strong>Description:</strong> {channel.description}</p>
    </div>
  );
};

export default ChannelDescription;
