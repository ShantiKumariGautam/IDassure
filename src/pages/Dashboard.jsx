import React, { useState } from 'react';

export default function Dashboard() {
  const [isSidebarOpen, setIsSidebarOpen] = useState(true);

  const toggleSidebar = () => setIsSidebarOpen(!isSidebarOpen);

  const launchStreamlitApp = () => {
    window.open('https://app-idassure-new-igdtuw.streamlit.app/', '_blank');
  };

  return (
    <div className="flex min-h-screen bg-gray-950 text-white">
      {isSidebarOpen && (
        <div className="w-64 bg-gray-900 p-6 space-y-4">
          <h2 className="text-xl font-bold text-blue-400">IDAssure</h2>
          <button className="w-full text-left hover:text-blue-400">
            Dashboard
          </button>
          <button className="w-full text-left hover:text-blue-400">
            Profile
          </button>
          <button className="w-full text-left hover:text-blue-400">
            Settings
          </button>
        </div>
      )}

      <div className="flex-1 p-6">
        <button
          onClick={toggleSidebar}
          className="mb-4 bg-gray-800 px-3 py-1 rounded hover:bg-gray-700"
        >
          {isSidebarOpen ? 'Hide Sidebar' : 'Show Sidebar'}
        </button>

        <h1 className="text-2xl font-bold text-blue-400 mb-6">
          Welcome to your Dashboard
        </h1>

        <div className="bg-gray-800 p-10 rounded-lg text-center shadow-md">
          <h2 className="text-xl font-semibold mb-4 text-white">
            Begin Aadhar + Face Verification
          </h2>
          <p className="text-gray-400 mb-6">
            IDAssure uses AI to match your face with your official ID and
            extract your DOB.
          </p>
          <button
            onClick={launchStreamlitApp}
            className="bg-green-600 hover:bg-green-700 px-6 py-3 rounded-lg font-bold"
          >
            Launch IDAssure Verification
          </button>
        </div>
      </div>
    </div>
  );
}
