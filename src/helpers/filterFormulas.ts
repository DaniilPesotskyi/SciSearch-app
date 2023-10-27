import { IFormula } from "@/types/formula";

const filterFormulas = (letters: string[], formulas: IFormula[]) => {
  return formulas.filter((formula) =>
    letters.some((letter) => formula.formula.includes(letter))
  );
};

export default filterFormulas;
