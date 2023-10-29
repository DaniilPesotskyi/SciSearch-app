import css from "./page.module.css";

import Container from "@/components/common/Container/Container";
import Heading from "@/components/common/Heading/Heading";
import SubjectsList from "@/components/pages/HomePage/SubjectsList";

export default function Home() {
  return (
    <main className={css.main}>
      <Container>
        <p className={css.appTitle}>SciSearch</p>
        <Heading className={css.mainTitle}>
          Додаток для пошуку формул онлайн
        </Heading>
        <SubjectsList />
      </Container>
    </main>
  );
}
