import React from "react";
import {
  RiTiktokFill,
  RiTwitterXFill,
  RiYoutubeLine,
  RiFacebookCircleFill,
  RiSpotifyFill,
  RiAppleFill,
} from "react-icons/ri";
import { FiInstagram } from "react-icons/fi";
import { FaSoundcloud } from "react-icons/fa6";

const SocialMedia = () => {
  return (
    <div className="social d-flex justify-content-center align-items-center gap-3 py-xl-0 py-2 ">
      <a target="_blank" href="https://www.tiktok.com/@wizkidayo">
        <RiTiktokFill className="fs-5 custom-text-white" />
      </a>
      <a target="_blank" href="https://www.instagram.com/wizkidayo/">
        <FiInstagram className="fs-5 custom-text-white" />
      </a>
      <a target="_blank" href="https://x.com/wizkidayo">
        <RiTwitterXFill className="fs-5 custom-text-white" />
      </a>
      <a target="_blank" href="https://www.youtube.com/user/WizkidVEVO">
        <RiYoutubeLine className="fs-5 custom-text-white" />
      </a>
      <a
        target="_blank"
        href="https://web.facebook.com/wizkidmusic?_rdc=1&_rdr#"
      >
        <RiFacebookCircleFill className="fs-5 custom-text-white" />
      </a>
      <a
        target="_blank"
        href="https://open.spotify.com/artist/3tVQdUvClmAT7URs9V3rsp"
      >
        <RiSpotifyFill className="fs-5 custom-text-white" />
      </a>
      <a
        target="_blank"
        href="https://music.apple.com/us/artist/wizkid/309335750"
      >
        <RiAppleFill className="fs-5 custom-text-white" />
      </a>
      <a target="_blank" href="https://soundcloud.com/starboymusic">
        {" "}
        <FaSoundcloud className="fs-5 custom-text-white" />
      </a>
      {/* <br className="d-xl-non custom-bg-red" /> */}
    </div>
  );
};

export default SocialMedia;
