
'use client';

import { useState } from 'react';
import Link from 'next/link';
import ItemCard from './ItemCard';
import FilterSidebar from './FilterSidebar';

const allItems = [
  {
    id: 1,
    title: "Designer Silk Saree",
    owner: "Priya S.",
    points: 220,
    image: "https://readdy.ai/api/search-image?query=Beautiful%20silk%20saree%20in%20rich%20red%20and%20gold%20colors%20on%20white%20background%2C%20professional%20Indian%20fashion%20photography%2C%20elegant%20traditional%20wear%2C%20clean%20minimal%20presentation%2C%20luxury%20Indian%20clothing%20item&width=400&height=500&seq=browse-indian-1&orientation=portrait",
    condition: "Excellent",
    size: "Free Size",
    category: "Traditional",
    tags: ["silk", "saree", "wedding"]
  },
  {
    id: 2,
    title: "Cotton Kurta Set",
    owner: "Arjun K.",
    points: 120,
    image: "https://readdy.ai/api/search-image?query=Elegant%20cotton%20kurta%20with%20churidar%20in%20white%20and%20blue%20on%20white%20background%2C%20Indian%20traditional%20menswear%2C%20professional%20product%20photography%2C%20clean%20presentation&width=400&height=500&seq=browse-indian-2&orientation=portrait",
    condition: "Like New",
    size: "L",
    category: "Traditional",
    tags: ["cotton", "kurta", "ethnic"]
  },
  {
    id: 3,
    title: "Anarkali Suit",
    owner: "Kavya M.",
    points: 180,
    image: "https://readdy.ai/api/search-image?query=Beautiful%20Anarkali%20suit%20in%20vibrant%20pink%20and%20gold%20colors%20on%20white%20background%2C%20Indian%20ethnic%20wear%20photography%2C%20elegant%20traditional%20dress%2C%20professional%20fashion%20showcase&width=400&height=500&seq=browse-indian-3&orientation=portrait",
    condition: "Good",
    size: "M",
    category: "Traditional",
    tags: ["anarkali", "party", "ethnic"]
  },
  {
    id: 4,
    title: "Designer Lehenga",
    owner: "Riya T.",
    points: 350,
    image: "https://readdy.ai/api/search-image?query=Stunning%20designer%20lehenga%20in%20royal%20blue%20with%20heavy%20embroidery%20on%20white%20background%2C%20Indian%20wedding%20wear%2C%20luxury%20traditional%20outfit%2C%20professional%20photography&width=400&height=500&seq=browse-indian-4&orientation=portrait",
    condition: "Like New",
    size: "S",
    category: "Traditional",
    tags: ["lehenga", "wedding", "designer"]
  },
  {
    id: 5,
    title: "Casual Palazzo Set",
    owner: "Sneha L.",
    points: 90,
    image: "https://readdy.ai/api/search-image?query=Comfortable%20palazzo%20set%20with%20kurta%20in%20pastel%20colors%20on%20white%20background%2C%20Indo-western%20casual%20wear%2C%20modern%20Indian%20fashion%2C%20clean%20presentation&width=400&height=500&seq=browse-indian-5&orientation=portrait",
    condition: "Very Good",
    size: "M",
    category: "Indo-Western",
    tags: ["palazzo", "casual", "comfort"]
  },
  {
    id: 6,
    title: "Bandhani Dupatta",
    owner: "Meera P.",
    points: 65,
    image: "https://readdy.ai/api/search-image?query=Traditional%20bandhani%20dupatta%20in%20bright%20colors%20on%20white%20background%2C%20Indian%20handicraft%20textile%2C%20ethnic%20accessory%20photography%2C%20cultural%20heritage%20item&width=400&height=500&seq=browse-indian-6&orientation=portrait",
    condition: "Excellent",
    size: "One Size",
    category: "Accessories",
    tags: ["bandhani", "dupatta", "traditional"]
  },
  {
    id: 7,
    title: "Printed Cotton Kurti",
    owner: "Aditi M.",
    points: 75,
    image: "https://readdy.ai/api/search-image?query=Beautiful%20printed%20cotton%20kurti%20with%20floral%20patterns%20on%20white%20background%2C%20casual%20Indian%20wear%2C%20comfortable%20everyday%20outfit%2C%20professional%20product%20photography&width=400&height=500&seq=browse-indian-7&orientation=portrait",
    condition: "Good",
    size: "L",
    category: "Casual",
    tags: ["kurti", "cotton", "daily"]
  },
  {
    id: 8,
    title: "Chanderi Suit",
    owner: "Isha W.",
    points: 160,
    image: "https://readdy.ai/api/search-image?query=Elegant%20Chanderi%20suit%20in%20soft%20pastel%20colors%20on%20white%20background%2C%20traditional%20Indian%20handloom%20fabric%2C%20ethnic%20formal%20wear%2C%20luxury%20textile%20showcase&width=400&height=500&seq=browse-indian-8&orientation=portrait",
    condition: "Like New",
    size: "M",
    category: "Traditional",
    tags: ["chanderi", "handloom", "formal"]
  }
];

