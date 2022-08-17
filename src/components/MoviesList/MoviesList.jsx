import React, { useEffect, useState } from "react";
import { MdOutlineKeyboardArrowRight } from "react-icons/md";
import { Link } from "react-router-dom";
import { Navigation } from "swiper";
import { Swiper, SwiperSlide } from "swiper/react";
import movieApi, { category, timeWidow } from "../../api/movieApi";
import "./moviesList.scss";

import "swiper/css";
import "swiper/css/navigation";
import MovieCard from "../MovieCard/MovieCard";

const MoviesList = ({ type, title, cate, id, slide = 4 }) => {
  const [data, setData] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const params = {};
        let result = null;
        if (type !== "similar") {
          switch (cate) {
            case category.movie:
              result = await movieApi.getMovieList(type, { params });
              break;
            case category.trending:
              result = await movieApi.getMoviesTrending(type, timeWidow.week, {
                params,
              });
              break;
            default:
              result = await movieApi.getTvList(type, { params });
              break;
          }
        } else {
          result = await movieApi.getSimilar(cate, id, { params });
        }
        setData(result.results?.splice(0, 12));
      } catch (err) {
        console.log(err);
      }
    };
    fetchData();
  }, [type, cate, id]);

  return (
    <div className="moviesList">
      <div
        className="moviesList__header"
        data-aos="fade-down"
        data-aos-duration="1000"
        data-aos-easing="ease-in-out"
      >
        <span className="moviesList__title">{title}</span>
        <Link to={`/${cate}`}>
          <span>See All</span>
          <MdOutlineKeyboardArrowRight className="icon" />
        </Link>
      </div>
      <div className="moviesList__container">
        <Swiper
          slidesPerView={slide}
          spaceBetween={10}
          navigation={true}
          modules={[Navigation]}
          breakpoints={{
            640: {
              slidesPerView: 2,
              spaceBetween: 20,
            },
            768: {
              slidesPerView: 3,
              spaceBetween: 40,
            },
            1024: {
              slidesPerView: slide,
              spaceBetween: 50,
            },
          }}
          className="moviesList__slide"
        >
          {data &&
            data.map((item) => (
              <SwiperSlide key={item.id}>
                <MovieCard data={item} cate={cate} />
              </SwiperSlide>
            ))}
        </Swiper>
      </div>
    </div>
  );
};

export default MoviesList;
