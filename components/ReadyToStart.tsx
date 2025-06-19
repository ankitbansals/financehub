// components/ReadyToStart.tsx
export const ReadyToStart = () => (
  <section className="bg-gray-100 py-12 px-4 text-center">
    <h2 className="text-xl md:text-2xl font-semibold mb-4">Ready to Get Started?</h2>
    <p className="text-gray-600 mb-6">
      Join thousands of satisfied customers who chose Finance Hub for their financial needs.
    </p>
    <div className="flex flex-col sm:flex-row gap-4 justify-center">
      <button className="bg-white border border-pink-600 text-pink-600 font-medium px-6 py-2 rounded-md hover:bg-pink-50 transition">
        Book an Appointment
      </button>
      <button className="bg-pink-600 text-white font-medium px-6 py-2 rounded-md hover:bg-pink-700 transition">
        Apply Now
      </button>
    </div>
  </section>
);
