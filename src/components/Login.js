import React from "react";
import Header from "./Header";
import { BG_URL } from "../components/utils/Constant";

const Login = () => {
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
    </div>
  );
};

export default Login;
