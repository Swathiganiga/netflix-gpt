import { useEffect } from "react";
import { API_OPTIONS } from "../components/utils/Constant";
import { addUpcomingMovies } from "../components/utils/movieSlice";
import { useDispatch } from "react-redux";
import { useSelector } from "react-redux";

const useUpcomingMovies = () => {
  const dispatch = useDispatch();
  const upcomingMovies = useSelector((state) => state.movie.upcomingMovies);
  const getaddupcomingMovies = async () => {
    const data = await fetch(
      "https://api.themoviedb.org/3/movie/upcoming?language=en-US&page=1",
      API_OPTIONS
    );
    const json = await data.json();

    dispatch(addUpcomingMovies(json?.results));
  };
  useEffect(() => {
    !upcomingMovies && getaddupcomingMovies();
  }, []);
};
export default useUpcomingMovies;
