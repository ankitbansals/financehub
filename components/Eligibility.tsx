// components/Eligibility.tsx
import { CheckCircle } from 'lucide-react';

const sections = [
  {
    title: 'Registration Requirements',
    items: [
      'Must be 18 years old or above',
      'Valid government-issued ID',
      'Proof of residency',
      'Active bank account',
      'Employment details or business info',
    ],
  },
  {
    title: 'Identification Documents',
    items: [
      'Driver’s license or passport',
      'National ID or voter’s card',
      'Utility bill or rental agreement',
    ],
  },
  {
    title: 'Proof of Income',
    items: [
      'Payslips or salary statements',
      'Bank statements (3–6 months)',
      'Business financials (if self-employed)',
    ],
  },
  {
    title: 'Credit Standing',
    items: [
      'No active bankruptcy',
      'Not currently in default',
      'Credit history may influence loan terms',
    ],
  },
];

export const Eligibility = () => (
  <section className="py-20 bg-gray-50 text-center px-4">
    <p className="text-pink-600 font-semibold mb-2">Eligibility Requirements</p>
    <h2 className="text-2xl md:text-3xl font-bold mb-6">Check if you qualify</h2>
    <p className="text-gray-600 max-w-2xl mx-auto mb-12">
      Simple and transparent requirements to make financing accessible to more people. See what you’ll need to be eligible for our financial products.
    </p>

    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 max-w-7xl mx-auto">
      {sections.map((section, idx) => (
        <div key={idx} className="bg-white shadow-md rounded-lg p-6 text-left">
          <h3 className="font-semibold text-lg mb-4">{section.title}</h3>
          <ul className="space-y-2 text-sm text-gray-600">
            {section.items.map((item, i) => (
              <li key={i} className="flex items-start">
                <CheckCircle className="w-4 h-4 text-pink-600 mt-[2px] mr-2" />
                {item}
              </li>
            ))}
          </ul>
        </div>
      ))}
    </div>
  </section>
);
