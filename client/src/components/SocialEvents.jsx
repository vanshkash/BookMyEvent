import { Helmet } from "react-helmet-async";
import { Link } from "react-router-dom";

export default function SocialEvent() {
  return (
    <main className="bg-white text-gray-900 font-sans scroll-smooth">

      <Helmet>
        <title>Social Events | BookMyEvent</title>
        <meta
          name="description"
          content="Beautifully crafted weddings, birthdays, and anniversaries—planned with emotion, style, and smooth execution to make your moments unforgettable."
        />
      </Helmet>

      {/* Hero Section */}
      <section className="relative overflow-hidden">
        {/* Angled Gradient */}
        <div className="absolute inset-0">
          <div className="w-full h-full bg-gradient-to-tr from-pink-500 to-red-600 -skew-y-12 transform origin-top-left" />
        </div>

        {/* Content Grid */}
        <div className="relative z-10 max-w-7xl mx-auto px-6 py-24 grid grid-cols-1 md:grid-cols-2 gap-10 items-center">
          <div className="text-white space-y-6 animate-fade-in">
            <h1 className="text-4xl md:text-6xl font-extrabold leading-tight">
              Social Events
            </h1>
            <p className="text-lg md:text-xl font-light">
              Creating unforgettable weddings, joyful birthdays, and cherished anniversaries—celebrations crafted with style, emotion, and flawless execution.
            </p>

            <a
              href="https://wa.me/917983202009?text=Hi%20I%20want%20to%20book%20BookMyEvent%20for%20a%20social%20event!"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-block bg-gradient-to-r from-red-400 to-pink-500 text-white font-semibold px-8 py-3 rounded-lg shadow-md hover:scale-105 transition"
            >
              Plan Your Celebration
            </a>
          </div>

          <div className="animate-fade-in delay-200">
            <div className="rounded-lg overflow-hidden shadow-2xl hover:scale-105 transition-transform">
              <img
                src="/images/social_event.jpeg"
                alt="social event"
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
          What We Take Care Of
        </h2>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10">
          {[
            {
              title: "Wedding Planning",
              desc: "Theme décor, music, rituals, guest flow & full celebration coordination.",
              color: "bg-pink-100",
            },
            {
              title: "Birthday Celebrations",
              desc: "Fun themes, activities, cakes, photography & entertainment.",
              color: "bg-yellow-100",
            },
            {
              title: "Anniversary Events",
              desc: "Romantic ambiance, dinner setup, décor, live music & memories.",
              color: "bg-purple-100",
            },
            {
              title: "Venue & Catering",
              desc: "Beautiful venues with customized food menus for your celebration.",
              color: "bg-green-100",
            },
            {
              title: "Photography & Videography",
              desc: "Professional coverage capturing your most heartfelt moments.",
              color: "bg-blue-100",
            },
            {
              title: "Music & Entertainment",
              desc: "DJ, live music, dance teams & hosts to make the event lively.",
              color: "bg-red-100",
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
          Moments That Matter
        </h2>

        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
          {["social1.webp", "social2.webp", "social3.webp"].map((img, i) => (
            <img
              key={i}
              src={`/images/social_gallery/${img}`}
              alt={`Social Event ${i + 1}`}
              className="rounded-lg shadow-md hover:scale-105 transition-transform object-cover w-full h-64"
            />
          ))}
        </div>
      </section>

      {/* Final CTA */}
      <section className="bg-gradient-to-r from-pink-600 via-red-500 to-orange-400 text-white text-center pt-8 pb-8">
        <h2 className="text-3xl font-bold mb-4">
          Let's Make Your Occasion Beautiful
        </h2>

        <p className="mb-6 text-lg">
          Your celebration deserves warmth, elegance, and joy—let’s create it together.
        </p>

        <a
          href="https://wa.me/917983202009?text=I%20want%20to%20plan%20a%20social%20event%20with%20BookMyEvent"
          target="_blank"
          rel="noopener noreferrer"
          className="inline-block bg-white text-pink-700 font-bold px-8 py-3 rounded-full shadow-lg hover:bg-gray-100 transition"
        >
          Start Planning
        </a>

        <div className="mt-6">
          <Link to="/services" className="text-white hover:underline">
            ← Back to Services
          </Link>
        </div>
      </section>

    </main>
  );
}
