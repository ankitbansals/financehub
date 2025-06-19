'use client';

import {
  CheckCircle,
  ShieldCheck,
  BadgeCheck,
  Lock,
} from 'lucide-react';

const features = [
  {
    icon: <ShieldCheck className="h-8 w-8 text-[#e81c78]" />,
    title: 'Trusted & Secure',
    desc: 'Highest level security with encrypted transactions and data protection you can trust.',
  },
  {
    icon: <BadgeCheck className="h-8 w-8 text-[#e81c78]" />,
    title: 'Quick Approvals',
    desc: 'Get approved in as little as 12 hours with our streamlined digital process.',
  },
  {
    icon: <CheckCircle className="h-8 w-8 text-[#e81c78]" />,
    title: 'Competitive Rates',
    desc: 'Our competitive rates open the door to big dreams.',
  },
  {
    icon: <Lock className="h-8 w-8 text-[#e81c78]" />,
    title: 'Personal Service',
    desc: 'Dedicated loan advisors who listen and recommend the best options.',
  },
];

export default function Features() {
  return (
    <section className="py-16 bg-white text-gray-800">
      <div className="max-w-6xl mx-auto px-4 text-center">
        <h2 className="text-[#e81c78] font-semibold text-sm mb-2">Why Finance Hub?</h2>
        <h3 className="text-3xl font-bold mb-6">Get your finances right</h3>
        <p className="mb-10 max-w-2xl mx-auto">
          We’re more than just a lender. We’re your financial partner, committed to empowering your financial journey with trust, transparency, and exceptional service.
        </p>
        <div className="grid md:grid-cols-4 gap-8 text-left">
          {features.map((f, i) => (
            <div key={i} className="space-y-3">
              {f.icon}
              <h4 className="font-semibold text-lg">{f.title}</h4>
              <p className="text-sm text-gray-600">{f.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
