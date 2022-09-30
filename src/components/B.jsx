import React, { useEffect, useState } from "react";

import { useDispatch, useSelector } from "react-redux";
import { success } from "../redux/action";

const B = () => {
  const [text, setText] = useState("");

  const dispatch = useDispatch();
  const data = useSelector((store) => store.data);

  useEffect(() => {
    dispatch(success(text));
  }, []);

  const handleClick = (el) => {
    dispatch(success(text));
  };

  return (
    <div style={{ textAlign: "center", marginTop: "10px" }}>
      <input
        type="text"
        value={text}
        onChange={(e) => setText(e.target.value)}
      />
      <button onClick={handleClick}>Show</button>
    </div>
  );
};

export default B;
