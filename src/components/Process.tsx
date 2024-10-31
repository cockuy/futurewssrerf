import React from 'react';
import { Truck, Filter, TestTube, Droplet } from 'lucide-react';

const steps = [
  {
    icon: Truck,
    title: 'Collection',
    description: 'We collect plastic waste from various sources, including community recycling centers and industrial partners.'
  },
  {
    icon: Filter,
    title: 'Sorting & Processing',
    description: 'Advanced sorting technology separates different types of plastics for optimal processing.'
  },
  {
    icon: TestTube,
    title: 'Pyrolysis',
    description: 'Our innovative pyrolysis process breaks down plastic waste into its base components.'
  },
  {
    icon: Droplet,
    title: 'Refinement',
    description: 'The final step converts raw materials into clean, high-quality fuel products.'
  }
];

export default function Process() {
  return (
    <section id="process" className="bg-white py-24">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center">
          <h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
            Our Process
          </h2>
          <p className="mt-4 text-lg text-gray-600">
            Converting plastic waste into clean fuel through innovative technology
          </p>
        </div>

        <div className="mt-16 grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-4">
          {steps.map((step, index) => (
            <div key={step.title} className="relative">
              {index !== steps.length - 1 && (
                <div className="hidden lg:block absolute top-12 left-full w-full h-0.5 bg-emerald-100" />
              )}
              <div className="relative flex flex-col items-center p-6 bg-white rounded-lg shadow-lg border border-emerald-100">
                <div className="flex h-12 w-12 items-center justify-center rounded-full bg-emerald-100 text-emerald-600">
                  <step.icon className="h-6 w-6" />
                </div>
                <h3 className="mt-4 text-lg font-semibold text-gray-900">{step.title}</h3>
                <p className="mt-2 text-sm text-gray-600 text-center">{step.description}</p>
              </div>
            </div>
          ))}
        </div>

        <div className="mt-16 bg-emerald-50 rounded-2xl p-8">
          <div className="aspect-w-16 aspect-h-9">
            <iframe
              className="rounded-lg"
              src="https://www.youtube.com/embed/your-video-id"
              title="Plastic to Fuel Process"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
            ></iframe>
          </div>
        </div>
      </div>
    </section>
  );
}