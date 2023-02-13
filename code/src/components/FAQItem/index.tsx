import { useState } from "react";

import { motion } from "framer-motion";
import { ChatBubbleOutline, ExpandMore } from "@mui/icons-material";
import {
  Accordion,
  AccordionDetails,
  AccordionSummary,
  Typography,
} from "@mui/material";

import { FaqProps } from "types/main";

import styles from "./styles.module.css";

export default function FAQItem({ answer, question }: FaqProps) {
  const [isExpanded, setIsExpanded] = useState<boolean>(false);

  const handleToggleIsExpanded = () => {
    setIsExpanded((prevState) => !prevState);
  };

  return (
    <Accordion
      className={styles.faq}
      expanded={isExpanded}
      onClick={handleToggleIsExpanded}
      sx={{
        backgroundColor: "lightblue",
        border: "0.1rem solid #9fa4a8",
        borderRadius: "1rem",
        my: "2rem",
        overflow: "hidden",
        p: "3rem",
        position: "relative",
        transition: "0.3s ease-out",
      }}
    >
      <AccordionSummary expandIcon={<ExpandMore sx={{ fontSize: "5rem" }} />}>
        <motion.div
          initial={{ opacity: 0, scale: 0 }}
          whileInView={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
        >
          <Typography sx={{ fontSize: "3rem", fontWeight: 700, mr: "3.5rem" }}>
            {question}
          </Typography>
        </motion.div>
      </AccordionSummary>
      <AccordionDetails>
        <Typography sx={{ fontSize: "2rem", mt: "2rem" }}>{answer}</Typography>
        <ChatBubbleOutline
          sx={{
            color: "#2ecc71",
            fontSize: "7rem",
            opacity: 0.2,
            position: "absolute",
            top: "2rem",
            left: "2rem",
            zIndex: 1,
          }}
        />
        <ChatBubbleOutline
          sx={{
            color: "#3498db",
            fontSize: "7rem",
            opacity: 0.2,
            position: "absolute",
            top: "-1rem",
            left: "3rem",
          }}
        />
      </AccordionDetails>
    </Accordion>
  );
}
