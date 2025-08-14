import React from "react";
import corob from "../assets/corob.png";
const header = () => {
  return (
    <div>
      <div className="p-5 shadow-md">
        <a href="/">
          <img src={corob} width={160}></img>
        </a>
      </div>
    </div>
  );
};

export default header;
