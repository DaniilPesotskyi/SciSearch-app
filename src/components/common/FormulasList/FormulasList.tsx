"use client";

import css from "./FormulasList.module.css";

import { formulas } from "@/api/formulas";
import { useSelector } from "react-redux";

import FormulaCard from "../FormulaCard/FormulaCard";
import { filterFormulas } from "@/helpers";
import { selectFilter } from "@/redux/filter/selectors";

import BooksImage from "@/../public/nothing.jpg";
import Image from "next/image";

interface IProps {}

const FormulasList: React.FC<IProps> = ({}) => {
  const filters = useSelector(selectFilter);

  const formulasToRender = filterFormulas(filters, formulas);

  return (
    <>
      <p className={css.qnt}>Було знайдено {formulasToRender.length} формул</p>
      <ul className={css.list}>
        {formulasToRender.length > 0 ? (
          formulasToRender.map((f) => (
            <li key={f.name}>
              <FormulaCard name={f.name} formula={f.formula} />
            </li>
          ))
        ) : (
          <div className={css.noRenderWrap}>
            <Image
              src={BooksImage.src}
              width={BooksImage.width}
              height={BooksImage.height}
              alt="books image"
            />
            <p className={css.noRenderText}>
              На жаль, у нас поки що немає формул з потрібними вам даними
            </p>
          </div>
        )}
      </ul>
    </>
  );
};

export default FormulasList;
