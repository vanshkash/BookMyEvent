import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { lazy, Suspense } from 'react';
import LazyLoadSection from './components/LazyLoadSection';
import { Player } from '@lottiefiles/react-lottie-player';
import barLoader from '../bar-loader.json';

// Lazy-loaded components
const AdminLogin = lazy(() => import('./components/admin/AdminLogin'));
const PrivacyPolicy = lazy(() => import('./components/PrivacyPolicy'));
const AdminDashboard = lazy(() => import('./components/admin/AdminDashboard'));
const BookingForm = lazy(() => import('./components/contactform'));
const ContactSection = lazy(() => import('./components/contactSection'));
const FooterSection = lazy(() => import('./components/footerSection'));
const GallerySection = lazy(() => import('./components/gallery'));
const HomePage = lazy(() => import('./components/homePage'));
const Navbar = lazy(() => import('./components/navbar'));
const ServicesPage = lazy(() => import('./components/servicePage'));
const WhatsAppButton = lazy(() => import('./components/WhatsAppButton'));
const CallButton = lazy(() => import('./components/CallButton'));
const TestimonialSlider = lazy(() => import('./components/TestimonialSlider'));
const ScrollToTop = lazy(() => import('./components/ScrollToTop'));
const EducationalEvents = lazy(() => import("./components/EducationalEvents"));
const CorporateEvents = lazy(() => import('./components/CorporateEvents'));
const SocialEvents = lazy(() => import('./components/SocialEvents'));
const EntertainmentEvents = lazy(() => import('./components/EntertainmentEvents'));
const PublicEvents = lazy(() => import('./components/PublicEvents'));
const StatsSection = lazy(() => import("./components/StatsSection"));
const AboutPage = lazy(() => import('./components/AboutPage'));

function App() {
  return (

    <BrowserRouter>
      <ScrollToTop />
      <Navbar />
      <CallButton />
      <WhatsAppButton />

      <Routes>
        <Route path="/" element={
          <>
            <Suspense
              fallback={
                <div className="flex flex-col items-center justify-center h-screen 
                    bg-gradient-to-br from-pink-300 via-purple-400 to-indigo-500
                    animate-gradient">
                  {/* Loader */}
                  <Player
                    autoplay
                    loop
                    src={barLoader}
                    style={{ height: "120px", width: "120px" }}
                  />

                  {/* Text */}
                  <span className="mt-6 text-white text-xl font-bold drop-shadow-lg animate-pulse">
                    Loading Page, please wait...
                  </span>
                </div>
              }
            >

              <HomePage />
            </Suspense>
            <LazyLoadSection><ServicesPage /></LazyLoadSection>
            <LazyLoadSection><GallerySection /></LazyLoadSection>
            <LazyLoadSection><ContactSection /></LazyLoadSection>
            <LazyLoadSection height="60vh"><TestimonialSlider /></LazyLoadSection>
            <LazyLoadSection height="50vh"><StatsSection /></LazyLoadSection>
            <LazyLoadSection><AboutPage /></LazyLoadSection>
            <FooterSection />
          </>
        } />

        {/* Route-level pages (no need for LazyLoadSection here) */}
        <Route path="/services" element={<><LazyLoadSection><ServicesPage showHelmet={true} /><FooterSection /></LazyLoadSection></>} />
        <Route path="/services/educational-events" element={<><LazyLoadSection><EducationalEvents /><FooterSection /></LazyLoadSection></>} />
        <Route path="/services/corporate-events" element={<><LazyLoadSection><CorporateEvents /><FooterSection /></LazyLoadSection></>} />
        <Route path="/services/social-events" element={<><LazyLoadSection><SocialEvents /><FooterSection /></LazyLoadSection></>} />
        <Route path="/services/entertainment-events" element={<><LazyLoadSection><EntertainmentEvents /><FooterSection /></LazyLoadSection></>} />
        <Route path="/services/public-events" element={<><LazyLoadSection><PublicEvents /><FooterSection /></LazyLoadSection></>} />
        <Route path="/gallery" element={<><LazyLoadSection><GallerySection showHelmet={true} /><FooterSection /></LazyLoadSection></>} />
        <Route path="/contact" element={<><LazyLoadSection><ContactSection showHelmet={true} /><FooterSection /></LazyLoadSection></>} />
        <Route path="/about" element={<><LazyLoadSection><AboutPage showHelmet={true} /><FooterSection /></LazyLoadSection></>} />
        <Route path="/reviews" element={<><TestimonialSlider /><FooterSection /></>} />
        <Route path="/admin" element={<LazyLoadSection><AdminDashboard /></LazyLoadSection>} />
        <Route path="/admin/login" element={<LazyLoadSection><AdminLogin /></LazyLoadSection>} />
        <Route path="/privacy-policy" element={<><LazyLoadSection><PrivacyPolicy /></LazyLoadSection><FooterSection /></>} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;