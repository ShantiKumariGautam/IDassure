import React from "react";

export default function CTASection() {
  return (
    <section className="bg-gray-900 text-white py-16 text-center">
      <h2 className="text-3xl md:text-4xl font-bold mb-6">
        Ready to Verify in Seconds?
      </h2>
      <div className="flex justify-center gap-4">
        <button className="bg-blue-500 hover:bg-blue-600 text-white font-semibold px-6 py-3 rounded-xl shadow transition-all">
          Get Started Now
        </button>
        <button className="bg-gray-700 hover:bg-gray-600 text-white font-semibold px-6 py-3 rounded-xl shadow transition-all">
          Contact Us
        </button>
      </div>
    </section>
  );
}
