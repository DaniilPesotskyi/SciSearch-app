import css from "./page.module.css";

import FormulaCard from "@/components/common/FormulaCard/FormulaCard";
import Container from "@/components/common/Container/Container";
import SearchBar from "@/components/common/SearcherBar/SearchBar";

export default function PhysicsPage() {
  return (
    <main className={css.main}>
      <Container>
        <h1 className={css.title}>
          За якими даними вам потрібно знайти формулу?
        </h1>
        <SearchBar formulas={["a=F/m", "d=c/m", "b=F/m"]} />
        <p className={css.qnt}>Було знайдено 14 формул</p>
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
      </Container>
    </main>
  );
}
