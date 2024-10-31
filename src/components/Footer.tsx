import React from 'react';
import { Leaf, Instagram, Twitter, Linkedin } from 'lucide-react';

export default function Footer() {
  return (
    <footer className="bg-emerald-900 text-gray-300">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div className="col-span-1">
            <div className="flex items-center">
              <Leaf className="h-8 w-8 text-emerald-400" />
              <span className="ml-2 text-xl font-bold text-white">EcoFuel India</span>
            </div>
            <p className="mt-4 text-sm">
              Converting plastic waste into clean energy. Building a sustainable future for generations to come.
            </p>
          </div>
          
          <div>
            <h3 className="text-lg font-semibold text-white mb-4">Quick Links</h3>
            <ul className="space-y-2">
              <li><a href="#process" className="hover:text-emerald-400 transition-colors">Our Process</a></li>
              <li><a href="#impact" className="hover:text-emerald-400 transition-colors">Impact</a></li>
              <li><a href="#products" className="hover:text-emerald-400 transition-colors">Products</a></li>
              <li><a href="#contact" className="hover:text-emerald-400 transition-colors">Contact</a></li>
            </ul>
          </div>
          
          <div>
            <h3 className="text-lg font-semibold text-white mb-4">Get Involved</h3>
            <ul className="space-y-2">
              <li><a href="#" className="hover:text-emerald-400 transition-colors">Volunteer</a></li>
              <li><a href="#" className="hover:text-emerald-400 transition-colors">Careers</a></li>
              <li><a href="#" className="hover:text-emerald-400 transition-colors">Partner With Us</a></li>
              <li><a href="#" className="hover:text-emerald-400 transition-colors">Blog</a></li>
            </ul>
          </div>
          
          <div>
            <h3 className="text-lg font-semibold text-white mb-4">Newsletter</h3>
            <p className="text-sm mb-4">Stay updated with our latest initiatives</p>
            <form className="flex">
              <input
                type="email"
                placeholder="Enter your email"
                className="flex-1 px-4 py-2 rounded-l-full bg-emerald-800 border-emerald-700 text-white placeholder-emerald-400 focus:outline-none focus:ring-2 focus:ring-emerald-400"
              />
              <button className="px-4 py-2 bg-emerald-500 text-white rounded-r-full hover:bg-emerald-600 transition-colors">
                Subscribe
              </button>
            </form>
          </div>
        </div>
        
        <div className="mt-8 pt-8 border-t border-emerald-800 text-center text-sm">
          <p>&copy; {new Date().getFullYear()} EcoFuel India. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
}