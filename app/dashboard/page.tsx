
'use client';

import Link from 'next/link';
import DashboardHeader from './DashboardHeader';
import StatsCards from './StatsCards';
import MyItems from './MyItems';
import RecentSwaps from './RecentSwaps';

export default function Dashboard() {
  return (
    <div className="min-h-screen bg-gray-50">
      <DashboardHeader />
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="mb-8">
          <h1 className="text-3xl font-bold text-gray-900">Welcome back, Nishant!</h1>
          <p className="text-gray-600 mt-2">Here's what's happening with your swaps</p>
        </div>
        
        <StatsCards />
        
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 mt-8">
          <div className="lg:col-span-2">
            <MyItems />
          </div>
          <div>
            <RecentSwaps />
          </div>
        </div>
      </div>
    </div>
  );
}