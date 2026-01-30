import { motion } from 'framer-motion';
import { ArrowRight, Linkedin } from 'lucide-react';

const Hero = () => {
  const scrollToProducts = () => {
    const productsSection = document.getElementById('products');
    productsSection?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section className="section" style={{ minHeight: '100vh', display: 'flex', alignItems: 'center' }}>
      <div className="container">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: 'easeOut' }}
          style={{ textAlign: 'center', maxWidth: '900px', margin: '0 auto' }}
        >
          {/* Brand Logo */}
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.2, duration: 0.6 }}
            style={{ marginBottom: 'var(--space-2xl)' }}
          >
            <h1 className="gradient-text" style={{
              fontSize: 'clamp(3rem, 6vw, 5rem)',
              fontWeight: 'var(--font-weight-black)',
              letterSpacing: '-0.03em',
              marginBottom: 'var(--space-md)'
            }}>
              SUDO_
            </h1>
          </motion.div>

          {/* Main Headline */}
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4, duration: 0.7 }}
            style={{
              fontSize: 'clamp(2rem, 4vw, 3.5rem)',
              fontWeight: 'var(--font-weight-extrabold)',
              marginBottom: 'var(--space-lg)',
              lineHeight: '1.2'
            }}
          >
            Do Hardware ao Software.
            <br />
            Da Ideia à Escala.
          </motion.h2>

          {/* Subheadline */}
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.6, duration: 0.7 }}
            style={{
              fontSize: 'clamp(1.125rem, 2vw, 1.5rem)',
              color: 'var(--color-text-secondary)',
              marginBottom: 'var(--space-2xl)',
              maxWidth: '700px',
              margin: '0 auto var(--space-2xl)'
            }}
          >
            Desenvolvimento Full Stack, Inteligência Artificial e Consultoria de Infraestrutura.
          </motion.p>

          {/* CTA Buttons */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.8, duration: 0.7 }}
            style={{
              display: 'flex',
              gap: 'var(--space-lg)',
              justifyContent: 'center',
              flexWrap: 'wrap'
            }}
          >
            <button
              onClick={scrollToProducts}
              className="btn btn-primary"
            >
              Ver Soluções
              <ArrowRight size={20} />
            </button>
            <a
              href="https://www.linkedin.com/in/leonardo-brito-133645262/"
              target="_blank"
              rel="noopener noreferrer"
              className="btn btn-secondary"
            >
              <Linkedin size={20} />
              LinkedIn
            </a>
          </motion.div>

          {/* Decorative gradient blur (old one, now replaced by the new background div) */}
          <div style={{
            position: 'absolute',
            top: '20%',
            left: '50%',
            transform: 'translateX(-50%)',
            width: '600px',
            height: '600px',
            background: 'radial-gradient(circle, rgba(139, 92, 246, 0.15) 0%, transparent 70%)',
            pointerEvents: 'none',
            zIndex: -1,
            filter: 'blur(60px)'
          }} />
        </motion.div>
      </div>
    </section>
  );
};

export default Hero;
