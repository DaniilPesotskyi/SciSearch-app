"use client";

import css from "./SubjectsList.module.css";

import { motion } from "framer-motion";
import Link from "next/link";

const list = {
  hidden: { opacity: 1, scale: 0 },
  visible: {
    opacity: 1,
    scale: 1,
    transition: {
      delayChildren: 0.3,
      staggerChildren: 0.2,
    },
  },
};

const item = {
  hidden: { y: 20, opacity: 0 },
  visible: {
    y: 0,
    opacity: 1,
  },
};

const SubjectsList = () => {
  return (
    <motion.ul
      className={css.subjects}
      variants={list}
      initial="hidden"
      animate="visible"
    >
      <motion.li variants={item}>
        <Link className={css.subjectsLink} href={"/physics"}>
          Фізика
        </Link>
      </motion.li>
      <motion.li variants={item}>
        <Link
          className={css.subjectsLink}
          href={"/"}
          style={{ cursor: "not-allowed" }}
        >
          Геометрія
        </Link>
      </motion.li>
      <motion.li variants={item}>
        <Link
          className={css.subjectsLink}
          href={"/"}
          style={{ cursor: "not-allowed" }}
        >
          Хімія
        </Link>
      </motion.li>
    </motion.ul>
  );
};

export default SubjectsList;
