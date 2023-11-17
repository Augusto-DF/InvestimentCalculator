import React from "react";
import { formatter } from "../../util/investment";

const ResultsTable = ({ data, ...props }) => {
  console.log(data);
  return (
    <table {...props}>
      <thead>
        <th>Year</th>
        <th>Investment Value</th>
        <th>Interest(Year)</th>
        <th>Total Interest</th>
        <th>Invested Captial</th>
      </thead>
      <tbody>
        {data.map((row, index) => {
          const {
            year,
            interest,
            valueEndOfYear,
            investedCapital,
            totalInterest,
          } = row;
          return (
            <tr key={year + valueEndOfYear}>
              <td>{year}</td>
              <td>{formatter.format(valueEndOfYear)}</td>
              <td>{formatter.format(interest)}</td>
              <td>{formatter.format(totalInterest)}</td>
              <td>{formatter.format(investedCapital)}</td>
            </tr>
          );
        })}
      </tbody>
    </table>
  );
};

export default ResultsTable;
