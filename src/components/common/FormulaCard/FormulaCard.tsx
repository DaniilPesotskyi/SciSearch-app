"use client";

import css from "./FormulaCard.module.css";

import clsx from "clsx";
import { useState } from "react";
import { useSelector } from "react-redux";
import { selectFilter } from "@/redux/filter/selectors";
import { toast } from "react-toastify";

import { getLetters } from "@/helpers";
import { solveWithFormula } from "@/helpers";

interface IProps {
  name: string;
  formula: string;
}

const FormulaCard: React.FC<IProps> = ({ name, formula }) => {
  const filters = useSelector(selectFilter);
  const [isOpen, setIsOpen] = useState<boolean>(false);
  const [inputValues, setInputValues] = useState<{ [name: string]: string }>(
    {}
  );
  const [result, setResult] = useState<number>(0);

  const symbols = getLetters(formula);

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;

    setInputValues({ ...inputValues, [name]: value });
  };

  const handleMath = (e: React.MouseEvent<HTMLButtonElement>) => {
    e.preventDefault();
    const isFilled = symbols.every((s) => inputValues[s]);
    if (isFilled) {
      setResult(solveWithFormula(inputValues, formula));
      return;
    }
    toast.error("Всі необхідні поля мають бути заповнені");
  };

  const onMathRender = () => {
    return (
      <div className={css.mathWrap}>
        <ul className={css.mathList}>
          {symbols.map((s: string) => (
            <li key={s} className={css.mathItem}>
              <label className={css.mathLabel} htmlFor={s}>
                {s} =
              </label>
              <input
                autoComplete="off"
                name={s}
                id={s}
                className={css.mathInput}
                type="number"
                onChange={handleInputChange}
              />
            </li>
          ))}
        </ul>
        <div className={css.mathResultWrap}>
          <button
            type="button"
            className={css.mathResultBtn}
            onClick={(e) => handleMath(e)}
          >
            Рахувати
          </button>
          <p className={css.mathResult}>Результат: {result}</p>
        </div>
      </div>
    );
  };

  const highlightLetters = (formula: string) => {
    const letters = formula.split("");

    const formatedFormula = letters.map((l, index) => {
      if (filters.includes(l)) {
        return (
          <span key={index} style={{ color: "red" }}>
            {l}
          </span>
        );
      }
      return <>{l}</>;
    });

    return formatedFormula;
  };

  return (
    <div className={clsx(css.wrap, isOpen && css.open)}>
      <div className={css.card}>
        <h2 className={css.name}>{name}</h2>
        <div className={css.formulaActionsWrap}>
          <p className={css.formula}>{highlightLetters(formula)}</p>
          <div className={css.actionsBtns}>
            <button className={css.copyBtn}>
              <span className={css.copyText}>Копіювати</span>
              <CopyIcon className={css.icon} />
            </button>
            <button
              className={clsx(css.mathBtn, isOpen && css.open)}
              onClick={() => {
                setIsOpen(!isOpen);
                setInputValues({});
              }}
            >
              {isOpen ? "Закрити" : "Використати"}
            </button>
          </div>
        </div>
      </div>
      {isOpen && onMathRender()}
    </div>
  );
};

export default FormulaCard;

function CopyIcon({ className }: { className?: string }) {
  return (
    <svg
      className={className}
      xmlns="http://www.w3.org/2000/svg"
      width="18"
      height="18"
    >
      <path d="M12.938 4.781H2.812a.281.281 0 00-.28.282v10.125a.281.281 0 00.28.28h10.126a.282.282 0 00.28-.28V5.062a.281.281 0 00-.28-.28zm-.282 10.125H3.094V5.344h9.562v9.562zM15.47 2.812v10.126a.282.282 0 01-.563 0V3.094H5.062a.281.281 0 110-.563h10.125a.281.281 0 01.282.281z"></path>
    </svg>
  );
}
