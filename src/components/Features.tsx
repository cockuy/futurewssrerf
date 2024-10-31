import React from 'react';
import { Brain, Clock, LineChart, Users } from 'lucide-react';

const features = [
  {
    name: 'AI-Powered Analysis',
    description: 'Our advanced AI analyzes your work patterns to provide personalized productivity insights.',
    icon: Brain
  },
  {
    name: 'Smart Scheduling',
    description: 'Automatically organize your calendar based on your peak productivity hours.',
    icon: Clock
  },
  {
    name: 'Team Collaboration',
    description: 'Seamlessly collaborate with your team and track shared project progress.',
    icon: Users
  },
  {
    name: 'Progress Tracking',
    description: 'Visualize your productivity trends with detailed analytics and reports.',
    icon: LineChart
  }
];

export default function Features() {
  return (
    <div id="features" className="bg-gray-50 py-24 sm:py-32">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="mx-auto max-w-2xl text-center">
          <h2 className="text-base font-semibold leading-7 text-indigo-600">Everything you need</h2>
          <p className="mt-2 text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
            Powerful Features for Maximum Productivity
          </p>
        </div>
        <div className="mx-auto mt-16 max-w-2xl sm:mt-20 lg:mt-24 lg:max-w-none">
          <dl className="grid max-w-xl grid-cols-1 gap-x-8 gap-y-16 lg:max-w-none lg:grid-cols-4">
            {features.map((feature) => (
              <div key={feature.name} className="flex flex-col">
                <dt className="flex items-center gap-x-3 text-base font-semibold leading-7 text-gray-900">
                  <feature.icon className="h-5 w-5 flex-none text-indigo-600" aria-hidden="true" />
                  {feature.name}
                </dt>
                <dd className="mt-4 flex flex-auto flex-col text-base leading-7 text-gray-600">
                  <p className="flex-auto">{feature.description}</p>
                </dd>
              </div>
            ))}
          </dl>
        </div>
      </div>
    </div>
  );
}