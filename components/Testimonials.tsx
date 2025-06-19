// components/Testimonials.tsx
import { Star, Quote } from 'lucide-react';

const testimonials = [
  {
    name: 'Sienna Hewitt',
    handle: '@siennahewitt',
    quote: 'Finance Hub made getting a business loan incredibly easy. The process was transparent, quick, and the rates were competitive. Highly recommend!',
  },
  {
    name: 'Karl Rasmussen',
    handle: '@krasal',
    quote: 'I got my car loan approved in just 24 hours! The team was professional and guided me through every step. Excellent service.',
  },
  {
    name: 'Amélie Laurent',
    handle: '@alaurent_',
    quote: 'The personal loan helped me consolidate my debts. The interest rate was much better than my credit cards. Thank you Finance Hub!',
  },
  {
    name: 'Alliah Lane',
    handle: '@alliah_us',
    quote: 'Equipment financing through Finance Hub allowed me to expand my restaurant. The flexible payment terms were exactly what I needed.',
  },
  {
    name: 'Eduard Franz',
    handle: '@eduardfranz',
    quote: 'As a freelancer, getting approved for a loan was challenging elsewhere. Finance Hub understood my situation and provided excellent support.',
  },
  {
    name: 'Lily-Rose Okedijo',
    handle: '@ilyrose',
    quote: 'The vehicle loan process was seamless. I drove away with my new truck the same week I applied. Outstanding customer service!',
  },
];

export const Testimonials = () => (
  <section className="py-20 bg-gray-50 px-4 text-center">
    <h2 className="text-2xl md:text-3xl font-bold mb-4">What Our Customers Say</h2>
    <p className="text-gray-600 max-w-2xl mx-auto mb-12">
      Don’t just take our word for it. Here’s what thousands of satisfied customers have to say about their experience with Finance Hub.
    </p>

    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-7xl mx-auto">
      {testimonials.map((t, idx) => (
        <div key={idx} className="bg-white p-6 rounded-lg shadow-md text-left">
          <div className="flex items-center mb-2">
            {[...Array(5)].map((_, i) => (
              <Star key={i} className="w-4 h-4 text-yellow-400" fill="currentColor" />
            ))}
          </div>
          <Quote className="w-6 h-6 text-pink-600 mb-2" />
          <p className="text-gray-700 text-sm mb-4">{t.quote}</p>
          <div className="text-sm text-gray-900 font-medium">{t.name}</div>
          <div className="text-xs text-gray-500">{t.handle}</div>
        </div>
      ))}
    </div>
  </section>
);
