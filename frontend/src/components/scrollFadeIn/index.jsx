import React from "react";
import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";

export const FadeInWhenVisible = ({ children, delay = 0 }) => {
  const [ref, inView] = useInView({
    triggerOnce: false, 
  });

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 50 }}
      animate={inView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.5, delay }}
    >
      {children}
    </motion.div>
  );
};
