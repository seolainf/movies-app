import React, { useEffect, useState } from "react";
import "./modal.scss";
import { MdClose } from "react-icons/md";

const Modal = ({ data, onClick }) => {
  const [video, setVideo] = useState(data[0]);
  const [videoActive, setVideoActive] = useState(data[0]);

  const handleVideo = (item) => {
    setVideo(item);
    setVideoActive(item);
  };

  useEffect(() => {
    setVideo(data[0]);
    setVideoActive(data[0]);
  }, [data]);

  return (
    <div className="modal">
      <div className="modal__header">
        <span
          className="title"
          data-aos="fade-down"
          data-aos-easing="linear"
          data-aos-duration="1500"
        >
          {video?.name}
        </span>
        <span className="close" onClick={onClick}>
          <MdClose />
        </span>
      </div>
      <div className="modal__container">
        <div
          className="modal__video"
          data-aos="fade-up"
          data-aos-duration="2000"
        >
          <iframe
            src={`https://www.youtube.com/embed/${video?.key}`}
            title="video"
          />
        </div>
        <div
          className="modal__list"
          data-aos="fade-left"
          data-aos-easing="linear"
          data-aos-duration="2000"
        >
          <span className="modal__list_title">You can see more</span>
          {data &&
            data.map((item) => (
              <div
                className={`modal__list_item ${
                  videoActive === item ? "active" : ""
                }`}
                key={item.id}
                onClick={() => handleVideo(item)}
                title={item?.name}
              >
                <span>{item?.name}</span>
              </div>
            ))}
        </div>
      </div>
    </div>
  );
};

export default Modal;
