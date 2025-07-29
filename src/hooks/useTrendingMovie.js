import { useEffect } from "react";
import { API_OPTIONS } from "../components/utils/Constant";
import { addTrendingMovies } from "../components/utils/movieSlice";
import { useDispatch } from "react-redux";
import { useSelector } from "react-redux";

const useTrendingMovies = () => {
  const dispatch = useDispatch();
  const trendingMovies = useSelector((state) => state.movie.trendingMovies);
  const getaddPopularMovies = async () => {
    const data = await fetch(
      "https:////api.themoviedb.org/3/trending/movie/day?language=en-US",
      API_OPTIONS
    );
    const json = await data.json();

    dispatch(addTrendingMovies(json?.results));
  };
  useEffect(() => {
    !trendingMovies && getaddPopularMovies();
  }, [getaddPopularMovies, dispatch]);
};
export default useTrendingMovies;