export default function BrowsePage() {
  const [filteredItems, setFilteredItems] = useState(allItems);
  const [searchTerm, setSearchTerm] = useState('');
  const [sortBy, setSortBy] = useState('newest');

  const handleSearch = (term: string) => {
    setSearchTerm(term);
    const filtered = allItems.filter(item =>
      item.title.toLowerCase().includes(term.toLowerCase()) ||
      item.tags.some(tag => tag.toLowerCase().includes(term.toLowerCase())) ||
      item.category.toLowerCase().includes(term.toLowerCase())
    );
    setFilteredItems(filtered);
  };

  const handleFilter = (filters: any) => {
    let filtered = allItems;

    if (filters.category && filters.category !== 'all') {
      filtered = filtered.filter(item => item.category === filters.category);
    }

    if (filters.condition && filters.condition !== 'all') {
      filtered = filtered.filter(item => item.condition === filters.condition);
    }

    if (filters.size && filters.size !== 'all') {
      filtered = filtered.filter(item => item.size === filters.size);
    }

    if (filters.pointsRange) {
      filtered = filtered.filter(item => 
        item.points >= filters.pointsRange[0] && item.points <= filters.pointsRange[1]
      );
    }

    setFilteredItems(filtered);
  };

  const handleSort = (sortOption: string) => {
    setSortBy(sortOption);
    let sorted = [...filteredItems];
    
    switch (sortOption) {
      case 'points-low':
        sorted.sort((a, b) => a.points - b.points);
        break;
      case 'points-high':
        sorted.sort((a, b) => b.points - a.points);
        break;
      case 'newest':
        sorted.sort((a, b) => b.id - a.id);
        break;
      case 'alphabetical':
        sorted.sort((a, b) => a.title.localeCompare(b.title));
        break;
    }
    
    setFilteredItems(sorted);
  };

  return (
    <div className="min-h-screen bg-gray-50">
      <div className="bg-white shadow-sm border-b">
        <div className="max-w-7xl mx-auto px-6 lg:px-8 py-6">
          <div className="flex justify-between items-center mb-6">
            <div>
              <h1 className="text-3xl font-bold text-gray-900">Browse Items</h1>
              <p className="text-gray-600 mt-1">Discover amazing pieces from our community</p>
            </div>
            <Link href="/add-item">
              <button className="bg-emerald-500 hover:bg-emerald-600 text-white px-6 py-3 rounded-full font-semibold transition-colors whitespace-nowrap cursor-pointer">
                <i className="ri-add-line mr-2"></i>
                List Item
              </button>
            </Link>
          </div>

          <div className="flex flex-col md:flex-row gap-4">
            <div className="flex-1">
              <div className="relative">
                <i className="ri-search-line absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400"></i>
                <input
                  type="text"
                  placeholder="Search items, categories, or tags..."
                  value={searchTerm}
                  onChange={(e) => handleSearch(e.target.value)}
                  className="w-full pl-10 pr-4 py-3 border border-gray-300 rounded-full text-sm focus:outline-none focus:ring-emerald-500 focus:border-emerald-500"
                />
              </div>
            </div>
            <div className="flex items-center gap-4">
              <select
                value={sortBy}
                onChange={(e) => handleSort(e.target.value)}
                className="px-4 py-3 pr-8 border border-gray-300 rounded-full text-sm focus:outline-none focus:ring-emerald-500 focus:border-emerald-500 cursor-pointer"
              >
                <option value="newest">Newest First</option>
                <option value="points-low">Points: Low to High</option>
                <option value="points-high">Points: High to Low</option>
                <option value="alphabetical">Alphabetical</option>
              </select>
            </div>
          </div>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-6 lg:px-8 py-8">
        <div className="flex gap-8">
          <FilterSidebar onFilter={handleFilter} />
          
          <div className="flex-1">
            <div className="mb-6">
              <p className="text-gray-600">
                Showing {filteredItems.length} of {allItems.length} items
              </p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
              {filteredItems.map((item) => (
                <ItemCard key={item.id} item={item} />
              ))}
            </div>
            
            {filteredItems.length === 0 && (
              <div className="text-center py-12">
                <i className="ri-search-line text-6xl text-gray-300 mb-4"></i>
                <h3 className="text-xl font-semibold text-gray-600 mb-2">No items found</h3>
                <p className="text-gray-500">Try adjusting your search or filters</p>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}
