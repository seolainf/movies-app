import React from "react";
import PropTypes from "prop-types";
import { apiConfig } from "../../api/apiConfig";
import Button from "../Button/Button";
import { MdOutlineStarPurple500, MdPlayArrow } from "react-icons/md";
import "./movieCard.scss";
import { Link } from "react-router-dom";

const MovieCard = ({ data, cate }) => {
  return (
    <div
      className="movieCard"
      data-aos="fade-up"
      data-aos-duration="1000"
      data-aos-easing="ease-in-out"
    >
      <Link to={`/${data?.media_type || cate}/${data.id}`}>
        <div className="movieCard__img">
          <img
            src={apiConfig.w500Image(data.poster_path || data.backdrop_path)}
            alt={data.original_title}
          />
        </div>
      </Link>
      <div className="movieCard__info">
        <h4>{data.title || data.original_title || data.name}</h4>
        <span>
          {data.release_date?.split("-")[0] ||
            data.first_air_date?.split("-")[0]}
        </span>
        <Button>
          <MdPlayArrow className="icon" />
        </Button>
      </div>
      <div className="movieCard__rating">
        <span>{data.vote_average}</span>
        <MdOutlineStarPurple500 className="icon" />
      </div>
    </div>
  );
};

MovieCard.propTypes = {
  data: PropTypes.object.isRequired,
};

export default MovieCard;
