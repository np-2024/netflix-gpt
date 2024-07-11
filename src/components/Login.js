import React, { useState } from "react";
import Header from "./Header";
import { LOGO_IMG_URL } from "../utils/constants";

const Login = () => {
  const [isSignInForm, setIsSignInForm] = useState(true);

  const toggleSignInForm = () => setIsSignInForm(!isSignInForm);

  return (
    <div className="relative">
      <Header />
      <div className="absolute">
        <img src={LOGO_IMG_URL} alt="netflix-bg" />
      </div>
      <form className="rounded-md absolute text-white bg-black opacity-85 flex flex-col w-3/12 h-auto p-12 pt-6 left-1/2 transform -translate-x-1/2 mt-28">
        <h1 className="text-4xl mb-4">
          {isSignInForm ? "Sign In" : "Sign Up"}
        </h1>
        {!isSignInForm && (
          <input
            type="text"
            placeholder="Name"
            className="p-4 m-2 text-sm rounded-md w-full bg-gray-900 border"
          />
        )}
        <input
          type="email"
          placeholder="Email Address"
          className="p-4 m-2 text-sm rounded-md w-full bg-gray-900 border"
        />
        <input
          type="password"
          placeholder="Password"
          className="p-4 m-2 text-sm rounded-md w-full bg-gray-900 border"
        />
        <button className="p-4 m-2 mt-6 bg-[#e30a13] w-full rounded-lg">
          {isSignInForm ? "Sign In" : "Sign Up"}
        </button>
        <div className="font-light">
          {isSignInForm ? "New to Netflix? " : "Already registered "}
          <span className="font-bold cursor-pointer" onClick={toggleSignInForm}>
            {isSignInForm ? "Sign up now." : "Sign in now."}
          </span>
          <br />
          <span className="text-xs font-thin m-0 p-0">
            This page is protected by Google reCAPTCHA to ensure you're not a
            bot. Learn more.
          </span>
        </div>
      </form>
    </div>
  );
};

export default Login;
