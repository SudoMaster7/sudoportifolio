import { motion } from 'framer-motion';

const TrustedBy = () => {
    // Array of placeholder logos or names
    const companies = [
        "TechFlow", "DataCorp", "InnovateX", "CloudScale", "AlphaSystems", "NextGen"
    ];

    return (
        <section style={{
            padding: 'var(--space-xl) 0',
            borderBottom: '1px solid rgba(139, 92, 246, 0.1)',
            background: 'rgba(2, 6, 23, 0.5)',
            overflow: 'hidden'
        }}>
            <div className="container">
                <p style={{
                    textAlign: 'center',
                    color: 'var(--color-text-tertiary)',
                    fontSize: '0.875rem',
                    marginBottom: 'var(--space-lg)',
                    letterSpacing: '0.1em',
                    textTransform: 'uppercase'
                }}>
                    Trusted by innovative companies
                </p>

                <div style={{
                    display: 'flex',
                    justifyContent: 'center',
                    gap: 'var(--space-3xl)',
                    flexWrap: 'wrap',
                    opacity: 0.6
                }}>
                    {companies.map((company, index) => (
                        <motion.div
                            key={index}
                            initial={{ opacity: 0 }}
                            whileInView={{ opacity: 1 }}
                            transition={{ delay: index * 0.1 }}
                            style={{
                                fontSize: '1.25rem',
                                fontWeight: 'bold',
                                color: 'var(--color-text-secondary)',
                                fontFamily: 'monospace'
                            }}
                        >
                            {company}
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default TrustedBy;
