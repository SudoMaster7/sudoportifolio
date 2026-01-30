import { motion } from 'framer-motion';
import type { LucideIcon } from 'lucide-react';

interface ServiceCardProps {
    icon: LucideIcon;
    title: string;
    description: string;
    delay?: number;
}

const ServiceCard = ({ icon: Icon, title, description, delay = 0 }: ServiceCardProps) => {
    return (
        <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-50px' }}
            transition={{ duration: 0.5, delay, ease: 'easeOut' }}
            className="glass-card"
            style={{
                padding: 'var(--space-xl)',
                textAlign: 'center',
                position: 'relative',
                display: 'flex',
                flexDirection: 'column',
                height: '100%'
            }}
        >
            {/* Icon with gradient */}
            <div style={{
                marginBottom: 'var(--space-lg)',
                display: 'flex',
                justifyContent: 'center'
            }}>
                <div style={{
                    width: '64px',
                    height: '64px',
                    borderRadius: 'var(--radius-md)',
                    background: 'linear-gradient(135deg, rgba(139, 92, 246, 0.2), rgba(16, 185, 129, 0.2))',
                    border: '1px solid rgba(139, 92, 246, 0.3)',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center'
                }}>
                    <Icon
                        size={32}
                        style={{
                            color: 'var(--color-accent-purple-light)'
                        }}
                    />
                </div>
            </div>

            {/* Title */}
            <h3 style={{
                fontSize: '1.25rem',
                fontWeight: 'var(--font-weight-bold)',
                marginBottom: 'var(--space-md)',
                color: 'var(--color-text-primary)'
            }}>
                {title}
            </h3>

            {/* Description */}
            <p style={{
                fontSize: '1rem',
                color: 'var(--color-text-secondary)',
                lineHeight: '1.6',
                marginBottom: 'var(--space-lg)',
                flexGrow: 1
            }}>
                {description}
            </p>

            {/* WhatsApp CTA */}
            <a
                href={`https://wa.me/5521983388872?text=Olá, tenho interesse em ${encodeURIComponent(title)}`}
                target="_blank"
                rel="noopener noreferrer"
                className="btn"
                style={{
                    width: '100%',
                    justifyContent: 'center',
                    background: 'rgba(16, 185, 129, 0.1)',
                    color: 'var(--color-accent-green-light)',
                    border: '1px solid rgba(16, 185, 129, 0.3)',
                    marginTop: 'auto'
                }}
                onMouseEnter={(e) => {
                    e.currentTarget.style.background = 'rgba(16, 185, 129, 0.2)';
                    e.currentTarget.style.transform = 'translateY(-2px)';
                }}
                onMouseLeave={(e) => {
                    e.currentTarget.style.background = 'rgba(16, 185, 129, 0.1)';
                    e.currentTarget.style.transform = 'translateY(0)';
                }}
            >
                Solicitar Orçamento
            </a>
        </motion.div>
    );
};

export default ServiceCard;
