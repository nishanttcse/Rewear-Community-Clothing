
'use client';

import Link from 'next/link';

export default function Hero() {
  return (
    <div 
      className="relative min-h-screen flex items-center bg-cover bg-center"
      style={{
        backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.4), rgba(0, 0, 0, 0.4)), url('https://readdy.ai/api/search-image?query=Modern%20Indian%20sustainable%20fashion%20wardrobe%20with%20traditional%20and%20contemporary%20clothing%20items%2C%20elegant%20sarees%2C%20kurtas%20and%20western%20wear%20hanging%20neatly%2C%20soft%20natural%20lighting%2C%20minimalist%20clean%20background%20with%20plants%20and%20eco-friendly%20materials%2C%20conveying%20sustainability%20and%20conscious%20consumption%20in%20Indian%20context%2C%20professional%20photography%20style&width=1920&height=1080&seq=hero-bg-indian&orientation=landscape')`
      }}
    >
      <div className="w-full px-6 lg:px-8">
        <div className="flex flex-col lg:flex-row items-center justify-between max-w-7xl mx-auto">
          <div className="w-full lg:w-1/2 text-white text-center lg:text-left mb-8 lg:mb-0">
            <h1 className="text-5xl lg:text-7xl font-bold mb-6">
              <span className="font-pacifico text-emerald-400">ReWear</span>
            </h1>
            <h2 className="text-3xl lg:text-4xl font-semibold mb-6">
              Swap, Share, Save
            </h2>
            <p className="text-xl lg:text-2xl mb-8 leading-relaxed opacity-90">
              Transform your wardrobe sustainably. Exchange your preloved clothes directly or use our innovative points system. Join thousands of Indians reducing textile waste and discovering unique pieces.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
              <Link href="/auth/signup">
                <button className="bg-emerald-500 hover:bg-emerald-600 text-white px-8 py-4 rounded-full text-lg font-semibold transition-colors whitespace-nowrap cursor-pointer">
                  Get Started
                </button>
              </Link>
              <Link href="/browse">
                <button className="bg-transparent border-2 border-white text-white hover:bg-white hover:text-gray-900 px-8 py-4 rounded-full text-lg font-semibold transition-colors whitespace-nowrap cursor-pointer">
                  Browse Items
                </button>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
