import React from "react";
import { useSelector } from "react-redux";

const C = () => {
  const data = useSelector((store) => store.data);

  return (
    <div style={{ textAlign: "center" }}>
      <p>{data.join("")}</p>
    </div>
  );
};

export default C;
