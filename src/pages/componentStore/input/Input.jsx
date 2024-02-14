import React, { useState } from "react";
import "./input.scss";

function Input({ type, name, placeholder, onInputChange }) {
  const [input, setInput] = useState("");
  const inputHandle = (e) => {
    setInput(e.target.value);
    onInputChange(e.target.name, e.target.value);
  };

  // if don,t put any input..
  const handleInputBox = (id) => {
    if (input == "") {
      const legend = document.getElementById(id);
      legend.style.marginLeft = "20px";
      legend.style.marginTop = "12px";
    }
  };
  // legend.removeEventListener("click" , handleInputBox)

  //if click input box
  const legendHandle = (id) => {
    const legend = document.getElementById(id);

    legend.style.marginLeft = "8px";
    legend.style.marginTop = "-12px";
  };
  return (
    <>
      <fieldset
        className="legend_container"
        onClick={() => legendHandle(placeholder)}
      >
        <legend className="legend" id={placeholder}>
          {placeholder}
        </legend>
        <input
          type={type}
          required
          name={name}
          onChange={inputHandle}
          onBlur={() => handleInputBox(placeholder)}
        />
      </fieldset>
    </>
  );
}

export default Input;
