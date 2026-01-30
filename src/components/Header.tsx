import { useState, useEffect } from 'react';
import { Sun, Moon, Calendar, Menu, X, Terminal } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';
import LeadFormModal from './LeadFormModal';

const Navbar = () => {
    const [theme, setTheme] = useState('dark');
    const [isMenuOpen, setIsMenuOpen] = useState(false);
    const [scrolled, setScrolled] = useState(false);
    const [showMeetingModal, setShowMeetingModal] = useState(false);

    useEffect(() => {
        document.documentElement.setAttribute('data-theme', theme);
        const handleScroll = () => setScrolled(window.scrollY > 50);
        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, [theme]);

    const toggleTheme = () => {
        setTheme(theme === 'dark' ? 'light' : 'dark');
    };

    const navLinks = [
        { name: 'Produtos', href: '#products' },
        { name: 'Diferenciais', href: '#differential' },
        { name: 'Sobre', href: '#about' },
        { name: 'FAQ', href: '#faq' },
    ];

    return (
        <>
            <header style={{
                position: 'fixed',
                top: 0,
                left: 0,
                right: 0,
                zIndex: 100,
                transition: 'all 0.3s ease',
                padding: scrolled ? 'var(--space-sm) 0' : 'var(--space-md) 0',
                background: scrolled ? 'var(--glass-bg)' : 'transparent',
                backdropFilter: scrolled ? 'blur(10px)' : 'none',
                borderBottom: scrolled ? '1px solid var(--glass-border)' : 'none'
            }}>
                <div className="container" style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                    {/* Logo */}
                    <a href="#home" style={{
                        display: 'flex',
                        alignItems: 'center',
                        gap: 'var(--space-xs)',
                        textDecoration: 'none',
                        color: 'var(--color-text-primary)'
                    }}>
                        <Terminal size={24} color="var(--color-accent-purple-light)" />
                        <span style={{ fontWeight: 'bold', fontSize: '1.25rem', letterSpacing: '-0.02em' }}>SUDO</span>
                    </a>

                    {/* Desktop Nav */}
                    <nav className="desktop-nav">
                        <div style={{ display: 'flex', gap: 'var(--space-lg)', alignItems: 'center' }} className="hidden-mobile">
                            {navLinks.map((link) => (
                                <a
                                    key={link.name}
                                    href={link.href}
                                    style={{
                                        color: 'var(--color-text-secondary)',
                                        textDecoration: 'none',
                                        fontSize: '0.9rem',
                                        fontWeight: 500,
                                        transition: 'color 0.2s'
                                    }}
                                    className="nav-link"
                                >
                                    {link.name}
                                </a>
                            ))}
                        </div>
                    </nav>

                    {/* Actions & Mobile Toggle */}
                    <div style={{ display: 'flex', gap: 'var(--space-sm)', alignItems: 'center' }}>
                        <button
                            onClick={toggleTheme}
                            style={{
                                background: 'transparent',
                                border: '1px solid var(--glass-border)',
                                padding: '8px',
                                borderRadius: '50%',
                                color: 'var(--color-text-primary)',
                                cursor: 'pointer',
                                display: 'flex'
                            }}
                        >
                            {theme === 'dark' ? <Sun size={20} /> : <Moon size={20} />}
                        </button>

                        <button
                            onClick={() => setShowMeetingModal(true)}
                            className="btn btn-primary hidden-mobile"
                            style={{ padding: '0.5rem 1rem', fontSize: '0.875rem' }}
                        >
                            <Calendar size={16} />
                            Agendar
                        </button>

                        {/* Mobile Menu Button */}
                        <button
                            className="mobile-only"
                            onClick={() => setIsMenuOpen(!isMenuOpen)}
                            style={{
                                background: 'transparent',
                                border: 'none',
                                color: 'var(--color-text-primary)',
                                cursor: 'pointer',
                                marginLeft: 'var(--space-xs)'
                            }}
                        >
                            {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
                        </button>
                    </div>
                </div>

                {/* Mobile Menu Drawer */}
                <AnimatePresence>
                    {isMenuOpen && (
                        <motion.div
                            initial={{ opacity: 0, height: 0 }}
                            animate={{ opacity: 1, height: 'auto' }}
                            exit={{ opacity: 0, height: 0 }}
                            style={{
                                background: 'var(--color-bg-secondary)',
                                borderBottom: '1px solid var(--glass-border)',
                                overflow: 'hidden',
                                position: 'absolute',
                                top: '100%',
                                left: 0,
                                right: 0
                            }}
                        >
                            <div className="container" style={{ padding: 'var(--space-lg)', display: 'flex', flexDirection: 'column', gap: 'var(--space-md)' }}>
                                {navLinks.map((link) => (
                                    <a
                                        key={link.name}
                                        href={link.href}
                                        onClick={() => setIsMenuOpen(false)}
                                        style={{
                                            color: 'var(--color-text-primary)',
                                            textDecoration: 'none',
                                            fontSize: '1.1rem',
                                            fontWeight: 'bold',
                                            padding: 'var(--space-sm) 0',
                                            borderBottom: '1px solid rgba(255,255,255,0.05)'
                                        }}
                                    >
                                        {link.name}
                                    </a>
                                ))}
                                <button
                                    onClick={() => {
                                        setIsMenuOpen(false);
                                        setShowMeetingModal(true);
                                    }}
                                    className="btn btn-primary"
                                    style={{ justifyContent: 'center', marginTop: 'var(--space-md)' }}
                                >
                                    <Calendar size={18} />
                                    Agendar Reunião
                                </button>
                            </div>
                        </motion.div>
                    )}
                </AnimatePresence>

                <style>{`
                @media (max-width: 768px) {
                    .hidden-mobile { display: none !important; }
                    .mobile-only { display: block !important; }
                    .desktop-nav { display: none !important; }
                }
                @media (min-width: 769px) {
                    .mobile-only { display: none !important; }
                    .desktop-nav { display: flex !important; }
                }
                .nav-link:hover { color: var(--color-accent-purple-light) !important; }
            `}</style>
            </header>

            <LeadFormModal
                isOpen={showMeetingModal}
                onClose={() => setShowMeetingModal(false)}
                product="meeting"
            />
        </>
    );
};

export default Navbar;
