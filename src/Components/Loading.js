import React from "react";
import login_img from "../Components/login_img.jpg";


const Loading = () => {
  return (
    <div className="text-center mt-3">
      <img src={login_img} alt="loading" width="40px" height="40px" />
    </div>
  );
};

export default Loading;