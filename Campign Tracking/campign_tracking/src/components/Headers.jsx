// src/components/Header.jsx
import React from "react";

const Header = ({ search, setSearch, handleAddCampaign }) => {
  return (
    <div className="bg-[#3366FF] text-white t-0 rounded-b-xl px-4 py-4">
      {/* Top Header Row */}
      <div className="flex justify-between items-center mb-4">
        <h1 className="text-lg font-semibold">Campaign Tracking</h1>
        <button
          onClick={handleAddCampaign}
          className="text-xl font-bold text-white w-8 h-8 flex items-center justify-center rounded-full"
        >
          +
        </button>
      </div>

      {/* Search Input */}
      <input
        type="text"
        placeholder="search campaigns..."
        className="w-full p-2 rounded-full border border-white bg-white text-black placeholder:text-gray-400 text-sm px-4"
        value={search}
        onChange={(e) => setSearch(e.target.value)}
      />
    </div>
  );
};

export default Header;
