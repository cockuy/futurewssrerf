import React from 'react';
import { Scale, TreePine, Factory } from 'lucide-react';

const metrics = [
  {
    label: 'Plastic Recycled',
    value: '50,000+',
    unit: 'Tons',
    icon: Scale
  },
  {
    label: 'CO₂ Reduced',
    value: '75,000+',
    unit: 'Tons',
    icon: TreePine
  },
  {
    label: 'Clean Fuel Produced',
    value: '40,000+',
    unit: 'Kiloliters',
    icon: Factory
  }
];

export default function Impact() {
  return (
    <section id="impact" className="bg-emerald-900 py-24">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center">
          <h2 className="text-3xl font-bold tracking-tight text-white sm:text-4xl">
            Our Environmental Impact
          </h2>
          <p className="mt-4 text-lg text-emerald-100">
            Making a measurable difference in India's sustainability journey
          </p>
        </div>

        <div className="mt-16 grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-3">
          {metrics.map((metric) => (
            <div key={metric.label} className="bg-emerald-800/50 backdrop-blur-lg rounded-lg p-8">
              <div className="flex items-center justify-center h-12 w-12 rounded-md bg-emerald-500 text-white mx-auto">
                <metric.icon className="h-6 w-6" />
              </div>
              <div className="mt-4 text-center">
                <p className="text-4xl font-bold text-white">{metric.value}</p>
                <p className="text-sm text-emerald-300">{metric.unit}</p>
                <p className="mt-2 text-lg text-emerald-100">{metric.label}</p>
              </div>
            </div>
          ))}
        </div>

        <div className="mt-16 bg-emerald-800/50 backdrop-blur-lg rounded-lg p-8">
          <h3 className="text-2xl font-bold text-white text-center mb-8">
            Where We Make an Impact
          </h3>
          <div className="aspect-w-16 aspect-h-9">
            <img
              src="https://images.unsplash.com/photo-1524661135-423995f22d0b?auto=format&fit=crop&q=80"
              alt="India Map"
              className="rounded-lg object-cover"
            />
          </div>
        </div>
      </div>
    </section>
  );
}