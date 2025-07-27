'use client';

import Link from 'next/link';

export default function AdminHeader() {
  return (
    <header className="bg-white shadow-sm border-b border-gray-200">
      <div className="max-w-7xl mx-auto px-6 py-4">
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-6">
            <Link href="/" className="flex items-center gap-3">
              <span className="text-2xl font-pacifico text-emerald-600">ReWear</span>
              <span className="bg-red-100 text-red-600 px-2 py-1 rounded text-xs font-medium">
                ADMIN
              </span>
            </Link>
          </div>

          <div className="flex items-center gap-4">
            <div className="flex items-center gap-3 text-sm text-gray-600">
              <div className="w-8 h-8 bg-emerald-100 rounded-full flex items-center justify-center">
                <i className="ri-admin-line w-4 h-4 flex items-center justify-center text-emerald-600"></i>
              </div>
              <span>Admin Panel</span>
            </div>
            
            <Link href="/dashboard">
              <button className="text-gray-600 hover:text-emerald-600 transition-colors">
                <i className="ri-logout-circle-line w-5 h-5 flex items-center justify-center"></i>
              </button>
            </Link>
          </div>
        </div>
      </div>
    </header>
  );
}