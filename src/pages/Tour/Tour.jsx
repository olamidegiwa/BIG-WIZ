import React from "react";
import "./Tour.css";
import { Tours } from "../../utils/morayo";
const Tour = () => {
  return (
    <div className="custom-bg-black py-5 pt-lg-5">
      <div className="px-3 container-xl px-xl-5">
        <h1 className="text-start mb-5 custom-text-white tour1 ">
          LIVE ON TOUR
        </h1>
        {Tours.map((data) => {
          return (
            <table>
              <tbody>
                <tr key={data.id}>
                  <div className="d-flex flex-column flex-md-row align-items-start justify-content-between py-3 ">
                    <td>{data.date}</td>
                    <td>{data.location}</td>
                    <td>{data.act}</td>
                    <td>
                      <a
                        target="_blank"
                        className="custom-text-white"
                        href={data.link}
                      >
                        BUY TICKETS
                      </a>
                    </td>
                  </div>
                </tr>
              </tbody>
            </table>
          );
        })}
      </div>
    </div>
  );
};

export default Tour;


