import { useState } from "react";
import { video } from "../../assets/vedio";
import { AiOutlineClose } from "react-icons/ai";
const VideoFeature = () => {
  const [isBig, setIsBig] = useState(false);
  return (
    <div className="fixed bottom-10 left-10">
      <button
        onClick={() => setIsBig(false)}
        className={`${
          isBig ? "right-0 top-0" : "right-0 top-5"
        } bg-black rounded-full p-1 text-white absolute  z-20 transition-all duration-200 active:rotate-180`}
      >
        <AiOutlineClose size={12} />
      </button>
      <div
        className={`${
          isBig ? "w-48 h-72 rounded-xl" : "rounded-full w-32 h-32"
        } relative  bg-black    overflow-hidden transition-all duration-200 `}
      >
        <button
          onClick={() => setIsBig(true)}
          className="absolute font-bold text-xl top-0 left-0 w-full h-full z-10 flex items-center justify-center"
        >
          Click here
        </button>
        <video
          className="absolute w-full h-full flex items-center justify-center top-0 left-0 object-fill"
          autoPlay
          muted={isBig ? false : true}
          loop
        >
          <source src={video} />
          flkfjgld
        </video>
      </div>
    </div>
  );
};

export default VideoFeature;
