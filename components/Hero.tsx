export default function Hero() {
  return (
    <section className="bg-white py-20 px-6 grid md:grid-cols-2 gap-8 items-center">
      <div>
        <span className="inline-block px-3 py-1 text-xs bg-pink-100 text-pink-600 rounded-full mb-4">
          FINANCING MADE SIMPLE ✳️
        </span>
        <h1 className="text-4xl font-bold leading-tight">
          <span className="text-pink-600">Open a door to</span> better finance
        </h1>
        <p className="text-gray-600 mt-4">
          Skip the paperwork hassle. Get your financing decision in minutes, not days.
        </p>
        <div className="flex gap-4 mt-6">
          <button className="bg-pink-600 text-white px-5 py-3 rounded-full text-sm hover:bg-pink-700">
            Apply Now →
          </button>
          <button className="border px-5 py-3 rounded-full text-sm hover:bg-gray-100">
            Book An Appointment
          </button>
        </div>
      </div>

      <div className="flex justify-center relative">
        {/* Simple placeholder layout */}
        <div className="flex flex-col gap-2">
          <img src="/images/user1.png" className="w-32 h-20 object-cover rounded-md" />
        </div>
      </div>
    </section>
  );
}
