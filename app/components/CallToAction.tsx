
'use client';

import Link from 'next/link';

export default function CallToAction() {
  return (
    <section className="py-20 bg-emerald-600">
      <div className="max-w-4xl mx-auto text-center px-6 lg:px-8">
        <h2 className="text-4xl font-bold text-white mb-6">
          Ready to Transform Your Wardrobe?
        </h2>
        <p className="text-xl text-emerald-100 mb-10 leading-relaxed">
          Join thousands of Indians who are already making sustainable fashion choices. 
          Start swapping today and discover your next favorite piece while helping the planet.
        </p>
        
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <Link href="/auth/signup">
            <button className="bg-white text-emerald-600 hover:bg-gray-100 px-8 py-4 rounded-full text-lg font-semibold transition-colors whitespace-nowrap cursor-pointer">
              Join ReWear
            </button>
          </Link>
          <Link href="/add-item">
            <button className="bg-transparent border-2 border-white text-white hover:bg-white hover:text-emerald-600 px-8 py-4 rounded-full text-lg font-semibold transition-colors whitespace-nowrap cursor-pointer">
              List Your First Item
            </button>
          </Link>
        </div>
        
        <div className="mt-12 grid grid-cols-1 md:grid-cols-3 gap-8 text-white">
          <div>
            <div className="text-3xl font-bold">25,000+</div>
            <div className="text-emerald-200">Items Swapped</div>
          </div>
          <div>
            <div className="text-3xl font-bold">12,000+</div>
            <div className="text-emerald-200">Active Users</div>
          </div>
          <div>
            <div className="text-3xl font-bold">75 tons</div>
            <div className="text-emerald-200">Textile Waste Saved</div>
          </div>
        </div>
      </div>
    </section>
  );
}
