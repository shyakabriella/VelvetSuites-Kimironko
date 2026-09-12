import { motion } from 'framer-motion';

export default function VelvetWelcome() {
  return (
    <motion.section
      className="bg-[#faf9f6] px-5 py-10 sm:py-12 lg:py-14"
      initial={{ opacity: 0, y: 25 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.25 }}
      transition={{
        duration: 0.7,
        ease: [0.22, 1, 0.36, 1],
      }}
    >
      <div className="mx-auto max-w-5xl text-center">
        <motion.p
          className="mb-3 text-xs font-semibold uppercase tracking-[0.28em] text-[#c9a84c]"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.15, duration: 0.6 }}
        >
          Experience Velvet
        </motion.p>

        <h2
          className="text-3xl font-bold leading-tight text-[#3b0404] sm:text-4xl md:text-5xl"
          style={{ fontFamily: 'var(--font-heading)' }}
        >
          Welcome to Velvet Suites
        </h2>

        <motion.div
          className="mx-auto my-5 h-[3px] bg-[#c9a84c]"
          initial={{ width: 0 }}
          whileInView={{ width: 80 }}
          viewport={{ once: true }}
          transition={{ delay: 0.25, duration: 0.7 }}
        />

        <p className="mx-auto max-w-4xl text-base leading-7 text-[#3f3f3f] sm:text-lg sm:leading-8">
          From the moment you arrive, immerse yourself in an atmosphere of pure
          tranquility. Whether you are indulging in our world-class culinary
          creations, relaxing in our peaceful garden and terrace, or retreating
          to your meticulously appointed suite, every detail of your stay is
          curated to exceed your highest expectations.
        </p>
      </div>
    </motion.section>
  );
}
