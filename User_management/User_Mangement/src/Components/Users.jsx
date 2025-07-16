import React, { useEffect, useState } from 'react';
import Menu from './Menu'; // make sure path is correct
import { BsThreeDotsVertical } from 'react-icons/bs';

const Users = () => {
  const [users, setUsers] = useState([]);
  const [activeTab, setActiveTab] = useState("All");

  const staticUsers = [
    { id: 1, name: "Bizplus", email: "Bizplus@Gmail.Com", role: "Active" },
    { id: 2, name: "Keerthi", email: "Keerthi@Gmail.Com", role: "Admin" },
    { id: 3, name: "Dinseh", email: "Dinesh@Gmail.Com", role: "Inactive" },
    { id: 4, name: "Bizplus", email: "Bizplus@Gmail.Com", role: "Active" },
    { id: 5, name: "Keerthi", email: "Keerthi@Gmail.Com", role: "Admin" },
    { id: 6, name: "Dinesh", email: "Dinesh@Gmail.Com", role: "Inactive" },

  ];

  useEffect(() => {
    setUsers(staticUsers);
  }, []);

  const filteredUsers =
    activeTab === "All"
      ? users
      : users.filter((user) => user.role === activeTab);

  return (
    <div className="p-4">
      <Menu activeTab={activeTab} setActiveTab={setActiveTab} />

      <div className="space-y-3 mt-3">
        {filteredUsers.map((user) => (
          <div
            key={user.id}
            className="flex items-center justify-between bg-white p-3 rounded-b-lg  border-b h-20 "
          >
            <div className="flex items-center gap-5">
              <div className="w-8 h-8 rounded-full flex items-center justify-center bg-blue-300 text-sm font-semibold uppercase">
                {user.name[0]}
              </div>
              <div>
                <div className="text-sm font-semibold">{user.name}</div>
                <div className="text-xs text-gray-500">{user.email}</div>
              </div>
            </div>

            <div className="flex items-center gap-3">
              <button className="text-xs px-2 py-1 rounded-full border bg-white text-gray-800 border-gray-300">
                {user.role}
              </button>
              <BsThreeDotsVertical className="text-gray-600 text-lg cursor-pointer" />
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Users;
