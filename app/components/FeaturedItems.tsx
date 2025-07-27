
'use client';

import Link from 'next/link';

const featuredItems = [
  {
    id: 1,
    title: "Designer Silk Saree",
    owner: "Priya S.",
    points: 180,
    image: "https://readdy.ai/api/search-image?query=Beautiful%20silk%20saree%20in%20rich%20colors%20on%20white%20background%2C%20professional%20Indian%20fashion%20photography%2C%20elegant%20traditional%20wear%2C%20clean%20minimal%20presentation%2C%20luxury%20Indian%20clothing%20item&width=400&height=500&seq=indian-item-1&orientation=portrait",
    condition: "Like New",
    size: "Free Size"
  },
  {
    id: 2,
    title: "Cotton Kurta Set",
    owner: "Arjun K.",
    points: 120,
    image: "https://readdy.ai/api/search-image?query=Elegant%20cotton%20kurta%20with%20churidar%20on%20white%20background%2C%20Indian%20traditional%20menswear%2C%20professional%20product%20photography%2C%20clean%20presentation%2C%20comfortable%20ethnic%20wear&width=400&height=500&seq=indian-item-2&orientation=portrait",
    condition: "Excellent",
    size: "L"
  },
  {
    id: 3,
    title: "Anarkali Suit",
    owner: "Kavya M.",
    points: 150,
    image: "https://readdy.ai/api/search-image?query=Beautiful%20Anarkali%20suit%20in%20vibrant%20colors%20on%20white%20background%2C%20Indian%20ethnic%20wear%20photography%2C%20elegant%20traditional%20dress%2C%20professional%20fashion%20showcase&width=400&height=500&seq=indian-item-3&orientation=portrait",
    condition: "Good",
    size: "M"
  },
  {
    id: 4,
    title: "Denim Jacket",
    owner: "Rohit T.",
    points: 90,
    image: "https://readdy.ai/api/search-image?query=Classic%20denim%20jacket%20on%20white%20background%2C%20casual%20western%20wear%2C%20professional%20product%20photography%2C%20modern%20fashion%20item%2C%20clean%20minimal%20styling&width=400&height=500&seq=indian-item-4&orientation=portrait",
    condition: "Excellent",
    size: "L"
  }
];

export default function FeaturedItems() {
  return (
    <section className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-900 mb-4">Featured Items</h2>
          <p className="text-xl text-gray-600">Discover unique pieces from our community</p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {featuredItems.map((item) => (
            <Link href={`/item/${item.id}`} key={item.id}>
              <div className="bg-white rounded-2xl shadow-lg hover:shadow-xl transition-shadow cursor-pointer overflow-hidden">
                <div className="aspect-[4/5] overflow-hidden">
                  <img 
                    src={item.image}
                    alt={item.title}
                    className="w-full h-full object-cover object-top hover:scale-105 transition-transform duration-300"
                  />
                </div>
                <div className="p-6">
                  <h3 className="text-xl font-semibold text-gray-900 mb-2">{item.title}</h3>
                  <p className="text-gray-600 mb-2">by {item.owner}</p>
                  <div className="flex justify-between items-center mb-4">
                    <span className="text-emerald-600 font-bold text-lg">{item.points} pts</span>
                    <span className="text-sm text-gray-500">Size {item.size}</span>
                  </div>
                  <div className="flex justify-between items-center">
                    <span className="text-sm bg-green-100 text-green-800 px-3 py-1 rounded-full">
                      {item.condition}
                    </span>
                    <span className="text-sm text-emerald-600 font-medium">Available</span>
                  </div>
                </div>
              </div>
            </Link>
          ))}
        </div>
        
        <div className="text-center mt-12">
          <Link href="/browse">
            <button className="bg-emerald-500 hover:bg-emerald-600 text-white px-8 py-4 rounded-full text-lg font-semibold transition-colors whitespace-nowrap cursor-pointer">
              View All Items
            </button>
          </Link>
        </div>
      </div>
    </section>
  );
}
