import React from "react";

const ActionButton = ({ text, onClick }) => {
  return (
    <button className="track-action--button" onClick={onClick}>
      {text}
    </button>
  );
};

export default ActionButton;
