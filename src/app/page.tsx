import css from "./page.module.css";

import Container from "@/components/common/Container/Container";
import Link from "next/link";

export default function Home() {
  return (
    <main className={css.main}>
      <Container>
        <p className={css.appTitle}>SciSearch</p>
        <h1 className={css.mainTitle}>Інструмент для пошуку формул онлайн</h1>
        <ul className={css.subjects}>
          <li>
            <Link className={css.subjectsLink} href={"/physics"}>
              Фізика
            </Link>
          </li>
          <li>
            <Link
              className={css.subjectsLink}
              href={"/"}
              style={{ cursor: "not-allowed" }}
            >
              Геометрія
            </Link>
          </li>
          <li>
            <Link
              className={css.subjectsLink}
              href={"/"}
              style={{ cursor: "not-allowed" }}
            >
              Хімія
            </Link>
          </li>
        </ul>
      </Container>
    </main>
  );
}
