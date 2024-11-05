import { BrowserRouter as Router, Route, Routes, useNavigate } from 'react-router-dom';
import { useState } from 'react';
import './App.css';
import Dashboard from './components/Dashboard'; // Import the Dashboard component

function App() {
  const navigate = useNavigate(); // Use navigate hook from react-router-dom

  const handleLogin = () => {
    // Here you can add authentication logic if needed
    navigate('/dashboard'); // Redirect to the Dashboard page
  };

  return (
    <>
      <div className="flex items-center justify-center min-h-screen bg-gray-200">
        <div className="w-full max-w-sm p-6 bg-white shadow-lg rounded-lg">
          <h2 className="text-3xl font-semibold text-center text-gray-800 mb-6">Login</h2>
          <form className="space-y-6" onSubmit={(e) => e.preventDefault()}>
            <div>
              <label className="block text-gray-700 text-sm font-semibold" htmlFor="username">
                Username
              </label>
              <input
                className="w-full mt-2 p-3 border border-gray-300 rounded-md shadow-sm text-gray-700 focus:border-blue-500 focus:ring-2 focus:ring-blue-500 focus:outline-none"
                id="username"
                type="text"
                placeholder="Enter your username"
              />
            </div>
            <div>
              <label className="block text-gray-700 text-sm font-semibold" htmlFor="password">
                Password
              </label>
              <input
                className="w-full mt-2 p-3 border border-gray-300 rounded-md shadow-sm text-gray-700 focus:border-blue-500 focus:ring-2 focus:ring-blue-500 focus:outline-none"
                id="password"
                type="password"
                placeholder="Enter your password"
              />
              <p className="text-red-500 text-xs mt-1">Please choose a password.</p>
            </div>
            <div className="flex items-center justify-between">
              <button
                className="w-full bg-blue-500 hover:bg-blue-600 text-white font-semibold py-2 px-4 rounded-lg transition duration-200 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-1"
                type="button"
                onClick={handleLogin} // Call handleLogin on click
              >
                Login
              </button>
            </div>
          </form>
          <p className="text-center text-gray-400 text-xs mt-6">
            &copy;2023 My App. All rights reserved.
          </p>
        </div>
      </div>
    </>
  );
}

// Wrap App with Router and define routes
function MainApp() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<App />} />
        <Route path="/dashboard" element={<Dashboard />} />
      </Routes>
    </Router>
  );
}

export default MainApp;
