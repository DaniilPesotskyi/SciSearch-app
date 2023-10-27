import css from "./FormulasList.module.css";

import FormulaCard from "../FormulaCard/FormulaCard";

interface IProps {}

const FormulasList: React.FC<IProps> = ({}) => {
  return (
    <ul className={css.list}>
      <li className={css.item}>
        <FormulaCard name="Другий закон Ньютона" formula="a=F+m" />
      </li>
      <li className={css.item}>
        <FormulaCard name="Другий закон Ньютона" formula="a=3/k" />
      </li>
      <li className={css.item}>
        <FormulaCard name="Другий закон Ньютона" formula="a=F/m" />
      </li>
      <li className={css.item}>
        <FormulaCard name="Другий закон Ньютона" formula="f=F*m*3" />
      </li>
      <li className={css.item}>
        <FormulaCard name="Другий закон Ньютона" formula="c=D/K*R+E" />
      </li>
      <li className={css.item}>
        <FormulaCard name="Другий закон Ньютона" formula="a=F/m+G" />
      </li>
    </ul>
  );
};

export default FormulasList;
