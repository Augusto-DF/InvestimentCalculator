import React, { useState } from "react";
import Input from "../../components/input";
import { INITIAL_INPUT_VALUES, INPUTS_PROPS_LIST } from "./constants";

const Home = () => {
  const [inputs, setInputs] = useState(INITIAL_INPUT_VALUES);

  const onChange = (name, value) => {
    setInputs((prevState) => ({
      ...prevState,
      [name]: Number(value),
    }));
  };

  return (
    <>
      <div id="header">
        <h1>React Investment Calculator</h1>
      </div>

      <div id="user-input" className="input-group">
        {INPUTS_PROPS_LIST.map((props) => (
          <Input
            key={props.name}
            value={inputs[props.name]}
            onChange={onChange}
            {...props}
          />
        ))}
      </div>
    </>
  );
};

export default Home;
