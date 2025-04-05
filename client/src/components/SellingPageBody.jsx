import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

const SellingPageBody = () => {
  const [channels, setChannels] = useState([
    {
      id: 1,
      name: "Travel Vlogs 4K",
      location: "CA, United States",
      About: "A successful 4K walking tours YouTube Channel with evergreen content and high growth potential.",
      price: 590000,
      netProfit: 10532,
      industry: "Travel",
      age: "3 years",
    },
    {
      id: 2,
      name: "Entertainment Hub",
      location: "Romania",
      About: "A YouTube faceless automated channel showcasing bizarre sightings and strange encounters.",
      price: 350000,
      netProfit: 7800,
      industry: "Entertainment",
      age: "5 years",
    },
  ]);

  const navigate = useNavigate();

  const handleClick = (channel) => {
    navigate("/YTMoreDet", { state: { channel } });
  };

  const [newChannel, setNewChannel] = useState({
    name: "",
    location: "",
    price: "",
    netProfit: "",
    industry: "",
    age: "",
  });

  const handleChange = (e) => {
    setNewChannel({ ...newChannel, [e.target.name]: e.target.value });
  };

  const addChannel = () => {
    if (!newChannel.name || !newChannel.price) return;
    setChannels([...channels, { ...newChannel, id: channels.length + 1 }]);
    setNewChannel({ name: "", location: "", price: "", netProfit: "", industry: "", age: "" });
  };

  return (
    <div className="p-6 bg-gray-100 min-h-screen">
      <div className="mt-6 bg-white p-4 shadow-md rounded-lg">
        <h2 className="text-lg font-semibold mb-2 my-5">Add a New Listing</h2>
        <div className="grid gap-2 md:grid-cols-3">
          <input type="text" name="name" value={newChannel.name} onChange={handleChange} placeholder="Channel Name" className="border p-2 rounded" />
          <input type="text" name="location" value={newChannel.location} onChange={handleChange} placeholder="Location" className="border p-2 rounded" />
          <input type="number" name="price" value={newChannel.price} onChange={handleChange} placeholder="Price" className="border p-2 rounded" />
          <input type="number" name="netProfit" value={newChannel.netProfit} onChange={handleChange} placeholder="Net Profit" className="border p-2 rounded" />
          <input type="text" name="industry" value={newChannel.industry} onChange={handleChange} placeholder="Industry" className="border p-2 rounded" />
          <input type="text" name="age" value={newChannel.age} onChange={handleChange} placeholder="Age" className="border p-2 rounded" />
        </div>
        <button onClick={addChannel} className="mt-4 bg-green-500 text-white px-4 py-2 rounded">Add Listing</button>
      </div>

      <h1 className="text-2xl font-bold my-6"> <strong>Sell Your YouTube Channel</strong></h1>

      <div className="grid gap-4 md:grid-cols-2">
        {channels.map((channel) => (
          <div key={channel.id} className="bg-white p-4 shadow-md rounded-lg">
            <h2 className="text-lg font-semibold">{channel.name}</h2>
            <p className="text-gray-600">{channel.location}</p>
            <p className="text-gray-600">{channel.About}</p>
            <p className="text-gray-800 font-bold">
              Price: ${channel.price.toLocaleString()} &nbsp; Net Profit: ${channel.netProfit}/mo &nbsp; Industry: {channel.industry}
            </p>
            <p className="text-gray-600">Age: {channel.age}</p>
            <button className="mt-2 btn btn-primary text-white px-4 py-2 rounded" onClick={() => handleClick(channel)}>View Details</button>
          </div>
        ))}
      </div>
    </div>
  );
};

export default SellingPageBody;
