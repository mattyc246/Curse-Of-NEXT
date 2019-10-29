import React, { useRef, useEffect } from "react";
import MainContainer from "../containers/MainContainer";
import ScaryImage from "../assets/images/portrait-lady-2.jpg";
import ScreamAudio from "../assets/audio/terrible-scream.mp3";

const Scare = ({ history }) => {
  const audioFile = useRef(null);
  useEffect(() => {
    audioFile.current.play();
  }, []);
  return (
    <MainContainer>
      <div className="flex-img-box">
        <img
          className="scary-lady mx-auto d-block"
          src={ScaryImage}
          alt="scary-lady"
        />
      </div>
      <audio
        ref={audioFile}
        src={ScreamAudio}
        onEnded={() => {
          history.push("/end");
        }}
      />
    </MainContainer>
  );
};

export default Scare;
