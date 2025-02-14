import React, { useState } from "react";
import { Button } from "react-bootstrap";
import "bootstrap/js/src/modal";
import Modal from "react-bootstrap/Modal";
import mil from "../assets/image/kese-dance.webp";
import "./Popup.css";
import { Media } from "../utils/morayo";
import ReactPlayer from "react-player";
const Popup = () => {
  
  return (
    <div className="custom-bg-black py-5 popup">
      <div className="py-5 px-3 popupvideo container-xl px-xl-5">
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
                    <div className="modal-content custom-bg-black ">
                      <div className="modal-body">
                        <ReactPlayer
                          url={data.link}
                          controls={true}
                          className="d-block w-100"
                        />
                      </div>

                      <button
                        type="button"
                        className="btn-clos custom-bg-black title  custom-text-white mb-3 text-decoration-underline border-0"
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
