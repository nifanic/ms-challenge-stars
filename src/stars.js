import React from "react";

export const Star = ({ enabled, position, setPos }) => {
  const handleClick = () => {
    setPos(position);
  };

  return (
    <button type="button" onClick={handleClick}>
      {enabled ? "star" : "unstar"}
    </button>
  );
};
