import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

export default function HeroSection() {
  const navigate = useNavigate();
  const [showVideo, setShowVideo] = useState(false);

  return (
    <section className="min-h-screen bg-gray-950 text-white flex items-center justify-center px-6 md:px-16 py-20">
      <div className="max-w-7xl w-full grid grid-cols-1 md:grid-cols-2 gap-10 items-center">
        {/* LEFT SIDE – IMAGE */}
        <div className="relative w-full h-80 md:h-[28rem] flex justify-center items-center">
          <img
            src="/identity-illustration.png"
            alt="ID Verification Demo"
            className="object-contain w-full max-w-md drop-shadow-xl"
          />
          <div className="absolute bottom-4 text-center text-sm text-gray-300 px-4">
            “AI-Driven Identity. Trust Built In.”
          </div>
          <div className="absolute -z-10 w-64 h-64 rounded-full bg-blue-600 opacity-20 blur-3xl animate-pulse"></div>
        </div>

        {/* RIGHT SIDE – TEXT + CTA */}
        <div className="space-y-6 text-right">
          <h1 className="text-4xl md:text-5xl font-bold leading-tight">
            IDAssure <br />
            <span className="text-blue-400">
              Powered by AI. Secured by Design.
            </span>
          </h1>
          <p className="text-lg text-gray-300">
            Verify age and ID with smart OCR + facial match using your simulated
            government card.
          </p>
          <div className="flex justify-end gap-4 mt-4">
            <button
              onClick={() => navigate('/auth')}
              className="bg-blue-600 hover:bg-blue-700 text-white font-medium px-6 py-3 rounded-xl"
            >
              Start Verification
            </button>
            <button
              onClick={() => setShowVideo(true)}
              className="border border-gray-600 text-white font-medium px-6 py-3 rounded-xl hover:bg-gray-800 transition"
            >
              Live Demo ▶
            </button>
          </div>

          {showVideo && (
            <div className="mt-6 relative">
              {/* ❌ Close Button */}
              <button
                onClick={() => setShowVideo(false)}
                className="absolute top-2 right-2 text-white bg-red-600 hover:bg-red-700 rounded-full px-3 py-1 text-sm z-10"
              >
                ✖
              </button>

              {/* YouTube Iframe */}
              <iframe
                width="100%"
                height="315"
                src="https://www.youtube.com/embed/0k3FhwTyRK4?autoplay=1"
                title="Live Demo"
                frameBorder="0"
                allow="autoplay; encrypted-media"
                allowFullScreen
                className="rounded-lg"
              ></iframe>
            </div>
          )}
        </div>
      </div>
    </section>
  );
}
