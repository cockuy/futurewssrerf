import React from 'react';

const clients = [
  {
    name: 'Phillips',
    logo: 'https://images.unsplash.com/photo-1631700611307-37dbcb89ef7e?auto=format&fit=crop&q=80',
    description: 'Trusted supplier for industrial rubber components'
  },
  {
    name: 'Bosch',
    logo: 'https://images.unsplash.com/photo-1635350736475-c8cef4b21906?auto=format&fit=crop&q=80',
    description: 'Partner in manufacturing excellence'
  },
  {
    name: 'Sutlej',
    logo: 'https://images.unsplash.com/photo-1560179707-f14e90ef3623?auto=format&fit=crop&q=80',
    description: 'Long-term collaboration in industrial solutions'
  }
];

export default function Clients() {
  return (
    <section id="clients" className="bg-slate-900 py-24">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center">
          <h2 className="text-3xl font-bold tracking-tight text-white sm:text-4xl">Trusted by Industry Leaders</h2>
          <p className="mt-4 text-lg text-gray-300">
            Partnering with top manufacturers to deliver excellence
          </p>
        </div>

        <div className="mt-16 grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-3">
          {clients.map((client) => (
            <div key={client.name} className="bg-slate-800 rounded-lg p-8 text-center">
              <img
                src={client.logo}
                alt={client.name}
                className="mx-auto h-12 w-auto mb-4"
              />
              <h3 className="text-xl font-semibold text-white mb-2">{client.name}</h3>
              <p className="text-gray-300">{client.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}