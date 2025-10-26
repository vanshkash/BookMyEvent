import React, { Suspense, useState, useEffect } from "react";
import { useInView } from "react-intersection-observer";
import { motion } from "framer-motion";

const LazyLoadSection = ({
  children,
  height = "100vh", // placeholder height
  fallback = null, // allow custom fallback
  animation = "up", // "up" | "down" | "left" | "right" | "fade"
  duration = 0.8, // animation speed
  delay = 0, // optional delay
}) => {
  const { ref, inView } = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    if (inView) setIsVisible(true);
  }, [inView]);

  // Motion Variants for smooth animation
  const variants = {
    hidden: {
      opacity: 0,
      y: animation === "up" ? 40 : animation === "down" ? -40 : 0,
      x: animation === "left" ? 40 : animation === "right" ? -40 : 0,
    },
    visible: {
      opacity: 1,
      y: 0,
      x: 0,
      transition: { duration, delay, ease: "easeOut" },
    },
  };

  return (
    <div ref={ref} style={{ minHeight: height }}>
      <motion.div
        initial="hidden"
        animate={isVisible ? "visible" : "hidden"}
        variants={variants}
      >
        {isVisible ? (
          <Suspense fallback={fallback}>{children}</Suspense>
        ) : (
          fallback
        )}
      </motion.div>
    </div>
  );
};

export default LazyLoadSection;
