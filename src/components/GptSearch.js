import React from "react";
import GptSearchBar from "./GptSearchBar";
import GptMovieSuggestions from "./GptMovieSuggestions";
import { BG_URL } from "./utils/Constant";

const GptSearch = () => {
  return (
    <>
      <div
        className="bg-cover bg-center h-screen w-full -z-10  object-cover"
        style={{ backgroundImage: `url(${BG_URL})` }}
      >
        {/* <img className="h-screen object-cover" src={BG_URL} alt="logo" /> */}

        <GptSearchBar />
        <GptMovieSuggestions />
      </div>
    </>
  );
};

export default GptSearch;
