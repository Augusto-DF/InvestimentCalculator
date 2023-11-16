import React from "react";

const Input = ({ onChange, ...props }) => {
  const handleChange = ({ target: { name, value } }) => {
    onChange(name, value);
  };

  return (
    <div>
      <input onChange={handleChange} {...props} />
    </div>
  );
};

export default Input;
