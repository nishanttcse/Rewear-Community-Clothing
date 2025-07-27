'use client';

import Link from 'next/link';
import Hero from './components/Hero';
import FeaturedItems from './components/FeaturedItems';
import Features from './components/Features';
import CallToAction from './components/CallToAction';

export default function Home() {
  return (
    <div className="min-h-screen bg-white">
      <Hero />
      <FeaturedItems />
      <Features />
      <CallToAction />
    </div>
  );
}