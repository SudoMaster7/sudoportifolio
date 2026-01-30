import { motion } from 'framer-motion';
import { Rocket, Target, ShieldCheck } from 'lucide-react';

const WhyChooseSection = () => {
    const features = [
        {
            icon: Rocket,
            title: "Agilidade de Startup",
            description: "Ciclos rápidos de desenvolvimento. Você vê seu projeto evoluir semana a semana, sem meses de espera."
        },
        {
            icon: Target,
            title: "Foco em ROI",
            description: "Não entregamos apenas código. Criamos soluções desenhadas para pagar o investimento e gerar lucro."
        },
        {
            icon: ShieldCheck,
            title: "Parceria Direta",
            description: "Sem gerentes de conta ou telefone sem fio. Você fala direto com o engenheiro responsável pelo seu sucesso."
        },
        {
            icon: Rocket, // Or another icon like Gift/Star
            title: "Garantia Total",
            description: "Seu projeto entregue conforme o combinado ou ajustamos até ficar perfeito. Sem pegadinhas."
        }
    ];

    return (
        <section className="section">
            <div className="container">
                <div style={{ textAlign: 'center', marginBottom: 'var(--space-3xl)' }}>
                    <h2 className="section-title gradient-text">
                        Por que escolher a SUDO?
                    </h2>
                    <p style={{ color: 'var(--color-text-secondary)', maxWidth: '600px', margin: '0 auto' }}>
                        Uma abordagem moderna para problemas complexos.
                    </p>
                </div>

                <div className="grid" style={{
                    gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))',
                    gap: 'var(--space-xl)'
                }}>
                    {features.map((feature, index) => (
                        <motion.div
                            key={index}
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true, margin: '-50px' }}
                            transition={{ duration: 0.5, delay: index * 0.1 }}
                            className="glass-card"
                            style={{
                                padding: 'var(--space-xl)',
                                display: 'flex',
                                flexDirection: 'column',
                                alignItems: 'center',
                                textAlign: 'center',
                                border: '1px solid rgba(139, 92, 246, 0.1)'
                            }}
                        >
                            <div style={{
                                width: '60px',
                                height: '60px',
                                borderRadius: '50%',
                                background: 'rgba(139, 92, 246, 0.1)',
                                display: 'flex',
                                alignItems: 'center',
                                justifyContent: 'center',
                                marginBottom: 'var(--space-lg)',
                                color: 'var(--color-accent-purple-light)'
                            }}>
                                <feature.icon size={30} />
                            </div>
                            <h3 style={{
                                fontSize: '1.25rem',
                                fontWeight: 'bold',
                                marginBottom: 'var(--space-md)',
                                color: 'var(--color-text-primary)'
                            }}>
                                {feature.title}
                            </h3>
                            <p style={{ color: 'var(--color-text-secondary)', lineHeight: '1.6' }}>
                                {feature.description}
                            </p>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default WhyChooseSection;
