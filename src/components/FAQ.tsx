import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ChevronDown, ChevronUp, MessageCircle } from 'lucide-react';

const FAQ = () => {
    const questions = [
        {
            question: "Quanto custa para desenvolver um MVP ou App?",
            answer: "Cada projeto é único, mas nossos pacotes de MVP começam a partir de R$ 1.000. O valor final depende da complexidade das funcionalidades. Focamos em entregar o máximo de valor com o menor investimento inicial possível."
        },
        {
            question: "Qual o prazo de entrega?",
            answer: "Projetos de sites institucionais levam de 1 a 2 semanas. MVPs e Apps mais complexos têm ciclos de 3 a 5 semanas. Trabalhamos com metodologia ágil para que você veja progresso toda semana."
        },
        {
            question: "Vocês dão suporte e manutenção após a entrega?",
            answer: "Sim! Oferecemos 30 dias de suporte gratuito para correção de bugs. Após esse período, temos planos mensais de manutenção e evolução (SUDO Care) para garantir que seu software continue performando."
        },
        {
            question: "Trabalham com contrato e nota fiscal?",
            answer: "Com certeza. Todo projeto é formalizado via contrato com garantia jurídica para ambas as partes e emissão de Nota Fiscal (PJ)."
        }
    ];

    const [openIndex, setOpenIndex] = useState<number | null>(0);

    return (
        <section className="section" style={{ maxWidth: '800px', margin: '0 auto' }}>
            <div className="container">
                <h2 className="section-title gradient-text" style={{ textAlign: 'center', marginBottom: 'var(--space-xl)' }}>
                    Perguntas Frequentes
                </h2>

                <div style={{ display: 'flex', flexDirection: 'column', gap: 'var(--space-md)' }}>
                    {questions.map((q, index) => (
                        <div
                            key={index}
                            className="glass-card"
                            style={{ overflow: 'hidden', padding: 0 }}
                        >
                            <button
                                onClick={() => setOpenIndex(openIndex === index ? null : index)}
                                style={{
                                    width: '100%',
                                    padding: 'var(--space-lg)',
                                    display: 'flex',
                                    justifyContent: 'space-between',
                                    alignItems: 'center',
                                    background: 'transparent',
                                    border: 'none',
                                    color: 'var(--color-text-primary)',
                                    fontSize: '1.125rem',
                                    fontWeight: 'bold',
                                    cursor: 'pointer',
                                    textAlign: 'left'
                                }}
                            >
                                {q.question}
                                {openIndex === index ? <ChevronUp /> : <ChevronDown />}
                            </button>
                            <AnimatePresence>
                                {openIndex === index && (
                                    <motion.div
                                        initial={{ height: 0, opacity: 0 }}
                                        animate={{ height: 'auto', opacity: 1 }}
                                        exit={{ height: 0, opacity: 0 }}
                                        transition={{ duration: 0.3 }}
                                        style={{ overflow: 'hidden' }}
                                    >
                                        <div style={{
                                            padding: '0 var(--space-lg) var(--space-lg)',
                                            color: 'var(--color-text-secondary)',
                                            lineHeight: '1.6'
                                        }}>
                                            {q.answer}
                                        </div>
                                    </motion.div>
                                )}
                            </AnimatePresence>
                        </div>
                    ))}
                </div>

                <div style={{ textAlign: 'center', marginTop: 'var(--space-2xl)' }}>
                    <p style={{ color: 'var(--color-text-secondary)', marginBottom: 'var(--space-md)' }}>
                        Ainda tem dúvidas?
                    </p>
                    <a
                        href="https://wa.me/5521983388872"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="btn btn-secondary"
                        style={{ display: 'inline-flex' }}
                    >
                        <MessageCircle size={18} />
                        Falar com Especialista
                    </a>
                </div>
            </div>
        </section>
    );
};

export default FAQ;
