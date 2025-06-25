import React from "react";
import Navbar from "../components/Navbar";
import HeroSection from "../components/HeroSection";
import HowItWorks from "../components/HowItWorks";
import TrustSection from "../components/TrustSection";
import CTASection from "../components/CTASection";
import Footer from "../components/Footer";
export default function Home() {
  return (
    <div className="bg-gray-900 min-h-screen text-white font-sans">
      <Navbar />
      <HeroSection />
      <HowItWorks />
      <TrustSection />
      <CTASection />
      <Footer />
    </div>
  );
}
