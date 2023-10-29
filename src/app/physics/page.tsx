import css from "./page.module.css";

import { motion } from "framer-motion";

import FormulaCard from "@/components/common/FormulaCard/FormulaCard";
import Container from "@/components/common/Container/Container";
import SearchBar from "@/components/common/SearcherBar/SearchBar";
import FormulasList from "@/components/common/FormulasList/FormulasList";
import Heading from "@/components/common/Heading/Heading";

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
