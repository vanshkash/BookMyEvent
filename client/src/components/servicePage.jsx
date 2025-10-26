import React from "react";
import { Link } from "react-router-dom";
import { Helmet } from "react-helmet-async";
import { motion } from "framer-motion";

const services = [
  {
    title: "Educational Events",
    description: "We organize impactful workshops, engaging college fests, and interactive webinars that inspire learning and collaboration.",
    image: "/images/educational_event.jpeg",
  },
  {
    title: "Corporate Events",
    description:
      "Specializing in meetings, conferences, and seminars that reflect true professionalism—ensuring flawless execution and lasting impressions for every corporate event.",
    image: "/images/corporate_event.jpg",
  },
  {
    title: "Social Events",
    description:
      "Creating unforgettable weddings, joyful birthdays, and cherished anniversaries—celebrations crafted with style, emotion, and flawless execution.",
    image: "/images/social_event.jpeg",
  },
  {
    title: "Entertainment Events",
    description:
      "We create unforgettable entertainment experiences—from lively concerts and award shows to vibrant festivals—designed to engage, thrill, and leave a lasting impression.",
    image: "/images/entertainment_event.jpeg",
  },
  {
    title: "Public Events",
    description:
      "We organize dynamic public events—fairs, marathons, and exhibitions—that bring communities together, inspire participation, and create memorable experiences.",
    image: "/images/public_event.jpeg",
  },
];

export default function ServicesPage({ showHelmet = false }) {
  return (
    <>
      {showHelmet && (
        <Helmet>
          <title>Services | BookMyEvent</title>
          <meta
            name="description"
            content="Discover a wide range of event services—from corporate meetings and educational workshops to weddings, concerts, fairs, and marathons—crafted for seamless and memorable experiences."
          />
          <meta
            name="keywords"
            content="event management, corporate events, workshops, weddings, birthdays, concerts, festivals, fairs, marathons, BookMyEvent, Hapur event services"
          />
        </Helmet>

      )}

      <section
        id="services"
        className="relative py-20 px-6 md:px-12 bg-gradient-to-br from-[#f9efff] via-[#ffeeee] to-[#e0eef8] text-gray-900"
      >
        {/* Decorative pastel blobs */}
        <div className="absolute inset-0 pointer-events-none z-0">
          <div className="absolute top-0 left-0 w-40 h-40 bg-pink-100 rounded-full blur-3xl opacity-30"></div>
          <div className="absolute bottom-0 right-0 w-60 h-60 bg-purple-100 rounded-full blur-3xl opacity-30"></div>
        </div>

        {/* Header */}
        <motion.div
          className="relative z-10 text-center mb-16"
          initial={{ opacity: 0, y: -30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <h2 className="text-5xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-purple-600 to-pink-500 mb-4">
            Our Services
          </h2>
          <p className="text-lg text-gray-700 max-w-xl mx-auto font-semibold">
            Explore what makes{" "}
            <span className="font-extrabold text-purple-700">
              BookMyEvent
            </span>{" "}
            the heartbeat of every celebration.
          </p>
        </motion.div>

        {/* Service Cards */}
        <div className="relative z-10 grid gap-12 md:grid-cols-2 lg:grid-cols-3">
          {services.map((service, index) => {
            const slug = service.title.toLowerCase().replace(/\s+/g, "-");
            return (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.7, delay: index * 0.1 }}
                viewport={{ once: true }}
              >
                <Link to={`/services/${slug}`}>
                  <div className="group bg-white/80 backdrop-blur-md rounded-xl shadow-xl overflow-hidden transform transition duration-300 hover:scale-[1.03] hover:shadow-2xl">
                    <div className="overflow-hidden">
                      <img
                        src={service.image}
                        alt={service.title}
                        loading="lazy"
                        className="w-full h-64 object-cover transition duration-500 group-hover:scale-105"
                      />
                    </div>
                    <div className="p-6">
                      <h3 className="text-2xl font-bold text-purple-700 mb-2">
                        {service.title}
                      </h3>
                      <p className="text-gray-800 leading-relaxed">
                        {service.description}
                      </p>
                      <button className="mt-4 text-sm font-semibold text-white px-4 py-2 rounded-full bg-gradient-to-r from-pink-500 to-purple-500 shadow-md hover:shadow-lg hover:scale-105 transition">
                        Know More →
                      </button>
                    </div>
                  </div>
                </Link>
              </motion.div>
            );
          })}
        </div>
      </section>
    </>
  );
}
