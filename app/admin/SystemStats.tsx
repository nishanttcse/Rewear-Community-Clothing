'use client';

export default function SystemStats() {
  const stats = [
    {
      title: "Total Users",
      value: "1,247",
      change: "+12.3%",
      changeType: "positive" as const,
      icon: "ri-user-line"
    },
    {
      title: "Items Listed",
      value: "3,892",
      change: "+8.7%",
      changeType: "positive" as const,
      icon: "ri-shirt-line"
    },
    {
      title: "Successful Swaps",
      value: "856",
      change: "+15.2%",
      changeType: "positive" as const,
      icon: "ri-arrow-left-right-line"
    },
    {
      title: "Pending Reviews",
      value: "23",
      change: "-5.1%",
      changeType: "negative" as const,
      icon: "ri-time-line"
    }
  ];

  const recentActivity = [
    {
      id: 1,
      type: "swap",
      message: "Sarah Chen completed a swap with Mike Johnson",
      time: "2 minutes ago",
      icon: "ri-arrow-left-right-line",
      color: "text-green-600"
    },
    {
      id: 2,
      type: "listing",
      message: "New item listed: 'Vintage Denim Jacket' by Emma Wilson",
      time: "5 minutes ago",
      icon: "ri-add-line",
      color: "text-blue-600"
    },
    {
      id: 3,
      type: "user",
      message: "New user registration: Alex Thompson",
      time: "12 minutes ago",
      icon: "ri-user-add-line",
      color: "text-emerald-600"
    },
    {
      id: 4,
      type: "report",
      message: "Item reported for inappropriate content",
      time: "18 minutes ago",
      icon: "ri-flag-line",
      color: "text-red-600"
    }
  ];

  return (
    <div>
      <div className="mb-8">
        <h2 className="text-xl font-semibold text-gray-900 mb-2">System Overview</h2>
        <p className="text-gray-600">Real-time platform statistics and activity</p>
      </div>

      {/* Stats Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
        {stats.map((stat, index) => (
          <div key={index} className="bg-white border border-gray-200 rounded-xl p-6">
            <div className="flex items-center justify-between mb-4">
              <div className="w-12 h-12 bg-emerald-100 rounded-xl flex items-center justify-center">
                <i className={`${stat.icon} w-6 h-6 flex items-center justify-center text-emerald-600`}></i>
              </div>
              <span className={`text-sm font-medium ${
                stat.changeType === 'positive' ? 'text-green-600' : 'text-red-600'
              }`}>
                {stat.change}
              </span>
            </div>
            <div className="text-2xl font-bold text-gray-900 mb-1">{stat.value}</div>
            <div className="text-sm text-gray-600">{stat.title}</div>
          </div>
        ))}
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
        {/* Recent Activity */}
        <div className="bg-white border border-gray-200 rounded-xl p-6">
          <h3 className="text-lg font-semibold text-gray-900 mb-4">Recent Activity</h3>
          <div className="space-y-4">
            {recentActivity.map((activity) => (
              <div key={activity.id} className="flex items-start gap-3">
                <div className={`w-8 h-8 rounded-full bg-gray-100 flex items-center justify-center ${activity.color}`}>
                  <i className={`${activity.icon} w-4 h-4 flex items-center justify-center`}></i>
                </div>
                <div className="flex-1">
                  <p className="text-sm text-gray-900">{activity.message}</p>
                  <p className="text-xs text-gray-500 mt-1">{activity.time}</p>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Quick Stats */}
        <div className="bg-white border border-gray-200 rounded-xl p-6">
          <h3 className="text-lg font-semibold text-gray-900 mb-4">Platform Health</h3>
          <div className="space-y-4">
            <div className="flex items-center justify-between">
              <span className="text-sm text-gray-600">Active Users Today</span>
              <span className="text-sm font-semibold text-gray-900">324</span>
            </div>
            <div className="flex items-center justify-between">
              <span className="text-sm text-gray-600">Items Added Today</span>
              <span className="text-sm font-semibold text-gray-900">47</span>
            </div>
            <div className="flex items-center justify-between">
              <span className="text-sm text-gray-600">Swaps Completed Today</span>
              <span className="text-sm font-semibold text-gray-900">12</span>
            </div>
            <div className="flex items-center justify-between">
              <span className="text-sm text-gray-600">Reports Pending</span>
              <span className="text-sm font-semibold text-red-600">3</span>
            </div>
            <div className="flex items-center justify-between">
              <span className="text-sm text-gray-600">System Uptime</span>
              <span className="text-sm font-semibold text-green-600">99.9%</span>
            </div>
          </div>

          <div className="mt-6 pt-4 border-t border-gray-200">
            <div className="flex items-center justify-between text-sm">
              <span className="text-gray-600">Server Status</span>
              <div className="flex items-center gap-2">
                <div className="w-2 h-2 bg-green-500 rounded-full"></div>
                <span className="text-green-600 font-medium">Operational</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}