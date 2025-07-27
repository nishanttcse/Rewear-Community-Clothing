
'use client';

import { useState } from 'react';

interface User {
  id: number;
  name: string;
  email: string;
  joinDate: string;
  status: 'active' | 'suspended' | 'banned';
  itemsListed: number;
  swapsCompleted: number;
  points: number;
  avatar: string;
}

export default function UserManagement() {
  const [users, setUsers] = useState<User[]>([
    {
      id: 1,
      name: "Priya Sharma",
      email: "priya.sharma@email.com",
      joinDate: "2024-01-10",
      status: 'active',
      itemsListed: 15,
      swapsCompleted: 12,
      points: 380,
      avatar: "https://readdy.ai/api/search-image?query=Professional%20headshot%20of%20young%20Indian%20woman%20with%20friendly%20smile%2C%20clean%20background%2C%20business%20casual%20attire%2C%20professional%20photography%20style%2C%20Indian%20ethnicity&width=100&height=100&seq=indian-user-avatar-1&orientation=squarish"
    },
    {
      id: 2,
      name: "Arjun Kumar",
      email: "arjun.kumar@email.com",
      joinDate: "2024-01-08",
      status: 'active',
      itemsListed: 8,
      swapsCompleted: 6,
      points: 245,
      avatar: "https://readdy.ai/api/search-image?query=Professional%20headshot%20of%20young%20Indian%20man%20with%20confident%20expression%2C%20clean%20background%2C%20business%20casual%20attire%2C%20professional%20photography%20style%2C%20Indian%20ethnicity&width=100&height=100&seq=indian-user-avatar-2&orientation=squarish"
    },
    {
      id: 3,
      name: "Kavya Mehta",
      email: "kavya.mehta@email.com",
      joinDate: "2024-01-05",
      status: 'suspended',
      itemsListed: 3,
      swapsCompleted: 1,
      points: 65,
      avatar: "https://readdy.ai/api/search-image?query=Professional%20headshot%20of%20young%20Indian%20woman%20with%20warm%20smile%2C%20clean%20background%2C%20traditional%20Indian%20beauty%2C%20professional%20photography%20style&width=100&height=100&seq=indian-user-avatar-3&orientation=squarish"
    }
  ]);

  const handleSuspendUser = (userId: number) => {
    setUsers(users => 
      users.map(user => 
        user.id === userId ? { ...user, status: 'suspended' } : user
      )
    );
  };

  const handleActivateUser = (userId: number) => {
    setUsers(users => 
      users.map(user => 
        user.id === userId ? { ...user, status: 'active' } : user
      )
    );
  };

  const handleBanUser = (userId: number) => {
    setUsers(users => 
      users.map(user => 
        user.id === userId ? { ...user, status: 'banned' } : user
      )
    );
  };

  return (
    <div>
      <div className="flex items-center justify-between mb-6">
        <div>
          <h2 className="text-xl font-semibold text-gray-900">User Management</h2>
          <p className="text-gray-600">कुल {users.length} users हैं</p>
        </div>
        
        <div className="flex items-center gap-3">
          <span className="bg-green-100 text-green-800 px-3 py-1 rounded-full text-sm font-medium">
            {users.filter(u => u.status === 'active').length} Active
          </span>
          <span className="bg-yellow-100 text-yellow-800 px-3 py-1 rounded-full text-sm font-medium">
            {users.filter(u => u.status === 'suspended').length} Suspended
          </span>
        </div>
      </div>

      <div className="bg-white border border-gray-200 rounded-xl overflow-hidden">
        <div className="overflow-x-auto">
          <table className="w-full">
            <thead className="bg-gray-50 border-b border-gray-200">
              <tr>
                <th className="text-left px-6 py-4 text-sm font-medium text-gray-700">User</th>
                <th className="text-left px-6 py-4 text-sm font-medium text-gray-700">Status</th>
                <th className="text-left px-6 py-4 text-sm font-medium text-gray-700">Activity</th>
                <th className="text-left px-6 py-4 text-sm font-medium text-gray-700">Points</th>
                <th className="text-left px-6 py-4 text-sm font-medium text-gray-700">Actions</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-gray-200">
              {users.map((user) => (
                <tr key={user.id} className="hover:bg-gray-50">
                  <td className="px-6 py-4">
                    <div className="flex items-center gap-3">
                      <img 
                        src={user.avatar}
                        alt={user.name}
                        className="w-10 h-10 rounded-full object-cover object-top"
                      />
                      <div>
                        <div className="font-medium text-gray-900">{user.name}</div>
                        <div className="text-sm text-gray-500">{user.email}</div>
                        <div className="text-xs text-gray-400">Joined {user.joinDate}</div>
                      </div>
                    </div>
                  </td>
                  <td className="px-6 py-4">
                    <span className={`px-2 py-1 rounded-full text-xs font-medium ${
                      user.status === 'active' ? 'bg-green-100 text-green-800' :
                      user.status === 'suspended' ? 'bg-yellow-100 text-yellow-800' :
                      'bg-red-100 text-red-800'
                    }`}>
                      {user.status}
                    </span>
                  </td>
                  <td className="px-6 py-4">
                    <div className="text-sm text-gray-900">
                      {user.itemsListed} items listed
                    </div>
                    <div className="text-sm text-gray-500">
                      {user.swapsCompleted} swaps completed
                    </div>
                  </td>
                  <td className="px-6 py-4">
                    <span className="text-emerald-600 font-semibold">
                      {user.points} pts
                    </span>
                  </td>
                  <td className="px-6 py-4">
                    <div className="flex items-center gap-2">
                      {user.status === 'active' && (
                        <>
                          <button
                            onClick={() => handleSuspendUser(user.id)}
                            className="text-yellow-600 hover:text-yellow-800 transition-colors"
                            title="Suspend User"
                          >
                            <i className="ri-pause-circle-line w-4 h-4 flex items-center justify-center"></i>
                          </button>
                          <button
                            onClick={() => handleBanUser(user.id)}
                            className="text-red-600 hover:text-red-800 transition-colors"
                            title="Ban User"
                          >
                            <i className="ri-ban-line w-4 h-4 flex items-center justify-center"></i>
                          </button>
                        </>
                      )}
                      {user.status === 'suspended' && (
                        <button
                          onClick={() => handleActivateUser(user.id)}
                          className="text-green-600 hover:text-green-800 transition-colors"
                          title="Activate User"
                        >
                          <i className="ri-play-circle-line w-4 h-4 flex items-center justify-center"></i>
                        </button>
                      )}
                      <button
                        className="text-gray-600 hover:text-gray-800 transition-colors"
                        title="View Details"
                      >
                        <i className="ri-eye-line w-4 h-4 flex items-center justify-center"></i>
                      </button>
                    </div>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
}
