import React, { useState } from 'react';
import { Menu, X, Leaf } from 'lucide-react';

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="fixed w-full bg-emerald-900/95 backdrop-blur-md z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-16 items-center">
          <div className="flex items-center">
            <Leaf className="h-8 w-8 text-emerald-400" />
            <span className="ml-2 text-xl font-bold text-white">EcoFuel India</span>
          </div>
          
          <div className="hidden md:flex items-center space-x-8">
            <a href="#process" className="text-gray-300 hover:text-emerald-400 transition-colors">Process</a>
            <a href="#impact" className="text-gray-300 hover:text-emerald-400 transition-colors">Impact</a>
            <a href="#products" className="text-gray-300 hover:text-emerald-400 transition-colors">Products</a>
            <a href="#contact" className="text-gray-300 hover:text-emerald-400 transition-colors">Contact</a>
            <button className="bg-emerald-500 text-white px-4 py-2 rounded-full hover:bg-emerald-600 transition-colors">
              Join the Movement
            </button>
          </div>

          <div className="md:hidden">
            <button onClick={() => setIsOpen(!isOpen)} className="text-gray-300">
              {isOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </button>
          </div>
        </div>
      </div>

      {isOpen && (
        <div className="md:hidden">
          <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3 bg-emerald-900 border-t border-emerald-800">
            <a href="#process" className="block px-3 py-2 text-gray-300 hover:text-emerald-400">Process</a>
            <a href="#impact" className="block px-3 py-2 text-gray-300 hover:text-emerald-400">Impact</a>
            <a href="#products" className="block px-3 py-2 text-gray-300 hover:text-emerald-400">Products</a>
            <a href="#contact" className="block px-3 py-2 text-gray-300 hover:text-emerald-400">Contact</a>
            <button className="w-full mt-2 bg-emerald-500 text-white px-4 py-2 rounded-full hover:bg-emerald-600">
              Join the Movement
            </button>
          </div>
        </div>
      )}
    </nav>
  );
}