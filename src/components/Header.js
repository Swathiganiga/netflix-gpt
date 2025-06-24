import React from "react";
import { LOGO } from "./utils/Constant";
import { signOut } from "firebase/auth";
import { auth } from "./utils/firebaseconfig";
import { useDispatch } from "react-redux";
import { removeUser } from "./utils/userSlice";
import { useNavigate } from "react-router-dom";
import { useSelector } from "react-redux";

const Header = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const user = useSelector((store) => store.user);

  const handleSignout = () => {
    signOut(auth)
      .then(() => {
        dispatch(removeUser());
        navigate("/");
        // Sign-out successful.
      })
      .catch((error) => {
        // An error happened.
      });
  };
  return (
    <div className="absolute w-screen px-8 py-2 bg-gradient-to-b from-black z-10 flex flex-col md:flex-row justify-between">
      <img className="w-44 mx-auto md:mx-0" src={LOGO} alt="logo" />
      {user && (
        <div className="flex items-center gap-2 text-white cursor-pointer">
          <img
            className="hidden md:block w-8 h-8"
            alt="usericon"
            src="https://eu.ui-avatars.com/api/?name=John+Doe&size=250"
          />
          <span onClick={handleSignout}>Sign Out</span>
        </div>
      )}
    </div>
  );
};

export default Header;
