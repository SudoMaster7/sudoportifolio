
import { useState } from 'react';
import { Send, Mail } from 'lucide-react';
import { motion } from 'framer-motion';

const Newsletter = () => {
    const [email, setEmail] = useState('');
    const [phone, setPhone] = useState('');
    const [status, setStatus] = useState<'idle' | 'success'>('idle');

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();

        // Save to Google Sheets (Fire and forget style to not block UI)
        import('../services/GoogleSheetService').then(({ saveLead }) => {
            saveLead({
                type: 'Newsletter',
                contact: `${email} | ${phone} `,
                details: 'Guia de Automação'
            });
        });

        // Simulate API call for UI feedback
        setTimeout(() => setStatus('success'), 1000);
    };

    return (
        <section className="section">
            <div className="container">
                <div className="glass-card" style={{
                    maxWidth: '800px',
                    margin: '0 auto',
                    padding: 'var(--space-2xl)',
                    textAlign: 'center',
                    background: 'linear-gradient(135deg, rgba(139, 92, 246, 0.1), rgba(16, 185, 129, 0.1))'
                }}>
                    <div style={{
                        width: '60px',
                        height: '60px',
                        borderRadius: '50%',
                        background: 'var(--color-bg-secondary)',
                        display: 'inline-flex',
                        alignItems: 'center',
                        justifyContent: 'center',
                        marginBottom: 'var(--space-lg)'
                    }}>
                        <Mail size={24} color="var(--color-accent-purple-light)" />
                    </div>

                    <h2 style={{
                        fontSize: '2rem',
                        fontWeight: 'bold',
                        color: 'var(--color-text-primary)',
                        marginBottom: 'var(--space-md)'
                    }}>
                        Baixe nosso Guia de Automação
                    </h2>
                    <p style={{
                        color: 'var(--color-text-secondary)',
                        marginBottom: 'var(--space-xl)',
                        fontSize: '1.125rem'
                    }}>
                        Descubra como empresas estão economizando até 40h mensais com scripts simples. Inscreva-se para receber o guia gratuito.
                    </p>

                    {status === 'success' ? (
                        <motion.div
                            initial={{ opacity: 0, scale: 0.9 }}
                            animate={{ opacity: 1, scale: 1 }}
                            style={{
                                padding: 'var(--space-lg)',
                                background: 'rgba(16, 185, 129, 0.2)',
                                borderRadius: 'var(--radius-md)',
                                color: 'var(--color-accent-green-light)',
                                fontWeight: 'bold'
                            }}
                        >
                            Obrigado! Verifique seu e-mail em instantes.
                        </motion.div>
                    ) : (
                        <form onSubmit={handleSubmit} style={{
                            display: 'flex',
                            gap: 'var(--space-lg)',
                            maxWidth: '500px',
                            margin: '0 auto',
                            flexWrap: 'wrap'
                        }}>
                            <input
                                type="text"
                                placeholder="WhatsApp / Telefone"
                                required
                                value={phone}
                                onChange={(e) => setPhone(e.target.value)}
                                style={{
                                    flexGrow: 1,
                                    padding: 'var(--space-md)',
                                    borderRadius: 'var(--radius-md)',
                                    border: '1px solid var(--glass-border)',
                                    background: 'var(--color-bg-primary)',
                                    color: 'var(--color-text-primary)',
                                    minWidth: '200px'
                                }}
                            />
                            <input
                                type="email"
                                placeholder="Seu melhor e-mail"
                                required
                                value={email}
                                onChange={(e) => setEmail(e.target.value)}
                                style={{
                                    flexGrow: 2,
                                    padding: 'var(--space-md)',
                                    borderRadius: 'var(--radius-md)',
                                    border: '1px solid var(--glass-border)',
                                    background: 'var(--color-bg-primary)',
                                    color: 'var(--color-text-primary)',
                                    minWidth: '200px'
                                }}
                            />
                            <button className="btn btn-primary" style={{ flexGrow: 1 }}>
                                Baixar Guia
                                <Send size={18} />
                            </button>
                        </form>
                    )}
                </div>
            </div>
        </section>
    );
};

export default Newsletter;
