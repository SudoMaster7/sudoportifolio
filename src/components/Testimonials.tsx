import { motion } from 'framer-motion';
import { Quote } from 'lucide-react';

const Testimonials = () => {
    const reviews = [
        {
            name: "Carlos Mendes",
            role: "CTO @ FinTech Solutions",
            content: "A SUDO entregou nosso MVP em tempo recorde. A qualidade do código e a arquitetura escalável nos permitiram receber investimento em menos de 3 meses.",
            image: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?auto=format&fit=crop&w=100&h=100&q=80"
        },
        {
            name: "Juliana Costa",
            role: "Marketing Director @ EcoRetail",
            content: "O sistema de automação de tráfego reduziu nosso custo por lead em 40%. A integração com o CRM foi perfeita. Recomendo fortemente.",
            image: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?auto=format&fit=crop&w=100&h=100&q=80"
        },
        {
            name: "Ricardo Silva",
            role: "Founder @ GameSpace",
            content: "O redesign da nossa plataforma aumentou a retenção de usuários em 25%. O olhar de UX da equipe é diferenciado.",
            image: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?auto=format&fit=crop&w=100&h=100&q=80"
        }
    ];

    return (
        <section className="section" style={{ background: 'var(--color-bg-secondary)' }}>
            <div className="container">
                <h2 className="section-title gradient-text" style={{ textAlign: 'center' }}>
                    O que dizem sobre a SUDO
                </h2>

                <div className="grid" style={{
                    gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))',
                    gap: 'var(--space-xl)',
                    marginTop: 'var(--space-3xl)'
                }}>
                    {reviews.map((review, index) => (
                        <motion.div
                            key={index}
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: index * 0.2 }}
                            className="glass-card"
                            style={{
                                padding: 'var(--space-xl)',
                                position: 'relative'
                            }}
                        >
                            <Quote size={32} style={{
                                color: 'var(--color-accent-purple-light)',
                                opacity: 0.3,
                                position: 'absolute',
                                top: 'var(--space-lg)',
                                right: 'var(--space-lg)'
                            }} />

                            <p style={{
                                color: 'var(--color-text-secondary)',
                                lineHeight: '1.7',
                                marginBottom: 'var(--space-xl)',
                                fontStyle: 'italic'
                            }}>
                                "{review.content}"
                            </p>

                            <div style={{ display: 'flex', alignItems: 'center', gap: 'var(--space-md)' }}>
                                <img
                                    src={review.image}
                                    alt={review.name}
                                    style={{
                                        width: '48px',
                                        height: '48px',
                                        borderRadius: '50%',
                                        border: '2px solid rgba(139, 92, 246, 0.3)'
                                    }}
                                />
                                <div>
                                    <h4 style={{
                                        color: 'var(--color-text-primary)',
                                        fontWeight: 'bold',
                                        fontSize: '1rem'
                                    }}>
                                        {review.name}
                                    </h4>
                                    <p style={{
                                        color: 'var(--color-text-tertiary)',
                                        fontSize: '0.875rem'
                                    }}>
                                        {review.role}
                                    </p>
                                </div>
                            </div>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Testimonials;
