import React, { useState } from "react";
import { Button } from "react-bootstrap";
import "bootstrap/js/src/modal";
import Modal from "react-bootstrap/Modal";
import "./Popup.css";
import { Media } from "../utils/morayo";
import ReactPlayer from "react-player";
const Popup = () => {
  return (
    <div className="custom-bg-black py-5 popup">
      <div className=" popupvideo container-xl px-xl-5 ">
        <h1 className="text-lg-start text-center custom-text-white pb-lg-5 pb-2 px-0">
          MORE VIDEOS FROM WIZKID
        </h1>
        <div className="media-container">
          {Media.map((data) => {
            return (
              <div key={data.id}>
                <img
                  src={data.img}
                  alt="image"
                  data-bs-toggle="modal"
                  className="media cursor-pointer"
                  data-bs-target="#imageExample"
                />
                <div className="d-flex justify-content-between">
                  <p className="custom-text-white title">{data.title}</p>
                  <a
                    target="_blank"
                    className="custom-text-white title"
                    href={data.link}
                  >
                    WATCH NOW
                  </a>
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
                          url={data.link}
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
        </div>
      </div>
    </div>
  );
};

export default Popup;
