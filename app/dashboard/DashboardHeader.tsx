
'use client';

import Link from 'next/link';
import { useState } from 'react';

export default function DashboardHeader() {
  const [showProfileMenu, setShowProfileMenu] = useState(false);

  return (
    <header className="bg-white shadow-sm border-b">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          <div className="flex items-center space-x-8">
            <Link href="/">
              <h1 className="text-2xl font-pacifico text-emerald-600 cursor-pointer">ReWear</h1>
            </Link>
            <nav className="hidden md:flex space-x-6">
              <Link href="/dashboard" className="text-emerald-600 font-medium">
                Dashboard
              </Link>
              <Link href="/browse" className="text-gray-600 hover:text-gray-900">
                Browse
              </Link>
              <Link href="/add-item" className="text-gray-600 hover:text-gray-900">
                Add Item
              </Link>
              <Link href="/my-swaps" className="text-gray-600 hover:text-gray-900">
                My Swaps
              </Link>
            </nav>
          </div>
          
          <div className="flex items-center space-x-4">
            <div className="flex items-center bg-emerald-50 px-3 py-1 rounded-full">
              <i className="ri-coins-line text-emerald-600 mr-1"></i>
              <span className="text-emerald-700 font-semibold">650 pts</span>
            </div>
            
            <button className="relative p-2 text-gray-600 hover:text-gray-900 cursor-pointer">
              <i className="ri-notification-3-line text-xl"></i>
              <span className="absolute -top-1 -right-1 w-3 h-3 bg-red-500 rounded-full"></span>
            </button>
            
            <div className="relative">
              <button 
                onClick={() => setShowProfileMenu(!showProfileMenu)}
                className="flex items-center space-x-2 cursor-pointer"
              >
                <img 
                  src="https://readdy.ai/api/search-image?query=Professional%20portrait%20of%20young%20Indian%20man%20with%20friendly%20smile%2C%20clean%20background%2C%20modern%20professional%20headshot%2C%20natural%20lighting%2C%20Indian%20ethnicity%2C%20male&width=40&height=40&seq=nishant-profile-pic&orientation=squarish"
                  alt="Profile"
                  className="w-8 h-8 rounded-full object-cover"
                />
                <i className="ri-arrow-down-s-line text-gray-400"></i>
              </button>
              
              {showProfileMenu && (
                <div className="absolute right-0 mt-2 w-48 bg-white rounded-md shadow-lg py-1 z-50">
                  <Link href="/profile" className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100">
                    Profile Settings
                  </Link>
                  <Link href="/my-items" className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100">
                    My Items
                  </Link>
                  <Link href="/auth/login" className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100">
                    Sign Out
                  </Link>
                </div>
              )}
            </div>
          </div>
        </div>
      </div>
    </header>
  );
}