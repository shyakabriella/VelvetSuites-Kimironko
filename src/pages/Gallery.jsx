import React, { useEffect } from 'react';
import { motion } from 'framer-motion';
import './Gallery.css';

const galleryImages = [
  '/homepageimgs/628B0145-Edited-scaled.jpg.jpeg',
  '/homepageimgs/628B0243-Edited-1920x1280.jpg.jpeg',
  '/homepageimgs/628B0113-1920x1280.jpg.jpeg',
  '/homepageimgs/628B0197-Edited-1920x1280.jpg.jpeg',
  '/homepageimgs/628B0373-Edited-1920x1280.jpg.jpeg',
  '/homepageimgs/628B0418-Edited-1920x1280.jpg.jpeg',
  '/velvet pictures/WhatsApp Image 2026-07-31 at 00.30.23 (1).jpeg',
  '/velvet pictures/WhatsApp Image 2026-07-31 at 00.30.23 (2).jpeg',
  '/velvet pictures/WhatsApp Image 2026-07-31 at 00.30.23.jpeg',
  '/velvet pictures/WhatsApp Image 2026-07-31 at 00.30.24 (1).jpeg',
  '/velvet pictures/WhatsApp Image 2026-07-31 at 00.30.24 (2).jpeg',
  '/velvet pictures/WhatsApp Image 2026-07-31 at 00.30.24 (3).jpeg',
  '/velvet pictures/WhatsApp Image 2026-07-31 at 00.30.24.jpeg',
  '/velvet pictures/WhatsApp Image 2026-07-31 at 00.30.25 (1).jpeg',
  '/velvet pictures/WhatsApp Image 2026-07-31 at 00.30.25 (2).jpeg',
  '/velvet pictures/WhatsApp Image 2026-07-31 at 00.30.25.jpeg',
  '/velvet pictures/WhatsApp Image 2026-07-31 at 00.30.26 (1).jpeg',
  '/velvet pictures/WhatsApp Image 2026-07-31 at 00.30.26 (2).jpeg',
  '/velvet pictures/WhatsApp Image 2026-07-31 at 00.30.26.jpeg',
  '/velvet pictures/WhatsApp Image 2026-07-31 at 00.30.27 (1).jpeg',
  '/velvet pictures/WhatsApp Image 2026-07-31 at 00.30.27 (2).jpeg',
  '/velvet pictures/WhatsApp Image 2026-07-31 at 00.30.27.jpeg',
  '/velvet pictures/WhatsApp Image 2026-07-31 at 00.30.28 (1).jpeg',
  '/velvet pictures/WhatsApp Image 2026-07-31 at 00.30.28 (2).jpeg',
  '/velvet pictures/WhatsApp Image 2026-07-31 at 00.30.28.jpeg',
  '/velvet pictures/WhatsApp Image 2026-07-31 at 00.30.29 (1).jpeg',
  '/velvet pictures/WhatsApp Image 2026-07-31 at 00.30.29 (2).jpeg',
  '/velvet pictures/WhatsApp Image 2026-07-31 at 00.30.29.jpeg',
  '/velvet pictures/WhatsApp Image 2026-07-31 at 00.30.30 (1).jpeg',
  '/velvet pictures/WhatsApp Image 2026-07-31 at 00.30.30 (2).jpeg',
  '/velvet pictures/WhatsApp Image 2026-07-31 at 00.30.30.jpeg',
  '/velvet pictures/WhatsApp Image 2026-07-31 at 00.30.31 (1).jpeg',
  '/velvet pictures/WhatsApp Image 2026-07-31 at 00.30.31 (2).jpeg',
  '/velvet pictures/WhatsApp Image 2026-07-31 at 00.30.31 (3).jpeg',
  '/velvet pictures/WhatsApp Image 2026-07-31 at 00.30.31.jpeg',
  '/velvet pictures/WhatsApp Image 2026-07-31 at 00.30.32 (1).jpeg',
  '/velvet pictures/WhatsApp Image 2026-07-31 at 00.30.32 (2).jpeg',
  '/velvet pictures/WhatsApp Image 2026-07-31 at 00.30.32.jpeg',
  '/velvet pictures/WhatsApp Image 2026-07-31 at 00.30.33 (1).jpeg',
  '/velvet pictures/WhatsApp Image 2026-07-31 at 00.30.33 (2).jpeg',
  '/velvet pictures/WhatsApp Image 2026-07-31 at 00.30.33.jpeg',
  '/velvet pictures/WhatsApp Image 2026-07-31 at 00.30.34 (1).jpeg',
  '/velvet pictures/WhatsApp Image 2026-07-31 at 00.30.34 (2).jpeg',
  '/velvet pictures/WhatsApp Image 2026-07-31 at 00.30.34.jpeg',
  '/velvet pictures/WhatsApp Image 2026-07-31 at 00.30.35 (1).jpeg',
  '/velvet pictures/WhatsApp Image 2026-07-31 at 00.30.35 (2).jpeg',
  '/velvet pictures/WhatsApp Image 2026-07-31 at 00.30.35.jpeg',
  '/velvet pictures/WhatsApp Image 2026-07-31 at 00.30.36 (1).jpeg',
  '/velvet pictures/WhatsApp Image 2026-07-31 at 00.30.36 (2).jpeg',
  '/velvet pictures/WhatsApp Image 2026-07-31 at 00.30.36 (3).jpeg',
  '/velvet pictures/WhatsApp Image 2026-07-31 at 00.30.36.jpeg',
  '/velvet pictures/WhatsApp Image 2026-07-31 at 00.30.37 (1).jpeg',
  '/velvet pictures/WhatsApp Image 2026-07-31 at 00.30.37 (2).jpeg',
  '/velvet pictures/WhatsApp Image 2026-07-31 at 00.30.37.jpeg',
  '/velvet pictures/WhatsApp Image 2026-07-31 at 00.30.38 (1).jpeg',
  '/velvet pictures/WhatsApp Image 2026-07-31 at 00.30.38 (2).jpeg',
  '/velvet pictures/WhatsApp Image 2026-07-31 at 00.30.38.jpeg',
  '/velvet pictures/WhatsApp Image 2026-07-31 at 00.30.39 (1).jpeg',
  '/velvet pictures/WhatsApp Image 2026-07-31 at 00.30.39 (2).jpeg',
  '/velvet pictures/WhatsApp Image 2026-07-31 at 00.30.39.jpeg',
  '/velvet pictures/WhatsApp Image 2026-07-31 at 00.30.40 (1).jpeg',
  '/velvet pictures/WhatsApp Image 2026-07-31 at 00.30.40 (2).jpeg',
  '/velvet pictures/WhatsApp Image 2026-07-31 at 00.30.40 (3).jpeg',
  '/velvet pictures/WhatsApp Image 2026-07-31 at 00.30.40.jpeg',
  '/velvet pictures/WhatsApp Image 2026-07-31 at 00.30.41 (1).jpeg',
  '/velvet pictures/WhatsApp Image 2026-07-31 at 00.30.41.jpeg',
  '/velvet pictures/WhatsApp Image 2026-07-31 at 00.30.42 (1).jpeg',
  '/velvet pictures/WhatsApp Image 2026-07-31 at 00.30.42 (2).jpeg',
  '/velvet pictures/WhatsApp Image 2026-07-31 at 00.30.42 (3).jpeg',
  '/velvet pictures/WhatsApp Image 2026-07-31 at 00.30.42.jpeg',
  '/velvet pictures/WhatsApp Image 2026-07-31 at 00.30.43 (1).jpeg',
  '/velvet pictures/WhatsApp Image 2026-07-31 at 00.30.43 (2).jpeg',
  '/velvet pictures/WhatsApp Image 2026-07-31 at 00.30.43.jpeg',
  '/velvet pictures/WhatsApp Image 2026-07-31 at 00.30.44 (1).jpeg',
  '/velvet pictures/WhatsApp Image 2026-07-31 at 00.30.44 (2).jpeg',
  '/velvet pictures/WhatsApp Image 2026-07-31 at 00.30.44.jpeg',
  '/velvet pictures/WhatsApp Image 2026-07-31 at 00.30.45.jpeg',
];

export default function Gallery() {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <motion.div 
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, ease: "easeOut" }}
        className="vs-gallery-page"
    >
      {/* Hero Section */}
      <section className="vs-gallery-hero">
        <div className="vs-gallery-hero-overlay" />
        <h1 className="vs-gallery-hero-title">Gallery</h1>
      </section>

      {/* Grid Section */}
      <section className="vs-gallery-content">
        <div className="vs-gallery-grid">
          {galleryImages.map((src, index) => (
            <div key={index} className="vs-gallery-item">
              <img 
                src={src} 
                alt={`Velvet Suites Gallery - View ${index + 1}`} 
                loading="lazy" 
              />
            </div>
          ))}
        </div>
      </section>
    </motion.div>
  );
}
