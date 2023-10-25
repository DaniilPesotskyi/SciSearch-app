"use client";

import css from "./FormulaCard.module.css";

import { useState } from "react";

interface IProps {
  name: string;
  formula: string;
}

const FormulaCard: React.FC<IProps> = ({ name, formula }) => {
  const [isOpen, setIsOpen] = useState<boolean>(false);

  const onMathRender = () => {};

  return (
    <div className={css.wrap}>
      <h2 className={css.name}>{name}</h2>
      <div className={css.formulaActionsWrap}>
        <p className={css.formula}>{formula}</p>
        <div className={css.actionsBtns}>
          <button className={css.copyBtn}>
            <span className={css.copyText}>Копіювати</span>
            <CopyIcon className={css.icon} />
          </button>
          <button className={css.mathBtn} onClick={() => setIsOpen(!isOpen)}>
            Використати
          </button>
        </div>
      </div>
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
      fill="none"
    >
      <path
        fill="#000"
        d="M12.938 4.781H2.812a.281.281 0 00-.28.282v10.125a.281.281 0 00.28.28h10.126a.282.282 0 00.28-.28V5.062a.281.281 0 00-.28-.28zm-.282 10.125H3.094V5.344h9.562v9.562zM15.47 2.812v10.126a.282.282 0 01-.563 0V3.094H5.062a.281.281 0 110-.563h10.125a.281.281 0 01.282.281z"
      ></path>
    </svg>
  );
}
