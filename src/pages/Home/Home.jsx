import React from "react";
import { category, mediaType, movieType, tvType } from "../../api/movieApi";
import HeroSlide from "../../components/HeroSilde/HeroSlide";
import MoviesList from "../../components/MoviesList/MoviesList";
import Sidebar from "../../components/Sidebar/Sidebar";
import "./home.scss";

const Home = () => {
  return (
    <div className="home">
      <div className="home__container">
        <HeroSlide type={category.movie} />

        <MoviesList
          type={movieType.top_rated}
          title="Top Rate Movies"
          cate={category.movie}
        />

        <MoviesList
          type={tvType.top_rated}
          title="Popular TV"
          cate={category.tv}
        />
        <MoviesList
          type={mediaType.all}
          title="Trending"
          cate={category.trending}
        />
      </div>
      <div className="home__sidebar">
        <Sidebar />
      </div>
    </div>
  );
};

export default Home;
