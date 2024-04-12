import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { useAuth } from '../contexts/Contexts';
import { db } from '../firebase'; // Import db from firebase.js
import { writeUser } from '../firebase';
import logo from '../assets/fcclogo.png';
import {FaUser} from 'react-icons/fa'

const Header = () => {
  const authFunc = useAuth();
  const currentUser = authFunc.currentUser;
  const logout = authFunc.logout;

  const [showProfilePopup, setShowProfilePopup] = useState(false);
  const [formData, setFormData] = useState({
    name: '',
    institution: '',
    age: '',
    phoneNumber: '',
    email: ''
  });

  useEffect(() => {
    if (currentUser) {
      setFormData(prevState => ({
        ...prevState,
        email: currentUser.email || ''
      }));
    }
  }, [currentUser]);

  const handleLogout = async () => {
    try {
      await logout();
      window.location.href = '/Login'; // Redirect to login page after logout
    } catch (error) {
      console.error('Logout failed', error);
    }
  };

  const handleProfileClick = () => {
    setShowProfilePopup(true);
  };

  const handlePopupClose = () => {
    setShowProfilePopup(false);
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prevState => ({
      ...prevState,
      [name]: value
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await writeUser(formData);
      setShowProfilePopup(false);
    } catch (error) {
      console.error('Profile update failed', error);
    }
  };

  return (
    <nav className="shadow-sm bg-slate-200 shadow-gray-500 ">
      <div className="max-w-7xl mx-auto flex items-center justify-between p-4">
        <div className="flex items-center">
          <Link to="/">
            <img className="h-[3rem] md:h-[4rem]" src={logo} alt="Logo" />
          </Link>
        </div>
        <div className="flex items-center space-x-4">
          {currentUser ? (
            <>
              <button onClick={handleProfileClick} className= "flex w-auto items-center rounded-md bg-blue-700 text-white hover:text-white hover:bg-blue-800 p-2">
                <FaUser />Profile
              </button>
              <button onClick={handleLogout} className="w-auto rounded-md bg-blue-700  text-white text-center hover:text-white hover:bg-blue-800 p-2">
                Logout
              </button>
            </>
          ) : (
            <>
              <Link to="/Signup"aria-disabled="true" className="bg-blue-600 text-white hover:bg-blue-700 px-4 py-2 rounded-md">
                SignUp
              </Link>
              <Link to="/Login" className="bg-blue-600 text-white hover:bg-blue-700 px-4 py-2 rounded-md">
                SignIn
              </Link>
            </>
          )}
        </div>
      </div>
      {/* Profile Popup */}
      {showProfilePopup && (
        <div className="fixed inset-0 flex items-center justify-center bg-gray-800 bg-opacity-50 z-50">
  <div className="bg-white rounded-lg p-8 max-w-md relative"> {/* Add relative class */}
    {/* Move the close button here */}
    <button onClick={handlePopupClose} className="absolute top-0 right-0 m-4 text-gray-600 hover:text-gray-800 focus:outline-none">
      <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
      </svg>
    </button>
    {/* Profile form goes here */}
    <h2 className="text-xl font-bold mb-4">Edit Profile</h2>
    <form onSubmit={handleSubmit}>
      <div className="mb-4">
        <label htmlFor="name" className="block text-sm font-medium text-gray-700">Name</label>
        <input type="text" id="name" name="name" value={formData.name} onChange={handleChange} className="mt-1 p-2 block w-full rounded-md border-gray-300" />
      </div>
      <div className="mb-4">
        <label htmlFor="institution" className="block text-sm font-medium text-gray-700">Institution</label>
        <input type="text" id="institution" name="institution" value={formData.institution} onChange={handleChange} className="mt-1 p-2 block w-full rounded-md border-gray-300" />
      </div>
      <div className="mb-4">
        <label htmlFor="age" className="block text-sm font-medium text-gray-700">Age</label>
        <input type="text" id="age" name="age" value={formData.age} onChange={handleChange} className="mt-1 p-2 block w-full rounded-md border-gray-300" />
      </div>
      <div className="mb-4">
        <label htmlFor="phoneNumber" className="block text-sm font-medium text-gray-700">Phone Number</label>
        <input type="text" id="phoneNumber" name="phoneNumber" value={formData.phoneNumber} onChange={handleChange} className="mt-1 p-2 block w-full rounded-md border-gray-300" />
      </div>
      <div className="mb-4">
        <label htmlFor="email" className="block text-sm font-medium text-gray-700">Email</label>
        <input type="text" id="email" name="email" value={formData.email} onChange={handleChange} disabled className="mt-1 p-2 block w-full rounded-md border-gray-300" />
      </div>
      <div className="flex justify-end">
        <button type="submit" className="px-4 py-2 bg-blue-600 text-white rounded-md hover:bg-blue-700">Save</button>
      </div>
    </form>
  </div>
</div>

      )}
    </nav>
  );
};

export default Header;
