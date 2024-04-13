import React, { useState, useRef } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import LoadingScreen from './LoadingScreen';
import { useAuth } from '../contexts/Contexts';
import { signInWithEmailAndPassword } from 'firebase/auth';
import { auth, db } from '../firebase';

export function SignupPage() {
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");
  const [passwordMatch, setPasswordMatch] = useState(true);
  const emailRef = useRef(null); 
  const passwordRef = useRef("");
  const confirmPasswordRef = useRef("");
  const authLogin = useAuth();
  const signUp = authLogin.signUp;
  const profileInfo = {
    name: '',
    institution: '',
    age: '',
    phoneNumber: '',
    email: ''
  }

  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!emailRef.current || !passwordRef.current || !confirmPasswordRef.current) {
      setError("Please fill in all the fields");
      return;
    }

    if (passwordRef.current.value !== confirmPasswordRef.current.value) {
      setError("Passwords do not match !");
      return;
    }

    try {
      setError('');
      setLoading(true);
      await signUp(emailRef.current.value, passwordRef.current.value,profileInfo);
      window.location.href = '/dashboard';
    } catch (err) {
      console.error(err);
      setError("Failed to create an account");
    }
    setLoading(false);
  };


  const handlePasswordChange = () => {
    setPasswordMatch(passwordRef.current.value === confirmPasswordRef.current.value);
  };

  return (
    <>
      {loading ? (
        <LoadingScreen />
      ) : (
        <div className="h-auto flex items-center justify-center bg-gray-50 py-12 px-4 sm:px-6 lg:px-8">
          <div className="max-w-md w-full space-y-8">
            <div>
              <h2 className="mt-6 text-center text-3xl font-extrabold text-blue-600">Create an Account</h2>
              <p className="mt-2 text-center text-sm text-gray-600">
                Already have an account? <Link to="/Login" className="font-medium text-blue-600 hover:text-blue-500 hover:cursor-pointer">Login</Link>
              </p>
            </div>
            <form onSubmit={handleSubmit} className="mt-8 space-y-6" action="#" method="POST">
              <input type="hidden" name="remember" defaultValue="true" />
              <div className="rounded-md shadow-sm -space-y-px">
                <div>
                  <label htmlFor="email-address" className="sr-only">Email address</label>
                  <input id="email-address" name="email" type="email" ref={emailRef} autoComplete="email" required className="appearance-none rounded-none relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 rounded-t-md focus:outline-none focus:ring-blue-500 focus:border-blue-500 focus:z-10 sm:text-sm" placeholder="Email address" />
                </div>
                <div>
                  <label htmlFor="password" className="sr-only">Password</label>
                  <input id="password" name="password" type="password" ref={passwordRef} autoComplete="new-password" required className="appearance-none rounded-none relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 rounded-b-md focus:outline-none focus:ring-blue-500 focus:border-blue-500 focus:z-10 sm:text-sm" placeholder="Password" onChange={handlePasswordChange} />
                </div>
                <div>
                  <label htmlFor="confirm-password" className="sr-only">Confirm Password</label>
                  <input id="confirm-password" name="confirm-password" ref={confirmPasswordRef} type="password" autoComplete="new-password" required className={`appearance-none rounded-none relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 rounded-b-md focus:outline-none focus:ring-blue-500 focus:border-blue-500 focus:z-10 sm:text-sm ${passwordMatch ? '' : 'border-red-500'}`} placeholder="Confirm Password" onChange={handlePasswordChange} />
                  {!passwordMatch && <p className="w-1/2 p-2 rounded-sm mt-2 text-sm bg-red-300 text-red-900">Passwords do not match</p>}
                </div>
              </div>

              <div>
                <button type="submit" disabled={loading || !passwordMatch || !emailRef.current || !passwordRef.current.value || !confirmPasswordRef.current.value} className="group relative w-full flex justify-center py-2 px-4 border border-transparent text-sm font-medium rounded-md text-white bg-blue-600 hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500">
                  Sign up
                </button>
              </div>
              {error && <div className="w-1/2 p-3 mt-2 rounded-md text-center text-sm bg-red-500 text-red-900">{error}</div>}
            </form>
          </div>
        </div>
      )}
    </>
  );
}
