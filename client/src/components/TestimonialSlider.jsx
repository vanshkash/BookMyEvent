import { useState, useEffect } from "react";
import { FaQuoteLeft } from "react-icons/fa";
import { motion, AnimatePresence } from "framer-motion";

const testimonials = [
  {
    name: "St. Xavier's College",
    quote:
      "BookMyEvent made our college fest a huge success! From workshops to fun activities, everything ran smoothly and kept students engaged.",
    location: "Mumbai",
  },
  {
    name: "TechCorp Solutions",
    quote:
      "Our corporate seminar was flawlessly executed by BookMyEvent. Professional, punctual, and created a lasting impression on all attendees.",
    location: "Noida",
  },
  {
    name: "Ritika & Sahil",
    quote:
      "Our wedding was magical thanks to BookMyEvent. Every moment, from the dhol beats to the dance floor, was perfectly organized and memorable.",
    location: "Hapur",
  },
  {
    name: "Live Nation Entertainment",
    quote:
      "BookMyEvent handled our music concert with amazing energy and precision. The audience loved every moment, and the production was top-notch!",
    location: "Delhi",
  },
  {
    name: "City Marathon Committee",
    quote:
      "The marathon event was seamless thanks to BookMyEvent. From crowd management to timing, everything was perfectly organized.",
    location: "Ghaziabad",
  },
  {
    name: "Neha & Karan",
    quote:
      "The birthday bash organized by BookMyEvent was unforgettable! Fun, vibrant, and full of joy for all our guests.",
    location: "Noida",
  },
  {
    name: "Global Tech Conference",
    quote:
      "BookMyEvent made our international conference smooth and professional. Attendees appreciated the attention to detail and flawless execution.",
    location: "Gurgaon",
  },
  {
    name: "SunFest Festival",
    quote:
      "From stage setup to audience engagement, BookMyEvent delivered an amazing festival experience. Highly recommend for large-scale events!",
    location: "Delhi",
  },
  {
    name: "Amit S.",
    quote:
      "Our exhibition was perfectly managed by BookMyEvent. Professional team, well-coordinated, and highly efficient!",
    location: "Ghaziabad",
  },
];


export default function TestimonialSlider() {
  const [current, setCurrent] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrent((prev) => (prev + 1) % testimonials.length);
    }, 3000);
    return () => clearInterval(timer);
  }, []);

  const handleDotClick = (index) => setCurrent(index);

  return (
    <section className="relative py-24 px-4 overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-br from-indigo-50 via-purple-50 to-pink-50 z-0" />

      <div className="relative z-10">
        {/* Heading Animation */}
        <motion.h2
          className="text-5xl font-extrabold text-center text-indigo-700 mb-14 drop-shadow-lg"
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, ease: "easeOut" }}
        >
          Client Reviews
        </motion.h2>

        <div id="testimonials" className="relative max-w-3xl mx-auto px-4 py-16">
          {/* Decorative Background */}
          <div className="absolute inset-0 bg-gradient-to-br from-purple-100 via-indigo-100 to-pink-100 rounded-3xl blur-sm z-0" />

          {/* Testimonial Card with Animation + Hover Effect */}
          <AnimatePresence mode="wait">
            <motion.div
              key={current}
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -30 }}
              whileHover={{ scale: 1.03, boxShadow: "0px 8px 30px rgba(0,0,0,0.2)" }}
              transition={{ duration: 0.6, ease: "easeInOut" }}
              className="relative z-10 bg-white shadow-2xl rounded-3xl p-10 cursor-pointer"
            >
              <div className="flex items-center gap-2 text-indigo-500 text-4xl mb-4">
                <FaQuoteLeft />
                <span className="text-indigo-700 font-bold text-2xl tracking-wide">
                  What Clients Say
                </span>
              </div>
              <p className="text-xl text-gray-800 italic leading-relaxed">
                “{testimonials[current].quote}”
              </p>
              <div className="mt-6 text-right">
                <h4 className="text-pink-600 font-bold text-lg drop-shadow-md">
                  {testimonials[current].name}
                </h4>
                <p className="text-sm text-gray-500">
                  {testimonials[current].location}
                </p>
              </div>
            </motion.div>
          </AnimatePresence>

          {/* Navigation Dots with Scale Animation */}
          <motion.div
            className="flex justify-center mt-8 space-x-3 z-10 relative"
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            {testimonials.map((_, index) => (
              <button
                key={index}
                onClick={() => handleDotClick(index)}
                className={`w-4 h-4 rounded-full transition-all duration-300 ${
                  current === index
                    ? "bg-pink-500 scale-125 shadow-lg"
                    : "bg-gray-300"
                }`}
              />
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  );
}
