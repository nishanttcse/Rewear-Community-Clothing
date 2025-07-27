
'use client';

const recentSwaps = [
  {
    id: 1,
    type: "outgoing",
    item: "Silk Dupatta Set",
    partner: "Anjali M.",
    status: "completed",
    date: "2 days ago",
    avatar: "https://readdy.ai/api/search-image?query=Professional%20headshot%20of%20young%20Indian%20woman%20with%20friendly%20expression%2C%20clean%20background%2C%20traditional%20style%2C%20Indian%20ethnicity&width=40&height=40&seq=indian-user-1&orientation=squarish"
  },
  {
    id: 2,
    type: "incoming",
    item: "Designer Jhumkas",
    partner: "Riya K.",
    status: "pending",
    date: "1 week ago",
    avatar: "https://readdy.ai/api/search-image?query=Professional%20portrait%20of%20young%20Indian%20woman%20with%20modern%20style%2C%20clean%20background%2C%20friendly%20appearance%2C%20Indian%20ethnicity&width=40&height=40&seq=indian-user-2&orientation=squarish"
  },
  {
    id: 3,
    type: "outgoing",
    item: "Cotton Salwar Suit",
    partner: "Neha L.",
    status: "completed",
    date: "2 weeks ago",
    avatar: "https://readdy.ai/api/search-image?query=Professional%20headshot%20of%20Indian%20woman%20with%20elegant%20style%2C%20clean%20background%2C%20confident%20expression%2C%20traditional%20Indian%20beauty&width=40&height=40&seq=indian-user-3&orientation=squarish"
  }
];

export default function RecentSwaps() {
  const getStatusColor = (status: string) => {
    switch (status) {
      case 'completed':
        return 'bg-green-100 text-green-800';
      case 'pending':
        return 'bg-yellow-100 text-yellow-800';
      case 'cancelled':
        return 'bg-red-100 text-red-800';
      default:
        return 'bg-gray-100 text-gray-800';
    }
  };

  const getTypeIcon = (type: string) => {
    return type === 'outgoing' ? 'ri-arrow-right-line' : 'ri-arrow-left-line';
  };

  return (
    <div className="bg-white rounded-2xl p-6 shadow-sm border">
      <div className="flex items-center justify-between mb-6">
        <h2 className="text-xl font-semibold text-gray-900">Recent Swaps</h2>
        <button className="text-emerald-600 hover:text-emerald-700 text-sm font-medium cursor-pointer">
          View All
        </button>
      </div>
      
      <div className="space-y-4">
        {recentSwaps.map((swap) => (
          <div key={swap.id} className="flex items-center space-x-3 p-3 hover:bg-gray-50 rounded-lg transition-colors">
            <div className="relative">
              <img 
                src={swap.avatar}
                alt={swap.partner}
                className="w-10 h-10 rounded-full object-cover"
              />
              <div className={`absolute -bottom-1 -right-1 w-5 h-5 rounded-full flex items-center justify-center ${
                swap.type === 'outgoing' ? 'bg-blue-100' : 'bg-emerald-100'
              }`}>
                <i className={`${getTypeIcon(swap.type)} text-xs ${
                  swap.type === 'outgoing' ? 'text-blue-600' : 'text-emerald-600'
                }`}></i>
              </div>
            </div>
            
            <div className="flex-1 min-w-0">
              <div className="flex items-center space-x-2">
                <p className="text-sm font-medium text-gray-900 truncate">
                  {swap.item}
                </p>
              </div>
              <div className="flex items-center space-x-2 mt-1">
                <p className="text-xs text-gray-500">with {swap.partner}</p>
                <span className={`inline-flex items-center px-2 py-0.5 rounded-full text-xs font-medium ${getStatusColor(swap.status)}`}>
                  {swap.status}
                </span>
              </div>
              <p className="text-xs text-gray-400 mt-1">{swap.date}</p>
            </div>
          </div>
        ))}
      </div>
      
      {recentSwaps.length === 0 && (
        <div className="text-center py-8">
          <i className="ri-refresh-line text-4xl text-gray-300 mb-4"></i>
          <p className="text-gray-500">No swaps yet</p>
          <p className="text-sm text-gray-400">Browse items to make your first swap</p>
        </div>
      )}
    </div>
  );
}
