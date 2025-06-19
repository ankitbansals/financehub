// components/WhyFinanceHub.tsx
import { ShieldCheck, Clock, Percent, HeartHandshake } from 'lucide-react';

const features = [
  {
    icon: <ShieldCheck className="w-6 h-6 text-pink-600" />,
    title: 'Trusted & Secure',
    desc: 'Highest level security with encrypted transactions and data protection you can trust',
  },
  {
    icon: <Clock className="w-6 h-6 text-pink-600" />,
    title: 'Quick Approvals',
    desc: 'Get approved in as little as 12 hours with our streamlined digital process.',
  },
  {
    icon: <Percent className="w-6 h-6 text-pink-600" />,
    title: 'Competitive Rates',
    desc: 'Our competitive rates open the door to big dreams.',
  },
  {
    icon: <HeartHandshake className="w-6 h-6 text-pink-600" />,
    title: 'Personal Service',
    desc: 'Dedicated loan advisors who listen and recommend the best options.',
  },
];

export const WhyFinanceHub = () => {
  return (
    <section className="py-20 text-center px-4">
      <p className="text-pink-600 font-semibold mb-2">Why Finance Hub?</p>
      <h2 className="text-2xl md:text-3xl font-bold mb-6">Get your finances right</h2>
      <p className="max-w-3xl mx-auto text-gray-600 mb-12">
        We’re more than just a lender. We’re your financial partner, committed to empowering your financial journey with trust, transparency, and exceptional service.
      </p>

      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-8 max-w-6xl mx-auto">
        {features.map((item, idx) => (
          <div key={idx} className="text-center">
            <div className="mb-3 flex justify-center">{item.icon}</div>
            <h3 className="font-semibold text-lg">{item.title}</h3>
            <p className="text-sm text-gray-500 mt-2">{item.desc}</p>
          </div>
        ))}
      </div>
    </section>
  );
};
