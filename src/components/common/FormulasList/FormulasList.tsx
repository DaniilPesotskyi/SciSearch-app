"use client";

import css from "./FormulasList.module.css";

import { useSelector } from "react-redux";

import FormulaCard from "../FormulaCard/FormulaCard";
import { filterFormulas } from "@/helpers";
import { selectFilter } from "@/redux/filter/selectors";
import { formulas } from "@/api/formulas";

interface IProps {}

const FormulasList: React.FC<IProps> = ({}) => {
  const filters = useSelector(selectFilter);

  const formulasToRender = filterFormulas(filters, formulas);

  return (
    <>
      <p className={css.qnt}>Було знайдено {formulasToRender.length} формул</p>
      <ul className={css.list}>
        {formulasToRender.map((f) => (
          <li key={f.name}>
            <FormulaCard name={f.name} formula={f.formula} />
          </li>
        ))}
      </ul>
    </>
  );
};

export default FormulasList;
