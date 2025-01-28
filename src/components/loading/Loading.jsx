import React from "react";
import loadingImg from "../../assets/loading/loading.gif";

function Loading() {
  return (
    <div className="w-full h-screen flex justify-center items-center">
      <img src={loadingImg} alt="" className="w-full h-full object-cover" />
    </div>
  );
}

export default Loading;
