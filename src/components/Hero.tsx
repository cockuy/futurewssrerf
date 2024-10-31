import React from 'react';
import { ArrowRight, Recycle } from 'lucide-react';

export default function Hero() {
  return (
    <div className="relative bg-emerald-900 pt-16">
      <div className="absolute inset-0 overflow-hidden">
        <img
          src="https://images.unsplash.com/photo-1532996122724-e3c354a0b15b?auto=format&fit=crop&q=80"
          alt="Recycling process"
          className="w-full h-full object-cover opacity-20"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-emerald-900 via-emerald-900/95 to-emerald-900/90" />
      </div>
      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-20 pb-24 text-center lg:pt-32">
        <div className="flex items-center justify-center mb-8">
          <Recycle className="h-12 w-12 text-emerald-400 animate-spin-slow" />
        </div>
        <h1 className="mx-auto max-w-4xl text-5xl font-bold tracking-tight text-white sm:text-7xl">
          Fueling a
          <span className="block text-emerald-400 mt-2">Greener Future</span>
        </h1>
        <p className="mx-auto mt-6 max-w-2xl text-lg text-gray-300">
          Converting plastic waste into clean energy. Join us in our mission to create a sustainable tomorrow by transforming environmental challenges into renewable solutions.
        </p>
        <div className="mt-10 flex justify-center gap-x-6">
          <button className="group inline-flex items-center justify-center rounded-full bg-emerald-500 px-6 py-3 text-sm font-semibold text-white hover:bg-emerald-600 transition-all">
            Learn Our Process
            <ArrowRight className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform" />
          </button>
          <button className="group inline-flex items-center justify-center rounded-full border border-gray-400 px-6 py-3 text-sm font-semibold text-gray-100 hover:bg-white/10 transition-all">
            View Impact
          </button>
        </div>
      </div>
    </div>
  );
}