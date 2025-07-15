import React, { useEffect, useState } from "react";
import CampaignCard from "./components/CampiagnCard";
import Header from "./components/Headers";
import { fetchCampaigns, createCampaign } from "./api";
import Footer from "./components/Footer";

const fallbackData = [
  { name: "Campaign Two", date: "June 12 - June 22", status: "Live" },
  { name: "Campaign Four", date: "June 10 - June 20", status: "Completed" },
  { name: "Campaign Three", date: "June 25 - July 05", status: "Scheduled" },
  { name: "Campaign One", date: "June 10 - June 20", status: "Paused" },
];

const App = () => {
  const [campaigns, setCampaigns] = useState([]);
  const [filter, setFilter] = useState("All");
  const [search, setSearch] = useState("");

  useEffect(() => {
    getCampaignData();
  }, []);

  const getCampaignData = async () => {
    try {
      const data = await fetchCampaigns();
      if (Array.isArray(data) && data.length > 0) {
        setCampaigns(data);
      }
    } catch (err) {
      console.error("Error fetching campaigns:", err);
    }
  };

  const handleAddCampaign = async () => {
    const newSource = prompt("Enter new campaign source:");
    if (!newSource) return;
    try {
      await createCampaign(newSource);
      getCampaignData();
    } catch (err) {
      console.error("Error creating campaign:", err);
    }
  };

  const getFilteredData = () => {
    const dataToUse = campaigns.length > 0 ? campaigns : fallbackData;
    return dataToUse.filter((c) => {
      const matchesFilter = filter === "All" || c.status === filter;
      const matchesSearch = c.name.toLowerCase().includes(search.toLowerCase());
      return matchesFilter && matchesSearch;
    });
  };

  const filtered = getFilteredData();

  return (
    <div className="bg-white max-w-sm mx-auto min-h-screen pb-20">
      <Header search={search} setSearch={setSearch} handleAddCampaign={handleAddCampaign} />

      <div className="flex px-4 pb-3 gap-2 overflow-x-auto mt-4">
        {["All", "Live", "Scheduled", "Completed", "Paused"].map((tab) => (
          <button
            key={tab}
            onClick={() => setFilter(tab)}
            className={`px-4 py-1 rounded-full text-sm ${filter === tab ? "bg-blue-600 text-white" : "bg-gray-100 text-gray-600"}`}
          >
            {tab}
          </button>
        ))}
      </div>

      <div className="p-4">
        {filtered.length > 0 ? (
          filtered.map((c, index) => <CampaignCard key={index} campaign={c} />)
        ) : (
          <p className="text-gray-500 text-sm text-center">No campaigns found.</p>
        )}
      </div>

      <Footer />
    </div>
  );
};

export default App;
