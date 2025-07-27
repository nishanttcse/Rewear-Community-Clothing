
'use client';

import { useState } from 'react';

interface FilterSidebarProps {
  onFilter: (filters: any) => void;
}

export default function FilterSidebar({ onFilter }: FilterSidebarProps) {
  const [filters, setFilters] = useState({
    category: 'all',
    condition: 'all',
    size: 'all',
    pointsRange: [0, 500]
  });

  const [isExpanded, setIsExpanded] = useState(false);

  const categories = ['all', 'Traditional', 'Indo-Western', 'Casual', 'Accessories', 'Footwear'];
  const conditions = ['all', 'Like New', 'Excellent', 'Very Good', 'Good'];
  const sizes = ['all', 'XS', 'S', 'M', 'L', 'XL', 'XXL', 'Free Size', '6', '7', '8', '9', '10'];

  const handleFilterChange = (key: string, value: any) => {
    const newFilters = { ...filters, [key]: value };
    setFilters(newFilters);
    onFilter(newFilters);
  };

  const clearFilters = () => {
    const resetFilters = {
      category: 'all',
      condition: 'all',
      size: 'all',
      pointsRange: [0, 500]
    };
    setFilters(resetFilters);
    onFilter(resetFilters);
  };

  return (
    <div className="w-full md:w-80">
      <div className="bg-white rounded-2xl shadow-md p-6">
        <div className="flex justify-between items-center mb-6">
          <h3 className="text-lg font-semibold text-gray-900">Filters</h3>
          <button
            onClick={clearFilters}
            className="text-sm text-emerald-600 hover:text-emerald-700 font-medium cursor-pointer"
          >
            Clear All
          </button>
        </div>

        <div className="space-y-6">
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-3">Category</label>
            <div className="space-y-2">
              {categories.map((category) => (
                <label key={category} className="flex items-center cursor-pointer">
                  <input
                    type="radio"
                    name="category"
                    value={category}
                    checked={filters.category === category}
                    onChange={(e) => handleFilterChange('category', e.target.value)}
                    className="h-4 w-4 text-emerald-600 focus:ring-emerald-500 border-gray-300 cursor-pointer"
                  />
                  <span className="ml-2 text-sm text-gray-700 capitalize">
                    {category === 'all' ? 'All Categories' : category}
                  </span>
                </label>
              ))}
            </div>
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-700 mb-3">Condition</label>
            <div className="space-y-2">
              {conditions.map((condition) => (
                <label key={condition} className="flex items-center cursor-pointer">
                  <input
                    type="radio"
                    name="condition"
                    value={condition}
                    checked={filters.condition === condition}
                    onChange={(e) => handleFilterChange('condition', e.target.value)}
                    className="h-4 w-4 text-emerald-600 focus:ring-emerald-500 border-gray-300 cursor-pointer"
                  />
                  <span className="ml-2 text-sm text-gray-700">
                    {condition === 'all' ? 'All Conditions' : condition}
                  </span>
                </label>
              ))}
            </div>
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-700 mb-3">Size</label>
            <select
              value={filters.size}
              onChange={(e) => handleFilterChange('size', e.target.value)}
              className="w-full px-3 py-2 pr-8 border border-gray-300 rounded-md text-sm focus:outline-none focus:ring-emerald-500 focus:border-emerald-500 cursor-pointer"
            >
              {sizes.map((size) => (
                <option key={size} value={size}>
                  {size === 'all' ? 'All Sizes' : size}
                </option>
              ))}
            </select>
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-700 mb-3">
              Points Range: {filters.pointsRange[0]} - {filters.pointsRange[1]}
            </label>
            <div className="space-y-3">
              <input
                type="range"
                min="0"
                max="500"
                value={filters.pointsRange[1]}
                onChange={(e) => handleFilterChange('pointsRange', [filters.pointsRange[0], parseInt(e.target.value)])}
                className="w-full h-2 bg-gray-200 rounded-lg appearance-none cursor-pointer"
              />
              <div className="flex justify-between text-xs text-gray-500">
                <span>0 pts</span>
                <span>500+ pts</span>
              </div>
            </div>
          </div>
        </div>

        <div className="mt-8 pt-6 border-t border-gray-200">
          <div className="text-sm text-gray-600">
            <div className="flex items-center mb-2">
              <i className="ri-information-line mr-2 w-4 h-4 flex items-center justify-center"></i>
              <span>Tips for better results:</span>
            </div>
            <ul className="list-disc list-inside space-y-1 text-xs ml-6">
              <li>Use specific search terms</li>
              <li>Try different category filters</li>
              <li>Check similar sizes</li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
}
