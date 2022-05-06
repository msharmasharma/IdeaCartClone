import { useState } from "react";
export const Input = ({getText}) => {
  const [text, setText] = useState("");
  const handleChange = (e) => {
    setText(e.target.value);
  };
 
  return (
    <div style={{ display: "flex" }}>
      <input type="text" placeholder="Search" onChange={handleChange}></input>
      <button
        onClick={() => {
          getText(text)
        }}
      >
        Search
      </button>
    </div>
  );
};
