import React from "react";

const Input = ({ onChange, label = "", ...props }) => {
  const handleChange = ({ target: { name, value } }) => onChange(name, value);

  return (
    <div>
      <label>{label}</label>
      <input onChange={handleChange} {...props} />
    </div>
  );
};

export default Input;
