// components/FinanceCard.tsx
import { CheckCircle } from 'lucide-react';

interface FinanceCardProps {
  title: string;
  subtitle: string;
  interestRate: string;
  minAmount: string;
  features: string[];
}

export const FinanceCard = ({
  title,
  subtitle,
  interestRate,
  minAmount,
  features,
}: FinanceCardProps) => {
  return (
    <div className="bg-white shadow-md rounded-lg p-6 w-full max-w-sm">
      <h3 className="text-xl font-semibold mb-1">{title}</h3>
      <p className="text-sm text-gray-500 mb-4">{subtitle}</p>

      <div className="text-sm border-y py-2 mb-4">
        <p className="flex justify-between">
          <span>Interest Rate:</span>
          <span className="font-semibold">{interestRate}</span>
        </p>
        <p className="flex justify-between">
          <span>Min Amount:</span>
          <span className="font-semibold">{minAmount}</span>
        </p>
      </div>

      <ul className="mb-4 space-y-2">
        {features.map((feature, idx) => (
          <li key={idx} className="flex items-start text-sm">
            <CheckCircle className="w-4 h-4 text-pink-600 mt-[2px] mr-2" />
            {feature}
          </li>
        ))}
      </ul>

      <button className="w-full bg-pink-600 text-white py-2 rounded-md font-medium hover:bg-pink-700 transition">
        Get started
      </button>
    </div>
  );
};
