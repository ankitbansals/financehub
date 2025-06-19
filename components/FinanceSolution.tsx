// components/FinanceSolution.tsx
import { FinanceCard } from './FinanceCard';
import { ChevronLeft, ChevronRight } from 'lucide-react';

export const FinanceSolution = () => {
  const products = [
    {
      title: 'Hire Purchase',
      subtitle: 'Affordable Payment Plans',
      interestRate: 'From 22% p.a.',
      minAmount: '$300',
      features: [
        'Quick Approvals',
        'Flexible payment terms',
        'Approval decisions within minutes',
        'Competitive rates',
      ],
    },
    {
      title: 'Vehicle Loan',
      subtitle: 'Drive your dream car today',
      interestRate: 'From 10% p.a.',
      minAmount: '$10,000',
      features: [
        'New & used cars',
        'Tailor-made solutions',
        'Approval decisions within 24 hours',
      ],
    },
    {
      title: 'Personal Loan',
      subtitle: 'Flexible loans for life’s big moments',
      interestRate: 'From 20% p.a.',
      minAmount: '$500',
      features: [
        'Instant or same day approval',
        'Funds transferred within 24 hours',
        'Eco-Friendly digital processes',
      ],
    },
  ];

  return (
    <section className="py-20 bg-gray-50 text-center px-4">
      <p className="text-pink-600 font-semibold mb-2">Our Products</p>
      <h2 className="text-2xl md:text-3xl font-bold mb-4">
        Choose Your Finance Solution
      </h2>
      <p className="max-w-2xl mx-auto text-gray-600 mb-10">
        Whether you’re looking for Hire Purchase financing, purchasing a vehicle,
        investing in business asset or funding personal goals,
        <strong> we have the right financial solution tailored to your needs.</strong>
      </p>

      <div className="flex flex-col lg:flex-row gap-6 justify-center items-center mb-8">
        {products.map((product, idx) => (
          <FinanceCard key={idx} {...product} />
        ))}
      </div>

      <div className="flex justify-center gap-4">
        <button className="w-10 h-10 rounded-full border border-gray-300 flex items-center justify-center">
          <ChevronLeft />
        </button>
        <button className="w-10 h-10 rounded-full border border-gray-300 flex items-center justify-center">
          <ChevronRight />
        </button>
      </div>
    </section>
  );
};
