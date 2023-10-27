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
        <SearchBar />
        <FormulasList />
      </Container>
    </main>
  );
}
