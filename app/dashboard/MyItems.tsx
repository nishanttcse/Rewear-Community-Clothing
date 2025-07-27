
'use client';

import Link from 'next/link';

const myItems = [
  {
    id: 1,
    title: "Printed Cotton Kurti",
    image: "https://readdy.ai/api/search-image?query=Beautiful%20printed%20cotton%20kurti%20on%20white%20background%2C%20Indian%20ethnic%20wear%2C%20comfortable%20casual%20traditional%20outfit%2C%20professional%20product%20photography&width=200&height=200&seq=my-indian-item-1&orientation=squarish",
    status: "Available",
    points: 120,
    views: 34,
    interests: 5
  },
  {
    id: 2,
    title: "Banarasi Silk Saree",
    image: "https://readdy.ai/api/search-image?query=Elegant%20Banarasi%20silk%20saree%20in%20rich%20colors%20on%20white%20background%2C%20traditional%20Indian%20wear%2C%20luxury%20ethnic%20clothing%2C%20professional%20fashion%20photography&width=200&height=200&seq=my-indian-item-2&orientation=squarish",
    status: "Swap Pending",
    points: 280,
    views: 67,
    interests: 12
  },
  {
    id: 3,
    title: "Casual Palazzo Set",
    image: "https://readdy.ai/api/search-image?query=Comfortable%20palazzo%20set%20with%20kurta%20on%20white%20background%2C%20Indo-western%20casual%20wear%2C%20modern%20Indian%20fashion%2C%20clean%20presentation&width=200&height=200&seq=my-indian-item-3&orientation=squarish",
    status: "Available",
    points: 90,
    views: 28,
    interests: 3
  },
  {
    id: 4,
    title: "Designer Lehenga",
    image: "https://readdy.ai/api/search-image?query=Beautiful%20designer%20lehenga%20in%20bright%20colors%20on%20white%20background%2C%20Indian%20wedding%20wear%2C%20festive%20traditional%20outfit%2C%20elegant%20presentation&width=200&height=200&seq=my-indian-item-4&orientation=squarish",
    status: "Swapped",
    points: 450,
    views: 89,
    interests: 15
  }
];

export default function MyItems() {
  const getStatusColor = (status: string) => {
    switch (status) {
      case 'Available':
        return 'bg-green-100 text-green-800';
      case 'Swap Pending':
        return 'bg-yellow-100 text-yellow-800';
      case 'Swapped':
        return 'bg-gray-100 text-gray-800';
      default:
        return 'bg-gray-100 text-gray-800';
    }
  };

  return (
    <div className="bg-white rounded-2xl p-6 shadow-sm border">
      <div className="flex items-center justify-between mb-6">
        <h2 className="text-xl font-semibold text-gray-900">My Items</h2>
        <Link href="/add-item">
          <button className="bg-emerald-500 hover:bg-emerald-600 text-white px-4 py-2 rounded-lg text-sm font-medium transition-colors whitespace-nowrap cursor-pointer">
            Add New Item
          </button>
        </Link>
      </div>
      
      <div className="space-y-4">
        {myItems.map((item) => (
          <div key={item.id} className="flex items-center space-x-4 p-4 hover:bg-gray-50 rounded-lg transition-colors">
            <img 
              src={item.image}
              alt={item.title}
              className="w-16 h-16 rounded-lg object-cover object-top"
            />
            <div className="flex-1 min-w-0">
              <h3 className="text-sm font-medium text-gray-900 truncate">{item.title}</h3>
              <div className="flex items-center space-x-4 mt-1">
                <span className={`inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium ${getStatusColor(item.status)}`}>
                  {item.status}
                </span>
                <span className="text-sm text-emerald-600 font-medium">{item.points} pts</span>
              </div>
            </div>
            <div className="flex items-center space-x-6 text-sm text-gray-500">
              <div className="flex items-center">
                <i className="ri-eye-line mr-1"></i>
                {item.views}
              </div>
              <div className="flex items-center">
                <i className="ri-heart-line mr-1"></i>
                {item.interests}
              </div>
              <Link href={`/item/${item.id}`}>
                <button className="text-emerald-600 hover:text-emerald-700 cursor-pointer">
                  <i className="ri-external-link-line"></i>
                </button>
              </Link>
            </div>
          </div>
        ))}
      </div>
      
      <div className="mt-6 text-center">
        <Link href="/my-items" className="text-emerald-600 hover:text-emerald-700 font-medium">
          View All Items
        </Link>
      </div>
    </div>
  );
}
