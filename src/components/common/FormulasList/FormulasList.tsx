"use client";

import css from "./FormulasList.module.css";

import { formulas } from "@/api/formulas";

import { motion } from "framer-motion";
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

  const item = {
    hidden: { x: 20, opacity: 0 },
    visible: {
      x: 0,
      opacity: 1,
    },
  };

  return (
    <motion.div
      initial={{ opacity: 0 }}
      transition={{ duration: 0.2, ease: "easeInOut", delay: 0.3 }}
      animate={{ opacity: 1 }}
    >
      <p className={css.qnt}>Було знайдено {formulasToRender.length} формул</p>
      <motion.ul className={css.list}>
        {formulasToRender.length > 0 ? (
          formulasToRender.map((f) => (
            <motion.li
              key={f.name}
              variants={item}
              initial="hidden"
              animate="visible"
            >
              <FormulaCard name={f.name} formula={f.formula} />
            </motion.li>
          ))
        ) : (
          <div className={css.noRenderWrap}>
            <Image
              src={BooksImage.src}
              width={BooksImage.width}
              height={BooksImage.height}
              alt="books image"
            />
            <p className={css.noRenderText}>Оберіть елементи для пошуку</p>
          </div>
        )}
      </motion.ul>
    </motion.div>
  );
};

export default FormulasList;
