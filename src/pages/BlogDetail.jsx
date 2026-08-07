import React, { useEffect } from 'react';
import { useParams, useNavigate, Link } from 'react-router-dom';
import { motion } from 'framer-motion';

// Hardcoded for now. In a real app, you'd fetch this from an API or a shared data file.
const blogPosts = [
  {
    id: 1,
    title: 'Unwind in Style: Inside Our Signature Lounge Suites',
    excerpt: 'Step into a world of warmth and comfort. Our spacious lounge suites feature plush velvet sofas, warm wood accents, and an atmosphere designed for true relaxation.',
    image: '/velvet pictures/WhatsApp Image 2026-07-31 at 00.30.42 (1).jpeg',
    date: 'July 10, 2026',
    category: 'Suites',
    content: `At Velvet Suites, we believe that coming home should feel extraordinary — and our Signature Lounge Suites are designed to deliver exactly that.

Each lounge suite is anchored by a plush, full sofa set upholstered in premium fabric, paired with coordinating armchairs and a solid wood coffee table. The warm tones of teak and walnut flow seamlessly through the room, complemented by sheer floor-to-ceiling curtains that bathe the space in soft, natural light.

What sets our lounge suites apart:

- **Generous Space**: Designed for comfort whether you are hosting guests, catching up on work, or simply stretching out after a long day.
- **Curated Furniture**: Every piece is hand-selected to balance elegance with ease — nothing feels forced, everything feels right.
- **Warm Lighting**: Thoughtfully placed wall fixtures create a cosy ambiance that transitions effortlessly from bright afternoons to relaxed evenings.

Our lounge suites are the perfect retreat for those who value space, warmth, and understated luxury. Come, settle in, and let Velvet Suites take care of the rest.`
  },
  {
    id: 2,
    title: 'A Night Like No Other: Our Master Bedroom Experience',
    excerpt: 'Drift into tranquility in our beautifully appointed master suites — crisp linens, handpicked African artwork, and the quiet elegance you deserve.',
    image: '/velvet pictures/WhatsApp Image 2026-07-31 at 00.30.42 (2).jpeg',
    date: 'June 28, 2026',
    category: 'Rooms',
    content: `A great night’s sleep is the foundation of a great stay — and at Velvet Suites, our master bedrooms are crafted with that truth at heart.

Enter and you are immediately greeted by a king-size bed dressed in crisp white linens, accented with sage green cushions and a matching runner that adds a touch of refined colour. The rich walnut headboard and wardrobe bring depth and warmth, while three carefully chosen pieces of African-inspired artwork bring culture and character to the walls.

What makes our master rooms truly special:

- **Premium Bedding**: We use hotel-grade linens that are soft, breathable, and impeccably pressed for every guest.
- **Authentic Art**: Each piece on the wall has been chosen to celebrate African heritage — a reminder of the vibrant culture surrounding Velvet Suites.
- **Thoughtful Storage**: A full-height wardrobe with polished handles ensures you can settle in and feel at home, however long your stay.

Whether you are visiting Kigali for business or leisure, our master bedrooms offer the restorative rest you need to make the most of every day.`
  },
  {
    id: 3,
    title: 'Comfort Meets Convenience: Our Standard Room Highlights',
    excerpt: 'Every detail matters. From flat-screen entertainment to premium wooden finishes, our standard rooms deliver a premium stay without compromise.',
    image: '/velvet pictures/WhatsApp Image 2026-07-31 at 00.30.42 (3).jpeg',
    date: 'June 15, 2026',
    category: 'Rooms',
    content: `At Velvet Suites, “standard” is anything but ordinary. Our standard rooms are a testament to the idea that every guest — regardless of room type — deserves a genuinely exceptional experience.

Clean, bright, and thoughtfully appointed, each room features a comfortable bed with pristine white linens, a wall-mounted flat-screen TV, and warm wooden doors and cabinetry that give the space a grounded, homely feel. A private balcony with wrought-iron accents provides a serene spot to take in the fresh Kigali air.

Highlights you’ll find in every standard room:

- **Flat-Screen TV**: Stay connected or unwind with premium cable and streaming options at your fingertips.
- **Natural Light**: Large windows and sheer curtains keep rooms airy and bright throughout the day.
- **Wooden Craftsmanship**: Solid wood doors and built-in closet space reflect the quality finishes found throughout all Velvet Suites properties.

Perfect for solo travellers or couples, our standard rooms offer everything you need for a smooth, comfortable stay — beautifully packaged at Velvet Suites.`
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
