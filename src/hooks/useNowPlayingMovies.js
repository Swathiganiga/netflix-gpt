import { useEffect } from "react";
import { Movieurl, API_OPTIONS } from "../components/utils/Constant";
import { addNowPlayingMovies } from "../components/utils/movieSlice";
import { useDispatch } from "react-redux";
import { useSelector } from "react-redux";

const useNowPlayingMovies = () => {
  const dispatch = useDispatch();
  const nowPlayingMovies = useSelector((state) => state.movie.nowPlayingMovies);

  const getNowPlayingMovies = async () => {
    const data = await fetch(Movieurl, API_OPTIONS);
    const json = await data.json();

    dispatch(addNowPlayingMovies(json?.results));
  };
  useEffect(() => {
    !nowPlayingMovies && getNowPlayingMovies();
  }, [getNowPlayingMovies, dispatch]);
};
export default useNowPlayingMovies;
// This custom hook fetches the now playing movies from the API and dispatches them to the Redux store.
// It uses the useEffect hook to call the getNowPlayingMovies function when the component mounts.
