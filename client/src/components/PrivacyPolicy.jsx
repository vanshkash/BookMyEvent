import { FaShieldAlt, FaUserSecret, FaWhatsapp } from 'react-icons/fa';

export default function PrivacyPolicy() {
  return (
    <div className="mx-auto px-6 py-12 text-gray-100 mt-16 bg-gradient-to-br from-gray-900 to-black">
      <div className="mb-10 text-center">
        <FaShieldAlt className="text-blue-400 text-4xl mx-auto mb-2" />
        <h1 className="text-4xl font-bold tracking-tight">Privacy Policy</h1>
        <p className="text-gray-400 mt-2 text-sm">Last updated: October 2025</p>
      </div>

      <section className="mb-8">
        <p className="text-base leading-relaxed">
          At <strong className="text-blue-300">BookMyEvent</strong>, we respect your privacy and are committed to protecting your personal information. 
          This Privacy Policy explains how we collect, use, and safeguard your data when you use our services.
        </p>
      </section>

      <hr className="border-gray-700 my-6" />

      <section className="mb-8">
        <h2 className="text-xl font-semibold mb-3 text-blue-300">1. Information We Collect</h2>
        <ul className="list-disc list-inside space-y-2 text-gray-300">
          <li>Your contact details (name, phone number, email)</li>
          <li>Event preferences, dates, location, and requirements</li>
          <li>Messages and inquiries made through our website or WhatsApp</li>
        </ul>
      </section>

      <section className="mb-8">
        <h2 className="text-xl font-semibold mb-3 text-blue-300">2. How We Use Your Information</h2>
        <ul className="list-disc list-inside space-y-2 text-gray-300">
          <li>To confirm and manage event bookings</li>
          <li>To communicate updates, queries, and event planning details</li>
          <li>To improve service quality and customer experience</li>
        </ul>
      </section>

      <section className="mb-8">
        <h2 className="text-xl font-semibold mb-3 text-blue-300">3. Data Protection</h2>
        <p className="text-gray-300 leading-relaxed">
          We implement strict security measures to ensure your personal data remains private and safe. 
          Your information is never sold or shared with third parties without your clear consent.
        </p>
      </section>

      <section className="mb-8">
        <h2 className="text-xl font-semibold mb-3 text-blue-300">4. Your Rights</h2>
        <p className="text-gray-300 leading-relaxed">
          You may request to view, update, or delete your personal information at any time. 
          We will respond to all data-related requests promptly and respectfully.
        </p>
      </section>

      <section className="mb-8">
        <h2 className="text-xl font-semibold mb-3 text-blue-300">5. Contact Us</h2>
        <p className="text-gray-300 leading-relaxed mb-2">
          If you have any questions about this Privacy Policy or how we handle your data, please contact us:
        </p>
        <a
          href="https://wa.me/917983202009?text=Hello%20BookMyEvent%2C%20I%20have%20a%20question%20regarding%20your%20privacy%20policy."
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center gap-2 text-blue-400 hover:text-blue-300 transition"
        >
          <FaWhatsapp className="text-xl" /> +91 79832 02009
        </a>
      </section>
    </div>
  );
}
