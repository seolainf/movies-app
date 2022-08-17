import React, { useEffect, useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";

import { Navigation } from "swiper";
import movieApi from "../../api/movieApi";
import { apiConfig } from "../../api/apiConfig";
import "./heroSlide.scss";
import Button from "../Button/Button";
import { Link } from "react-router-dom";

const HeroSlide = ({ type }) => {
  const [data, setData] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const params = {};
        const res = await movieApi.getPlayNow(type, { params });
        setData(res.results?.slice(0, 5));
      } catch (err) {
        console.log(err);
      }
    };
    fetchData();
  }, [type]);

  return (
    <div className="hero__slide">
      <Swiper
        navigation={true}
        modules={[Navigation]}
        className="slide"
        data-aos-duration="1000"
        data-aos-easing="ease-in-out"
        data-aos="fade-down"
      >
        {data &&
          data.map((item) => (
            <SwiperSlide key={item.id}>
              <img
                src={apiConfig.originalImage(item.backdrop_path)}
                alt={item.original_title}
              />
              <Link to={`/${item.media_type || type}/${item.id}`}>
                <div className="slide__info">
                  <h3 className="slide__title">{item.title || item.name}</h3>
                  <div className="slide__desc">
                    <span>{item.release_date?.split("-")[0]}</span>
                    <span>{item.vote_average} rating</span>
                  </div>
                  <Button size="normal">Watch</Button>
                </div>
              </Link>
            </SwiperSlide>
          ))}
      </Swiper>
    </div>
  );
};

export default HeroSlide;
