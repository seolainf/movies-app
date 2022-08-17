import React, { useEffect, useState } from "react";
import PropTypes from "prop-types";
import { Link } from "react-router-dom";
import { apiConfig } from "../../api/apiConfig";
import "./sidebarItem.scss";
import Button from "../Button/Button";
import { useNavigate } from "react-router-dom";

const SidebarItem = (props) => {
  const [data, setData] = useState([]);

  const navigate = useNavigate();

  const handleOnclick = () => {
    navigate(`/${props.link}`);
  };
  useEffect(() => {
    const fetchData = async () => {
      try {
        const params = {};
        const res = await props.getData(props.type, { params });
        setData(res.results?.splice(7, 5));
      } catch (err) {
        console.log(err);
      }
    };
    fetchData();
  }, [props, props.type]);

  return (
    <div className="sidebar__item">
      <span
        className="sidebar__title"
        data-aos="fade-right"
        data-aos-duration="1000"
        data-aos-easing="ease-in-out"
      >
        {props.title}
      </span>
      <div className="sidebar__content">
        {data &&
          data.map((item) => (
            <Link to={`/${props.link}/${item.id}`} key={item.id}>
              <div
                className="sidebar__content_item"
                title={item.title}
                data-aos="fade-left"
                data-aos-duration="900"
                data-aos-easing="ease-in-out"
              >
                <div className="sidebar__content_img">
                  <img
                    src={apiConfig.w500Image(
                      item.poster_path || item.backdrop_path
                    )}
                    alt={item.original_title}
                  />
                </div>
                <div className="sidebar__content_info">
                  <h4>{item.title || item?.name}</h4>
                  <span>{item.vote_average} Rating</span>
                </div>
              </div>
            </Link>
          ))}
      </div>
      <Button size="lager" onClick={handleOnclick}>
        See more
      </Button>
    </div>
  );
};

SidebarItem.propTypes = {
  type: PropTypes.string.isRequired,
  getData: PropTypes.func.isRequired,
};

export default SidebarItem;
