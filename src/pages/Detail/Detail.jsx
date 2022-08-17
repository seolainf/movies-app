import React, { useEffect, useRef, useState } from "react";
import { buildStyles, CircularProgressbar } from "react-circular-progressbar";
import "react-circular-progressbar/dist/styles.css";
import { MdPlayArrow } from "react-icons/md";
import { RiHeartFill, RiShareFill } from "react-icons/ri";
import { useParams } from "react-router-dom";
import { apiConfig } from "../../api/apiConfig";
import movieApi from "../../api/movieApi";
import Button from "../../components/Button/Button";
import CastItem from "../../components/CastItem/CastItem";
import Modal from "../../components/Modal/Modal";
import MoviesList from "../../components/MoviesList/MoviesList";
import "./detail.scss";

const Detail = () => {
  const { category, id } = useParams();

  const [movie, setMovie] = useState({});
  const [videos, setVideos] = useState([]);
  const [showModal, setShowModal] = useState(false);

  const openModal = () => {
    setShowModal(!showModal);
  };

  useEffect(() => {
    const fetchMovie = async () => {
      try {
        const res = await movieApi.getDetail(category, id, { params: {} });
        setMovie(res);
        const videoRes = await movieApi.getVideos(category, id, { params: {} });
        setVideos(videoRes.results?.splice(0, 5));
      } catch (err) {
        console.log(err);
      }
    };
    fetchMovie();
    window.scrollTo(0, 0);
  }, [category, id]);

  return (
    <div className="detail">
      <div
        className="detail__banner"
        style={{
          backgroundImage: `url(${apiConfig.originalImage(
            movie.backdrop_path || movie.poster_path
          )})`,
        }}
      ></div>
      <div className="detail__content">
        <div
          className="detail__img"
          data-aos="fade-right"
          data-aos-duration="1000"
          data-aos-easing="ease-in-out"
        >
          <img
            src={apiConfig.w500Image(movie.poster_path || movie.backdrop_path)}
            alt={movie.title}
          />
          <div className="detail__rating">
            <div className="detail__rating_process">
              <CircularProgressbar
                value={movie.vote_average}
                maxValue={10}
                text={movie.vote_average}
                strokeWidth={5}
                styles={buildStyles({
                  strokeLinecap: "round",
                  textSize: "17px",
                  pathTransitionDuration: 0.5,
                  pathColor: `#d12f26`,
                  textColor: "white",
                })}
              />
            </div>
            <div className="detail__rating_point">
              <span>{movie.vote_count?.toLocaleString("en-US")} Rating</span>
            </div>
          </div>
        </div>
        <div className="detail__info">
          <div className="detail__info_container">
            <div
              className="detail__info__group"
              data-aos="zoom-in-up"
              data-aos-duration="1000"
              data-aos-easing="ease-in-out"
            >
              <h2>{movie.title || movie.name}</h2>
              <span className="detail__info_orin">
                Original title: {movie.original_name || movie.original_title}
              </span>
              {movie &&
              movie?.number_of_seasons &&
              movie?.number_of_episodes ? (
                <ul>
                  <li className="detail__part">
                    {movie?.number_of_seasons} seasons
                  </li>
                  <li className="detail__part">
                    {movie?.number_of_episodes} episodes
                  </li>
                </ul>
              ) : (
                <></>
              )}
              <div className="detail__info_option">
                <Button size="lager" onClick={openModal}>
                  Watch trailer
                  <MdPlayArrow className="icon" />
                </Button>
                <span>
                  <RiHeartFill />
                </span>
                <span>
                  <RiShareFill />
                </span>
              </div>
            </div>
            <p
              className="detail__info_desc"
              data-aos="flip-left"
              data-aos-easing="ease-out-cubic"
              data-aos-duration="2000"
            >
              {movie.overview}
            </p>
            <div className="detail__info_group">
              <span className="title">Details</span>
              <div
                className="detail__item"
                data-aos="fade-up"
                data-aos-easing="linear"
                data-aos-duration="1000"
              >
                <span className="detail__item_title">genres</span>
                <div className="detail__item_content">
                  {movie.genres?.map((genre) => (
                    <small key={genre.id}>{genre.name}</small>
                  ))}
                </div>
              </div>
              <div
                className="detail__item"
                data-aos="fade-up"
                data-aos-easing="linear"
                data-aos-duration="1000"
              >
                <span className="detail__item_title">country</span>
                <div className="detail__item_content">
                  <span>
                    {(movie && movie?.origin_country) ||
                      movie?.production_countries?.[0].iso_3166_1}
                  </span>
                </div>
              </div>
              <div
                className="detail__item"
                data-aos="fade-up"
                data-aos-easing="linear"
                data-aos-duration="1000"
              >
                <span className="detail__item_title">runtime</span>
                <div className="detail__item_content">
                  <span>
                    {movie?.runtime || movie?.episode_run_time?.[0]} min
                  </span>
                </div>
              </div>
            </div>
          </div>
          <div className="detail__cast">
            <span className="detail__cast_title">Cast & Crew</span>
            <div className="detail__cast_content">
              <CastItem type={category} id={id} />
            </div>
          </div>
        </div>
      </div>
      <MoviesList
        type="similar"
        title="Similar"
        cate={category}
        id={id}
        slide={5}
      />
      {showModal && (
        <div className="detail__modal">
          <Modal data={videos} onClick={openModal} />
        </div>
      )}
    </div>
  );
};

export default Detail;
