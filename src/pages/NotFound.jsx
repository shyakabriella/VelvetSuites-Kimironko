import React from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';

export default function NotFound() {
  return (
    <section className="relative isolate flex min-h-screen items-center justify-center overflow-hidden">
      {/* Background image */}
      <div className="absolute inset-0">
        <img
          src="https://images.pexels.com/photos/2098405/pexels-photo-2098405.jpeg?auto=compress&cs=tinysrgb&w=1600"
          alt=""
          aria-hidden="true"
          className="h-full w-full object-cover"
          loading="eager"
        />
        <div className="absolute inset-0" style={{ background: 'linear-gradient(to bottom, rgba(28,26,24,0.88) 0%, rgba(28,26,24,0.80) 50%, rgba(28,26,24,0.95) 100%)' }} />
      </div>

      {/* Content */}
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, ease: 'easeOut' }}
        className="relative z-10 text-center px-6"
      >
        {/* Gold divider */}
        <div className="flex items-center justify-center gap-4 mb-6">
          <span style={{ display: 'block', width: '48px', height: '1px', background: '#c9a84c' }} />
          <span style={{ fontFamily: "'Lato', sans-serif", color: '#c9a84c', fontSize: '0.75rem', fontWeight: 700, letterSpacing: '0.2em', textTransform: 'uppercase' }}>
            Page Not Found
          </span>
          <span style={{ display: 'block', width: '48px', height: '1px', background: '#c9a84c' }} />
        </div>

        {/* 404 number */}
        <p
          style={{
            fontFamily: "'Marcellus', serif",
            fontSize: 'clamp(6rem, 20vw, 12rem)',
            lineHeight: 1,
            color: '#c9a84c',
            fontWeight: 400,
            marginBottom: '0.5rem',
          }}
        >
          404
        </p>

        {/* Headline */}
        <h1
          style={{
            fontFamily: "'Marcellus', serif",
            fontSize: 'clamp(1.5rem, 4vw, 2.5rem)',
            color: '#faf9f7',
            fontWeight: 400,
            marginBottom: '1rem',
          }}
        >
          This suite doesn't exist.
        </h1>

        {/* Subtext */}
        <p
          style={{
            fontFamily: "'Lato', sans-serif",
            color: 'rgba(250,249,247,0.7)',
            fontSize: '1rem',
            maxWidth: '420px',
            margin: '0 auto 2.5rem',
            lineHeight: 1.7,
          }}
        >
          The page you are looking for has checked out. Let us escort you back to somewhere familiar.
        </p>

        {/* CTAs */}
        <div style={{ display: 'flex', flexWrap: 'wrap', gap: '1rem', alignItems: 'center', justifyContent: 'center' }}>
          <Link
            to="/"
            style={{
              fontFamily: "'Lato', sans-serif",
              background: '#c9a84c',
              color: '#1c1a18',
              padding: '0.85rem 2.5rem',
              fontWeight: 700,
              fontSize: '0.8rem',
              letterSpacing: '0.15em',
              textTransform: 'uppercase',
              textDecoration: 'none',
              borderRadius: '2px',
              transition: 'background 0.25s, color 0.25s',
              display: 'inline-block',
            }}
            onMouseEnter={e => { e.currentTarget.style.background = '#b08d3c'; }}
            onMouseLeave={e => { e.currentTarget.style.background = '#c9a84c'; }}
          >
            Back to Home
          </Link>
          <Link
            to="/book"
            style={{
              fontFamily: "'Lato', sans-serif",
              background: 'transparent',
              color: '#faf9f7',
              padding: '0.85rem 2.5rem',
              fontWeight: 700,
              fontSize: '0.8rem',
              letterSpacing: '0.15em',
              textTransform: 'uppercase',
              textDecoration: 'none',
              border: '1px solid rgba(250,249,247,0.4)',
              borderRadius: '2px',
              transition: 'border-color 0.25s, color 0.25s',
              display: 'inline-block',
            }}
            onMouseEnter={e => { e.currentTarget.style.borderColor = '#c9a84c'; e.currentTarget.style.color = '#c9a84c'; }}
            onMouseLeave={e => { e.currentTarget.style.borderColor = 'rgba(250,249,247,0.4)'; e.currentTarget.style.color = '#faf9f7'; }}
          >
            Browse Suites
          </Link>
        </div>
      </motion.div>
    </section>
  );
}
