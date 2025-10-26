import { Helmet } from "react-helmet-async";
import { Link } from "react-router-dom";

export default function CorporateEvent() {
  return (
    <main className="bg-white text-gray-900 font-sans scroll-smooth">

      <Helmet>
        <title>Corporate Events | BookMyEvent</title>
        <meta
          name="description"
          content="Professional event management for corporate meetings, conferences, seminars, and business gatherings—executed with precision and impact."
        />
      </Helmet>

      {/* Hero Section */}
      <section className="relative overflow-hidden">
        {/* Angled Gradient */}
        <div className="absolute inset-0">
          <div className="w-full h-full bg-gradient-to-tr from-blue-500 to-purple-600 -skew-y-12 transform origin-top-left" />
        </div>

        {/* Content Grid */}
        <div className="relative z-10 max-w-7xl mx-auto px-6 py-24 grid grid-cols-1 md:grid-cols-2 gap-10 items-center">
          <div className="text-white space-y-6 animate-fade-in">
            <h1 className="text-4xl md:text-6xl font-extrabold leading-tight">
              Corporate Events
            </h1>
            <p className="text-lg md:text-xl font-light">
              Specializing in meetings, conferences, and seminars that reflect true professionalism—ensuring flawless execution and lasting impressions for every corporate event.
            </p>

            <a
              href="https://wa.me/917983202009?text=Hi%20I%20want%20to%20host%20a%20corporate%20event%20with%20BookMyEvent!"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-block bg-gradient-to-r from-blue-400 to-purple-400 text-white font-semibold px-8 py-3 rounded-lg shadow-md hover:scale-105 transition"
            >
              Host Your Event
            </a>
          </div>

          <div className="animate-fade-in delay-200">
            <div className="rounded-lg overflow-hidden shadow-2xl hover:scale-105 transition-transform">
              <img
                src="/images/corporate_event.jpg"
                alt="corporate event"
                className="w-full h-auto object-cover"
              />
            </div>
          </div>
        </div>

        <div className="absolute bottom-0 right-0 w-64 h-64 bg-white/10 rounded-full filter blur-3xl" />
      </section>

      {/* Features */}
      <section className="max-w-7xl mx-auto py-20 px-6">
        <h2 className="text-3xl font-bold text-center text-blue-700 mb-12">
          Professional Event Solutions
        </h2>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10">
          {[
            {
              title: "Business Meetings",
              desc: "Organized with punctuality, structure, and seamless coordination.",
              color: "bg-blue-100",
            },
            {
              title: "Corporate Conferences",
              desc: "High-quality setups with lighting, stage design, and audio-visual support.",
              color: "bg-purple-100",
            },
            {
              title: "Seminars & Talks",
              desc: "Professional speaker coordination and audience engagement solutions.",
              color: "bg-pink-100",
            },
            {
              title: "Award Ceremonies",
              desc: "Elegant staging and ambiance for recognition and celebration.",
              color: "bg-yellow-100",
            },
            {
              title: "Product Launches",
              desc: "Impactful presentations with media coverage and brand engagement.",
              color: "bg-green-100",
            },
            {
              title: "Corporate Retreats",
              desc: "Team-building and executive bonding events planned end-to-end.",
              color: "bg-red-100",
            },
          ].map((item, i) => (
            <div
              key={i}
              className={`p-6 rounded-xl shadow-md hover:shadow-xl transition ${item.color}`}
            >
              <h3 className="text-xl font-semibold mb-2 text-blue-800">
                {item.title}
              </h3>
              <p className="text-gray-700">{item.desc}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Gallery */}
      <section className="bg-gray-50 py-16 px-6">
        <h2 className="text-2xl font-bold text-center text-blue-700 mb-8">
          Event Highlights
        </h2>

        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
          {["corp1.webp", "corp2.webp", "corp3.webp"].map((img, i) => (
            <img
              key={i}
              src={`/images/corporate_gallery/${img}`}
              alt={`Corporate Event ${i + 1}`}
              className="rounded-lg shadow-md hover:scale-105 transition-transform object-cover w-full h-64"
            />
          ))}
        </div>
      </section>

      {/* Final CTA */}
      <section className="bg-gradient-to-r from-blue-700 via-purple-600 to-pink-500 text-white text-center pt-8 pb-8">
        <h2 className="text-3xl font-bold mb-4">
          Elevate Your Corporate Event
        </h2>

        <p className="mb-6 text-lg">
          Share your event goals and schedule—we’ll handle the planning and execution with professionalism.
        </p>

        <a
          href="https://wa.me/917983202009?text=Hi%20I%20want%20to%20plan%20a%20corporate%20event!"
          target="_blank"
          rel="noopener noreferrer"
          className="inline-block bg-white text-blue-700 font-bold px-8 py-3 rounded-full shadow-lg hover:bg-gray-100 transition"
        >
          Plan Your Event
        </a>

        <div className="mt-6 text-sm opacity-80">
          Trusted by leading companies and institutions nationwide
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
