import React, { useState } from "react";
import Input from "../../components/input";
import { INITIAL_INPUT_VALUES } from "./constants";

const Home = () => {
  const [inputs, setInputs] = useState(INITIAL_INPUT_VALUES);

  const onChange = (name, value) => {
    setInputs((prevState) => ({
      ...prevState,
      [name]: Number(value),
    }));
  };

  console.log("inputs", inputs);
  return (
    <>
      <div id="header">
        <h1>React Investment Calculator</h1>
      </div>

      <div id="user-input" className="input-group">
        <Input
          label="Initial Investment"
          type="number"
          name="initialInvestment"
          value={inputs.initialInvestment}
          onChange={onChange}
        />
        <Input
          label="Annual Investment"
          type="number"
          name="annualInvestment"
          value={inputs.annualInvestment}
          onChange={onChange}
        />
        <Input
          label="Expected Return"
          type="number"
          name="expectedReturn"
          value={inputs.expectedReturn}
          onChange={onChange}
        />
        <Input
          label="Duration"
          type="number"
          name="duration"
          value={inputs.duration}
          onChange={onChange}
        />
      </div>
    </>
  );
};

export default Home;
