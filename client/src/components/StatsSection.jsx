import { motion, useAnimation } from "framer-motion";
import { useEffect, useRef, useState } from "react";

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.2 },
  },
};

const itemVariants = {
  hidden: { opacity: 0, scale: 0.6, y: 20 },
  visible: { opacity: 1, scale: 1, y: 0, transition: { duration: 0.6, ease: "easeOut" } },
};

// Custom hook for count-up
const useCountUp = (endValue, duration = 2000) => {
  const [count, setCount] = useState(0);
  const frame = useRef();

  useEffect(() => {
    let startTime;
    const animateCount = (timestamp) => {
      if (!startTime) startTime = timestamp;
      const progress = Math.min((timestamp - startTime) / duration, 1);
      setCount(Math.floor(progress * endValue));
      if (progress < 1) {
        frame.current = requestAnimationFrame(animateCount);
      }
    };

    frame.current = requestAnimationFrame(animateCount);
    return () => cancelAnimationFrame(frame.current);
  }, [endValue, duration]);

  return count;
};

export default function StatsSection() {
  const stats = [
    { value: 25, suffix: "+", label: "Years in Business" },
    { value: 5000, suffix: "+", label: "Happy Clients" },
    { value: 400, suffix: "+", label: "Events Rocked" },
    { value: 40, suffix: "+", label: "Cities Covered" },
  ];

  return (
    <section className="py-20 px-6 bg-gray-50">
      <div className="max-w-5xl mx-auto text-center">
        <motion.h2
          className="text-3xl font-bold text-purple-700 mb-10"
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          Our Journey So Far
        </motion.h2>

        <motion.div
          className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-8 text-purple-800"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.3 }}
        >
          {stats.map((stat, index) => (
            <motion.div
              key={index}
              className="flex flex-col items-center"
              variants={itemVariants}
            >
              <CountUpNumber value={stat.value} suffix={stat.suffix} />
              <p className="mt-2 text-lg font-medium">{stat.label}</p>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}

function CountUpNumber({ value, suffix }) {
  const [start, setStart] = useState(false);
  const controls = useAnimation();
  const count = useCountUp(start ? value : 0, 2000);

  useEffect(() => {
    controls.start("visible");
    setStart(true);
  }, [controls]);

  return (
    <motion.span
      className="text-5xl font-extrabold"
      initial={{ opacity: 0 }}
      animate={controls}
      variants={{ visible: { opacity: 1 } }}
    >
      {count}
      {suffix}
    </motion.span>
  );
}
