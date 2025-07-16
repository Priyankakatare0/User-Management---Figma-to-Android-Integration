import React, { useState } from 'react';

const Menu = ({ activeTab, setActiveTab }) => {
  const menuItems = ["All", "Active", "Inactive", "Admin"];

  const handleTabClick = (tab) => {
    setActiveTab(tab);
  };

  return (
    <div className="flex gap-6 px-4 py-2">
      {menuItems.map((item) => (
        <button
          key={item}
          onClick={() => handleTabClick(item)}
          className={`px-2 py-1 rounded-full border text-xs font-medium transition-all duration-200 ${
            activeTab === item
              ? 'bg-blue-600 text-white border-blue-600'
              : 'bg-white text-gray-700 border-gray-300'
          }`}
        >
          {item}
        </button>
      ))}
    </div>
  );
};

export default Menu;
