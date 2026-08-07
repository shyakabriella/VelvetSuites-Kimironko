import React, { useState, useEffect, useCallback } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

const reviews = [
  {
    name: 'Sophie Laurent',
    location: 'Paris, France',
    text: '"Velvet Suites exceeded every expectation. The room was immaculately clean, the bed unbelievably comfortable, and the staff remembered my name from the moment I checked in. Kigali is a beautiful city and this is the perfect home base."',
    rating: 5,
  },
  {
    name: 'James Okafor',
    location: 'Lagos, Nigeria',
    text: '"I have stayed in luxury hotels across Africa, and Velvet Suites stands in a league of its own. The warm hospitality, the attention to detail in every corner of the room, and the genuine smiles of the team made this feel like home — a very elegant home."',
    rating: 5,
  },
  {
    name: 'Aisha Kamara',
    location: 'Nairobi, Kenya',
    text: '"From the moment I walked in, I felt completely at ease. The suite was gorgeous — crisp linens, beautiful African artwork on the walls, and a lounge area perfect for unwinding. The service is five-star without being stiff. I will be back."',
    rating: 5,
  },
  {
    name: 'Michael Thompson',
    location: 'New York, USA',
    text: '"Travelling for work can be exhausting, but Velvet Suites turned my Kigali trip into something I genuinely looked forward to. The room was quiet, spacious, and thoughtfully appointed. Breakfast was exceptional. A truly premium experience."',
    rating: 5,
  },
  {
    name: 'Priya Sharma',
    location: 'Mumbai, India',
    text: '"Our anniversary stay at Velvet Suites was nothing short of magical. The team surprised us with rose petals and a handwritten note — touches you simply do not expect but never forget. The rooms are stunning and the whole atmosphere is pure luxury."',
    rating: 5,
  },
  {
    name: 'Chen Wei',
    location: 'Shanghai, China',
    text: '"Outstanding in every way. The location is convenient, the room decor is elegant, and the in-room amenities are top-tier. The staff went out of their way to make recommendations and ensure I had everything I needed. Velvet Suites is a gem."',
    rating: 5,
  },
];

const SLIDE_INTERVAL = 4500;

export default function VelvetReviews() {
  const [current, setCurrent] = useState(0);
  const [paused, setPaused] = useState(false);

  const next = useCallback(() => {
    setCurrent(prev => (prev + 1) % reviews.length);
  }, []);

  useEffect(() => {
    if (paused) return;
    const timer = setInterval(next, SLIDE_INTERVAL);
    return () => clearInterval(timer);
  }, [paused, next]);

  const review = reviews[current];

  return (
    <section className="py-20 px-4 bg-white" id="reviews-section">
      <div className="max-w-7xl mx-auto text-center mb-16">
        <h2 className="text-3xl md:text-5xl font-bold text-[#3b0404] mb-4" style={{ fontFamily: 'var(--font-heading)' }}>
          Guest Reviews
        </h2>
        <div className="w-24 h-1 bg-[#c9a84c] mx-auto"></div>
      </div>

      <div
        className="max-w-2xl mx-auto"
        onMouseEnter={() => setPaused(true)}
        onMouseLeave={() => setPaused(false)}
      >
        <AnimatePresence mode="wait">
          <motion.div
            key={current}
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -16 }}
            transition={{ duration: 0.45, ease: 'easeInOut' }}
            className="bg-[#faf9f6] p-8 rounded-md shadow-sm relative"
          >
            <div className="text-4xl text-[#c9a84c] absolute top-4 left-4 opacity-50 font-serif">"</div>
            <p className="text-gray-600 italic mb-6 relative z-10 pt-4 leading-relaxed">
              {review.text}
            </p>
            <div className="flex items-center gap-4 border-t border-gray-200 pt-6">
              <div className="w-12 h-12 bg-[#c9a84c] rounded-full flex items-center justify-center text-white font-bold text-xl">
                {review.name.charAt(0)}
              </div>
              <div>
                <h4 className="font-semibold text-gray-900">{review.name}</h4>
                <p className="text-xs text-gray-500">{review.location}</p>
                <div className="text-[#c9a84c] text-sm mt-1">
                  {'★'.repeat(review.rating)}
                </div>
              </div>
            </div>
          </motion.div>
        </AnimatePresence>

        {/* Dot indicators */}
        <div className="flex justify-center gap-2 mt-6">
          {reviews.map((_, i) => (
            <button
              key={i}
              onClick={() => setCurrent(i)}
              aria-label={`Go to review ${i + 1}`}
              className="rounded-full transition-all duration-300"
              style={{
                width: i === current ? '24px' : '8px',
                height: '8px',
                background: i === current ? '#c9a84c' : '#e0dbd3',
                border: 'none',
                cursor: 'pointer',
                padding: 0,
              }}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
