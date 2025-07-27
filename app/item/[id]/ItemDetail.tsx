
'use client';

import { useState } from 'react';
import Link from 'next/link';
import ImageGallery from './ImageGallery';
import SwapRequestModal from './SwapRequestModal';
import RedeemModal from './RedeemModal';

interface ItemDetailProps {
  itemId: string;
}

interface ItemData {
  id: number;
  title: string;
  owner: {
    name: string;
    avatar: string;
    rating: number;
    swapsCompleted: number;
    joinDate: string;
  };
  points: number;
  images: string[];
  description: string;
  category: string;
  condition: string;
  size: string;
  tags: string[];
  availability: 'available' | 'swap_pending' | 'swapped';
  listedDate: string;
  views: number;
  likes: number;
}

export default function ItemDetail({ itemId }: ItemDetailProps) {
  const [showSwapModal, setShowSwapModal] = useState(false);
  const [showRedeemModal, setShowRedeemModal] = useState(false);
  const [isLiked, setIsLiked] = useState(false);
  const [likeCount, setLikeCount] = useState(0);

  // Mock data - in real app, fetch based on itemId
  const itemData: ItemData = {
    id: parseInt(itemId),
    title: "Designer Silk Saree",
    owner: {
      name: "Priya Sharma",
      avatar: "https://readdy.ai/api/search-image?query=Professional%20headshot%20of%20young%20Indian%20woman%20with%20warm%20smile%2C%20clean%20background%2C%20business%20casual%20attire%2C%20professional%20photography%20style%2C%20Indian%20ethnicity&width=100&height=100&seq=indian-owner-avatar&orientation=squarish",
      rating: 4.8,
      swapsCompleted: 23,
      joinDate: "2023-08-15"
    },
    points: 220,
    images: [
      "https://readdy.ai/api/search-image?query=Beautiful%20silk%20saree%20in%20rich%20red%20and%20gold%20colors%20hanging%20on%20clean%20white%20background%2C%20professional%20Indian%20fashion%20photography%2C%20soft%20lighting%2C%20traditional%20wear%20showcase%20style%2C%20front%20view&width=600&height=800&seq=saree-main&orientation=portrait",
      "https://readdy.ai/api/search-image?query=Silk%20saree%20fabric%20close-up%20showing%20intricate%20gold%20work%20and%20embroidery%20details%2C%20professional%20product%20photography%2C%20soft%20lighting%2C%20texture%20focus&width=600&height=800&seq=saree-detail&orientation=portrait",
      "https://readdy.ai/api/search-image?query=Complete%20silk%20saree%20with%20blouse%20piece%20on%20white%20background%2C%20professional%20product%20photography%2C%20showing%20full%20set%2C%20traditional%20Indian%20wear&width=600&height=800&seq=saree-complete&orientation=portrait"
    ],
    description: "This beautiful silk saree is in excellent condition with authentic gold work and traditional embroidery that makes it perfect for special occasions. The saree has been carefully maintained with no major flaws or damage. It's ideal for weddings, festivals, or special events and comes with a matching blouse piece.",
    category: "Traditional",
    condition: "Excellent",
    size: "Free Size",
    tags: ["silk", "saree", "wedding", "traditional"],
    availability: 'available',
    listedDate: "2024-01-10",
    views: 187,
    likes: 28
  };

  const handleLike = () => {
    setIsLiked(!isLiked);
    setLikeCount(prev => isLiked ? prev - 1 : prev + 1);
  };

  const getAvailabilityStatus = () => {
    switch (itemData.availability) {
      case 'available':
        return { text: 'Available', color: 'text-green-600 bg-green-100' };
      case 'swap_pending':
        return { text: 'Swap Pending', color: 'text-yellow-600 bg-yellow-100' };
      case 'swapped':
        return { text: 'Swapped', color: 'text-gray-600 bg-gray-100' };
      default:
        return { text: 'Unknown', color: 'text-gray-600 bg-gray-100' };
    }
  };

  const status = getAvailabilityStatus();

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header */}
      <header className="bg-white shadow-sm border-b border-gray-200 sticky top-0 z-40">
        <div className="max-w-7xl mx-auto px-6 py-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-6">
              <Link href="/" className="text-2xl font-pacifico text-emerald-600">
                ReWear
              </Link>
              <nav className="hidden md:flex items-center gap-6">
                <Link href="/browse" className="text-gray-600 hover:text-emerald-600 transition-colors">
                  Browse
                </Link>
                <Link href="/add-item" className="text-gray-600 hover:text-emerald-600 transition-colors">
                  List Item  
                </Link>
                <Link href="/dashboard" className="text-gray-600 hover:text-emerald-600 transition-colors">
                  Dashboard
                </Link>
              </nav>
            </div>
            
            <div className="flex items-center gap-4">
              <Link href="/dashboard">
                <div className="w-8 h-8 bg-emerald-100 rounded-full flex items-center justify-center">
                  <span className="text-emerald-600 font-medium text-sm">N</span>
                </div>
              </Link>
            </div>
          </div>
        </div>
      </header>

      <div className="max-w-7xl mx-auto px-6 py-8">
        {/* Breadcrumb */}
        <nav className="flex items-center gap-2 text-sm text-gray-600 mb-6">
          <Link href="/" className="hover:text-emerald-600">Home</Link>
          <i className="ri-arrow-right-s-line w-4 h-4 flex items-center justify-center"></i>
          <Link href="/browse" className="hover:text-emerald-600">Browse</Link>
          <i className="ri-arrow-right-s-line w-4 h-4 flex items-center justify-center"></i>
          <span className="text-gray-900">{itemData.title}</span>
        </nav>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Image Gallery */}
          <div>
            <ImageGallery images={itemData.images} />
          </div>

          {/* Item Details */}
          <div>
            <div className="bg-white rounded-2xl shadow-sm border border-gray-200 p-8">
              {/* Title and Status */}
              <div className="flex items-start justify-between mb-6">
                <div>
                  <h1 className="text-3xl font-bold text-gray-900 mb-2">{itemData.title}</h1>
                  <div className="flex items-center gap-3">
                    <span className={`px-3 py-1 rounded-full text-sm font-medium ${status.color}`}>
                      {status.text}
                    </span>
                    <span className="text-gray-500 text-sm">•</span>
                    <span className="text-gray-500 text-sm">{itemData.views} views</span>
                  </div>
                </div>
                <button 
                  onClick={handleLike}
                  className="flex items-center gap-2 text-gray-400 hover:text-red-500 transition-colors"
                >
                  <i className={`${isLiked ? 'ri-heart-fill text-red-500' : 'ri-heart-line'} w-6 h-6 flex items-center justify-center`}></i>
                  <span className="text-sm">{itemData.likes + likeCount}</span>
                </button>
              </div>

              {/* Points */}
              <div className="bg-emerald-50 rounded-xl p-4 mb-6">
                <div className="flex items-center justify-between">
                  <span className="text-emerald-700 font-medium">Exchange Value</span>
                  <span className="text-2xl font-bold text-emerald-600">{itemData.points} Points</span>
                </div>
              </div>

              {/* Item Info */}
              <div className="grid grid-cols-2 gap-4 mb-6">
                <div>
                  <label className="text-sm font-medium text-gray-700">Category</label>
                  <p className="text-gray-900">{itemData.category}</p>
                </div>
                <div>
                  <label className="text-sm font-medium text-gray-700">Condition</label>
                  <p className="text-gray-900">{itemData.condition}</p>
                </div>
                <div>
                  <label className="text-sm font-medium text-gray-700">Size</label>
                  <p className="text-gray-900">{itemData.size}</p>
                </div>
                <div>
                  <label className="text-sm font-medium text-gray-700">Listed</label>
                  <p className="text-gray-900">{itemData.listedDate}</p>
                </div>
              </div>

              {/* Tags */}
              <div className="mb-6">
                <label className="text-sm font-medium text-gray-700 mb-2 block">Tags</label>
                <div className="flex flex-wrap gap-2">
                  {itemData.tags.map((tag, index) => (
                    <span key={index} className="bg-gray-100 text-gray-700 px-3 py-1 rounded-full text-sm">
                      {tag}
                    </span>
                  ))}
                </div>
              </div>

              {/* Description */}
              <div className="mb-8">
                <label className="text-sm font-medium text-gray-700 mb-2 block">Description</label>
                <p className="text-gray-900 leading-relaxed">{itemData.description}</p>
              </div>

              {/* Action Buttons */}
              {itemData.availability === 'available' && (
                <div className="flex gap-4 mb-8">
                  <button
                    onClick={() => setShowSwapModal(true)}
                    className="flex-1 bg-emerald-500 hover:bg-emerald-600 text-white px-6 py-3 rounded-xl font-semibold transition-colors whitespace-nowrap"
                  >
                    Request Swap
                  </button>
                  <button
                    onClick={() => setShowRedeemModal(true)}
                    className="flex-1 bg-white border-2 border-emerald-500 text-emerald-600 hover:bg-emerald-50 px-6 py-3 rounded-xl font-semibold transition-colors whitespace-nowrap"
                  >
                    Redeem with Points
                  </button>
                </div>
              )}

              {/* Owner Info */}
              <div className="border-t border-gray-200 pt-6">
                <h3 className="text-lg font-semibold text-gray-900 mb-4">Item Owner</h3>
                <div className="flex items-center gap-4">
                  <img 
                    src={itemData.owner.avatar}
                    alt={itemData.owner.name}
                    className="w-16 h-16 rounded-full object-cover object-top"
                  />
                  <div className="flex-1">
                    <h4 className="font-semibold text-gray-900">{itemData.owner.name}</h4>
                    <div className="flex items-center gap-2 text-sm text-gray-600 mb-1">
                      <div className="flex items-center">
                        {[...Array(5)].map((_, i) => (
                          <i key={i} className={`ri-star-${i < Math.floor(itemData.owner.rating) ? 'fill' : 'line'} w-4 h-4 flex items-center justify-center text-yellow-400`}></i>
                        ))}
                        <span className="ml-1">{itemData.owner.rating}</span>
                      </div>
                    </div>
                    <p className="text-sm text-gray-600">
                      {itemData.owner.swapsCompleted} successful swaps • Member since {itemData.owner.joinDate}
                    </p>
                  </div>
                  <button className="bg-gray-100 hover:bg-gray-200 text-gray-700 px-4 py-2 rounded-lg font-medium transition-colors whitespace-nowrap">
                    View Profile
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Modals */}
      {showSwapModal && (
        <SwapRequestModal 
          item={itemData}
          onClose={() => setShowSwapModal(false)}
        />
      )}
      
      {showRedeemModal && (
        <RedeemModal 
          item={itemData}
          onClose={() => setShowRedeemModal(false)}
        />
      )}
    </div>
  );
}