import React, { useState } from 'react';
import { FiChevronLeft, FiMic, FiSearch, FiPlus } from 'react-icons/fi';

const Header = () => {
  const [search, setSearch] = useState('');

  return (
    <div className="bg-blue-600 text-white p-4 rounded-b-2xl w-full">
      {/* Top bar with title and icons */}
      <div className="flex items-center justify-between mb-4">
        <FiChevronLeft size={24} className="cursor-pointer" />
        <h1 className="text-lg font-semibold">User Management</h1>
        <FiPlus size={24} className="cursor-pointer" />
      </div>

      {/* Search bar */}
      <div className="bg-white rounded-full flex items-center px-3 py-2 h-8 mx-auto">
        <FiSearch className="text-gray-400 mr-2" />
        <input
          type="text"
          placeholder="search users....."
          value={search}
          onChange={(e) => setSearch(e.target.value)}
          className="flex-1 outline-none text-sm text-black placeholder-gray-400 bg-transparent"
        />
        <FiMic className="text-gray-400 ml-1 cursor-pointer" />
      </div>
    </div>
  );
};

export default Header;
