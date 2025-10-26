import { useState, useEffect } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Autoplay, Pagination } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import Lightbox from "yet-another-react-lightbox";
import Video from "yet-another-react-lightbox/plugins/video";
import "yet-another-react-lightbox/styles.css";
import { Helmet } from "react-helmet-async";
import { motion } from "framer-motion";

const galleryItems = [
  {
    src: "https://res.cloudinary.com/dawoeujlr/video/upload/v1761378460/event1_p93bct_2ebf13.mp4",
    alt: "Noida Wedding Event Highlights",
    poster: "images/homegalleryposter/event1.webp",
    type: "video",
  },
  {
    src: "https://res.cloudinary.com/dawoeujlr/video/upload/v1761377683/event2_bw758y.mp4",
    alt: "Exhibition Event Coverage",
    poster: "images/homegalleryposter/event2.webp",
    type: "video",
  },
  {
    src: "https://res.cloudinary.com/dawoeujlr/video/upload/v1761377176/event3_uxx4jp.mp4",
    alt: "stage performance highlights",
    poster: "images/homegalleryposter/event3.webp",
    type: "video",
  },
  {
    src: "https://res.cloudinary.com/dawoeujlr/video/upload/v1761378205/event4_cvvpmw.mp4",
    alt: "conference event highlights",
    poster: "images/homegalleryposter/event4.webp",
    type: "video",
  },
  {
    src: "https://res.cloudinary.com/dawoeujlr/video/upload/v1761378344/event5_m4s0sy.mp4",
    alt: "decorated venue with lights",
    poster: "images/homegalleryposter/event5.webp",
    type: "video",
  },
  {
    src: "https://res.cloudinary.com/dawoeujlr/video/upload/v1761378609/event6_tmikxm.mp4",
    alt: "singing performance highlights",
    poster: "images/homegalleryposter/event6.webp",
    type: "video",
  },
];

export default function SpotlightGallery({ showHelmet = false }) {
  const [open, setOpen] = useState(false);
  const [index, setIndex] = useState(0);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach(({ isIntersecting, target }) => {
          target.muted = true;
          isIntersecting ? target.play() : target.pause();
        });
      },
      { threshold: 0.6 }
    );

    const videos = document.querySelectorAll(".swiper-slide video");
    videos.forEach((video) => observer.observe(video));

    return () => videos.forEach((video) => observer.unobserve(video));
  }, []);

  return (
    <>
      {showHelmet && (
        <Helmet>
          <title>Gallery | Book My Event</title>
          <meta
            name="description"
            content="Explore our gallery of high-energy DJ setups, vibrant wedding moments, and crowd-hyping performances across India. Experience the vibe visually."
          />
        </Helmet>
      )}

      <section className="relative py-20 px-6 md:px-12 bg-gradient-to-br from-pink-200 via-purple-200 to-indigo-200 shadow-xl">
        {/* Decorative Background */}
        <div className="absolute inset-0 pointer-events-none z-0">
          <div className="w-full h-full bg-gradient-to-tr from-white/10 via-indigo-100/20 to-pink-100/10 blur-sm opacity-30" />
        </div>

        {/* Animated Header */}
        <motion.div
          className="relative z-10 text-center mb-16"
          initial={{ opacity: 0, y: -30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          viewport={{ once: true }}
        >
          <h2 className="text-5xl font-extrabold text-indigo-700 mb-4 tracking-wide drop-shadow-md">
            Gallery
          </h2>
          <p className="text-lg text-gray-700 max-w-xl mx-auto leading-relaxed font-extrabold">
            Glimpses of the <span className="text-purple-600 font-semibold">energy</span>,{" "}
            <span className="text-pink-600 font-semibold">setup</span>, and{" "}
            <span className="text-indigo-600 font-semibold">unforgettable moments</span> we create.
          </p>
          <motion.div
            className="mt-4"
            initial={{ opacity: 0, scaleX: 0 }}
            whileInView={{ opacity: 1, scaleX: 1 }}
            transition={{ duration: 0.6 }}
          >
            <div className="w-24 h-1 mx-auto bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 rounded-full" />
          </motion.div>
        </motion.div>

        {/* Animated Swiper Slider */}
        <Swiper
          modules={[Navigation, Autoplay, Pagination]}
          navigation
          pagination={{ clickable: true }}
          autoplay={{ delay: 3000, disableOnInteraction: false }}
          loop={true}
          spaceBetween={40}
          slidesPerView={1}
          className="max-w-3xl mx-auto"
        >
          {galleryItems.map((item, i) => (
            <SwiperSlide key={i}>
              <motion.div
                className="flex justify-center"
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.6, delay: i * 0.1 }}
                viewport={{ once: true }}
              >
                <motion.div
                  whileHover={{ scale: 1.03, boxShadow: "0px 8px 25px rgba(0,0,0,0.25)" }}
                  transition={{ type: "spring", stiffness: 250, damping: 12 }}
                  className="bg-white rounded-2xl shadow-2xl border border-indigo-200 hover:border-indigo-400 overflow-hidden group cursor-pointer"
                  onClick={() => {
                    setIndex(i);
                    setOpen(true);
                  }}
                >
                  <div className="relative">
                    <video
                      src={item.src}
                      poster={item.poster}
                      className="w-full h-[400px] object-cover"
                      muted
                      loop
                      playsInline
                      controls
                      loading="lazy"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent opacity-0 group-hover:opacity-100 transition duration-300" />
                  </div>
                  <div className="p-5 text-center">
                    <p className="text-indigo-700 font-semibold text-lg group-hover:text-indigo-900 transition duration-300">
                      {item.alt}
                    </p>
                  </div>
                </motion.div>
              </motion.div>
            </SwiperSlide>
          ))}
        </Swiper>

        {/* Lightbox */}
        <Lightbox
          open={open}
          close={() => setOpen(false)}
          index={index}
          plugins={[Video]}
          slides={galleryItems.map((item) => ({
            type: "video",
            sources: [{ src: item.src, type: "video/mp4" }],
            poster: item.poster,
            description: item.alt,
          }))}
          render={{
            slide: ({ slide, offset }) =>
              slide.type === "video" ? (
                <video
                  controls
                  autoPlay={offset === 0}
                  muted={offset !== 0}
                  style={{ maxHeight: "80vh", maxWidth: "100%", margin: "0 auto" }}
                  poster={slide.poster}
                  onLoadedData={(e) => {
                    const video = e.target;
                    if (offset === 0) {
                      video.play();
                      video.muted = false;
                    } else {
                      video.pause();
                      video.muted = true;
                    }
                  }}
                >
                  <source src={slide.sources[0].src} type="video/mp4" />
                </video>
              ) : null,
          }}
        />
      </section>
    </>
  );
}
