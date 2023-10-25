import css from "./page.module.css";

import FormulaCard from "@/components/FormulaCard/FormulaCard";
import Container from "@/components/Container/Container";

export default function Home() {
  return (
    <main className={css.main}>
      <Container>
        <h1 className={css.title}>
          За якими даними вам потрібно знайти формулу?
        </h1>
        <div className={css.finder}></div>
        <p className={css.qnt}>Було знайдено 14 формул</p>
        <ul className={css.list}>
          <li className={css.item}>
            <FormulaCard
              symbols={["F", "m"]}
              name="Другий закон Ньютона"
              formula="a=F/m"
            />
          </li>
          <li className={css.item}>
            <FormulaCard
              symbols={["F", "m"]}
              name="Другий закон Ньютона"
              formula="a=F/m"
            />
          </li>
          <li className={css.item}>
            <FormulaCard
              symbols={["F", "m"]}
              name="Другий закон Ньютона"
              formula="a=F/m"
            />
          </li>
          <li className={css.item}>
            <FormulaCard
              symbols={["F", "m"]}
              name="Другий закон Ньютона"
              formula="a=F/m"
            />
          </li>
          <li className={css.item}>
            <FormulaCard
              symbols={["F", "m"]}
              name="Другий закон Ньютона"
              formula="a=F/m"
            />
          </li>
          <li className={css.item}>
            <FormulaCard
              symbols={["F", "m"]}
              name="Другий закон Ньютона"
              formula="a=F/m"
            />
          </li>
        </ul>
      </Container>
    </main>
  );
}
