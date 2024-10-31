import React from 'react';
import { Droplet, Truck, Factory } from 'lucide-react';

const products = [
  {
    name: 'EcoClean Diesel',
    description: 'High-performance diesel fuel produced from recycled plastic waste.',
    icon: Droplet,
    specs: ['Low emissions', 'High efficiency', 'EURO VI compliant']
  },
  {
    name: 'Industrial Fuel',
    description: 'Specialized fuel solutions for manufacturing and industrial applications.',
    icon: Factory,
    specs: ['Consistent quality', 'Cost-effective', 'Reduced carbon footprint']
  },
  {
    name: 'Fleet Solutions',
    description: 'Bulk fuel supply for transportation and logistics companies.',
    icon: Truck,
    specs: ['Nationwide delivery', 'Quality assured', 'Competitive pricing']
  }
];

export default function Products() {
  return (
    <section id="products" className="bg-white py-24">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center">
          <h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
            Our Products
          </h2>
          <p className="mt-4 text-lg text-gray-600">
            Sustainable fuel solutions for a cleaner future
          </p>
        </div>

        <div className="mt-16 grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3">
          {products.map((product) => (
            <div key={product.name} className="bg-white rounded-xl shadow-xl overflow-hidden border border-emerald-100">
              <div className="p-8">
                <div className="flex items-center justify-center h-12 w-12 rounded-md bg-emerald-500 text-white mx-auto">
                  <product.icon className="h-6 w-6" />
                </div>
                <h3 className="mt-6 text-xl font-semibold text-gray-900 text-center">{product.name}</h3>
                <p className="mt-4 text-gray-600 text-center">{product.description}</p>
                <ul className="mt-6 space-y-2">
                  {product.specs.map((spec) => (
                    <li key={spec} className="flex items-center text-sm text-gray-600">
                      <span className="h-1.5 w-1.5 rounded-full bg-emerald-500 mr-2"></span>
                      {spec}
                    </li>
                  ))}
                </ul>
                <button className="mt-8 w-full bg-emerald-500 text-white px-4 py-2 rounded-full hover:bg-emerald-600 transition-colors">
                  Learn More
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}