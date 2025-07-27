'use client';

export default function StatsCards() {
  const stats = [
    {
      title: "Available Points",
      value: "450",
      icon: "ri-coins-line",
      color: "emerald",
      change: "+25 this week"
    },
    {
      title: "Items Listed",
      value: "12",
      icon: "ri-shirt-line",
      color: "blue",
      change: "+2 this month"
    },
    {
      title: "Successful Swaps",
      value: "8",
      icon: "ri-refresh-line",
      color: "purple",
      change: "+1 this week"
    },
    {
      title: "Community Rating",
      value: "4.9",
      icon: "ri-star-fill",
      color: "yellow",
      change: "Excellent"
    }
  ];

  const getColorClasses = (color: string) => {
    const colors = {
      emerald: "bg-emerald-50 text-emerald-600",
      blue: "bg-blue-50 text-blue-600",
      purple: "bg-purple-50 text-purple-600",
      yellow: "bg-yellow-50 text-yellow-600"
    };
    return colors[color as keyof typeof colors];
  };

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
      {stats.map((stat, index) => (
        <div key={index} className="bg-white rounded-2xl p-6 shadow-sm border">
          <div className="flex items-center justify-between mb-4">
            <div className={`w-12 h-12 rounded-full flex items-center justify-center ${getColorClasses(stat.color)}`}>
              <i className={`${stat.icon} text-xl`}></i>
            </div>
          </div>
          <div className="space-y-1">
            <p className="text-sm text-gray-600">{stat.title}</p>
            <p className="text-2xl font-bold text-gray-900">{stat.value}</p>
            <p className="text-xs text-gray-500">{stat.change}</p>
          </div>
        </div>
      ))}
    </div>
  );
}