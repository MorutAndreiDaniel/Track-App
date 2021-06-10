import React from "react";

const MainButton = ({ text, onClick }) => {
  return (
    <button className="track-main--button" onClick={onClick}>
      {text}
    </button>
  );
};

export default MainButton;
