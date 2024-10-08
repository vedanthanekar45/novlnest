import React, { useState } from 'react';

interface SignInModalProps {
  isOpen: boolean;
  onClose: () => void;
}

const SignInModal: React.FC<SignInModalProps> = ({ isOpen, onClose }) => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleSignIn = (e: React.FormEvent) => {
    e.preventDefault();
    // Add sign-in logic here
    console.log('Sign In', { email, password });
    onClose(); // Close the modal after sign-in
  };

  return (
    <>
      {isOpen && (
        <div className="fixed inset-0 flex items-center justify-center z-50 bg-black bg-opacity-50">
          <div className="bg-white p-6 rounded-lg shadow-lg w-80">
            <h2 className="text-lg font-bold mb-4">Sign In</h2>
            <form onSubmit={handleSignIn}>
              <div className="mb-4">
                <label className="block text-sm font-medium mb-1">Email</label>
                <input
                  type="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  className="border border-gray-300 rounded-md w-full p-2"
                  required
                />
              </div>
              <div className="mb-4">
                <label className="block text-sm font-medium mb-1">Password</label>
                <input
                  type="password"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  className="border border-gray-300 rounded-md w-full p-2"
                  required
                />
              </div>
              <button
                type="submit"
                className="w-full bg-blue-500 text-white rounded-md p-2 hover:bg-blue-600"
              >
                Sign In
              </button>
              <button
                type="button"
                onClick={onClose}
                className="mt-2 w-full text-center text-gray-500 hover:underline"
              >
                Cancel
              </button>
            </form>
          </div>
        </div>
      )}
    </>
  );
};

export default SignInModal;
