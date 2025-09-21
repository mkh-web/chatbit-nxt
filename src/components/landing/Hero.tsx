'use client';

import { useEffect, useState } from 'react';
import Image from 'next/image';

// Assuming you have mobile versions for each slide
const images = [
  {
    desktop: '/sld.png',
    mobile: '/sld-mobile.png', // Create this file
  },
  {
    desktop: '/sld-v2.png',
    mobile: '/sld-mobile-v2.png',
  },
  {
    desktop: '/slide1.png',
    mobile: '/slide1-mobile.png', // Create this file
  },
];

export default function HeroSec() {
  const [current, setCurrent] = useState(0);
  const [isMobile, setIsMobile] = useState(false); // New state to track mobile view
  // Function to check if it's a mobile viewport (adjust breakpoint as needed)
  const checkMobile = () => {
    setIsMobile(window.innerWidth < 768); // Tailwind's 'md' breakpoint is 768px
  };

  useEffect(() => {

    checkMobile();
    window.addEventListener('resize', checkMobile);

    const interval = setInterval(() => {
      setCurrent((prev) => (prev + 1) % images.length);
    }, 6000);

    return () => {
      clearInterval(interval);
      window.removeEventListener('resize', checkMobile);
    };
  }, []);

  const goToSlide = (index: number) => {
    setCurrent(index);
  };

  const currentImageSrc = isMobile ? images[current].mobile : images[current].desktop;


  return (
    <section className="relative w-full min-h-[243px] h-[50vh] lg:h-[75vh] xl:h-[85vh] 2xl:h-[100vh] overflow-hidden flex flex-col">
      {/* Background image */}
      <div className="absolute inset-0 z-0">
        <Image
          src={currentImageSrc} // Use the dynamically selected source
          alt={`Slide ${current}`}
          fill
          priority
          className="object-cover object-center w-full h-full"
        />
      </div>

      {/* Content overlay */}
      <div className="relative z-10 flex flex-col justify-end items-center h-full text-white text-center px-4 pb-3 sm:pb-12">
        <div className="flex gap-3 sm:gap-4 mt-auto">
          {images.map((_, index) => (
            <button
              key={index}
              onClick={() => goToSlide(index)}
              className={`h-1 lg:h-2 transition-all duration-500 rounded-full ${
                current === index ? "w-5 lg:w-20 bg-white" : "w-5 lg:w-12 bg-white/50"
              }`}
              aria-label={`Go to slide ${index + 1}`}
            />
          ))}
        </div>

        <p className="text-xs sm:text-sm text-purple-100 mt-3">اختر الشريحة المطلوبة</p>
      </div>
    </section>
  );
}