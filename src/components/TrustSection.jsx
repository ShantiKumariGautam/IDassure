import React from "react";
import { ShieldCheck, Brain, Lock, Clock } from "lucide-react";

const items = [
  { icon: <Lock size={20} />, label: "256-bit Encryption" },
  { icon: <Brain size={20} />, label: "AI-powered OCR" },
  { icon: <ShieldCheck size={20} />, label: "GDPR + Privacy Act Ready" },
  { icon: <Clock size={20} />, label: "<5s Processing Time" },
];

export default function TrustSection() {
  return (
    <section className="bg-gray-900 text-white px-8 py-16">
      <h2 className="text-3xl font-bold mb-8">Why Trust Us?</h2>
      <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
        {items.map((item, idx) => (
          <div
            key={idx}
            className="flex items-center gap-3 bg-gray-800 px-4 py-3 rounded-xl shadow hover:shadow-blue-500/30 transition"
          >
            <div className="text-blue-400">{item.icon}</div>
            <span className="text-sm font-medium">{item.label}</span>
          </div>
        ))}
      </div>
    </section>
  );
}
