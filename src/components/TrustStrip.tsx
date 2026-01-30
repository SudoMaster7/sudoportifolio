import { motion } from 'framer-motion';
import { Users, CheckCircle, Clock, Shield } from 'lucide-react';

const TrustStrip = () => {
    const items = [
        { icon: CheckCircle, text: "+15 Projetos Entregues" },
        { icon: Users, text: "Atendimento Personalizado" },
        { icon: Clock, text: "Suporte Ágil" },
        { icon: Shield, text: "Garantia de Entrega" },
    ];

    return (
        <div style={{
            borderBottom: '1px solid var(--glass-border)',
            background: 'rgba(2, 6, 23, 0.4)',
            backdropFilter: 'blur(5px)'
        }}>
            <div className="container">
                <div style={{
                    display: 'flex',
                    flexWrap: 'wrap',
                    justifyContent: 'space-around',
                    gap: 'var(--space-lg)',
                    padding: 'var(--space-md) 0'
                }}>
                    {items.map((item, index) => (
                        <motion.div
                            key={index}
                            initial={{ opacity: 0, y: 10 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ delay: 1 + (index * 0.1), duration: 0.5 }}
                            style={{
                                display: 'flex',
                                alignItems: 'center',
                                gap: 'var(--space-sm)',
                                color: 'var(--color-text-secondary)',
                                fontWeight: 500,
                                fontSize: '0.9rem'
                            }}
                        >
                            <item.icon size={18} color="var(--color-accent-purple-light)" />
                            <span>{item.text}</span>
                        </motion.div>
                    ))}
                </div>
            </div>
        </div>
    );
};

export default TrustStrip;
