import { motion } from 'framer-motion';

export default function VelvetHero() {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.16,
        delayChildren: 0.2,
      },
    },
  };

  const itemVariants = {
    hidden: {
      opacity: 0,
      y: 30,
      filter: 'blur(5px)',
    },
    visible: {
      opacity: 1,
      y: 0,
      filter: 'blur(0px)',
      transition: {
        duration: 0.75,
        ease: [0.22, 1, 0.36, 1],
      },
    },
  };

  return (
    <section className="vs-hero relative flex h-[78svh] min-h-[560px] max-h-[850px] items-center justify-center overflow-hidden md:h-[82svh]">
      {/* Background video */}
      <motion.video
        className="absolute inset-0 h-full w-full object-cover"
        autoPlay
        muted
        loop
        playsInline
        preload="metadata"
        onLoadedMetadata={(event) => {
          event.currentTarget.playbackRate = 0.35;
        }}
        poster="/homepageimgs/628B0145-Edited-scaled.jpg.jpeg"
        aria-hidden="true"
        initial={{ opacity: 0, scale: 1.06 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{
          opacity: { duration: 0.8 },
          scale: { duration: 1.8, ease: 'easeOut' },
        }}
      >
        <source
          src="https://www.velvetsuites.rw/wp-content/uploads/2025/07/NGALI-Video-1.mp4"
          type="video/mp4"
        />
      </motion.video>

      {/* Video overlay */}
      <motion.div
        className="absolute inset-0 bg-gradient-to-b from-black/60 via-black/45 to-black/70"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1 }}
      />

      {/* Decorative glow */}
      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_center,transparent_20%,rgba(0,0,0,0.25)_100%)]" />

      {/* Hero content */}
      <motion.div
        className="relative z-10 mx-auto flex max-w-4xl flex-col items-center justify-center px-5 text-center sm:px-8"
        variants={containerVariants}
        initial="hidden"
        animate="visible"
      >
        <motion.p
          variants={itemVariants}
          className="mb-4 text-xs font-medium uppercase tracking-[0.3em] text-[#e3c46e] sm:text-sm"
        >
          Welcome to Velvet Suites
        </motion.p>

        <motion.h1
          variants={itemVariants}
          className="max-w-3xl text-4xl font-bold leading-[1.08] text-white drop-shadow-lg sm:text-5xl md:text-6xl"
          style={{ fontFamily: 'var(--font-heading)' }}
        >
          Comfort, Relaxation and Luxury in One Place
        </motion.h1>

        <motion.p
          variants={itemVariants}
          className="mb-7 mt-5 max-w-2xl text-base font-light leading-relaxed text-white/90 drop-shadow-md sm:text-lg md:mb-8 md:text-xl"
        >
          Step into a world of refined elegance, warm hospitality and
          exceptional comfort designed to make every stay memorable.
        </motion.p>

        <motion.div
          variants={itemVariants}
          className="flex w-full flex-col justify-center gap-3 sm:w-auto sm:flex-row sm:gap-4"
        >
          <motion.a
            href="https://direct-book.com/properties/velvetsuites?locale=en&items[0][adults]=2&items[0][children]=0&items[0][infants]=0&currency=USD&checkInDate=2026-07-16&checkOutDate=2026-07-17&trackPage=no"
            target="_blank"
            rel="noopener noreferrer"
            className="rounded-sm bg-[#3b0404] px-8 py-3.5 text-center text-sm font-semibold uppercase tracking-wider text-white shadow-lg shadow-black/30 transition-colors hover:bg-[#570707]"
            whileHover={{ y: -3, scale: 1.02 }}
            whileTap={{ scale: 0.97 }}
          >
            View Rooms
          </motion.a>

          <motion.button
            type="button"
            onClick={() => {
              document
                .getElementById('facilities-section')
                ?.scrollIntoView({ behavior: 'smooth' });
            }}
            className="rounded-sm border border-[#e3c46e] bg-black/25 px-8 py-3.5 text-sm font-semibold uppercase tracking-wider text-[#f2d681] backdrop-blur-sm transition-colors hover:bg-[#d8b65f] hover:text-[#2b0202]"
            whileHover={{ y: -3, scale: 1.02 }}
            whileTap={{ scale: 0.97 }}
          >
            Explore Facilities
          </motion.button>
        </motion.div>
      </motion.div>

      {/* Scroll indicator */}
      <motion.div
        className="absolute bottom-5 left-1/2 z-10 h-10 w-px origin-top bg-gradient-to-b from-[#d8b65f] to-transparent"
        initial={{ opacity: 0, scaleY: 0 }}
        animate={{
          opacity: [0.35, 1, 0.35],
          scaleY: 1,
        }}
        transition={{
          opacity: {
            duration: 1.8,
            repeat: Infinity,
            ease: 'easeInOut',
          },
          scaleY: {
            delay: 1.2,
            duration: 0.7,
          },
        }}
      />
    </section>
  );
}
