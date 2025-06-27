import { useEffect } from "react";
import { movieVediourl, API_OPTIONS } from "../components/utils/Constant";
import { addTrailerVedio } from "../components/utils/movieSlice";
import { useDispatch } from "react-redux";

const useMovieVedio = (id) => {
  const dispatch = useDispatch();
  const getMoviesVedio = async () => {
    const data = await fetch(
      "https://api.themoviedb.org/3/movie/" + id + "/videos?language=en-US",
      API_OPTIONS
    );
    const movieVideoData = await data.json();
    const filterdData = movieVideoData?.results.filter((item) => {
      return item.type === "Trailer";
    });
    const trailerMovie =
      filterdData.length > 0 ? filterdData[0] : movieVideoData?.results[0];
    dispatch(addTrailerVedio(trailerMovie));
  };
  useEffect(() => {
    getMoviesVedio();
  }, []);
};
export default useMovieVedio;
// This custom hook fetches the now playing movies from the API and dispatches them to the Redux store.
// It uses the useEffect hook to call the getNowPlayingMovies function when the component mounts.
