import { useEffect } from "react";
import { API_OPTIONS } from "../components/utils/Constant";
import { addPopularMovies } from "../components/utils/movieSlice";
import { useDispatch } from "react-redux";
import { useSelector } from "react-redux";

const usePopularMovies = () => {
  const dispatch = useDispatch();
  const popularMovies = useSelector((state) => state.movie.popularMovies);

  const getaddPopularMovies = async () => {
    const data = await fetch(
      "https://api.themoviedb.org/3/movie/popular?language=en-US&page=1",
      API_OPTIONS
    );
    const json = await data.json();

    dispatch(addPopularMovies(json?.results));
  };
  useEffect(() => {
    !popularMovies && getaddPopularMovies();
  }, []);
};
export default usePopularMovies;
