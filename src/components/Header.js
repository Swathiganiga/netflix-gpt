import React, { useEffect } from "react";
import { LOGO } from "./utils/Constant";
import { signOut } from "firebase/auth";
import { auth } from "./utils/firebaseconfig";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { onAuthStateChanged } from "firebase/auth";
import { addUser, removeUser } from "./utils/userSlice";

const Header = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const user = useSelector((store) => store.user);

  const handleSignout = () => {
    signOut(auth)
      .then(() => {
        dispatch(removeUser());
      })
      .catch((error) => {
        // An error happened.
      });
  };
  useEffect(() => {
    onAuthStateChanged(auth, (user) => {
      if (user) {
        const { uid, displayName, email } = user;
        dispatch(addUser({ uid: uid, displayName: displayName, email: email }));
        navigate("/browse");
      } else {
        dispatch(removeUser());
        navigate("/");
      }
    });
  }, []);

  return (
    <div className="absolute w-screen px-8 py-2 bg-gradient-to-b from-black z-10 flex flex-col md:flex-row justify-between">
      <img className="w-44 mx-auto md:mx-0" src={LOGO} alt="logo" />
      {user && (
        <div className="flex items-center gap-2 text-white cursor-pointer">
          <img
            className="hidden md:block w-8 h-8"
            alt="usericon"
            src="https://eu.ui-avatars.com/api/?name=Swathi+Sridhar&size=250"
          />
          <span onClick={handleSignout}>Sign Out</span>
        </div>
      )}
    </div>
  );
};

export default Header;
