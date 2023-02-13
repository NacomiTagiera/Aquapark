import SectionHeading from "components/SectionHeading";
import FAQItem from "components/FAQItem";

import { FaqProps } from "types/main";

import styles from "./styles.module.css";

const faqsData: FaqProps[] = [
  {
    question: "Jakie są godziny otwarcia?",
    answer: "Codziennie od 8 do 24",
  },
  {
    question: "Gdzie się znajduje aquapark?",
    answer: "ul Wymyślna 123, 15-000 Białystok",
  },
  {
    question: "Jakie są ceny biletów?",
    answer: "Na wszystkie atrakcje: dzieci: 50zł, dorośli: 100zł",
  },
  {
    question: "Czy jesteście otwarci w święta?",
    answer: "Tak, pracujemy nawet w święta",
  },
];

export default function FAQSection() {
  return (
    <section className={styles["faq-section"]} id="FAQ">
      <SectionHeading text="FAQ" />

      {faqsData.map((faqData) => (
        <FAQItem
          question={faqData.question}
          answer={faqData.answer}
          key={faqData.question}
        />
      ))}
    </section>
  );
}
