import { evaluate } from "mathjs";

const solveWithFormula = (values: {}, formula: string): number => {
  return evaluate(formula.slice(formula.indexOf("=") + 1), values);
};

export default solveWithFormula;
