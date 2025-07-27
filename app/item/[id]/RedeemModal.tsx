'use client';

import { useState } from 'react';

interface RedeemModalProps {
  item: any;
  onClose: () => void;
}

export default function RedeemModal({ item, onClose }: RedeemModalProps) {
  const [userPoints] = useState(245); // Mock user points
  const [isConfirming, setIsConfirming] = useState(false);

  const canAfford = userPoints >= item.points;
  const remainingPoints = userPoints - item.points;

  const handleRedeem = () => {
    setIsConfirming(true);
    
    // Simulate API call
    setTimeout(() => {
      console.log('Item redeemed:', item.id);
      setIsConfirming(false);
      onClose();
    }, 2000);
  };

  return (
    <div className="fixed inset-0 bg-black/50 flex items-center justify-center z-50 p-4">
      <div className="bg-white rounded-2xl max-w-lg w-full">
        <div className="p-6 border-b border-gray-200">
          <div className="flex items-center justify-between">
            <h2 className="text-xl font-semibold text-gray-900">Redeem with Points</h2>
            <button 
              onClick={onClose}
              className="text-gray-400 hover:text-gray-600 transition-colors"
            >
              <i className="ri-close-line w-6 h-6 flex items-center justify-center"></i>
            </button>
          </div>
        </div>

        <div className="p-6">
          {/* Item Preview */}
          <div className="bg-gray-50 rounded-xl p-4 mb-6">
            <div className="flex items-center gap-4">
              <img 
                src={item.images[0]}
                alt={item.title}
                className="w-16 h-20 object-cover object-top rounded-lg"
              />
              <div>
                <h3 className="font-medium text-gray-900">{item.title}</h3>
                <p className="text-sm text-gray-600">by {item.owner.name}</p>
                <span className="text-emerald-600 font-semibold text-lg">{item.points} points</span>
              </div>
            </div>
          </div>

          {/* Points Summary */}
          <div className="bg-white border border-gray-200 rounded-xl p-4 mb-6">
            <div className="space-y-3">
              <div className="flex items-center justify-between">
                <span className="text-gray-600">Your current points:</span>
                <span className="font-semibold text-gray-900">{userPoints} pts</span>
              </div>
              <div className="flex items-center justify-between">
                <span className="text-gray-600">Item cost:</span>
                <span className="font-semibold text-gray-900">-{item.points} pts</span>
              </div>
              <div className="border-t border-gray-200 pt-3 flex items-center justify-between">
                <span className="font-medium text-gray-900">Remaining points:</span>
                <span className={`font-bold text-lg ${
                  canAfford ? 'text-emerald-600' : 'text-red-600'
                }`}>
                  {remainingPoints} pts
                </span>
              </div>
            </div>
          </div>

          {/* Warning/Success Message */}
          {!canAfford ? (
            <div className="bg-red-50 border border-red-200 rounded-xl p-4 mb-6">
              <div className="flex items-start gap-3">
                <i className="ri-error-warning-line w-5 h-5 flex items-center justify-center text-red-500 mt-0.5"></i>
                <div>
                  <h4 className="font-medium text-red-800">Insufficient Points</h4>
                  <p className="text-sm text-red-700 mt-1">
                    You need {item.points - userPoints} more points to redeem this item.
                  </p>
                </div>
              </div>
            </div>
          ) : (
            <div className="bg-green-50 border border-green-200 rounded-xl p-4 mb-6">
              <div className="flex items-start gap-3">
                <i className="ri-check-line w-5 h-5 flex items-center justify-center text-green-500 mt-0.5"></i>
                <div>
                  <h4 className="font-medium text-green-800">Ready to Redeem</h4>
                  <p className="text-sm text-green-700 mt-1">
                    You have enough points to redeem this item.
                  </p>
                </div>
              </div>
            </div>
          )}

          {/* Terms */}
          <div className="bg-blue-50 rounded-xl p-4 mb-6">
            <h4 className="font-medium text-blue-900 mb-2">Redemption Terms</h4>
            <ul className="text-sm text-blue-700 space-y-1">
              <li>• Item will be reserved for 24 hours</li>
              <li>• Points will be deducted immediately</li>
              <li>• Pickup/delivery will be arranged with owner</li>
              <li>• No refunds once transaction is complete</li>
            </ul>
          </div>

          {/* Action Buttons */}
          <div className="flex gap-4">
            <button
              onClick={onClose}
              className="flex-1 bg-gray-100 hover:bg-gray-200 text-gray-700 px-6 py-3 rounded-xl font-medium transition-colors whitespace-nowrap"
            >
              Cancel
            </button>
            <button
              onClick={handleRedeem}
              disabled={!canAfford || isConfirming}
              className="flex-1 bg-emerald-500 hover:bg-emerald-600 disabled:bg-gray-300 disabled:cursor-not-allowed text-white px-6 py-3 rounded-xl font-medium transition-colors whitespace-nowrap flex items-center justify-center gap-2"
            >
              {isConfirming ? (
                <>
                  <div className="w-4 h-4 border-2 border-white border-t-transparent rounded-full animate-spin"></div>
                  Processing...
                </>
              ) : (
                'Redeem Item'
              )}
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}