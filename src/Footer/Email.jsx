import React from "react";

const Email = () => {
  return (
    <div className="email d-flex flex-column  flex-xl-row gap-4 gap-xl-2 align-items-xl-end align-items-center  py-xl-0 py-5 ">
      <div className="d-flex gap-1 ">
        <input
          type="email"
          name=""
          id=""
          placeholder="EMAIL ADDRESS"
          className=""
        />
        <button className="px-2">JOIN</button>
      </div>
      <p className="custom-text-white m-0 text-xl-start  text-center">
        By connecting, you agree to receive news and updates <br /> from Wizkid
        and Sony Music Entertainment.for more
        <br /> information on how we use your data,please see the link below.
      </p>
    </div>
  );
};

export default Email;
