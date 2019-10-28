import React from "react";
import { observer } from "mobx-react";
import useStores from "../hooks/useStores";

const ScareBar = () => {
  const {
    gameStore: { seconds, minutes }
  } = useStores();
  return (
    <>
      <div>
        <h2
          className="font-main text-orange text-center"
          style={{ margin: "5px" }}
        >
          Time:{" "}
          {minutes > 0 ? `${minutes < 10 ? `0${minutes}` : minutes}:` : "00:"}
          {seconds < 10 ? `0${seconds}` : seconds}
        </h2>
      </div>
    </>
  );
};

export default observer(ScareBar);
