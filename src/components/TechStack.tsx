import { motion } from 'framer-motion';

const TechStack = () => {
    const technologies = [
        'Python',
        'Django',
        'React',
        'Meta Ads Manager',
        'Linux',
        'Hardware Assembly',
        'TypeScript',
        'PostgreSQL'
    ];

    return (
        <section className="section">
            <div className="container">
                {/* Section Title */}
                <h2 className="section-title gradient-text">
                    The Stack
                </h2>

                {/* Tech Pills Container */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6 }}
                    style={{
                        display: 'flex',
                        flexWrap: 'wrap',
                        gap: 'var(--space-md)',
                        justifyContent: 'center',
                        maxWidth: '800px',
                        margin: '0 auto'
                    }}
                >
                    {technologies.map((tech, index) => (
                        <motion.div
                            key={tech}
                            initial={{ opacity: 0, scale: 0.8 }}
                            whileInView={{ opacity: 1, scale: 1 }}
                            viewport={{ once: true }}
                            transition={{ delay: index * 0.05, duration: 0.3 }}
                            className="glass-card"
                            style={{
                                padding: 'var(--space-md) var(--space-xl)',
                                textAlign: 'center',
                                cursor: 'default'
                            }}
                        >
                            <span style={{
                                fontSize: '1rem',
                                fontWeight: 'var(--font-weight-semibold)',
                                color: 'var(--color-text-primary)'
                            }}>
                                {tech}
                            </span>
                        </motion.div>
                    ))}
                </motion.div>
            </div>
        </section>
    );
};

export default TechStack;
