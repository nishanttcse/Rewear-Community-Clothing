
'use client';

import React, { useState } from 'react';

interface ItemFormProps {
  itemData: any;
  onDataChange: (data: any) => void;
}

const categories = [
  'Traditional',
  'Indo-Western', 
  'Casual',
  'Footwear',
  'Accessories',
  'Jewelry'
];

const conditions = [
  { value: 'Like New', description: 'Perfect condition, barely worn' },
  { value: 'Excellent', description: 'Great condition with minimal wear' },
  { value: 'Very Good', description: 'Good condition with some minor wear' },
  { value: 'Good', description: 'Noticeable wear but still great quality' }
];

const sizes = {
  'Traditional': ['XS', 'S', 'M', 'L', 'XL', 'XXL', 'Free Size'],
  'Indo-Western': ['XS', 'S', 'M', 'L', 'XL', 'XXL'],
  'Casual': ['XS', 'S', 'M', 'L', 'XL', 'XXL'],
  'Footwear': ['5', '5.5', '6', '6.5', '7', '7.5', '8', '8.5', '9', '9.5', '10', '10.5', '11'],
  'Accessories': ['One Size', 'S', 'M', 'L'],
  'Jewelry': ['One Size', 'S', 'M', 'L']
};

export default function ItemForm({ itemData, onDataChange }: ItemFormProps) {
  const [newTag, setNewTag] = useState('');

  const handleInputChange = (field: string, value: any) => {
    if (field === 'category') {
      onDataChange({ [field]: value, size: '' });
    } else {
      onDataChange({ [field]: value });
    }
  };

  const addTag = (e: React.KeyboardEvent) => {
    if (e.key === 'Enter' && newTag.trim() && itemData.tags.length < 5) {
      e.preventDefault();
      const tags = [...itemData.tags, newTag.trim().toLowerCase()];
      onDataChange({ tags });
      setNewTag('');
    }
  };

  const removeTag = (index: number) => {
    const tags = itemData.tags.filter((_: any, i: number) => i !== index);
    onDataChange({ tags });
  };

  const calculatePoints = () => {
    let basePoints = 50;
    
    if (itemData.condition === 'Like New') basePoints += 50;
    else if (itemData.condition === 'Excellent') basePoints += 30;
    else if (itemData.condition === 'Very Good') basePoints += 20;
    else if (itemData.condition === 'Good') basePoints += 10;
    
    if (itemData.category === 'Traditional') basePoints += 40;
    else if (itemData.category === 'Indo-Western') basePoints += 30;
    else if (itemData.category === 'Jewelry') basePoints += 35;
    else if (itemData.category === 'Footwear') basePoints += 20;
    else if (itemData.category === 'Accessories') basePoints += 15;
    
    const finalPoints = Math.max(30, Math.min(400, basePoints));
    onDataChange({ pointValue: finalPoints });
    return finalPoints;
  };

  React.useEffect(() => {
    if (itemData.condition && itemData.category) {
      calculatePoints();
    }
  }, [itemData.condition, itemData.category]);

  return (
    <div className="space-y-8">
      <div>
        <h3 className="text-xl font-semibold text-gray-900 mb-2">Item Details</h3>
        <p className="text-gray-600">Provide accurate information to help others find your item.</p>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
        <div className="space-y-6">
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">
              Item Title *
            </label>
            <input
              type="text"
              value={itemData.title}
              onChange={(e) => handleInputChange('title', e.target.value)}
              placeholder="e.g., Designer Silk Saree, Cotton Kurta Set"
              maxLength={100}
              className="w-full px-4 py-3 border border-gray-300 rounded-lg text-sm focus:outline-none focus:ring-emerald-500 focus:border-emerald-500"
            />
            <p className="text-xs text-gray-500 mt-1">{itemData.title.length}/100 characters</p>
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">
              Description *
            </label>
            <textarea
              value={itemData.description}
              onChange={(e) => handleInputChange('description', e.target.value)}
              placeholder="Describe the item's condition, style, fit, and other relevant details..."
              maxLength={500}
              rows={5}
              className="w-full px-4 py-3 border border-gray-300 rounded-lg text-sm focus:outline-none focus:ring-emerald-500 focus:border-emerald-500 resize-none"
            />
            <p className="text-xs text-gray-500 mt-1">{itemData.description.length}/500 characters</p>
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">
              Category *
            </label>
            <select
              value={itemData.category}
              onChange={(e) => handleInputChange('category', e.target.value)}
              className="w-full px-4 py-3 pr-8 border border-gray-300 rounded-lg text-sm focus:outline-none focus:ring-emerald-500 focus:border-emerald-500 cursor-pointer"
            >
              <option value="">Select a category</option>
              {categories.map((category) => (
                <option key={category} value={category}>
                  {category}
                </option>
              ))}
            </select>
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">
              Size *
            </label>
            <select
              value={itemData.size}
              onChange={(e) => handleInputChange('size', e.target.value)}
              disabled={!itemData.category}
              className="w-full px-4 py-3 pr-8 border border-gray-300 rounded-lg text-sm focus:outline-none focus:ring-emerald-500 focus:border-emerald-500 cursor-pointer disabled:bg-gray-50 disabled:cursor-not-allowed"
            >
              <option value="">Select a size</option>
              {itemData.category && sizes[itemData.category as keyof typeof sizes]?.map((size) => (
                <option key={size} value={size}>
                  {size}
                </option>
              ))}
            </select>
          </div>
        </div>

        <div className="space-y-6">
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-3">
              Condition *
            </label>
            <div className="space-y-3">
              {conditions.map((condition) => (
                <label key={condition.value} className="flex items-start cursor-pointer group">
                  <input
                    type="radio"
                    name="condition"
                    value={condition.value}
                    checked={itemData.condition === condition.value}
                    onChange={(e) => handleInputChange('condition', e.target.value)}
                    className="h-4 w-4 text-emerald-600 focus:ring-emerald-500 border-gray-300 mt-1 cursor-pointer"
                  />
                  <div className="ml-3">
                    <div className="font-medium text-gray-900 group-hover:text-emerald-600 transition-colors">
                      {condition.value}
                    </div>
                    <div className="text-sm text-gray-500">{condition.description}</div>
                  </div>
                </label>
              ))}
            </div>
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">
              Tags (optional)
            </label>
            <input
              type="text"
              value={newTag}
              onChange={(e) => setNewTag(e.target.value)}
              onKeyDown={addTag}
              placeholder="Press Enter to add tags (e.g., silk, designer, wedding)"
              disabled={itemData.tags.length >= 5}
              className="w-full px-4 py-3 border border-gray-300 rounded-lg text-sm focus:outline-none focus:ring-emerald-500 focus:border-emerald-500 disabled:bg-gray-50"
            />
            <p className="text-xs text-gray-500 mt-1">
              {itemData.tags.length}/5 tags • Press Enter to add
            </p>
            {itemData.tags.length > 0 && (
              <div className="flex flex-wrap gap-2 mt-3">
                {itemData.tags.map((tag: string, index: number) => (
                  <span
                    key={index}
                    className="bg-emerald-100 text-emerald-800 px-3 py-1 rounded-full text-sm flex items-center gap-2"
                  >
                    {tag}
                    <button
                      onClick={() => removeTag(index)}
                      className="hover:text-emerald-600 cursor-pointer"
                    >
                      <i className="ri-close-line w-4 h-4 flex items-center justify-center"></i>
                    </button>
                  </span>
                ))}
              </div>
            )}
          </div>

          {itemData.condition && itemData.category && (
            <div className="bg-emerald-50 border border-emerald-200 rounded-lg p-4">
              <div className="flex items-center justify-between mb-2">
                <span className="font-medium text-emerald-900">Suggested Point Value</span>
                <span className="text-2xl font-bold text-emerald-600">{itemData.pointValue} pts</span>
              </div>
              <p className="text-sm text-emerald-700">
                Based on category and condition. You can adjust this during review.
              </p>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
