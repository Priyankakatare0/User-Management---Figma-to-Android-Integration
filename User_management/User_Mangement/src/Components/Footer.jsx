import React, { useState } from 'react';
import {
  HiOutlineHome,
  HiOutlineChatAlt2,
  HiOutlineSearch,
  HiUserGroup,
  HiOutlineUser,
} from 'react-icons/hi';

const Footer = () => {
  const [activeTab, setActiveTab] = useState('Home');

  const navItems = [
    { name: 'Home', icon: <HiOutlineHome className="text-2xl" /> },
    { name: 'Messages', icon: <HiOutlineChatAlt2 className="text-2xl" /> },
    { name: 'Search', icon: <HiOutlineSearch className="text-2xl" /> },
    {
      name: 'Campaign',
      icon: (
        <div className="flex flex-col items-center text-sm">
          <HiUserGroup className="text-2xl" />
          <span className="text-sm font-medium">Campaign</span>
        </div>
      ),
    },
    { name: 'Profile', icon: <HiOutlineUser className="text-2xl" /> },
  ];

  return (
    <div className="fixed bottom-0 left-0 right-0 bg-[#3366FF] text-white flex justify-around items-center h-16 max-w-sm mx-auto">
      {navItems.map((item) => (
        <button
          key={item.name}
          onClick={() => setActiveTab(item.name)}
          className={`flex flex-col items-center ${
            activeTab === item.name ? 'text-white' : 'text-white/70'
          }`}
        >
          {item.icon}
        </button>
      ))}
    </div>
  );
};

export default Footer;
