import React from "react";
import { formatter } from "../../util/investment";
import { RESULTS_TABLE_HEADERS } from "./constatns";

const ResultsTable = ({ data, ...props }) => {
  return (
    <table {...props}>
      <thead>
        {RESULTS_TABLE_HEADERS.map((header) => (
          <th key={header}>{header}</th>
        ))}
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
