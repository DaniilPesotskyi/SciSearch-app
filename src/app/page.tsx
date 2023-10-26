import css from "./page.module.css";

import Container from "@/components/common/Container/Container";
import Link from "next/link";

export default function Home() {
  return (
    <main className={css.main}>
      <Container>
        <Link href={"/physics"}>Фізика</Link>
      </Container>
    </main>
  );
}
