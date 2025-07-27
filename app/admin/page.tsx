'use client';

import { useState } from 'react';
import AdminHeader from './AdminHeader';
import ItemModerationPanel from './ItemModerationPanel';
import UserManagement from './UserManagement';
import SystemStats from './SystemStats';

export default function AdminPage() {
  const [activeTab, setActiveTab] = useState('moderate');

  const tabs = [
    { id: 'moderate', label: 'Item Moderation', icon: 'ri-check-line' },
    { id: 'users', label: 'User Management', icon: 'ri-user-line' },
    { id: 'stats', label: 'System Stats', icon: 'ri-bar-chart-line' }
  ];

  return (
    <div className="min-h-screen bg-gray-50">
      <AdminHeader />
      
      <div className="max-w-7xl mx-auto px-6 py-8">
        <div className="mb-8">
          <h1 className="text-3xl font-bold text-gray-900 mb-2">Admin Dashboard</h1>
          <p className="text-gray-600">Manage platform content and user activities</p>
        </div>

        {/* Tab Navigation */}
        <div className="bg-white rounded-xl shadow-sm border border-gray-200 mb-8">
          <div className="flex border-b border-gray-200">
            {tabs.map((tab) => (
              <button
                key={tab.id}
                onClick={() => setActiveTab(tab.id)}
                className={`flex items-center gap-3 px-6 py-4 font-medium transition-colors ${
                  activeTab === tab.id
                    ? 'text-emerald-600 border-b-2 border-emerald-600 bg-emerald-50'
                    : 'text-gray-600 hover:text-gray-900'
                }`}
              >
                <i className={`${tab.icon} w-5 h-5 flex items-center justify-center`}></i>
                {tab.label}
              </button>
            ))}
          </div>

          <div className="p-6">
            {activeTab === 'moderate' && <ItemModerationPanel />}
            {activeTab === 'users' && <UserManagement />}
            {activeTab === 'stats' && <SystemStats />}
          </div>
        </div>
      </div>
    </div>
  );
}