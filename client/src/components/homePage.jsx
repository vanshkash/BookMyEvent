import React, { useState, useEffect } from "react";
import { Helmet } from "react-helmet-async";
import { motion } from "framer-motion";
import Particles from "react-tsparticles";
import { loadSlim } from "tsparticles-slim";
import HeroTypedText from "./HeroTypedText";

export default function HomePage() {

  <Helmet>
  {/* Page Title */}
  <title>BookMyEvent | High-Energy Event Management</title>

  {/* Meta Description */}
  <meta
    name="description"
    content="BookMyEvent specializes in electrifying DJ performances, weddings, college fests, and corporate events. Make your event unforgettable with our professional services."
  />

  {/* Meta Keywords */}
  <meta
    name="keywords"
    content="Event Management, DJ Booking, Weddings, Corporate Events, College Fests, Party Planning, Book DJ"
  />
</Helmet>;

  const particlesInit = async (engine) => {
    await loadSlim(engine);
  };

  const sliderImages = [
    "images/sliding_images/slide1.webp",
    "images/sliding_images/slide2.jpg",
    "images/sliding_images/slide3.jpg",
    "images/sliding_images/slide4.jpg",
    "images/sliding_images/slide5.jpg",
    "images/sliding_images/slide6.jpg",
    "images/sliding_images/slide7.webp",
  ];

  const [currentIndex, setCurrentIndex] = useState(0);
 
  // ✅ Auto Slide
  useEffect(() => {
  const interval = setInterval(() => {
    setCurrentIndex((prev) => (prev + 1) % sliderImages.length);
  }, 4500);
  return () => clearInterval(interval);
}, []);


  // ✅ Arrow Functions
  const prevSlide = () => {
    setCurrentIndex((prev) =>
      prev === 0 ? sliderImages.length - 1 : prev - 1
    );
  };

  const nextSlide = () => {
    setCurrentIndex((prev) => (prev + 1) % sliderImages.length);
  };

  return (
    <section
      className="relative min-h-screen flex items-center justify-center px-6 text-white overflow-hidden"
    >
      {/* ✅ Background Slider */}
      {sliderImages.map((img, index) => (
        <motion.img
          key={index}
          src={img}
          alt="Event Slide"
          className="absolute inset-0 w-full h-full object-cover transition-opacity duration-1000"
          initial={{ opacity: 0 }}
          animate={{ opacity: index === currentIndex ? 1 : 0 }}
        />
      ))}

      {/* Gradient Overlay */}
      <div className="absolute inset-0 bg-gradient-to-b from-black/50 via-black/20 to-black/60" />

      {/* ✅ Left Arrow */}
      <button
        onClick={prevSlide}
        className="absolute left-4 md:left-8 text-white text-4xl md:text-5xl z-20 opacity-70 hover:opacity-100 transition select-none"
      >
        ❮
      </button>

      {/* ✅ Right Arrow */}
      <button
        onClick={nextSlide}
        className="absolute right-4 md:right-8 text-white text-4xl md:text-5xl z-20 opacity-70 hover:opacity-100 transition select-none"
      >
        ❯
      </button>

      {/* ✅ Dots Indicators */}
      <div className="absolute bottom-8 flex gap-3 z-20">
        {sliderImages.map((_, index) => (
          <button
            key={index}
            onClick={() => setCurrentIndex(index)}
            className={`w-3 h-3 md:w-4 md:h-4 rounded-full transition-all ${
              index === currentIndex
                ? "bg-white scale-125 shadow-lg"
                : "bg-white/50 hover:bg-white/80"
            }`}
          />
        ))}
      </div>

      {/* Particles */}
      <Particles
        id="tsparticles"
        init={particlesInit}
        className="absolute inset-0"
        options={{
          background: { color: "transparent" },
          fullScreen: { enable: false },
          particles: {
            number: { value: 25 },
            color: { value: ["#ff0080", "#ffbf00", "#00d9ff"] },
            shape: { type: "circle" },
            opacity: { value: 0.7 },
            size: { value: 4, random: true },
            move: { enable: true, speed: 1.2, direction: "none", outModes: { default: "out" } },
          },
        }}
      />

      {/* Text Content */}
      <motion.div
        className="relative text-center max-w-2xl z-10"
        initial={{ opacity: 0, y: 40 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1, ease: "easeOut" }}
      >
        <motion.h1
  className="inline-block leading-tight pb-3 text-4xl md:text-7xl font-extrabold mb-8 bg-gradient-to-r from-pink-700 via-yellow-600 to-blue-700 text-transparent bg-clip-text animate-gradient"
  initial={{ scale: 0.8, opacity: 0 }}
  animate={{ scale: 1, opacity: 1 }}
  transition={{ delay: 0.3, duration: 0.6, type: "spring" }}
>
  Book My Event
</motion.h1>



        <motion.div
          className="text-3xl font-bold md:text-3xl mb-8 text-blue-400"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.6, duration: 0.8 }}
        >
          Crafting Memorable Experiences for Your <HeroTypedText />
        </motion.div>

        <motion.a
          href="https://wa.me/917983202009?text=Hi%20I%20want%20to%20book%20an%20EVENTS!"
          target="_blank"
          rel="noopener noreferrer"
          className="inline-block text-white font-semibold px-6 py-3 rounded-full bg-gradient-to-r from-pink-500 to-yellow-400 shadow-lg"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 1, duration: 0.8 }}
          whileHover={{
            scale: 1.08,
            boxShadow: "0px 0px 25px rgba(255, 200, 100, 0.8)",
          }}
        >
          Book Your Event
        </motion.a>
      </motion.div>
    </section>
  );
}
