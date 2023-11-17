import React, { useState } from "react";
import Input from "../../components/input";
import { INITIAL_INPUT_VALUES, INPUTS_PROPS_LIST } from "./constants";
import ResultsTable from "../../components/results-table";
import { calculateInvestmentResults } from "../../util/investment";
import logo from "./../../assets/investment-calculator-logo.png";

const Home = () => {
  const [inputs, setInputs] = useState(INITIAL_INPUT_VALUES);

  const onChange = (name, value) => {
    setInputs((prevState) => ({
      ...prevState,
      [name]: Number(value),
    }));
  };

  const investData = calculateInvestmentResults(inputs);
  const formattedData = investData.map((curResult, index) => {
    const investedCapital =
      inputs.initialInvestment + curResult.annualInvestment * (index + 1);
    return {
      ...curResult,
      investedCapital: investedCapital,
      totalInterest: curResult.valueEndOfYear - investedCapital,
    };
  });

  return (
    <>
      <div id="header">
        <img src={logo} alt="" />
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

      <ResultsTable id="result" data={formattedData} />
    </>
  );
};

export default Home;
