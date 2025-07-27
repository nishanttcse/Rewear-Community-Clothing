'use client';

import { useState } from 'react';

interface SwapRequestModalProps {
  item: any;
  onClose: () => void;
}

export default function SwapRequestModal({ item, onClose }: SwapRequestModalProps) {
  const [selectedItems, setSelectedItems] = useState<number[]>([]);
  const [message, setMessage] = useState('');

  // Mock user's items for swap
  const userItems = [
    {
      id: 1,
      title: "Cotton T-Shirt",
      image: "https://readdy.ai/api/search-image?query=Plain%20cotton%20t-shirt%20on%20white%20background%2C%20professional%20product%20photography%2C%20casual%20wear%20showcase%20style&width=200&height=250&seq=user-item-1&orientation=portrait",
      points: 15,
      condition: "Good"
    },
    {
      id: 2,
      title: "Summer Dress",
      image: "https://readdy.ai/api/search-image?query=Elegant%20summer%20dress%20on%20white%20background%2C%20fashion%20photography%2C%20bright%20colors%2C%20clean%20product%20showcase%20style&width=200&height=250&seq=user-item-2&orientation=portrait",
      points: 40,
      condition: "Like New"
    },
    {
      id: 3,
      title: "Sneakers",
      image: "https://readdy.ai/api/search-image?query=Clean%20white%20sneakers%20on%20white%20background%2C%20product%20photography%20style%2C%20modern%20footwear%20showcase&width=200&height=250&seq=user-item-3&orientation=portrait",
      points: 30,
      condition: "Good"
    }
  ];

  const handleItemSelect = (itemId: number) => {
    setSelectedItems(prev => 
      prev.includes(itemId) 
        ? prev.filter(id => id !== itemId)
        : [...prev, itemId]
    );
  };

  const getTotalPoints = () => {
    return selectedItems.reduce((total, itemId) => {
      const item = userItems.find(i => i.id === itemId);
      return total + (item?.points || 0);
    }, 0);
  };

  const handleSubmit = () => {
    // Handle swap request submission
    console.log('Swap request:', { selectedItems, message });
    onClose();
  };

  return (
    <div className="fixed inset-0 bg-black/50 flex items-center justify-center z-50 p-4">
      <div className="bg-white rounded-2xl max-w-2xl w-full max-h-[90vh] overflow-y-auto">
        <div className="p-6 border-b border-gray-200">
          <div className="flex items-center justify-between">
            <h2 className="text-xl font-semibold text-gray-900">Request Swap</h2>
            <button 
              onClick={onClose}
              className="text-gray-400 hover:text-gray-600 transition-colors"
            >
              <i className="ri-close-line w-6 h-6 flex items-center justify-center"></i>
            </button>
          </div>
        </div>

        <div className="p-6">
          {/* Item being requested */}
          <div className="bg-gray-50 rounded-xl p-4 mb-6">
            <h3 className="font-medium text-gray-900 mb-3">You want to swap for:</h3>
            <div className="flex items-center gap-4">
              <img 
                src={item.images[0]}
                alt={item.title}
                className="w-16 h-20 object-cover object-top rounded-lg"
              />
              <div>
                <h4 className="font-medium text-gray-900">{item.title}</h4>
                <p className="text-sm text-gray-600">by {item.owner.name}</p>
                <span className="text-emerald-600 font-semibold">{item.points} points</span>
              </div>
            </div>
          </div>

          {/* User's items to offer */}
          <div className="mb-6">
            <h3 className="font-medium text-gray-900 mb-3">Select items to offer:</h3>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              {userItems.map((userItem) => (
                <div 
                  key={userItem.id}
                  className={`border-2 rounded-xl p-4 cursor-pointer transition-all ${
                    selectedItems.includes(userItem.id)
                      ? 'border-emerald-500 bg-emerald-50'
                      : 'border-gray-200 hover:border-gray-300'
                  }`}
                  onClick={() => handleItemSelect(userItem.id)}
                >
                  <div className="flex items-center gap-3">
                    <img 
                      src={userItem.image}
                      alt={userItem.title}
                      className="w-12 h-15 object-cover object-top rounded-lg"
                    />
                    <div className="flex-1">
                      <h4 className="font-medium text-gray-900 text-sm">{userItem.title}</h4>
                      <p className="text-xs text-gray-600">{userItem.condition}</p>
                      <span className="text-emerald-600 font-semibold text-sm">{userItem.points} pts</span>
                    </div>
                    <div className={`w-5 h-5 rounded-full border-2 flex items-center justify-center ${
                      selectedItems.includes(userItem.id)
                        ? 'border-emerald-500 bg-emerald-500'
                        : 'border-gray-300'
                    }`}>
                      {selectedItems.includes(userItem.id) && (
                        <i className="ri-check-line w-3 h-3 flex items-center justify-center text-white"></i>
                      )}
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Points comparison */}
          {selectedItems.length > 0 && (
            <div className="bg-blue-50 rounded-xl p-4 mb-6">
              <div className="flex items-center justify-between text-sm">
                <span className="text-gray-600">Your items value:</span>
                <span className="font-semibold text-gray-900">{getTotalPoints()} points</span>
              </div>
              <div className="flex items-center justify-between text-sm">
                <span className="text-gray-600">Requested item value:</span>
                <span className="font-semibold text-gray-900">{item.points} points</span>
              </div>
              <div className="border-t border-blue-200 mt-2 pt-2 flex items-center justify-between">
                <span className="font-medium text-gray-900">Difference:</span>
                <span className={`font-semibold ${
                  getTotalPoints() >= item.points ? 'text-green-600' : 'text-red-600'
                }`}>
                  {getTotalPoints() >= item.points ? '+' : ''}{getTotalPoints() - item.points} points
                </span>
              </div>
            </div>
          )}

          {/* Message */}
          <div className="mb-6">
            <label className="block text-sm font-medium text-gray-700 mb-2">
              Message (optional)
            </label>
            <textarea
              value={message}
              onChange={(e) => setMessage(e.target.value)}
              placeholder="Add a personal message to your swap request..."
              className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-emerald-500 focus:border-emerald-500 resize-none"
              rows={3}
              maxLength={500}
            />
            <p className="text-xs text-gray-500 mt-1">{message.length}/500 characters</p>
          </div>

          {/* Action buttons */}
          <div className="flex gap-4">
            <button
              onClick={onClose}
              className="flex-1 bg-gray-100 hover:bg-gray-200 text-gray-700 px-6 py-3 rounded-xl font-medium transition-colors whitespace-nowrap"
            >
              Cancel
            </button>
            <button
              onClick={handleSubmit}
              disabled={selectedItems.length === 0}
              className="flex-1 bg-emerald-500 hover:bg-emerald-600 disabled:bg-gray-300 disabled:cursor-not-allowed text-white px-6 py-3 rounded-xl font-medium transition-colors whitespace-nowrap"
            >
              Send Swap Request
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}