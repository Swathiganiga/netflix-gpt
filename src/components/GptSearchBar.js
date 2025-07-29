import React from "react";
import lang from "./utils/languageConstants";
import { useSelector } from "react-redux";
import { useRef } from "react";
import { addGptMovieResult } from "./utils/gptSlice";
import { API_OPTIONS } from "./utils/Constant";
import { useDispatch } from "react-redux";
// Assuming you have a file for OpenAI configuration
const GptSearchBar = () => {
  const dispatch = useDispatch();
  const searchMovieTMDB = async (movie) => {
    const data = await fetch(
      "https://api.themoviedb.org/3/search/movie?query=" +
        movie +
        "&include_adult=false&language=en-US&page=1",
      API_OPTIONS
    );
    const json = await data.json();

    return json.results;
  };
  const handleGptSearchClick = async () => {
    // const gptResults = await openai.chat.completions.create({
    //   messages: [{ role: "user", content: gptQuery }],
    //   model: "gpt-4.1",
    // });
    const gptResults =
      "Andaz Apna Apna, Hera Pheri, Chupke Chupke, Jaane Bhi Do Yaaro, Padosan";

    if (!gptResults.choices) {
      // TODO: Write Error Handling
    }
    // Andaz Apna Apna, Hera Pheri, Chupke Chupke, Jaane Bhi Do Yaaro, Padosan
    //const gptMovies = gptResults.choices?.[0]?.message?.content.split(",");
    const gptMovies = gptResults.split(",");
    // For each movie I will search TMDB API

    const promiseArray = gptMovies?.map((movie) => searchMovieTMDB(movie));
    const tmdbResults = await Promise.all(promiseArray);

    dispatch(
      addGptMovieResult({ movieNames: gptMovies, movieResults: tmdbResults })
    );
  };
  const langKey = useSelector((store) => store.config.lang);
  const searchText = useRef(null);
  return (
    <div className="pt-[35%] md:pt-[10%] flex justify-center">
      <form
        className="w-full md:w-1/2 bg-black grid grid-cols-12"
        onSubmit={(e) => e.preventDefault()}
      >
        <input
          ref={searchText}
          type="text"
          className=" p-4 m-4 col-span-9 text-black"
          placeholder={lang[langKey].gptSearchPlaceholder}
        />
        <button
          className="col-span-3 m-4 py-2 px-4 bg-red-700 text-white rounded-lg"
          onClick={handleGptSearchClick}
        >
          {lang[langKey].search}
        </button>
      </form>
    </div>
  );
};

export default GptSearchBar;
