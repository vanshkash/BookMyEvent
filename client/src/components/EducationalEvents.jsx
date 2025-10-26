import { Helmet } from "react-helmet-async";
import { Link } from "react-router-dom";

export default function EducationalEvents() {
  return (
    <main className="bg-white text-gray-900 font-sans scroll-smooth">

      <Helmet>
        <title> Educational Events | Book My Event</title>
        <meta
          name="description"
          content="All-in-one entertainment bundles for Indian weddings and events. DJ, dhol, LED, photography, and more—customized to your vibe."
        />
        
      </Helmet>

      {/* Hero Section */}
      <section className="relative overflow-hidden">
        {/* Angled Gradient */}
        <div className="absolute inset-0">
          <div className="w-full h-full bg-gradient-to-tr from-pink-500 to-purple-700 -skew-y-12 transform origin-top-left" />
        </div>

        {/* Content Grid */}
        <div className="relative z-10 max-w-7xl mx-auto px-6 py-24 grid grid-cols-1 md:grid-cols-2 gap-10 items-center">
          <div className="text-white space-y-6 animate-fade-in">
            <h1 className="text-4xl md:text-6xl font-extrabold leading-tight">
              Educational Events
            </h1>
            <p className="text-lg md:text-xl font-light">
              We organize impactful workshops, engaging college fests, and interactive webinars that inspire learning and collaboration.
            </p>
            <a
              href="https://wa.me/918923426667?text=Hi%20I%20want%20to%20book%20Book%20My%20Event%20for%20my%20upcoming%20event!"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-block bg-gradient-to-r from-red-500 to-yellow-400 text-white font-semibold px-8 py-3 rounded-lg shadow-md hover:bg-gray-100 transition"
            >
              Book Your Event
            </a>
          </div>
          <div className="animate-fade-in delay-200">
            <div className="rounded-lg overflow-hidden shadow-2xl hover:scale-105 transition-transform">
              <img
                src="/images/educational_event.jpeg"
                alt="educational event"
                className="w-full h-auto object-cover"
              />
            </div>
          </div>
        </div>

        {/* Decorative Blur */}
        <div className="absolute bottom-0 right-0 w-64 h-64 bg-white/10 rounded-full filter blur-3xl" />
      </section>

      {/* Features */}
      <section className="max-w-7xl mx-auto py-20 px-6">
        <h2 className="text-3xl font-bold text-center text-purple-700 mb-12">
          What’s Inside Your Package
        </h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10">
          {[
  {
    title: "Workshops & Seminars",
    desc: "Interactive workshops and seminars that inspire learning and collaboration among participants.",
    color: "bg-blue-100",
  },
  {
    title: "College Fests",
    desc: "Engaging college festivals that showcase student talent and creativity in a lively environment.",
    color: "bg-purple-100",
  },
  {
    title: "Webinars & Online Sessions",
    desc: "Seamless online webinars and virtual sessions that actively involve participants and enhance knowledge.",
    color: "bg-pink-100",
  },
  {
    title: "Educational Competitions",
    desc: "Knowledge-based competitions and quizzes that combine learning with excitement and friendly rivalry.",
    color: "bg-yellow-100",
  },
  {
    title: "Campus Activities",
    desc: "Fun and interactive campus activities designed to boost student engagement and teamwork.",
    color: "bg-green-100",
  },
  {
    title: "Certificate Programs",
    desc: "Structured certificate programs and workshops that formalize skills and enhance professional development.",
    color: "bg-red-100",
  }
]
.map((item, i) => (
            <div
              key={i}
              className={`p-6 rounded-xl shadow-md hover:shadow-xl transition ${item.color}`}
            >
              <h3 className="text-xl font-semibold mb-2 text-purple-800">
                {item.title}
              </h3>
              <p className="text-gray-700">{item.desc}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Gallery */}
      <section className="bg-gray-50 py-16 px-6">
        <h2 className="text-2xl font-bold text-center text-purple-700 mb-8">
          Visual Vibes
        </h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
          {["edu1.webp", "edu2.webp", "edu3.webp"].map(
            (img, i) => (
              <img
                key={i}
                src={`/images/edu_images_gallery/${img}`}
                alt={`Event ${i + 1}`}
                className="rounded-lg shadow-md hover:scale-105 transition-transform object-cover w-full h-64"
              />
            )
          )}
        </div>
      </section>

      {/* Testimonials */}
<section className="py-20 px-6 bg-white text-center">
  <h2 className="text-2xl font-bold text-purple-700 mb-6">
    Client Love ❤️
  </h2>
  <div className="max-w-3xl mx-auto text-gray-800 italic text-lg space-y-6">
    <div>
      “The educational workshops and college fests organized by BookMyEvent were seamless! Every session was engaging, interactive, and truly inspiring.”
      <br />
      <span className="block mt-4 font-semibold text-purple-600">
        — Dr. Yogita Kaushik, Head of Department, SDGI Global University
      </span>
    </div>
    <div>
      “Our campus seminar ran perfectly from planning to execution. The team ensured every activity was smooth, fun, and highly impactful for the students.”
      <br />
      <span className="block mt-4 font-semibold text-purple-600">
        — Prof. Abhishek, ABS Engineering College
      </span>
    </div>
    <div>
      “The interactive learning sessions and competitions kept students motivated and excited. Truly professional and highly recommended!”
      <br />
      <span className="block mt-4 font-semibold text-purple-600">
        — Mr. Akash, Education Consultant
      </span>
    </div>
  </div>
</section>


      {/* Final CTA */}
<section className="bg-gradient-to-r from-purple-700 via-pink-500 to-yellow-400 text-white text-center pt-8 pb-8">
  <h2 className="text-3xl font-bold mb-4">
    Let’s Elevate Your Educational Event
  </h2>
  <p className="mb-6 text-lg">
    Share your vision, your theme, and your schedule—we’ll craft an engaging and seamless educational experience for your students.
  </p>
  <a
    href="https://wa.me/917983202009?text=Hi%20I%20want%20to%20book%20BookMyEvent%20for%20my%20upcoming%20educational%20event!"
    target="_blank"
    rel="noopener noreferrer"
    className="inline-block bg-white text-purple-700 font-bold px-8 py-3 rounded-full shadow-lg hover:bg-gray-100 transition"
  >
    Book Your Event
  </a>
  <div className="mt-6 text-sm opacity-80">
    Trusted by colleges and educational institutions nationwide
  </div>
  <div className="mt-6 mb-0">
    <Link to="/services" className="text-white hover:underline">
      ← Back to Services
    </Link>
  </div>
</section>

    </main>
  );
}