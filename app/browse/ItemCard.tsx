'use client';

import Link from 'next/link';

interface Item {
  id: number;
  title: string;
  owner: string;
  points: number;
  image: string;
  condition: string;
  size: string;
  category: string;
  tags: string[];
}

interface ItemCardProps {
  item: Item;
}

export default function ItemCard({ item }: ItemCardProps) {
  return (
    <Link href={`/item/${item.id}`}>
      <div className="bg-white rounded-2xl shadow-md hover:shadow-xl transition-all duration-300 cursor-pointer overflow-hidden group">
        <div className="aspect-[4/5] overflow-hidden relative">
          <img 
            src={item.image}
            alt={item.title}
            className="w-full h-full object-cover object-top group-hover:scale-105 transition-transform duration-300"
          />
          <div className="absolute top-3 right-3">
            <span className="bg-white/90 backdrop-blur-sm px-2 py-1 rounded-full text-xs font-medium text-gray-700">
              {item.category}
            </span>
          </div>
        </div>
        
        <div className="p-5">
          <div className="flex justify-between items-start mb-2">
            <h3 className="text-lg font-semibold text-gray-900 line-clamp-1">{item.title}</h3>
            <span className="text-emerald-600 font-bold text-lg whitespace-nowrap ml-2">
              {item.points} pts
            </span>
          </div>
          
          <p className="text-gray-600 text-sm mb-3">by {item.owner}</p>
          
          <div className="flex justify-between items-center mb-3">
            <span className="text-sm bg-green-100 text-green-800 px-3 py-1 rounded-full">
              {item.condition}
            </span>
            <span className="text-sm text-gray-500">Size {item.size}</span>
          </div>
          
          <div className="flex flex-wrap gap-1 mb-3">
            {item.tags.slice(0, 2).map((tag, index) => (
              <span key={index} className="text-xs bg-gray-100 text-gray-600 px-2 py-1 rounded-full">
                {tag}
              </span>
            ))}
            {item.tags.length > 2 && (
              <span className="text-xs text-gray-500">+{item.tags.length - 2} more</span>
            )}
          </div>
          
          <div className="flex justify-between items-center">
            <span className="text-sm text-emerald-600 font-medium">Available</span>
            <div className="flex items-center gap-2">
              <button className="text-gray-400 hover:text-emerald-500 transition-colors">
                <i className="ri-heart-line w-5 h-5 flex items-center justify-center"></i>
              </button>
              <button className="text-gray-400 hover:text-emerald-500 transition-colors">
                <i className="ri-share-line w-5 h-5 flex items-center justify-center"></i>
              </button>
            </div>
          </div>
        </div>
      </div>
    </Link>
  );
}