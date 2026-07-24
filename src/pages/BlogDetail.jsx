import React, { useEffect } from 'react';
import { useParams, useNavigate, Link } from 'react-router-dom';
import { motion } from 'framer-motion';

// Hardcoded for now. In a real app, you'd fetch this from an API or a shared data file.
const blogPosts = [
  {
    id: 1,
    title: 'Experience Kigali: A Guide to the City\'s Hidden Gems',
    excerpt: 'Discover the vibrant culture, art scenes, and culinary delights that Kigali has to offer just steps away from Velvet Suites.',
    image: '/images/hotel_exterior.png',
    date: 'July 10, 2026',
    category: 'Travel',
    content: `Kigali is a city of rolling hills, vibrant culture, and a burgeoning culinary scene. When you stay at Velvet Suites, you are perfectly positioned to explore everything this remarkable city has to offer. 

Here are some hidden gems you must visit:

1. **Inema Arts Center**: Just a short drive away, this center showcases the best of contemporary Rwandan art. It's a fantastic place to see the creative heartbeat of the city.
2. **Kimironko Market**: For a truly local experience, visit this bustling market. From fresh produce to vibrant fabrics, it's a sensory delight.
3. **Question Coffee Cafe**: Kigali has a thriving coffee culture. Visit Question Coffee to taste some of the best locally sourced and roasted coffee in Rwanda.

After a day of exploring, return to the sanctuary of Velvet Suites to relax and rejuvenate.`
  },
  {
    id: 2,
    title: 'The Art of Luxury Hospitality',
    excerpt: 'Behind the scenes at Velvet Suites: how we curate personalized experiences to ensure every guest feels truly special.',
    image: '/images/velvet.png',
    date: 'June 28, 2026',
    category: 'Lifestyle',
    content: `At Velvet Suites, we believe that true luxury lies in the details. It's not just about opulent rooms or high-end amenities; it's about the feeling you get when your every need is anticipated.

Our philosophy is built on three pillars:

- **Personalization**: Before you even arrive, our team is preparing for your stay. We note your preferences and tailor your experience accordingly.
- **Authenticity**: We blend international standards of luxury with genuine Rwandan hospitality, ensuring a warm and authentic experience.
- **Excellence**: From our culinary offerings to our housekeeping, we maintain the highest standards of excellence.

Experience the art of luxury hospitality for yourself at Velvet Suites.`
  },
  {
    id: 3,
    title: 'Taste of Velvet: Our New Summer Menu',
    excerpt: 'Join us for a culinary journey with our newly unveiled summer menu featuring local ingredients and international flavors.',
    image: '/images/dining_menu.png',
    date: 'June 15, 2026',
    category: 'Dining',
    content: `Our culinary team has been hard at work crafting a menu that celebrates the vibrant flavors of summer. We've sourced the freshest local ingredients to create dishes that are both innovative and comforting.

**Highlights of the New Menu:**

- **Lake Kivu Sambaza**: A local favorite, lightly fried and served with a zesty citrus aioli.
- **Rwandan Beef Skewers**: Marinated in a blend of traditional spices and grilled to perfection.
- **Tropical Fruit Pavlova**: A light and airy dessert featuring fresh, locally grown passion fruit and mango.

Pair your meal with a selection from our extensive wine list or try one of our signature summer cocktails. We invite you to taste the essence of summer at Velvet Suites.`
  }
];

export default function BlogDetail() {
  const { id } = useParams();
  const navigate = useNavigate();
  const post = blogPosts.find(p => p.id === parseInt(id));

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [id]);

  if (!post) {
    return (
      <div className="min-h-screen flex flex-col items-center justify-center bg-[#faf9f7]">
        <h1 className="text-4xl text-[#1c1a18] font-semibold mb-4" style={{ fontFamily: "'Marcellus', serif" }}>Post Not Found</h1>
        <button 
          onClick={() => navigate('/blog')}
          className="text-[#c9a84c] hover:text-[#b08d3c] uppercase tracking-widest text-sm font-bold transition-colors"
        >
          Return to Blog
        </button>
      </div>
    );
  }

  return (
    <motion.div 
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      className="min-h-screen bg-[#faf9f7] pb-24 pt-[100px]"
    >
      <article className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 mt-10">
        
        {/* Back button */}
        <Link 
          to="/blog" 
          className="inline-flex items-center text-gray-500 hover:text-[#c9a84c] font-semibold text-sm uppercase tracking-widest transition-colors mb-8"
        >
          <svg className="w-4 h-4 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 19l-7-7m0 0l7-7m-7 7h18" />
          </svg>
          Back to Blog
        </Link>

        {/* Header */}
        <header className="mb-12 text-center">
          <div className="flex items-center justify-center gap-4 mb-6">
            <span className="bg-[#1c1a18] text-white text-xs font-bold uppercase tracking-widest px-3 py-1.5 rounded-full">
              {post.category}
            </span>
            <span className="text-[#c9a84c] text-sm font-semibold">
              {post.date}
            </span>
          </div>
          <h1 className="text-4xl md:text-5xl lg:text-6xl text-[#1c1a18] mb-6 font-semibold leading-tight" style={{ fontFamily: "'Marcellus', serif" }}>
            {post.title}
          </h1>
          <p className="text-xl text-gray-500 italic max-w-2xl mx-auto leading-relaxed">
            {post.excerpt}
          </p>
        </header>

        {/* Hero Image */}
        <div className="w-full h-[400px] md:h-[600px] rounded-2xl overflow-hidden mb-16 shadow-[0_10px_40px_rgba(0,0,0,0.1)]">
          <img 
            src={post.image} 
            alt={post.title} 
            className="w-full h-full object-cover"
          />
        </div>

        {/* Content */}
        <div 
          className="prose prose-lg max-w-3xl mx-auto prose-headings:font-['Marcellus'] prose-headings:font-normal prose-headings:text-[#1c1a18] prose-p:text-gray-600 prose-p:leading-relaxed prose-a:text-[#c9a84c] prose-a:no-underline hover:prose-a:text-[#b08d3c] prose-strong:text-[#1c1a18] marker:text-[#c9a84c]"
          style={{ fontFamily: "'Lato', sans-serif" }}
        >
          {post.content.split('\n\n').map((paragraph, idx) => {
            if (paragraph.startsWith('- ') || paragraph.startsWith('1. ')) {
              const items = paragraph.split('\n');
              const isOrdered = paragraph.startsWith('1. ');
              const ListTag = isOrdered ? 'ol' : 'ul';
              return (
                <ListTag key={idx} className="my-6 space-y-3">
                  {items.map((item, i) => {
                    const cleanItem = item.replace(/^- |^\d+\. /, '');
                    // parse bold markdown manually for simple cases
                    const parts = cleanItem.split(/\*\*(.*?)\*\*/g);
                    return (
                      <li key={i}>
                        {parts.map((part, pIdx) => (
                          pIdx % 2 === 1 ? <strong key={pIdx}>{part}</strong> : part
                        ))}
                      </li>
                    );
                  })}
                </ListTag>
              );
            }
            // parse bold markdown manually for paragraphs
            if (paragraph.includes('**')) {
              const parts = paragraph.split(/\*\*(.*?)\*\*/g);
              return (
                <p key={idx} className="mb-6">
                  {parts.map((part, pIdx) => (
                    pIdx % 2 === 1 ? <strong key={pIdx}>{part}</strong> : part
                  ))}
                </p>
              );
            }
            return <p key={idx} className="mb-6">{paragraph}</p>;
          })}
        </div>
        
      </article>
    </motion.div>
  );
}
