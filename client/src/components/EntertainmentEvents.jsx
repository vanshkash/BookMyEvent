import { Helmet } from "react-helmet-async";
import { Link } from "react-router-dom";

export default function EntertainmentEvent() {
  return (
    <main className="bg-white text-gray-900 font-sans scroll-smooth">

      <Helmet>
        <title>Entertainment Events | BookMyEvent</title>
        <meta
          name="description"
          content="We create unforgettable entertainment experiences—from lively concerts and award shows to vibrant festivals—designed to engage, thrill, and leave a lasting impression."
        />
      </Helmet>

      {/* Hero Section */}
      <section className="relative overflow-hidden">
        {/* Angled Gradient */}
        <div className="absolute inset-0">
          <div className="w-full h-full bg-gradient-to-tr from-pink-500 to-yellow-500 -skew-y-12 transform origin-top-left" />
        </div>

        {/* Content Grid */}
        <div className="relative z-10 max-w-7xl mx-auto px-6 py-24 grid grid-cols-1 md:grid-cols-2 gap-10 items-center">
          <div className="text-white space-y-6 animate-fade-in">
            <h1 className="text-4xl md:text-6xl font-extrabold leading-tight">
              Entertainment Events
            </h1>
            <p className="text-lg md:text-xl font-light">
              We create unforgettable entertainment experiences—from lively concerts and award shows to vibrant festivals—designed to engage, thrill, and leave a lasting impression.
            </p>

            <a
              href="https://wa.me/917983202009?text=Hi%20I%20want%20to%20book%20BookMyEvent%20for%20an%20Entertainment%20Event!"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-block bg-gradient-to-r from-pink-400 to-yellow-400 text-white font-semibold px-8 py-3 rounded-lg shadow-md hover:scale-105 transition"
            >
              Book Your Event
            </a>
          </div>

          <div className="animate-fade-in delay-200">
            <div className="rounded-lg overflow-hidden shadow-2xl hover:scale-105 transition-transform">
              <img
                src="/images/entertainment_event.jpeg"
                alt="entertainment events"
                className="w-full h-auto object-cover"
              />
            </div>
          </div>
        </div>

        <div className="absolute bottom-0 right-0 w-64 h-64 bg-white/10 rounded-full filter blur-3xl" />
      </section>

      {/* Features */}
      <section className="max-w-7xl mx-auto py-20 px-6">
        <h2 className="text-3xl font-bold text-center text-pink-700 mb-12">
          Entertainment Highlights
        </h2>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10">
          {[
            {
              title: "Live Concerts",
              desc: "High-energy performances with full stage, sound, and lighting setup.",
              color: "bg-pink-100",
            },
            {
              title: "Award Shows",
              desc: "Stunning stage designs and professional program coordination for memorable ceremonies.",
              color: "bg-yellow-100",
            },
            {
              title: "Cultural & Music Festivals",
              desc: "Vibrant multi-artist and multi-activity festival arrangements.",
              color: "bg-orange-100",
            },
            {
              title: "Celebrity Appearances",
              desc: "Artist handling, coordination, green room, and stage protocols.",
              color: "bg-red-100",
            },
            {
              title: "Public Entertainment Nights",
              desc: "Community engagement events packed with fun, music, and energy.",
              color: "bg-purple-100",
            },
            {
              title: "Stage Light & Sound Production",
              desc: "Professional-grade equipment setup handled by our expert crew.",
              color: "bg-blue-100",
            },
          ].map((item, i) => (
            <div
              key={i}
              className={`p-6 rounded-xl shadow-md hover:shadow-xl transition ${item.color}`}
            >
              <h3 className="text-xl font-semibold mb-2 text-pink-800">
                {item.title}
              </h3>
              <p className="text-gray-700">{item.desc}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Gallery */}
      <section className="bg-gray-50 py-16 px-6">
        <h2 className="text-2xl font-bold text-center text-pink-700 mb-8">
          Event Gallery
        </h2>

        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
          {["ent1.webp", "ent2.webp", "ent3.webp"].map((img, i) => (
            <img
              key={i}
              src={`/images/entertainment_gallery/${img}`}
              alt={`Entertainment Event ${i + 1}`}
              className="rounded-lg shadow-md hover:scale-105 transition-transform object-cover w-full h-64"
            />
          ))}
        </div>
      </section>

      {/* Final CTA */}
      <section className="bg-gradient-to-r from-pink-700 via-red-500 to-yellow-500 text-white text-center pt-8 pb-8">
        <h2 className="text-3xl font-bold mb-4">
          Let’s Make Your Event Unforgettable
        </h2>

        <p className="mb-6 text-lg">
          Tell us your theme, performers, and vibe—we’ll handle everything else.
        </p>

        <a
          href="https://wa.me/917983202009?text=Hi%20I%20want%20to%20plan%20an%20Entertainment%20Event!"
          target="_blank"
          rel="noopener noreferrer"
          className="inline-block bg-white text-pink-700 font-bold px-8 py-3 rounded-full shadow-lg hover:bg-gray-100 transition"
        >
          Plan Your Event
        </a>

        <div className="mt-6 opacity-80 text-sm">
          Trusted for concerts, fests & stage shows across India
        </div>

        <div className="mt-6">
          <Link to="/services" className="text-white hover:underline">
            ← Back to Services
          </Link>
        </div>
      </section>

    </main>
  );
}
