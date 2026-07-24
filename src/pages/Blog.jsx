import React, { useEffect } from 'react';
import { motion } from 'framer-motion';
import { useNavigate } from 'react-router-dom';

const blogPosts = [
  {
    id: 1,
    title: 'Experience Kigali: A Guide to the City\'s Hidden Gems',
    excerpt: 'Discover the vibrant culture, art scenes, and culinary delights that Kigali has to offer just steps away from Velvet Suites.',
    image: '/images/hotel_exterior.png',
    date: 'July 10, 2026',
    category: 'Travel'
  },
  {
    id: 2,
    title: 'The Art of Luxury Hospitality',
    excerpt: 'Behind the scenes at Velvet Suites: how we curate personalized experiences to ensure every guest feels truly special.',
    image: '/images/velvet.png',
    date: 'June 28, 2026',
    category: 'Lifestyle'
  },
  {
    id: 3,
    title: 'Taste of Velvet: Our New Summer Menu',
    excerpt: 'Join us for a culinary journey with our newly unveiled summer menu featuring local ingredients and international flavors.',
    image: '/images/dining_menu.png',
    date: 'June 15, 2026',
    category: 'Dining'
  }
];

export default function Blog() {
  const navigate = useNavigate();
  
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.2, delayChildren: 0.2 }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: "easeOut" } }
  };

  return (
    <motion.div 
      initial="hidden"
      animate="visible"
      variants={containerVariants}
      className="min-h-screen bg-[#faf9f7] pb-24"
    >
      {/* Hero Section */}
      <section className="relative h-[50vh] min-h-[400px] w-full flex items-center justify-center">
        <div 
          className="absolute inset-0 bg-cover bg-center bg-no-repeat"
          style={{ backgroundImage: `url('/homepageimgs/628B0373-Edited-1920x1280.jpg.jpeg')` }}
        />
        <div className="absolute inset-0 bg-black/60" />
        
        <div className="relative z-10 text-center px-4">
          <motion.h1 variants={itemVariants} className="text-white text-5xl md:text-6xl mb-4 tracking-wide" style={{ fontFamily: "'Marcellus', serif", fontWeight: 400 }}>
            Velvet Blog
          </motion.h1>
          <motion.p variants={itemVariants} className="text-white/90 text-lg md:text-xl font-light" style={{ fontFamily: "'Lato', sans-serif" }}>
            Stories, guides, and news from Velvet Suites
          </motion.p>
        </div>
      </section>

      {/* Blog Posts Grid */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mt-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
          {blogPosts.map((post) => (
            <motion.article 
              key={post.id} 
              variants={itemVariants}
              onClick={() => navigate(`/blog/${post.id}`)}
              className="bg-white rounded-2xl overflow-hidden shadow-[0_5px_20px_rgba(0,0,0,0.03)] border border-[#e0dbd3] transition-all hover:shadow-[0_15px_35px_rgba(0,0,0,0.08)] hover:-translate-y-2 group cursor-pointer"
            >
              <div className="h-64 overflow-hidden relative">
                <img 
                  src={post.image} 
                  alt={post.title} 
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                />
                <div className="absolute top-4 left-4 bg-[#1c1a18] text-white text-xs font-bold uppercase tracking-widest px-3 py-1.5 rounded-full">
                  {post.category}
                </div>
              </div>
              <div className="p-8">
                <div className="text-[#c9a84c] text-sm font-semibold mb-3">{post.date}</div>
                <h3 className="text-2xl text-[#1c1a18] mb-4 font-semibold" style={{ fontFamily: "'Marcellus', serif" }}>
                  {post.title}
                </h3>
                <p className="text-gray-500 leading-relaxed mb-6">
                  {post.excerpt}
                </p>
                <div className="inline-flex items-center text-[#1c1a18] font-bold text-sm tracking-widest uppercase hover:text-[#c9a84c] transition-colors">
                  Read More
                  <svg className="w-4 h-4 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                  </svg>
                </div>
              </div>
            </motion.article>
          ))}
        </div>
      </section>
    </motion.div>
  );
}
