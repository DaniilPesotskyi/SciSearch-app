import css from "./page.module.css";

import FormulaCard from "@/components/common/FormulaCard/FormulaCard";
import Container from "@/components/common/Container/Container";
import SearchBar from "@/components/common/SearcherBar/SearchBar";
import FormulasList from "@/components/common/FormulasList/FormulasList";

export default function PhysicsPage() {
  return (
    <main className={css.main}>
      <Container>
        <h1 className={css.title}>
          За якими даними вам потрібно знайти формулу?
        </h1>
        <SearchBar formulas={["a=F/m", "d=c/m", "b=F/m"]} />
        <p className={css.qnt}>Було знайдено 14 формул</p>
        <FormulasList />
      </Container>
    </main>
  );
}
