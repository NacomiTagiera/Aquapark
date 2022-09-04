import { useState } from "react";

import {
  Accordion,
  AccordionDetails,
  AccordionSummary,
  Typography,
} from "@mui/material";
import { ExpandMore, ChatBubbleOutline } from "@mui/icons-material";

import styles from "./FAQItem.module.css";

export interface Props {
  question: string;
  answer: string;
}

export default function FAQItem({ question, answer }: Props) {
  const [isExpanded, setIsExpanded] = useState<boolean>(false);

  const handleToggleIsExpanded = () => {
    setIsExpanded((prevState) => !prevState);
  };

  return (
    <Accordion
      expanded={isExpanded}
      onClick={handleToggleIsExpanded}
      sx={{
        backgroundColor: "lightblue",
        border: ".1rem solid #9fa4a8",
        borderRadius: "1rem",
        my: "2rem",
        p: "3rem",
        position: "relative",
        overflow: "hidden",
        transition: ".3s ease",
        width: "50%",
      }}
      className={styles.faq}
    >
      <AccordionSummary expandIcon={<ExpandMore sx={{ fontSize: "5rem" }} />}>
        <Typography sx={{ mr: "3.5rem", fontSize: "3rem", fontWeight: 700 }}>
          {question}
        </Typography>
      </AccordionSummary>
      <AccordionDetails>
        <Typography sx={{ mt: "2rem", fontSize: "2rem" }}>{answer}</Typography>
        <ChatBubbleOutline
          sx={{
            color: "#2ecc71",
            fontSize: "7rem",
            position: "absolute",
            opacity: 0.2,
            top: "2rem",
            left: "2rem",
            zIndex: 1,
          }}
        />
        <ChatBubbleOutline
          sx={{
            color: "#3498db",
            fontSize: "7rem",
            position: "absolute",
            opacity: 0.2,
            top: "-1rem",
            left: "3-rem",
          }}
        />
      </AccordionDetails>
    </Accordion>
  );
}
