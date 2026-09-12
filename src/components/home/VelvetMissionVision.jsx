import { motion } from 'framer-motion';

import missionImage from '../../Assets/mission-image.jpg';
import visionImage from '../../Assets/about-hero.jpg';

const revealLeft = {
  hidden: {
    opacity: 0,
    x: -35,
  },
  visible: {
    opacity: 1,
    x: 0,
    transition: {
      duration: 0.7,
      ease: [0.22, 1, 0.36, 1],
    },
  },
};

const revealRight = {
  hidden: {
    opacity: 0,
    x: 35,
  },
  visible: {
    opacity: 1,
    x: 0,
    transition: {
      duration: 0.7,
      ease: [0.22, 1, 0.36, 1],
    },
  },
};

const viewport = {
  once: true,
  amount: 0.12,
};

export default function VelvetMissionVision() {
  return (
    <section className="overflow-hidden bg-white px-5 py-8 sm:px-8 sm:py-10 lg:px-12 lg:py-12 xl:px-20">
      <div className="mx-auto max-w-[1540px] space-y-10 lg:space-y-12">
        {/* Mission */}
        <div className="grid items-center gap-7 lg:grid-cols-2 lg:gap-12">
          <motion.div
            variants={revealLeft}
            initial="hidden"
            whileInView="visible"
            viewport={viewport}
          >
            <p className="mb-2 text-xs font-semibold uppercase tracking-[0.28em] text-[#c9a84c]">
              What guides us
            </p>

            <h2
              className="mb-5 text-4xl font-medium leading-tight text-[#1f1f1f] sm:text-5xl"
              style={{ fontFamily: 'var(--font-heading)' }}
            >
              Our Mission
            </h2>

            <div className="max-w-2xl space-y-4 text-base leading-7 text-[#444] sm:text-lg sm:leading-8">
              <p>
                To provide exceptional, personalized hospitality that exceeds
                expectations, making every guest feel genuinely valued and
                uniquely cared for.
              </p>

              <p>
                Our mission is to craft experiences that go beyond a typical
                hotel stay. We are committed to consistently delivering
                impeccable service, luxurious comfort, and authentic care
                through every detail—from our opulent rooms and gourmet dining
                to our warm staff and bespoke guest services. At Velvet Suites,
                every visit is designed to be a memory worth keeping.
              </p>
            </div>
          </motion.div>

          <motion.div
            variants={revealRight}
            initial="hidden"
            whileInView="visible"
            viewport={viewport}
            className="overflow-hidden rounded-sm"
          >
            <motion.img
              src={missionImage}
              alt="Velvet Suites reception team representing our mission"
              className="h-[280px] w-full object-cover sm:h-[340px] lg:h-[380px]"
              whileHover={{ scale: 1.035 }}
              transition={{ duration: 0.5, ease: 'easeOut' }}
            />
          </motion.div>
        </div>

        {/* Vision */}
        <div className="grid items-center gap-7 lg:grid-cols-2 lg:gap-12">
          <motion.div
            variants={revealLeft}
            initial="hidden"
            whileInView="visible"
            viewport={viewport}
            className="overflow-hidden rounded-sm"
          >
            <motion.img
              src={visionImage}
              alt="Velvet Suites property representing our vision"
              className="h-[280px] w-full object-cover sm:h-[340px] lg:h-[380px]"
              whileHover={{ scale: 1.035 }}
              transition={{ duration: 0.5, ease: 'easeOut' }}
            />
          </motion.div>

          <motion.div
            variants={revealRight}
            initial="hidden"
            whileInView="visible"
            viewport={viewport}
          >
            <p className="mb-2 text-xs font-semibold uppercase tracking-[0.28em] text-[#c9a84c]">
              Where we are going
            </p>

            <h2
              className="mb-5 text-4xl font-medium leading-tight text-[#1f1f1f] sm:text-5xl"
              style={{ fontFamily: 'var(--font-heading)' }}
            >
              Our Vision
            </h2>

            <div className="max-w-2xl space-y-4 text-base leading-7 text-[#444] sm:text-lg sm:leading-8">
              <p>
                To be the most admired hotel in the hospitality industry, known
                for our refined elegance, innovative guest experiences, and
                dedication to creating a luxurious haven for global travellers.
              </p>

              <p>
                We envision Velvet Suites as a destination of choice for
                discerning guests who value sophistication, serenity, and
                exceptional hospitality. Our ambition is to lead in redefining
                luxury by fusing timeless charm with modern excellence, all
                while contributing positively to our community and environment.
              </p>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
