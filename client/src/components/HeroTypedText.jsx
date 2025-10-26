import React, { useEffect, useRef } from "react";
import Typed from "typed.js";

const HeroTypedText = () => {
  const typedRef = useRef(null);

  useEffect(() => {
    const typed = new Typed(typedRef.current, {
      strings: [
        "Wedding Receptions", "Corporate Shows", "College Fests", "LED Visual Stage", "DJ Night Experience","Live Concerts"
      ],
      typeSpeed: 50,
      backSpeed: 25,
      backDelay: 1500,
      loop: true,
      showCursor: true,
      cursorChar: "|"
    });

    return () => typed.destroy();
  }, []);

  return (
    <div className="text-center">
      <h1 className="text-3xl font-extrabold text-blue-900">
        <span ref={typedRef} />
      </h1>
    </div>
  );
};

export default HeroTypedText;