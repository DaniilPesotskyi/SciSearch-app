import Image from "next/image";
import css from "./page.module.css";
import FormulaCard from "@/components/FormulaCard/FormulaCard";
import Container from "@/components/Container/Container";

export default function Home() {
  return (
    <main className={css.main}>
      <Container>
        {/* <h1 className={css.title}>
          За якими даними вам потрібно знайти формулу?
        </h1> */}
        <div className={css.finder}></div>
        <ul className={css.list}>
          <li className={css.item}>
            <FormulaCard name="Другий закон Ньютона" formula="a=F/m" />
          </li>
        </ul>
      </Container>
    </main>
  );
}
