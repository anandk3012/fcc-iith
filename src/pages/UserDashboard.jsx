import React from 'react';
import { Link } from 'react-router-dom';

export default function Dashboard() {
  return (
    <div className="h-screen flex flex-col items-center justify-center bg-blue-600 text-white">
      <h1 className="text-4xl font-bold mb-4">Dashboard</h1>
      <p className="text-lg mb-8">Welcome to the Dashboard!</p>
      <div className="flex flex-col items-center space-y-4">
        <Link to="/quiz" className="text-lg font-bold bg-white text-blue-600 py-2 px-4 rounded-lg hover:bg-blue-100 transition duration-300 ease-in-out">Take Quiz</Link>
        {/* Add more dashboard features here */}
      </div>
    </div>
  );
}
