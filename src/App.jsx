// // src/App.jsx
// import React from "react";
// import { Routes, Route } from "react-router-dom";
// import Home from "./pages/Home";
// import AuthPage from "./pages/AuthPage"; // Your sign-in/signup page



// export default function App() {
//   return (
//     <Routes>
//       <Route
//         path="/"
//         element={<Home />}
//       />
//       <Route
//         path="/auth"
//         element={<AuthPage />}
//       />
     
//     </Routes>
//   );
// }


// src/App.jsx
import React, { useEffect, useState } from "react";
import { Routes, Route, Navigate } from "react-router-dom";
import Home from "./pages/Home";
import AuthPage from "./pages/AuthPage";
import Dashboard from "./pages/Dashboard"; // 🆕 Make sure this exists
import { auth } from "./firebase";
import { onAuthStateChanged } from "firebase/auth";

export default function App() {
  const [user, setUser] = useState(null); // 🔐 Track user
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (currentUser) => {
      setUser(currentUser);
      setLoading(false);
    });
    return () => unsubscribe();
  }, []);

  if (loading) return <div className="text-white p-4">Loading...</div>;

  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/auth" element={<AuthPage />} />
      <Route
        path="/dashboard"
        element={user ? <Dashboard /> : <Navigate to="/auth" />}
      />
      <Route path="*" element={<Navigate to="/" />} />
    </Routes>
  );
}
