import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";

function AnimatedWrapper({ children, className }) {
  const [ref, inView] = useInView({
    threshold: 0.5,
    triggerOnce: false,
  });

  const variants = {
    visible: { opacity: 1, scale: 1, y: 0 },
    hidden: {
      opacity: 0,
      scale: 0.75,
      y: 50,
    },
  };
  return (
    <motion.div
      animate={inView ? "visible" : "hidden"}
      variants={variants}
      transition={{ duration: 1.5, ease: "easeOut" }}
      ref={ref}
      className={className}
    >
      {children}
    </motion.div>
  );
}

export default AnimatedWrapper;
