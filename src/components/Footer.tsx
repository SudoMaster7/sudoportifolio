import { Github, Linkedin, MessageCircle } from 'lucide-react';

const Footer = () => {
    return (
        <footer style={{
            background: 'var(--color-bg-secondary)',
            borderTop: '1px solid rgba(139, 92, 246, 0.2)'
        }}>
            <div className="container" style={{ padding: 'var(--space-3xl) var(--space-xl)' }}>
                {/* Main CTA Section */}
                <div style={{
                    textAlign: 'center',
                    marginBottom: 'var(--space-3xl)',
                    padding: 'var(--space-2xl) 0'
                }}>
                    <h3 style={{
                        fontSize: 'clamp(1.75rem, 3vw, 2.5rem)',
                        fontWeight: 'var(--font-weight-bold)',
                        marginBottom: 'var(--space-lg)',
                        color: 'var(--color-text-primary)'
                    }}>
                        Vamos otimizar seu negócio?
                    </h3>
                    <p style={{
                        fontSize: '1.125rem',
                        color: 'var(--color-text-secondary)',
                        marginBottom: 'var(--space-xl)',
                        maxWidth: '600px',
                        margin: '0 auto var(--space-xl)'
                    }}>
                        Entre em contato e descubra como posso ajudar a escalar suas operações com tecnologia de ponta.
                    </p>
                    <a
                        href="https://wa.me/5521983388872"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="btn btn-primary"
                        style={{ fontSize: '1.125rem' }}
                    >
                        <MessageCircle size={22} />
                        Falar no WhatsApp
                    </a>
                </div>

                {/* Divider */}
                <div style={{
                    height: '1px',
                    background: 'linear-gradient(90deg, transparent, rgba(139, 92, 246, 0.3), transparent)',
                    marginBottom: 'var(--space-2xl)'
                }} />

                {/* Footer Content */}
                <div style={{
                    display: 'flex',
                    flexDirection: 'column',
                    gap: 'var(--space-xl)',
                    alignItems: 'center'
                }}>
                    {/* Brand */}
                    <div style={{ textAlign: 'center' }}>
                        <h4 className="gradient-text" style={{
                            fontSize: '2rem',
                            fontWeight: 'var(--font-weight-black)',
                            marginBottom: 'var(--space-sm)'
                        }}>
                            SUDO_
                        </h4>
                        <p style={{
                            color: 'var(--color-text-tertiary)',
                            fontSize: '0.875rem'
                        }}>
                            Do Hardware ao Software. Da Ideia à Escala.
                        </p>
                    </div>

                    {/* Social Links */}
                    <div style={{
                        display: 'flex',
                        gap: 'var(--space-lg)',
                        alignItems: 'center'
                    }}>
                        <a
                            href="https://www.linkedin.com/in/leonardo-brito-133645262/"
                            target="_blank"
                            rel="noopener noreferrer"
                            style={{
                                display: 'flex',
                                alignItems: 'center',
                                gap: 'var(--space-sm)',
                                color: 'var(--color-text-secondary)',
                                textDecoration: 'none',
                                transition: 'color var(--transition-base)',
                                fontSize: '1rem'
                            }}
                            onMouseEnter={(e) => e.currentTarget.style.color = 'var(--color-accent-purple-light)'}
                            onMouseLeave={(e) => e.currentTarget.style.color = 'var(--color-text-secondary)'}
                        >
                            <Linkedin size={20} />
                            LinkedIn
                        </a>
                        <a
                            href="https://github.com/SudoMaster7"
                            target="_blank"
                            rel="noopener noreferrer"
                            style={{
                                display: 'flex',
                                alignItems: 'center',
                                gap: 'var(--space-sm)',
                                color: 'var(--color-text-secondary)',
                                textDecoration: 'none',
                                transition: 'color var(--transition-base)',
                                fontSize: '1rem'
                            }}
                            onMouseEnter={(e) => e.currentTarget.style.color = 'var(--color-accent-green-light)'}
                            onMouseLeave={(e) => e.currentTarget.style.color = 'var(--color-text-secondary)'}
                        >
                            <Github size={20} />
                            GitHub
                        </a>
                    </div>

                    {/* Copyright */}
                    <p style={{
                        color: 'var(--color-text-tertiary)',
                        fontSize: '0.875rem',
                        textAlign: 'center'
                    }}>
                        © {new Date().getFullYear()} Leonardo Brito (SUDO). Todos os direitos reservados.
                    </p>
                </div>
            </div>
        </footer>
    );
};

export default Footer;
