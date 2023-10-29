"use client";

import { motion } from "framer-motion";

const Heading: React.FC<{ className: string; children: React.ReactNode }> = ({
  className,
  children,
}) => {
  return (
    <motion.h1
      className={className}
      initial={{ opacity: 0 }}
      transition={{ duration: 0.2, ease: "easeInOut", delay: 0.1 }}
      animate={{ opacity: 1 }}
    >
      {children}
    </motion.h1>
  );
};

export default Heading;
