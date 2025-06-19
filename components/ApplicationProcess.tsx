// components/ApplicationProcess.tsx
import Image from 'next/image';

const steps = [
    {
        title: 'Select your Product',
        points: [
            'Choose from flexible loan solutions for designated asset or personal use.',
        ],
    },
    {
        title: 'Submit your Application',
        points: [
            'Complete the online form with your details',
            'Upload identification and income documents',
            'Choose your repayment plan',
        ],
    },
    {
        title: 'Quick Review',
        points: [
            'Our advisors will assess and validate your application',
            'You may be contacted for clarification',
        ],
    },
    {
        title: 'Get Approval',
        points: [
            'Receive approval via SMS/email notification',
            'Sign the agreement digitally or in person',
        ],
    },
    {
        title: 'Product & Disbursement',
        points: [
            'Purchase the vehicle/product or complete paperwork',
            'Loan amount disbursed',
            'Transfer directly to seller or yourself',
        ],
    },
];

export const ApplicationProcess = () => (
    <section className="py-20 px-4">
        <p className="text-pink-600 font-semibold mb-2">Our Process</p>
        <h2 className="text-2xl md:text-3xl font-bold mb-6 text-center">From Application to Approval: Financing Made Simple</h2>
        <p className="text-center text-gray-600 max-w-3xl mx-auto mb-12">
            From application to disbursement within 24–48 hours. Our streamlined digital process makes getting started quick and accessible.
        </p>

        <div className="flex flex-col lg:flex-row gap-10 max-w-6xl mx-auto">
            <ul className="space-y-6 flex-1">
                {steps.map((step, idx) => (
                    <li key={idx}>
                        <h3 className="font-semibold text-lg mb-2 text-pink-600">{step.title}</h3>
                        <ul className="text-gray-700 text-sm list-disc pl-5 space-y-1">
                            {step.points.map((p, i) => <li key={i}>{p}</li>)}
                        </ul>
                    </li>
                ))}
            </ul>

            <div className="flex-1 hidden lg:block">
                <Image
                    src="/images/apply-process.png"
                    alt="Application process"
                    width={600}
                    height={400}
                    className="rounded-lg shadow-lg"
                />
            </div>
        </div>
    </section>
);
