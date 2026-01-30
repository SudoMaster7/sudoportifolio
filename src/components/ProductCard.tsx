import { motion } from 'framer-motion';
import { ExternalLink, Layers, Check } from 'lucide-react';

interface ProductCardProps {
    badge: string;
    title: string;
    description: string;
    benefits?: string[]; // New prop for benefits
    techStack: string[];
    linkUrl: string;
    linkText?: string;
    delay?: number;
    image?: string;
    onCtaClick?: () => void;
}

const ProductCard = ({
    badge,
    title,
    description,
    benefits,
    techStack,
    linkUrl,
    linkText = 'Saiba Mais',
    delay = 0,
    image,
    onCtaClick
}: ProductCardProps) => {
    return (
        <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-100px' }}
            transition={{ duration: 0.6, delay, ease: 'easeOut' }}
            className="glass-card"
            style={{
                position: 'relative',
                overflow: 'hidden',
                display: 'flex',
                flexDirection: 'column',
                height: '100%'
            }}
        >
            {/* Visual Area */}
            <div style={{
                height: '240px',
                width: '100%',
                background: image ? `url(${image})` : 'linear-gradient(135deg, rgba(139, 92, 246, 0.1), rgba(16, 185, 129, 0.1))',
                backgroundSize: image ? 'contain' : 'cover', // 'contain' shows full image, 'cover' is better for filling
                backgroundRepeat: 'no-repeat',
                backgroundColor: 'rgba(2, 6, 23, 0.8)', // Dark background for letterboxing
                backgroundPosition: 'center',
                position: 'relative',
                borderBottom: '1px solid rgba(139, 92, 246, 0.2)',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center'
            }}>
                {!image && (
                    <div style={{
                        width: '80px',
                        height: '80px',
                        borderRadius: '50%',
                        background: 'rgba(2, 6, 23, 0.5)',
                        backdropFilter: 'blur(4px)',
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'center',
                        border: '1px solid rgba(255,255,255,0.1)'
                    }}>
                        <Layers size={40} color="var(--color-accent-purple-light)" />
                    </div>
                )}
                <div className="glass-badge" style={{ position: 'absolute', top: 'var(--space-md)', left: 'var(--space-md)', zIndex: 10 }}>
                    {badge}
                </div>
            </div>

            <div style={{ padding: 'var(--space-xl)', flexGrow: 1, display: 'flex', flexDirection: 'column' }}>
                {/* Title */}
                <h3 style={{
                    fontSize: 'clamp(1.5rem, 2.5vw, 2rem)',
                    fontWeight: 'var(--font-weight-bold)',
                    marginBottom: 'var(--space-md)',
                    color: 'var(--color-text-primary)'
                }}>
                    {title}
                </h3>

                {/* Description */}
                <p style={{
                    color: 'var(--color-text-secondary)',
                    marginBottom: 'var(--space-lg)',
                    lineHeight: '1.7',
                    flexGrow: 1
                }}>
                    {description}
                </p>

                {/* Benefits List */}
                {benefits && benefits.length > 0 && (
                    <ul style={{
                        listStyle: 'none',
                        padding: 0,
                        marginBottom: 'var(--space-lg)',
                        display: 'flex',
                        flexDirection: 'column',
                        gap: 'var(--space-xs)'
                    }}>
                        {benefits.map((benefit, index) => (
                            <li key={index} style={{
                                display: 'flex',
                                alignItems: 'center',
                                gap: 'var(--space-sm)',
                                color: 'var(--color-text-primary)',
                                fontSize: '0.95rem'
                            }}>
                                <Check size={16} color="var(--color-accent-green-light)" />
                                {benefit}
                            </li>
                        ))}
                    </ul>
                )}

                {/* Tech Stack */}
                <div className="tech-stack" style={{ marginBottom: 'var(--space-xl)' }}>
                    {techStack.map((tech, index) => (
                        <span key={index} className="tech-pill">
                            {tech}
                        </span>
                    ))}
                </div>

                {/* CTA Button */}
                <a
                    href={linkUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    onClick={(e) => {
                        if (onCtaClick) {
                            e.preventDefault();
                            onCtaClick();
                        }
                    }}
                    className="btn btn-secondary"
                    style={{ display: 'inline-flex', width: 'fit-content' }}
                >
                    {linkText}
                    <ExternalLink size={18} />
                </a>
            </div>

            {/* Decorative gradient overlay */}
            <div style={{
                position: 'absolute',
                top: '0',
                right: '0',
                width: '100%',
                height: '100%',
                background: 'radial-gradient(circle at top right, rgba(139, 92, 246, 0.05) 0%, transparent 50%)',
                pointerEvents: 'none',
                zIndex: 0
            }} />
        </motion.div>
    );
};

export default ProductCard;
