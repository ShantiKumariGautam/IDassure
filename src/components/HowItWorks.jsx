import React from "react";

const steps = [
  {
    title: "Upload ID",
    desc: "Upload a simulated government ID for verification.",
    img: "/upload-id.png",
  },
  {
    title: "Face Scan",
    desc: "Use facial recognition to match the ID.",
    img: "/face-scan.png",
  },
  {
    title: "Get Result",
    desc: "Receive instant verification results.",
    img: "/get-result.png",
  },
];

export default function HowItWorks() {
  return (
    <section className="bg-gray-900 text-white px-6 py-16">
      <h2 className="text-3xl font-bold mb-8 text-center">How It Works</h2>

      {/* For desktop: grid layout, For mobile: horizontal scroll */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 overflow-x-auto md:overflow-visible scrollbar-hide">
        {steps.map((step, idx) => (
          <div
            key={idx}
            className="bg-gray-800 rounded-xl p-5 hover:scale-105 transition-all duration-300 shadow-md w-full flex flex-col items-center text-center"
          >
            <img
              src={step.img}
              alt={step.title}
              className="h-32 w-32 object-contain mb-4"
            />
            <h3 className="text-lg font-semibold">{step.title}</h3>
            <p className="text-gray-400 text-sm mt-2">{step.desc}</p>
          </div>
        ))}
      </div>
    </section>
  );
}
