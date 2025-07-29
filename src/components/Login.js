import React from "react";
import Header from "./Header";
import { BG_URL } from "../components/utils/Constant";
import { validateEmailANDPassword } from "../components/utils/validator";
import {
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  updateProfile,
} from "firebase/auth";
import { auth } from "../components/utils/firebaseconfig";
import { useDispatch } from "react-redux";
import { addUser } from "../components/utils/userSlice";

const Login = () => {
  const dispatch = useDispatch();

  const [isSigninform, setIsSigninform] = React.useState(false);
  const [isvalid, setIsvalid] = React.useState(true);
  const [isvalidmsg, setIsvalidmsg] = React.useState(null);
  const emailRef = React.useRef(null);
  const passwordRef = React.useRef(null);
  const nameRef = React.useRef(null);
  const handleSubmit = () => {
    const email = emailRef.current.value;
    const password = passwordRef.current.value;

    const isvalid = validateEmailANDPassword(email, password);
    setIsvalid(isvalid.valid);
    setIsvalidmsg(isvalid.message);
    if (!isSigninform) {
      createUserWithEmailAndPassword(auth, email, password)
        .then((userCredential) => {
          // Signed up

          updateProfile(auth.currentUser, {
            displayName: nameRef.current.value,
          })
            .then(() => {
              const { uid, email, displayName } = auth.currentUser;
              dispatch(
                addUser({
                  uid: uid,
                  displayName: displayName,
                  email: email,
                })
              );
            })
            .catch((error) => {
              // An error occurred
              // ...
            });
        })
        .catch((error) => {});
    } else {
      signInWithEmailAndPassword(auth, email, password)
        .then((userCredential) => {
          // Signed in
          const user = userCredential.user;
        })
        .catch((error) => {
          const errorCode = error.code;
          const errorMessage = error.message;
        });
    }
  };

  return (
    <div className="w-screen h-screen bg-black text-white relative mx-auto">
      <Header></Header>
      <div className="absolute">
        <img
          className="w-screen h-screen object-cover"
          src={BG_URL}
          alt="logo"
        />
      </div>
      <form
        onSubmit={(e) => e.preventDefault()}
        className="absolute w-1/4 bg-gray-900 p-8 rounded-lg shadow-lg top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 bg-opacity-4"
      >
        <h2 className="my-3 px-2"> {isSigninform ? "Signin" : "Signup"}</h2>
        {!isSigninform && (
          <input
            ref={nameRef}
            type="text"
            placeholder="Username"
            className="w-full p-2 m-2 rounded-md bg-gray-800 text-white"
          />
        )}

        <input
          ref={emailRef}
          type="text"
          placeholder="Email"
          className="w-full p-2 m-2 rounded-md bg-gray-800 text-white"
        />
        <input
          ref={passwordRef}
          type="password"
          placeholder="Password"
          className=" w-full p-2 m-2 rounded-md bg-gray-800 text-white"
        />
        {!isvalid && <p>{isvalidmsg}</p>}
        <button
          onClick={() => handleSubmit()}
          className=" w-full p-2 m-2 rounded-md bg-red-600 text-white hover:bg-blue-700"
        >
          {isSigninform ? "Log in" : "Signup"}
        </button>
        {!isSigninform && (
          <p className="text-center text-gray-400">
            Already have an account?{" "}
            <span
              className="text-blue-500 cursor-pointer"
              onClick={() => setIsSigninform(!isSigninform)}
            >
              Login
            </span>
          </p>
        )}
      </form>
    </div>
  );
};

export default Login;
