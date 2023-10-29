"use client";

import css from "./Paragraph.module.css";

import clsx from "clsx";
import { motion } from "framer-motion";

interface IProps {
  children: React.ReactNode;
  className?: string;
}

const Paragraph: React.FC<IProps> = ({ children, className }) => {
  return (
    <motion.p
      className={clsx(css.paragraph, className)}
      initial={{ opacity: 0 }}
      transition={{ duration: 0.2, ease: "easeInOut", delay: 0.2 }}
      animate={{ opacity: 1 }}
    >
      {children}
    </motion.p>
  );
};

export default Paragraph;
