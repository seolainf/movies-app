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
  }, [data]);

  console.log(video);
  return (
    <div className="modal">
      <div className="modal__header">
        <span className="title">{video?.name}</span>
        <span className="close" onClick={onClick}>
          <MdClose />
        </span>
      </div>
      <div className="modal__container">
        <div className="modal__video">
          <iframe
            src={`https://www.youtube.com/embed/${video?.key}`}
            title="video"
          />
        </div>
        <div className="modal__list">
          <span className="modal__list_title">You can see more</span>
          {data &&
            data.map((item) => (
              <div
                className={`modal__list_item ${
                  videoActive === item ? "active" : ""
                }`}
                key={item.id}
                onClick={() => handleVideo(item)}
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
