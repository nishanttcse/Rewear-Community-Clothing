
'use client';

export default function Features() {
  const features = [
    {
      icon: "ri-refresh-line",
      title: "Direct Swaps",
      description: "Exchange items directly with other users. Find the perfect match for your style preferences."
    },
    {
      icon: "ri-coins-line",
      title: "Points System",
      description: "Earn points by listing items and redeem them for your favorite pieces. Fair and flexible trading."
    },
    {
      icon: "ri-leaf-line",
      title: "Sustainable Fashion",
      description: "Reduce textile waste and promote circular economy. Every swap makes a difference for our planet."
    },
    {
      icon: "ri-shield-check-line",
      title: "Quality Assured",
      description: "All items are moderated and verified. Shop with confidence."
    },
    {
      icon: "ri-community-line",
      title: "Community Driven",
      description: "Join a community of fashion-conscious Indians who care about sustainability and style."
    },
    {
      icon: "ri-smartphone-line",
      title: "Easy to Use",
      description: "Simple, intuitive platform. List items in minutes and discover new favorites effortlessly."
    }
  ];

  return (
    <section className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-900 mb-4">Why Choose ReWear?</h2>
          <p className="text-xl text-gray-600">Sustainable fashion made simple and rewarding</p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <div key={index} className="text-center p-8 rounded-2xl bg-gray-50 hover:bg-emerald-50 transition-colors">
              <div className="w-16 h-16 bg-emerald-100 rounded-full flex items-center justify-center mx-auto mb-6">
                <i className={`${feature.icon} text-2xl text-emerald-600`}></i>
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-4">{feature.title}</h3>
              <p className="text-gray-600 leading-relaxed">{feature.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
