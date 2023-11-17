export const INITIAL_INPUT_VALUES = {
  initialInvestment: 0.0,
  annualInvestment: 0.0,
  expectedReturn: 0.0,
  duration: 1,
};

export const INPUTS_PROPS_LIST = [
  {
    label: "Initial Investment",
    type: "number",
    name: "initialInvestment",
  },
  {
    label: "Annual Investment",
    type: "number",
    name: "annualInvestment",
  },
  {
    label: "Expected Return",
    type: "number",
    name: "expectedReturn",
  },
  {
    label: "Duration",
    type: "number",
    name: "duration",
  },
];
