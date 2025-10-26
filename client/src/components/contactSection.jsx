
import BookingForm from './contactform'
import { Helmet } from 'react-helmet-async';
import { motion } from "framer-motion";

export default function ContactSection({ showHelmet = false }) {
  return (
    <>
    {/* 🧠 Helmet for SEO */}
      {showHelmet && (
      <Helmet>
        <title>Book Your Event | ANIL DJ & EVENTS</title>
        <meta
          name="description"
          content="Book ANIL DJ & EVENTS for your wedding, reception, birthday, or corporate celebration. Fill out our quick form to get started."
        />
        <meta name="keywords" content="DJ booking, Indian wedding DJ, baraat DJ, ANIL DJ & EVENTS, event form" />
        <meta name="author" content="Vansh | ANIL DJ & EVENTS" />
        <meta property="og:title" content="Book Your Event | ANIL DJ & EVENTS" />
        <meta
          property="og:description"
          content="Submit your event details and book ANIL DJ & EVENTS for an unforgettable celebration."
        />
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://anildjevents.netlify.app/contact" />
      </Helmet>
      )}
    <motion.section
    // className="relative z-10 text-center mb-16"
          initial={{ opacity: 0, y: -30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
      id="contact"
      className="bg-gray-100 py-16 px-6 md:px-12"
      >
      <div className="text-center mb-10">
        <h2 className="text-4xl font-bold mb-4">Contact & Booking</h2>
        <p className="text-lg text-gray-700 font-bold">
          Ready to bring the beats to your event? Fill out the form below and we’ll get in touch!
        </p>
      </div>

      <BookingForm />
    </motion.section>
      </>
  );
}