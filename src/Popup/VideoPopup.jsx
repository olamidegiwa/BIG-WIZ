import React, { useState } from "react";
import { Button } from "react-bootstrap";
import "bootstrap/js/src/modal";
import Modal from "react-bootstrap/Modal";
import "./VideoPopup.css";
import { Videos } from "../utils/morayo";
import ReactPlayer from "react-player";

const VideoPopup = () => {
  const [selectedVideo, setSelectedVideo] = useState(null);

  return (
    <div className="custom-bg-black py-5 popup d-flex flex-column gap-5">
      <div className=" popupvideo container-xl px-xl-5 ">
        <h1 className="text-start custom-text-white pb-lg-5 pb-2 px-0">
          MORE VIDEOS FROM WIZKID
        </h1>
        {/* <div className="media-container">
          {Videos.map((video) => {
            return (
              <div key={video.id}>
                <img
                  onClick={() => setSelectedVideo(video.url)}
                  src={video.image}
                  alt="image"
                  data-bs-toggle="modal"
                  className="media cursor-pointer"
                  data-bs-target="#imageExample"
                />

                <div className="d-flex justify-content-between">
                  <p className="custom-text-white title">{video.desc}</p>

            

                  <div onClick={() => setSelectedVideo(video.url)}>
                    <a
                      target="_blank"
                      className="custom-text-white title"
                      href={video.url}
                    >
                      WATCH NOW
                    </a>
                  </div>
                </div>

                <div
                  className="modal fade  "
                  id="imageExample"
                  tableIndex="-1"
                  aria-hidden="true"
                >
                  <div className="modal-dialog">
                    <div className="modal-content">
                      <div className="modal-body">
                        <ReactPlayer
                          url={selectedVideo}
                          controls={true}
                          className="d-block video"
                        />
                      </div>

                      <button
                        type="button"
                        className="custom-bg-black  custom-text-white text-decoration-underline border-0 m-0 modal-button"
                        data-bs-dismiss="modal"
                      >
                        CLOSE
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            );
          })}
        </div> */}
        <di className="media-container">
          {Videos.map((video) => {
            return (
              <div key={video.id}>
                <img
                  onClick={() => setSelectedVideo(video.url)}
                  src={video.image}
                  alt="image"
                  data-bs-toggle="modal"
                  data-bs-target="#videoModal"
                  className="media cursor-pointer"
                />

                <div className="d-flex justify-content-between">
                  <p className="custom-text-white title">{video.desc}</p>

                  <p
                    style={{ cursor: "pointer" }}
                    className="custom-text-white title text-decoration-underline m-0 "
                    data-bs-toggle="modal"
                    data-bs-target="#videoModal"
                    onClick={() => setSelectedVideo(video.url)}
                  >
                    WATCH NOW
                  </p>
                </div>

                <div
                  className="modal fade  "
                  id="videoModal"
                  tableIndex="-1"
                  aria-labelledby="videoModalLabel"
                  aria-hidden="true"
                >
                  <div className="modal-dialog">
                    <div className="modal-content">
                      <div className="modal-body">
                        <ReactPlayer
                          url={selectedVideo}
                          controls={true}
                          className="d-block video"
                        />
                      </div>

                      <button
                        type="button"
                        className="custom-bg-black  custom-text-white text-decoration-underline border-0 m-0 modal-button"
                        data-bs-dismiss="modal"
                        aria-label="Close"
                      >
                        CLOSE
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            );
          })}
        </di>
      </div>
    </div>
  );
};

export default VideoPopup;
