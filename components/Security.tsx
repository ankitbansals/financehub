// components/Security.tsx
import { ShieldCheck, LockKeyhole, Upload, Database, EyeOff, UserCheck } from 'lucide-react';

const items = [
  {
    title: 'Secure Uploads',
    icon: <Upload className="w-6 h-6 text-pink-600" />,
    description: 'All documents are transferred via encrypted channels',
  },
  {
    title: 'Secure Data Storage',
    icon: <Database className="w-6 h-6 text-pink-600" />,
    description: 'Your personal information is encrypted and stored in secure servers',
  },
  {
    title: 'Privacy Protection',
    icon: <EyeOff className="w-6 h-6 text-pink-600" />,
    description: 'We never share your data with third parties without consent',
  },
  {
    title: 'Verified Identity',
    icon: <UserCheck className="w-6 h-6 text-pink-600" />,
    description: 'Robust checks to prevent unauthorized access',
  },
  {
    title: 'Account Security',
    icon: <LockKeyhole className="w-6 h-6 text-pink-600" />,
    description: 'Login security with two-factor authentication',
  },
];

export const Security = () => (
  <section className="py-20 px-4 bg-white text-center">
    <h2 className="text-2xl md:text-3xl font-bold mb-4">Your Security is Our Priority</h2>
    <p className="text-gray-600 max-w-xl mx-auto mb-6">
      We employ industry-leading security measures to protect your financial data and ensure your transactions are safe, secure, and private.
    </p>
    <div className="mb-10">
      <span className="inline-block px-4 py-2 bg-pink-100 text-pink-700 text-sm rounded-full font-medium">
        Your data is protected by industry-leading security standards
      </span>
    </div>

    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-10 max-w-6xl mx-auto text-left">
      {items.map((item, idx) => (
        <div key={idx} className="flex items-start gap-4">
          <div>{item.icon}</div>
          <div>
            <h4 className="font-semibold mb-1">{item.title}</h4>
            <p className="text-gray-600 text-sm">{item.description}</p>
          </div>
        </div>
      ))}
    </div>
  </section>
);
