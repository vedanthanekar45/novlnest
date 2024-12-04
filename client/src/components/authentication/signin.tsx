import React, { useState } from 'react';
import { AiOutlineClose } from "react-icons/ai";
import { FaGoogle } from "react-icons/fa"

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
        <div className="fixed inset-0 flex items-center justify-center z-50 bg-black bg-opacity-40 backdrop-blur">
          <div className="bg-[#252525] p-6 rounded-3xl shadow-lg w-[600px] h-[640px]">
          <AiOutlineClose className="text-green-700 text-xl ml-auto mr-0" onClick={onClose}/>
            <h2 className="text-4xl prata flex justify-center text-[#209620] mt-4 mb-4">Sign In</h2>
            <form onSubmit={handleSignIn} className="mt-20">
              <div className="mb-4">
                <div className="flex items-center justify-center">
                  <input
                    type="email"
                    value={email}
                    placeholder="Email"
                    onChange={(e) => setEmail(e.target.value)}
                    className="border bg-[#252525] text-white rounded-lg w-[400px] h-14 py-2 px-4 text-xl 
                    prata"
                    required
                  /> 
                </div>
              </div>
              <div className="mb-4">
                <div className="flex items-center justify-center">
                  <input
                    type="password"
                    value={password}
                    placeholder="Password"
                    onChange={(e) => setPassword(e.target.value)}
                    className="flex justify-center border bg-[#252525] text-white rounded-lg w-[400px] prata h-14 py-2 
                    px-4 text-xl"
                    required
                  />
                </div>
              </div>
              <div className="flex items-center justify-center">
                <button type="submit" className="w-[400px] my-6 h-14 duration-300 text-xl bg-[#167216] text-white rounded-md p-2 
                hover:bg-[#24a024]">
                  Sign In
                </button>
              </div>
              <div className="flex items-center justify-center">
                <button type="submit" className="border-2 flex justify-center items-center w-[400px] h-14 text-xl duration-300 hover:bg-[#167216] 
                text-white rounded-md p-2 prata">
                  <p className="ml-24">
                    Login with Google
                  </p>
                  <FaGoogle className="ml-auto mr-2 text-3xl"/>
                </button>
              </div>
            </form>
            <a href="#"><h3 className="underline flex justify-center mt-6 text-xl text-green-700">Forgot Password?</h3></a>
            <h3 className="flex text-white justify-center mt-6 text-xl">
              New around here?<a href="#" className="text-green-700 underline ml-2"> Register now!</a>
            </h3>
          </div>
        </div>
      )}
    </>
  );
};

export default SignInModal;