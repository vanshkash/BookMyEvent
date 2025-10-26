import React from 'react';
import { Helmet } from 'react-helmet-async';

export default function About() {
  return (
    <div className=" bg-gradient-to-r from-gray-100 to-gray-200 min-h-screen font-sans">
      <Helmet>
        <title>About - BookMyEvent</title>
      </Helmet>

      {/* Hero Section */}
      <section className="relative text-black py-24 pb-2 px-6 text-center">
        <h1 className="text-4xl md:text-5xl font-extrabold mb-4 drop-shadow-lg">About BookMyEvent</h1>
        <p className="text-lg md:text-xl max-w-2xl mx-auto drop-shadow-sm">
          Simplifying event planning for unforgettable experiences — from weddings and birthdays to corporate events.
        </p>
        {/* <div className="absolute inset-0 bg-black opacity-10"></div> */}
      </section>

      {/* Mission / Vision */}
      <section className="py-20 px-6 max-w-5xl mx-auto text-center">
        <h2 className="text-3xl font-bold mb-6 text-gray-800">Our Mission</h2>
        <p className="text-gray-600 text-lg md:text-xl mb-12 leading-relaxed">
          We aim to simplify event planning by providing a seamless platform that connects clients with trusted vendors,
          ensures smooth communication, and makes every celebration stress-free and memorable.
        </p>

        <h2 className="text-3xl font-bold mb-6 text-gray-800">Our Vision</h2>
        <p className="text-gray-600 text-lg md:text-xl leading-relaxed">
          To be the most trusted event management platform that transforms ideas into unforgettable experiences, 
          ensuring each event is executed with perfection and passion.
        </p>
      </section>

      {/* Services Section */}
      <section className="py-2  px-6">
        <h2 className="text-3xl font-bold text-center text-gray-800 mb-12">What We Offer</h2>
        <div className="grid md:grid-cols-3 gap-10 max-w-6xl mx-auto">
          <div className="bg-white p-8 rounded-2xl shadow-lg transform transition duration-500 hover:scale-105 hover:shadow-2xl">
            <h3 className="text-xl font-semibold mb-3 text-blue-600">Educational Events</h3>
            <p className="text-gray-600 leading-relaxed">
              Engaging workshops, college fests, and webinars designed to inspire learning, collaboration, and growth.
            </p>
          </div>

          <div className="bg-white p-8 rounded-2xl shadow-lg transform transition duration-500 hover:scale-105 hover:shadow-2xl">
            <h3 className="text-xl font-semibold mb-3 text-blue-600">Corporate Events</h3>
            <p className="text-gray-600 leading-relaxed">
              Seamless conferences, meetings, and seminars that reflect professionalism and leave a lasting impact.
            </p>
          </div>

          <div className="bg-white p-8 rounded-2xl shadow-lg transform transition duration-500 hover:scale-105 hover:shadow-2xl">
            <h3 className="text-xl font-semibold mb-3 text-blue-600">Social Events</h3>
            <p className="text-gray-600 leading-relaxed">
              Weddings, birthdays, and anniversaries planned to perfection, making every celebration unforgettable.
            </p>
          </div>
        </div>
      </section>

      {/* Team Section */}
<section className="py-20 px-6 max-w-6xl mx-auto text-center">
  <h2 className="text-3xl font-bold mb-12 text-gray-800">Meet Our Team</h2>
  <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-10">
    {[
      { name: 'Vansh Kashyap', role: 'Founder & Event Planner', img: 'images/vansh1.jpg' },
      { name: 'Vansh Raj Sain', role: 'Web Developer', img: 'images/vansh1.jpg' },
      { name: 'Rohit Sharma', role: 'Event Coordinator', img: 'images/vansh1.jpg' },
      { name: 'Rajan Kumar', role: 'Web Developer', img: 'images/vansh1.jpg' }
    ].map((member, index) => (
      <div
        key={index}
        className="bg-white p-8 rounded-2xl shadow-lg transform transition duration-500 hover:scale-105 hover:shadow-2xl"
      >
        <div className="w-28 h-28 mx-auto rounded-full overflow-hidden mb-5">
          <img
            src={member.img}
            alt={member.name}
            className="w-full h-full object-cover"
          />
        </div>
        <h3 className="text-lg font-semibold text-gray-800">{member.name}</h3>
        <p className="text-gray-500">{member.role}</p>
      </div>
    ))}
  </div>
</section>

    </div>
  );
}
