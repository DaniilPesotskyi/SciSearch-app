import css from "./page.module.css";

import { Metadata } from "next";

import Container from "@/components/common/Container/Container";
import SearchBar from "@/components/common/SearcherBar/SearchBar";
import FormulasList from "@/components/common/FormulasList/FormulasList";
import Heading from "@/components/common/Heading/Heading";

export const metadata: Metadata = {
  title: "SciSearch | Фізика",
  description: "Пошук формул з предмету фізика",
};

export default function PhysicsPage() {
  return (
    <main className={css.main}>
      <Container>
        <Heading className={css.title}>
          За якими даними вам потрібно знайти формулу?
        </Heading>
        <SearchBar />
        <FormulasList />
      </Container>
    </main>
  );
}
