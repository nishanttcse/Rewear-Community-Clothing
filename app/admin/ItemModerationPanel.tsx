
'use client';

import { useState } from 'react';

interface PendingItem {
  id: number;
  title: string;
  owner: string;
  category: string;
  condition: string;
  points: number;
  image: string;
  description: string;
  submittedAt: string;
  status: 'pending' | 'approved' | 'rejected';
}

export default function ItemModerationPanel() {
  const [pendingItems, setPendingItems] = useState<PendingItem[]>([
    {
      id: 1,
      title: "Banarasi Silk Saree",
      owner: "Priya Sharma",
      category: "Traditional",
      condition: "Excellent",
      points: 280,
      image: "https://readdy.ai/api/search-image?query=Elegant%20Banarasi%20silk%20saree%20in%20rich%20colors%20on%20white%20background%2C%20traditional%20Indian%20luxury%20wear%2C%20professional%20fashion%20photography%2C%20soft%20lighting&width=400&height=500&seq=admin-indian-item-1&orientation=portrait",
      description: "Beautiful Banarasi silk saree with traditional gold work. Perfect for weddings and special occasions.",
      submittedAt: "2024-01-15T10:30:00Z",
      status: 'pending'
    },
    {
      id: 2,
      title: "Designer Anarkali Suit",
      owner: "Kavya Mehta",
      category: "Traditional",
      condition: "Like New",
      points: 180,
      image: "https://readdy.ai/api/search-image?query=Beautiful%20Anarkali%20suit%20in%20vibrant%20colors%20on%20white%20background%2C%20Indian%20ethnic%20wear%20photography%2C%20elegant%20traditional%20dress%20showcase&width=400&height=500&seq=admin-indian-item-2&orientation=portrait",
      description: "Stunning designer Anarkali suit, barely worn. Perfect for parties and festivals.",
      submittedAt: "2024-01-15T09:15:00Z",
      status: 'pending'
    },
    {
      id: 3,
      title: "Cotton Kurta Set",
      owner: "Arjun Kumar",
      category: "Traditional",
      condition: "Good",
      points: 90,
      image: "https://readdy.ai/api/search-image?query=Comfortable%20cotton%20kurta%20with%20churidar%20on%20white%20background%2C%20Indian%20traditional%20menswear%2C%20professional%20product%20photography&width=400&height=500&seq=admin-indian-item-3&orientation=portrait",
      description: "Comfortable cotton kurta set with some wear. Still has good quality and fit.",
      submittedAt: "2024-01-14T16:45:00Z",
      status: 'pending'
    }
  ]);

  const [selectedItem, setSelectedItem] = useState<PendingItem | null>(null);

  const handleApprove = (itemId: number) => {
    setPendingItems(items => 
      items.map(item => 
        item.id === itemId ? { ...item, status: 'approved' } : item
      )
    );
    setSelectedItem(null);
  };

  const handleReject = (itemId: number) => {
    setPendingItems(items => 
      items.map(item => 
        item.id === itemId ? { ...item, status: 'rejected' } : item
      )
    );
    setSelectedItem(null);
  };

  const handleRemove = (itemId: number) => {
    setPendingItems(items => items.filter(item => item.id !== itemId));
    setSelectedItem(null);
  };

  const pendingCount = pendingItems.filter(item => item.status === 'pending').length;

  return (
    <div>
      <div className="flex items-center justify-between mb-6">
        <div>
          <h2 className="text-xl font-semibold text-gray-900">Item Moderation</h2>
          <p className="text-gray-600">{pendingCount} items review के लिए pending हैं</p>
        </div>
        
        <div className="flex items-center gap-3">
          <span className="bg-yellow-100 text-yellow-800 px-3 py-1 rounded-full text-sm font-medium">
            {pendingCount} Pending
          </span>
        </div>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        {/* Items List */}
        <div className="lg:col-span-2">
          <div className="space-y-4">
            {pendingItems.map((item) => (
              <div 
                key={item.id}
                className={`bg-white border rounded-xl p-4 cursor-pointer transition-all ${
                  selectedItem?.id === item.id 
                    ? 'border-emerald-500 shadow-md' 
                    : 'border-gray-200 hover:border-gray-300'
                }`}
                onClick={() => setSelectedItem(item)}
              >
                <div className="flex gap-4">
                  <img 
                    src={item.image}
                    alt={item.title}
                    className="w-20 h-24 object-cover object-top rounded-lg"
                  />
                  
                  <div className="flex-1">
                    <div className="flex items-start justify-between mb-2">
                      <h3 className="font-semibold text-gray-900">{item.title}</h3>
                      <span className={`px-2 py-1 rounded-full text-xs font-medium ${
                        item.status === 'pending' ? 'bg-yellow-100 text-yellow-800' :
                        item.status === 'approved' ? 'bg-green-100 text-green-800' :
                        'bg-red-100 text-red-800'
                      }`}>
                        {item.status}
                      </span>
                    </div>
                    
                    <p className="text-sm text-gray-600 mb-2">by {item.owner}</p>
                    
                    <div className="flex items-center gap-4 text-sm text-gray-500">
                      <span>{item.category}</span>
                      <span>•</span>
                      <span>{item.condition}</span>
                      <span>•</span>
                      <span className="text-emerald-600 font-medium">{item.points} pts</span>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Item Details */}
        <div className="lg:col-span-1">
          {selectedItem ? (
            <div className="bg-white border border-gray-200 rounded-xl p-6 sticky top-6">
              <h3 className="text-lg font-semibold text-gray-900 mb-4">Item Details</h3>
              
              <img 
                src={selectedItem.image}
                alt={selectedItem.title}
                className="w-full h-48 object-cover object-top rounded-lg mb-4"
              />
              
              <div className="space-y-3 mb-6">
                <div>
                  <label className="text-sm font-medium text-gray-700">Title</label>
                  <p className="text-gray-900">{selectedItem.title}</p>
                </div>
                
                <div>
                  <label className="text-sm font-medium text-gray-700">Owner</label>
                  <p className="text-gray-900">{selectedItem.owner}</p>
                </div>
                
                <div>
                  <label className="text-sm font-medium text-gray-700">Description</label>
                  <p className="text-gray-900 text-sm">{selectedItem.description}</p>
                </div>
                
                <div className="grid grid-cols-2 gap-3">
                  <div>
                    <label className="text-sm font-medium text-gray-700">Category</label>
                    <p className="text-gray-900 text-sm">{selectedItem.category}</p>
                  </div>
                  <div>
                    <label className="text-sm font-medium text-gray-700">Condition</label>
                    <p className="text-gray-900 text-sm">{selectedItem.condition}</p>
                  </div>
                </div>
                
                <div>
                  <label className="text-sm font-medium text-gray-700">Points Value</label>
                  <p className="text-emerald-600 font-semibold">{selectedItem.points} points</p>
                </div>
              </div>
              
              {selectedItem.status === 'pending' && (
                <div className="flex gap-3">
                  <button
                    onClick={() => handleApprove(selectedItem.id)}
                    className="flex-1 bg-emerald-500 hover:bg-emerald-600 text-white px-4 py-2 rounded-lg font-medium transition-colors whitespace-nowrap"
                  >
                    Approve
                  </button>
                  <button
                    onClick={() => handleReject(selectedItem.id)}
                    className="flex-1 bg-red-500 hover:bg-red-600 text-white px-4 py-2 rounded-lg font-medium transition-colors whitespace-nowrap"
                  >
                    Reject
                  </button>
                </div>
              )}
              
              <button
                onClick={() => handleRemove(selectedItem.id)}
                className="w-full mt-3 bg-gray-100 hover:bg-gray-200 text-gray-700 px-4 py-2 rounded-lg font-medium transition-colors whitespace-nowrap"
              >
                Item Remove करें
              </button>
            </div>
          ) : (
            <div className="bg-gray-50 border-2 border-dashed border-gray-300 rounded-xl p-8 text-center">
              <i className="ri-file-list-line w-12 h-12 flex items-center justify-center text-gray-400 mx-auto mb-3"></i>
              <p className="text-gray-500">Details देखने के लिए item select करें</p>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
