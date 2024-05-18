import React from 'react';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';
import { useAuth } from '../contexts/Contexts';

const Dashboard = ({ sidebarOpen, toggleSidebar }) => {
  const { currentUser, signOut } = useAuth();

  const handleLogout = async () => {
    try {
      await signOut();
    } catch (error) {
      console.error('Error signing out:', error);
    }
  };

  return (
    <div className="flex flex-col md:flex-row h-screen">
      {/* Sidebar */}
      <nav className={`md:w-64 bg-blue-600 text-white ${sidebarOpen ? 'block' : 'hidden'}`}>
        <div className="p-4">
          <h2 className="text-2xl font-bold mb-4">Dashboard</h2>
          <ul className="space-y-2">
            <li>
              <Link to="/dashboard" className="block py-2 px-4 rounded-lg hover:bg-blue-700">Home</Link>
            </li>
            <li>
              <Link to="/quiz" className="block py-2 px-4 rounded-lg hover:bg-blue-700">Take Quiz</Link>
            </li>
            <li>
              <Link to="/settings" className="block py-2 px-4 rounded-lg hover:bg-blue-700">Settings</Link>
            </li>
          </ul>
        </div>
      </nav>

      {/* Main Content */}
      <div className="flex-1 bg-gray-100">
        <header className="bg-blue-600 text-white p-4 flex justify-between items-center">
          {/* Sidebar Toggle Button */}
          <button className="md:hidden" onClick={toggleSidebar}>
            {sidebarOpen ? (
              <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              </svg>
            ) : (
              <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16m-7 6h7" />
              </svg>
            )}
          </button>
          <h1 className="text-2xl font-bold">Dashboard</h1>
          {/* User Info and Logout */}
          {currentUser && (
            <div className="flex items-center space-x-4">
              {currentUser.photoURL && (
                <img src={currentUser.photoURL} alt="Profile" className="w-8 h-8 rounded-full" />
              )}
              <div>
                <p>{currentUser.displayName || currentUser.email}</p>
                <button onClick={handleLogout} className="text-sm text-blue-200 hover:underline focus:outline-none">Logout</button>
              </div>
            </div>
          )}
        </header>
        {/* Main Content */}
        <div className="p-4">
          <h2 className="text-2xl font-bold mb-4">Welcome, {currentUser?.displayName || currentUser?.email}!</h2>
          {/* Additional Content Goes Here */}
          <p>Here's your dashboard content.</p>
        </div>
      </div>
    </div>
  );
};

Dashboard.propTypes = {
  sidebarOpen: PropTypes.bool.isRequired,
  toggleSidebar: PropTypes.func.isRequired,
};

export default Dashboard;
