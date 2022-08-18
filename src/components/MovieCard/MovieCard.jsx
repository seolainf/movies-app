import PropTypes from "prop-types";
import React from "react";
import { MdOutlineStarPurple500, MdPlayArrow } from "react-icons/md";
import { useNavigate } from "react-router-dom";
import { apiConfig } from "../../api/apiConfig";
import Button from "../Button/Button";
import "./movieCard.scss";

const MovieCard = ({ data, cate }) => {
  const navigate = useNavigate();
  const handlePlay = () => {
    navigate(`/${data?.media_type || cate}/${data.id}`);
  };

  return (
    <div
      className="movieCard"
      data-aos="fade-up"
      data-aos-duration="1000"
      data-aos-easing="ease-in-out"
    >
      <div className="movieCard__img">
        <img
          src={apiConfig.w500Image(data.poster_path || data.backdrop_path)}
          alt={data.original_title}
        />
      </div>
      <div className="movieCard__info">
        <h4>{data.title || data.original_title || data.name}</h4>
        <span>
          {data.release_date?.split("-")[0] ||
            data.first_air_date?.split("-")[0]}
        </span>
        <Button onClick={handlePlay}>
          <MdPlayArrow className="icon" />
        </Button>
      </div>
      <div className="movieCard__rating">
        <span>{data.vote_average?.toFixed(1)}</span>
        <MdOutlineStarPurple500 className="icon" />
      </div>
    </div>
  );
};

MovieCard.propTypes = {
  data: PropTypes.object.isRequired,
};

export default MovieCard;
