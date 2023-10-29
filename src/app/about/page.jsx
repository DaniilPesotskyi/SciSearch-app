import css from "./page.module.css";

import Container from "@/components/common/Container/Container";
import Heading from "@/components/common/Heading/Heading";
import Paragraph from "@/components/common/Paragraph/Paragraph";

const AboutPage = () => {
  return (
    <main>
      <Container>
        <Heading className={css.heading}>Про додаток SciSearch</Heading>
        <Paragraph className={css.paragraph}>
          Проект SciSearch - це інтерактивний веб-сайт, розроблений для учнів та
          студентів, яким потрібно швидко знаходити необхідні математичні
          формули та рішення завдань.
        </Paragraph>
        <Paragraph className={css.paragraph}>
          Сайт надає зручний інтерфейс для пошуку та застосування формул на
          основі буквених значень та умов завдання. Користувачі можуть вводити
          буквені символи, і сайт надасть відповідні формули, пов`язані з цими
          символами. Крім цього, сайт надає можливість введення умов завдання та
          знаходить відповідні рішення.
        </Paragraph>
      </Container>
    </main>
  );
};

export default AboutPage;
