import React, { useEffect, useState } from "react";
import PropTypes from "prop-types";
import "./castItem.scss";
import movieApi from "../../api/movieApi";
import { apiConfig } from "../../api/apiConfig";

const CastItem = (props) => {
  const [casts, setCasts] = useState([]);

  useEffect(() => {
    const fetchCasts = async () => {
      try {
        const res = await movieApi.getCasts(props.type, props.id, {
          params: {},
        });
        setCasts(res.cast?.splice(0, 5) || res.crew?.splice(0, 5));
      } catch (err) {
        console.log(err);
      }
    };
    fetchCasts();
  }, [props.type, props.id]);

  return (
    <div className="castItem">
      {casts &&
        casts.map((cast) => (
          <div
            className="castItem__group"
            key={cast.id}
            data-aos="fade-left"
            data-aos-easing="linear"
            data-aos-duration="1000"
          >
            <div className="castItem__img">
              <img src={apiConfig.w500Image(cast?.profile_path)} alt="" />
            </div>
            <div className="castItem__content">
              <span>{cast.name || cast.original_name}</span>
            </div>
          </div>
        ))}
    </div>
  );
};

CastItem.propTypes = {
  type: PropTypes.string,
  id: PropTypes.number,
};

export default CastItem;
