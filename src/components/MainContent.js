import React from "react";
import VideoTitle from "./VideoTitle";
import VideoBackground from "./VideoBackground";
import { useSelector } from "react-redux";

const MainContent = () => {
  const MovieData = useSelector((state) => state.movie.nowPlayingMovies);
  if (!MovieData) return;

  const selectedMovie = MovieData[0];
  const { original_title, overview, id } = selectedMovie;

  return (
    <div>
      <VideoTitle title={original_title} overview={overview} />
      <VideoBackground id={id} />
    </div>
  );
};

export default MainContent;
