import { motion } from 'framer-motion';

import chairmanImage from '../../Assets/chairman.jpeg';

const teamMembers = [
  {
    name: 'Mazimpaka Emmanuel',
    role: 'Operations Manager',
    image: '/aboutpage/image_7.jpg',
  },
  {
    name: 'Musabyimana Louise',
    role: 'Head of Customer Care',
    image: '/aboutpage/image_8.jpg',
  },
  {
    name: 'Uwamahoro Delphine',
    role: 'Receptionist',
    image: '/aboutpage/image_9.jpeg',
  },
];

const boardMembers = [
  {
    name: 'Ally Gasana',
    role: 'Chairman of the Board',
    image: '/aboutpage/image_10.png',
  },
  {
    name: 'Olivia Nyirandende',
    role: 'Board Member',
    image: '/aboutpage/image_11.png',
  },
  {
    name: 'Edwin Kamanzi',
    role: 'Board Member',
    image: '/aboutpage/image_12.png',
  },
];

const sectionReveal = {
  hidden: {
    opacity: 0,
    y: 35,
  },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.75,
      ease: [0.22, 1, 0.36, 1],
    },
  },
};

function PersonCard({ person, index }) {
  return (
    <motion.article
      className="group relative overflow-hidden bg-[#171717]"
      initial={{ opacity: 0, y: 35 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.15 }}
      transition={{
        duration: 0.65,
        delay: index * 0.1,
        ease: [0.22, 1, 0.36, 1],
      }}
      whileHover={{ y: -6 }}
    >
      <div className="relative aspect-[4/5] overflow-hidden">
        <img
          src={person.image}
          alt={`${person.name} – ${person.role}`}
          loading="lazy"
          className="h-full w-full object-cover object-top transition-transform duration-700 group-hover:scale-[1.04]"
        />

        <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/10 to-transparent" />

        <div className="absolute inset-x-0 bottom-0 p-5 sm:p-6">
          <p className="mb-2 text-xs font-semibold uppercase tracking-[0.18em] text-[#e1c169]">
            {person.role}
          </p>

          <h3
            className="text-2xl font-medium leading-tight text-white sm:text-3xl"
            style={{ fontFamily: 'var(--font-heading)' }}
          >
            {person.name}
          </h3>
        </div>
      </div>
    </motion.article>
  );
}

function PeopleGrid({ title, subtitle, people }) {
  return (
    <motion.div
      variants={sectionReveal}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.1 }}
    >
      <div className="mb-8 sm:mb-10">
        <p className="mb-2 text-xs font-semibold uppercase tracking-[0.28em] text-[#c9a84c]">
          {subtitle}
        </p>

        <h2
          className="text-4xl font-medium leading-tight text-[#1f1f1f] sm:text-5xl"
          style={{ fontFamily: 'var(--font-heading)' }}
        >
          {title}
        </h2>
      </div>

      <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3 lg:gap-7">
        {people.map((person, index) => (
          <PersonCard
            key={person.name}
            person={person}
            index={index}
          />
        ))}
      </div>
    </motion.div>
  );
}

export default function VelvetLeadership() {
  return (
    <section className="overflow-hidden bg-[#faf9f6]">
      {/* Chairman's Message */}
      <div className="mx-auto grid max-w-[1540px] items-center px-5 py-10 sm:px-8 sm:py-12 lg:grid-cols-2 lg:px-12 lg:py-16 xl:px-20">
        <motion.div
          className="relative overflow-hidden bg-[#560707]"
          initial={{ opacity: 0, x: -40 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true, amount: 0.15 }}
          transition={{
            duration: 0.8,
            ease: [0.22, 1, 0.36, 1],
          }}
        >
          <img
            src={chairmanImage}
            alt="Ally Gasana, Chairman of Velvet Suites"
            loading="lazy"
            className="h-[420px] w-full object-cover object-top sm:h-[520px] lg:h-[580px]"
          />

          <div className="absolute inset-0 bg-gradient-to-t from-black/25 to-transparent" />
        </motion.div>

        <motion.div
          className="relative bg-[#111] px-6 py-10 text-white sm:px-10 sm:py-12 lg:-ml-10 lg:px-12 lg:py-14 xl:-ml-16 xl:px-16"
          initial={{ opacity: 0, x: 40 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true, amount: 0.15 }}
          transition={{
            duration: 0.8,
            delay: 0.12,
            ease: [0.22, 1, 0.36, 1],
          }}
        >
          <p className="mb-3 text-xs font-semibold uppercase tracking-[0.28em] text-[#d8b65f]">
            A word from our founder
          </p>

          <h2
            className="mb-6 text-4xl font-medium leading-tight sm:text-5xl"
            style={{ fontFamily: 'var(--font-heading)' }}
          >
            Chairman’s Message
          </h2>

          <p className="text-base leading-8 text-white/85 sm:text-lg sm:leading-9">
            As the founder of Velvet Suites, I am honored to welcome you to a
            place where our values—excellence, authenticity, integrity,
            innovation, sustainability, and guest-centricity—shape every
            moment. Our commitment is to deliver unparalleled luxury with
            genuine warmth, ensuring your comfort and delight in every detail.
            Here, you don’t just stay—you belong. Thank you for choosing Velvet
            Suites, where every visit feels like coming home, only better.
          </p>

          <div className="mt-7 text-right">
            <p className="font-semibold uppercase tracking-[0.14em] text-[#d8b65f]">
              Ally Gasana
            </p>
            <p className="mt-1 text-sm text-white/60">
              Chairman of the Board
            </p>
          </div>
        </motion.div>
      </div>

      {/* Team and board */}
      <div className="border-t border-black/5 bg-white">
        <div className="mx-auto max-w-[1460px] space-y-16 px-5 py-12 sm:px-8 sm:py-16 lg:px-12 lg:py-20">
          <PeopleGrid
            title="Meet Our Team"
            subtitle="The people behind your experience"
            people={teamMembers}
          />

          <div className="h-px bg-black/10" />

          <PeopleGrid
            title="Board of Directors"
            subtitle="Our leadership"
            people={boardMembers}
          />
        </div>
      </div>
    </section>
  );
}
