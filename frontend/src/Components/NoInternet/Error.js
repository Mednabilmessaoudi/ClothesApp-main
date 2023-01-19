import React from "react";

const Error = () => {
  const winX = window.innerWidth + "px";
  const winY = window.innerHeight + "px";
  return (
    <div>
      <img
        width={winX}
        height={winY}
        style={{ alignSelf: "center" }}
        src="https://helpdeskgeek.com/wp-content/pictures/2020/06/no-internet.png"
        alt="404"
      />
    </div>
  );
};

export default Error;
