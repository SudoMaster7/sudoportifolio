import { motion } from 'framer-motion';
import { Terminal, Award, Code2, Coffee } from 'lucide-react';

const AboutMe = () => {
    return (
        <section className="section">
            <div className="container">
                <div style={{
                    display: 'grid',
                    gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))',
                    gap: 'var(--space-3xl)',
                    alignItems: 'center'
                }}>
                    {/* Text Content */}
                    <motion.div
                        initial={{ opacity: 0, x: -50 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.6 }}
                    >
                        <h2 className="section-title gradient-text" style={{ textAlign: 'left', marginBottom: 'var(--space-lg)' }}>
                            O Engenheiro por trás do código
                        </h2>
                        <h3 style={{
                            color: 'var(--color-text-primary)',
                            fontSize: '1.5rem',
                            marginBottom: 'var(--space-lg)'
                        }}>
                            Leonardo Brito (SUDO)
                        </h3>

                        <p style={{
                            color: 'var(--color-text-secondary)',
                            lineHeight: '1.8',
                            marginBottom: 'var(--space-md)',
                            fontSize: '1.125rem'
                        }}>
                            <strong>Transformando Complexidade em Eficiência.</strong> Sou um desenvolvedor focado em construir sistemas que não apenas funcionam, mas escalam. Com base sólida em Ciência da Computação e especialização em Redes, transito entre a robustez da infraestrutura e a agilidade do desenvolvimento moderno.
                        </p>

                        <p style={{
                            color: 'var(--color-text-secondary)',
                            lineHeight: '1.8',
                            marginBottom: 'var(--space-md)',
                            fontSize: '1.125rem'
                        }}>
                            Atualmente, atuo como <strong>Técnico Especialista em Redes na FUNDEC</strong>, gerenciando infraestrutura crítica, e como <strong>Desenvolvedor na Fuzzy Lab</strong>, criando soluções com IA e WebRTC.
                        </p>

                        <p style={{
                            color: 'var(--color-text-secondary)',
                            lineHeight: '1.8',
                            marginBottom: 'var(--space-xl)',
                            fontSize: '1.125rem'
                        }}>
                            Minha missão com a SUDO é clara: garantir privilégios de "superusuário" para o seu negócio, entregando software inteligente e infraestrutura resiliente.
                        </p>

                        <div style={{ display: 'flex', gap: 'var(--space-xl)' }}>
                            <div>
                                <h4 className="gradient-text" style={{ fontSize: '2rem', fontWeight: 'bold' }}>5+</h4>
                                <p style={{ color: 'var(--color-text-tertiary)' }}>Anos de Exp.</p>
                            </div>
                            <div>
                                <h4 className="gradient-text" style={{ fontSize: '2rem', fontWeight: 'bold' }}>30+</h4>
                                <p style={{ color: 'var(--color-text-tertiary)' }}>Projetos Entregues</p>
                            </div>
                            <div>
                                <h4 className="gradient-text" style={{ fontSize: '2rem', fontWeight: 'bold' }}>1M+</h4>
                                <p style={{ color: 'var(--color-text-tertiary)' }}>Linhas de Código</p>
                            </div>
                        </div>
                    </motion.div>

                    {/* Visual/Image Area */}
                    <motion.div
                        initial={{ opacity: 0, scale: 0.9 }}
                        whileInView={{ opacity: 1, scale: 1 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.6 }}
                        className="glass-card"
                        style={{
                            padding: 'var(--space-2xl)',
                            display: 'flex',
                            flexDirection: 'column',
                            gap: 'var(--space-lg)',
                            position: 'relative',
                            overflow: 'hidden'
                        }}
                    >
                        {/* Decorative Icons Grid */}
                        <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 'var(--space-lg)' }}>
                            <div style={{
                                background: 'rgba(139, 92, 246, 0.1)',
                                padding: 'var(--space-lg)',
                                borderRadius: 'var(--radius-lg)',
                                display: 'flex',
                                flexDirection: 'column',
                                alignItems: 'center',
                                justifyContent: 'center'
                            }}>
                                <Terminal size={32} color="var(--color-accent-purple-light)" style={{ marginBottom: 'var(--space-sm)' }} />
                                <h5 style={{ color: 'var(--color-text-primary)', fontSize: '0.875rem' }}>Full Stack</h5>
                            </div>
                            <div style={{
                                background: 'rgba(16, 185, 129, 0.1)',
                                padding: 'var(--space-lg)',
                                borderRadius: 'var(--radius-lg)',
                                display: 'flex',
                                flexDirection: 'column',
                                alignItems: 'center',
                                justifyContent: 'center'
                            }}>
                                <Award size={32} color="var(--color-accent-green-light)" style={{ marginBottom: 'var(--space-sm)' }} />
                                <h5 style={{ color: 'var(--color-text-primary)', fontSize: '0.875rem' }}>Quality First</h5>
                            </div>
                            <div style={{
                                background: 'rgba(56, 189, 248, 0.1)',
                                padding: 'var(--space-lg)',
                                borderRadius: 'var(--radius-lg)',
                                display: 'flex',
                                flexDirection: 'column',
                                alignItems: 'center',
                                justifyContent: 'center'
                            }}>
                                <Code2 size={32} color="#38bdf8" style={{ marginBottom: 'var(--space-sm)' }} />
                                <h5 style={{ color: 'var(--color-text-primary)', fontSize: '0.875rem' }}>Clean Code</h5>
                            </div>
                            <div style={{
                                background: 'rgba(244, 63, 94, 0.1)',
                                padding: 'var(--space-lg)',
                                borderRadius: 'var(--radius-lg)',
                                display: 'flex',
                                flexDirection: 'column',
                                alignItems: 'center',
                                justifyContent: 'center'
                            }}>
                                <Coffee size={32} color="#f43f5e" style={{ marginBottom: 'var(--space-sm)' }} />
                                <h5 style={{ color: 'var(--color-text-primary)', fontSize: '0.875rem' }}>Problem Solver</h5>
                            </div>
                        </div>
                    </motion.div>
                </div>
            </div>
        </section>
    );
};

export default AboutMe;
