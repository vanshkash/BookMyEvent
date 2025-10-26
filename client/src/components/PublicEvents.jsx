import { Helmet } from "react-helmet-async";
import { Link } from "react-router-dom";

export default function PublicEvent() {
  return (
    <main className="bg-white text-gray-900 font-sans scroll-smooth">

      <Helmet>
        <title>Public Events | BookMyEvent</title>
        <meta
          name="description"
          content="We organize engaging public events including fairs, marathons, and exhibitions that bring communities together with seamless coordination and memorable experiences."
        />
      </Helmet>

      {/* Hero Section */}
      <section className="relative overflow-hidden">
        <div className="absolute inset-0">
          <div className="w-full h-full bg-gradient-to-tr from-green-500 to-orange-500 -skew-y-12 transform origin-top-left" />
        </div>

        <div className="relative z-10 max-w-7xl mx-auto px-6 py-24 grid grid-cols-1 md:grid-cols-2 gap-10 items-center">
          <div className="text-white space-y-6 animate-fade-in">
            <h1 className="text-4xl md:text-6xl font-extrabold leading-tight">
              Public Events
            </h1>
            <p className="text-lg md:text-xl font-light">
              From fairs and cultural exhibitions to marathons and community events—we ensure smooth management, vibrant ambience, and lasting public engagement.
            </p>

            <a
              href="https://wa.me/917983202009?text=Hi%20I%20want%20to%20plan%20a%20Public%20Event%20with%20BookMyEvent!"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-block bg-gradient-to-r from-green-400 to-orange-400 text-white font-semibold px-8 py-3 rounded-lg shadow-md hover:scale-105 transition"
            >
              Organize Your Event
            </a>
          </div>

          <div className="animate-fade-in delay-200">
            <div className="rounded-lg overflow-hidden shadow-2xl hover:scale-105 transition-transform">
              <img
                src="/images/public_event.jpeg"
                alt="public event"
                className="w-full h-auto object-cover"
              />
            </div>
          </div>
        </div>

        <div className="absolute bottom-0 right-0 w-64 h-64 bg-white/10 rounded-full filter blur-3xl" />
      </section>

      {/* Features */}
      <section className="max-w-7xl mx-auto py-20 px-6">
        <h2 className="text-3xl font-bold text-center text-green-700 mb-12">
          What We Handle
        </h2>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10">
          {[
            {
              title: "Fairs & Cultural Melas",
              desc: "Complete setup, stalls, lighting, entertainment zones and crowd coordination.",
              color: "bg-green-100",
            },
            {
              title: "Marathons & Walkathons",
              desc: "Route management, crowd control, stage announcements & branding.",
              color: "bg-orange-100",
            },
            {
              title: "Trade & Art Exhibitions",
              desc: "Professional stall setup, branding support, visitor flow & logistics.",
              color: "bg-yellow-100",
            },
            {
              title: "Public Concert Zones",
              desc: "Stage, sound, backstage support & artist coordination.",
              color: "bg-red-100",
            },
            {
              title: "Community Festivals",
              desc: "Engaging themes and zone planning to bring communities together.",
              color: "bg-blue-100",
            },
            {
              title: "Security & Crowd Management",
              desc: "On-ground staff, security coordination, route flow control, and safety protocols.",
              color: "bg-purple-100",
            },
          ].map((item, i) => (
            <div
              key={i}
              className={`p-6 rounded-xl shadow-md hover:shadow-xl transition ${item.color}`}
            >
              <h3 className="text-xl font-semibold mb-2 text-green-800">
                {item.title}
              </h3>
              <p className="text-gray-700">{item.desc}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Gallery */}
      <section className="bg-gray-50 py-16 px-6">
        <h2 className="text-2xl font-bold text-center text-green-700 mb-8">
          Event Glimpses
        </h2>

        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
          {["pub1.webp", "pub2.webp", "pub3.webp"].map((img, i) => (
            <img
              key={i}
              src={`/images/public_gallery/${img}`}
              alt={`Public Event ${i + 1}`}
              className="rounded-lg shadow-md hover:scale-105 transition-transform object-cover w-full h-64"
            />
          ))}
        </div>
      </section>

      {/* Final CTA */}
      <section className="bg-gradient-to-r from-green-700 via-orange-600 to-yellow-500 text-white text-center pt-8 pb-8">
        <h2 className="text-3xl font-bold mb-4">
          Plan a Public Event That Stands Out
        </h2>

        <p className="mb-6 text-lg">
          Bring people together — we’ll handle the production, safety, and coordination.
        </p>

        <a
          href="https://wa.me/917983202009?text=I%20want%20to%20host%20a%20public%20event!"
          target="_blank"
          rel="noopener noreferrer"
          className="inline-block bg-white text-green-700 font-bold px-8 py-3 rounded-full shadow-lg hover:bg-gray-100 transition"
        >
          Get Started
        </a>

        <div className="mt-6 text-sm opacity-80">
          Trusted for large-scale public gatherings across India
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
