import React, { useState, useRef } from "react";
import Header from "./Header";
import { LOGO_IMG_URL } from "../utils/constants";
import { checkValidData } from "../utils/validate";
import {
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
} from "firebase/auth";
import { auth } from "../utils/firebase";
import { useNavigate } from "react-router-dom";

const Login = () => {
  const [isSignInForm, setIsSignInForm] = useState(true);
  const [errorMsg, setErrorMsg] = useState("");

  const navigate = useNavigate();

  const emailRef = useRef(null);
  const passwordRef = useRef(null);

  const toggleSignInForm = () => setIsSignInForm(!isSignInForm);

  const handleButtonClick = () => {
    const isValidMessage = checkValidData(
      emailRef.current.value,
      passwordRef.current.value
    );
    setErrorMsg(isValidMessage);
    if (isValidMessage) return;

    if (!isSignInForm) {
      //sign up
      createUserWithEmailAndPassword(
        auth,
        emailRef.current.value,
        passwordRef.current.value
      )
        .then((userCredential) => {
          const user = userCredential.user;
          if (user) navigate("/browse");
        })
        .catch((error) => {
          const errorCode = error.code;
          const errorMessage = error.message;
          setErrorMsg(errorCode + "- " + errorMessage);
        });
    } else {
      signInWithEmailAndPassword(
        auth,
        emailRef.current.value,
        passwordRef.current.value
      )
        .then((userCredential) => {
          const user = userCredential.user;
          if (user) navigate("/browse");
        })
        .catch((error) => {
          const errorCode = error.code;
          const errorMessage = error.message;
          setErrorMsg(errorCode + "- " + errorMessage);
        });
    }
  };

  return (
    <div className="relative">
      <Header />
      <div className="absolute">
        <img src={LOGO_IMG_URL} alt="netflix-bg" />
      </div>
      <form
        onSubmit={(e) => e.preventDefault()}
        className="rounded-md absolute text-white bg-black opacity-85 flex flex-col w-3/12 h-auto p-12 pt-6 left-1/2 transform -translate-x-1/2 mt-28"
      >
        <h1 className="text-4xl mb-4">
          {isSignInForm ? "Sign In" : "Sign Up"}
        </h1>
        {!isSignInForm && (
          <input
            type="text"
            placeholder="Full Name"
            className="p-4 m-2 text-sm rounded-md w-full bg-gray-900 border"
          />
        )}
        <input
          type="email"
          placeholder="Email Address"
          className="p-4 m-2 text-sm rounded-md w-full bg-gray-900 border"
          ref={emailRef}
        />
        <input
          type="password"
          placeholder="Password"
          className="p-4 m-2 text-sm rounded-md w-full bg-gray-900 border"
          ref={passwordRef}
        />
        <p className="text-red-700 pl-2 font-bold text-sm">{errorMsg}</p>
        <button
          onClick={handleButtonClick}
          className="p-4 m-2 mt-6 bg-[#e30a13] w-full rounded-lg"
        >
          {isSignInForm ? "Sign In" : "Sign Up"}
        </button>
        <div className="font-light pl-2 mt-4">
          {isSignInForm ? "New to Netflix? " : "Already registered "}
          <span className="font-bold cursor-pointer" onClick={toggleSignInForm}>
            {isSignInForm ? "Sign up now." : "Sign in now."}
          </span>
          <br />
          <div className="text-xs font-thin m-0 p-0 mt-6">
            This page is protected by Google reCAPTCHA to ensure you're not a
            bot. Learn more.
          </div>
        </div>
      </form>
    </div>
  );
};

export default Login;
