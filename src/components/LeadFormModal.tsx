import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { X, Send } from 'lucide-react';

interface LeadFormModalProps {
    isOpen: boolean;
    onClose: () => void;
    product: 'hardware' | 'chatbot' | 'traffic' | 'niche_sites' | 'meeting';
}

const LeadFormModal = ({ isOpen, onClose, product }: LeadFormModalProps) => {
    const [formData, setFormData] = useState({
        name: '',
        phone: '',
        social: '', // Instagram/LinkedIn
        company: '',
        details: '',
        budget: '', // For Hardware & Traffic
        volume: '',  // For ChatBot
        goal: ''    // For Traffic
    });

    const getTitle = () => {
        switch (product) {
            case 'hardware': return 'Montagem & Infra';
            case 'chatbot': return 'SUDO ChatBot AI';
            case 'traffic': return 'Tráfego Pago & Marketing';
            case 'niche_sites': return 'Sites de Nicho';
            case 'meeting': return 'Agendar Reunião';
            default: return 'Fale Conosco';
        }
    };

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();

        let messageText = '';

        if (product === 'hardware') {
            messageText = `*Novo Lead - Hardware & Infra*\n\n` +
                `*Nome:* ${formData.name}\n` +
                `*WhatsApp:* ${formData.phone}\n` +
                `*Rede Social:* ${formData.social}\n` +
                `*Contexto:* ${formData.company}\n` +
                `*Uso/Detalhes:* ${formData.details}\n` +
                `*Orçamento Estimado:* ${formData.budget}`;
        } else if (product === 'chatbot') {
            messageText = `*Novo Lead - ChatBot AI*\n\n` +
                `*Nome:* ${formData.name}\n` +
                `*WhatsApp:* ${formData.phone}\n` +
                `*Rede Social:* ${formData.social}\n` +
                `*Empresa/Nicho:* ${formData.company}\n` +
                `*Necessidade:* ${formData.details}\n` +
                `*Volume de Atendimentos:* ${formData.volume}`;
        } else if (product === 'traffic') {
            messageText = `*Novo Lead - Tráfego Pago*\n\n` +
                `*Nome:* ${formData.name}\n` +
                `*WhatsApp:* ${formData.phone}\n` +
                `*Rede Social:* ${formData.social}\n` +
                `*Empresa:* ${formData.company}\n` +
                `*Objetivo:* ${formData.goal}\n` +
                `*Verba Mensal:* ${formData.budget}\n` +
                `*Detalhes:* ${formData.details}`;
        } else if (product === 'niche_sites') {
            messageText = `*Novo Lead - Sites de Nicho*\n\n` +
                `*Nome:* ${formData.name}\n` +
                `*WhatsApp:* ${formData.phone}\n` +
                `*Rede Social:* ${formData.social}\n` +
                `*Nicho/Ideia:* ${formData.company}\n` +
                `*Funcionalidades:* ${formData.details}`;
        } else if (product === 'meeting') {
            messageText = `*Novo Agendamento - Reunião*\n\n` +
                `*Nome:* ${formData.name}\n` +
                `*WhatsApp:* ${formData.phone}\n` +
                `*Rede Social:* ${formData.social}\n` +
                `*Empresa:* ${formData.company}\n` +
                `*Pauta:* ${formData.details}`;
        }

        import('../services/GoogleSheetService').then(({ saveLead }) => {
            saveLead({
                type: 'Contato - ' + product,
                name: formData.name,
                contact: formData.phone,
                details: `Social: ${formData.social} | ${formData.company} | ${formData.details}`
            });
        });

        // For meeting, we redirect to Calendly AFTER sending data (or immediately if we don't block)
        if (product === 'meeting') {
            // Open Calendly
            window.open('https://calendly.com/leticiadora06/30min', '_blank');
            // Also notify owner on WhatsApp so they know who booked
            const whatsappUrl = `https://wa.me/5521983388872?text=${encodeURIComponent(messageText)}`;
            window.open(whatsappUrl, '_blank');
        } else {
            const whatsappUrl = `https://wa.me/5521983388872?text=${encodeURIComponent(messageText)}`;
            window.open(whatsappUrl, '_blank');
        }

        // Redirect to demo if applicable
        if (product === 'niche_sites') {
            setTimeout(() => {
                window.open('https://sudo-project.vercel.app/', '_blank');
            }, 1000);
        }

        onClose();
    };

    return (
        <AnimatePresence>
            {isOpen && (
                <div style={{
                    position: 'fixed',
                    inset: 0,
                    zIndex: 50,
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    padding: 'var(--space-md)'
                }}>
                    {/* Backdrop */}
                    <motion.div
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        exit={{ opacity: 0 }}
                        onClick={onClose}
                        style={{
                            position: 'absolute',
                            inset: 0,
                            background: 'rgba(2, 6, 23, 0.8)',
                            backdropFilter: 'blur(4px)'
                        }}
                    />

                    {/* Modal Content */}
                    <motion.div
                        initial={{ opacity: 0, scale: 0.95, y: 20 }}
                        animate={{ opacity: 1, scale: 1, y: 0 }}
                        exit={{ opacity: 0, scale: 0.95, y: 20 }}
                        className="glass-card"
                        style={{
                            width: '100%',
                            maxWidth: '500px',
                            position: 'relative',
                            zIndex: 10,
                            background: 'rgba(15, 23, 42, 0.9)',
                            border: '1px solid rgba(139, 92, 246, 0.3)',
                            boxShadow: '0 25px 50px -12px rgba(0, 0, 0, 0.5)',
                            maxHeight: '90vh',
                            overflowY: 'auto'
                        }}
                    >
                        <button
                            onClick={onClose}
                            style={{
                                position: 'absolute',
                                top: 'var(--space-md)',
                                right: 'var(--space-md)',
                                background: 'transparent',
                                border: 'none',
                                color: 'var(--color-text-secondary)',
                                cursor: 'pointer'
                            }}
                        >
                            <X size={24} />
                        </button>

                        <div style={{ padding: 'var(--space-xl)' }}>
                            <h3 className="gradient-text" style={{
                                fontSize: '1.5rem',
                                marginBottom: 'var(--space-xs)'
                            }}>
                                {getTitle()}
                            </h3>
                            <p style={{ color: 'var(--color-text-secondary)', marginBottom: 'var(--space-xl)' }}>
                                {product === 'niche_sites'
                                    ? 'Preencha para liberar o acesso à Demo e falar conosco.'
                                    : 'Conte um pouco sobre sua necessidade para prepararmos a melhor solução.'}
                            </p>

                            <form onSubmit={handleSubmit} style={{ display: 'flex', flexDirection: 'column', gap: 'var(--space-lg)' }}>
                                <div>
                                    <label style={{ display: 'block', marginBottom: 'var(--space-xs)', color: 'var(--color-text-primary)' }}>Seu Nome</label>
                                    <input
                                        required
                                        type="text"
                                        value={formData.name}
                                        onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                                        style={{
                                            width: '100%',
                                            padding: 'var(--space-md)',
                                            background: 'rgba(255, 255, 255, 0.05)',
                                            border: '1px solid rgba(255, 255, 255, 0.1)',
                                            borderRadius: 'var(--radius-md)',
                                            color: 'white',
                                            outline: 'none'
                                        }}
                                        placeholder="Como podemos te chamar?"
                                    />
                                </div>

                                <div>
                                    <label style={{ display: 'block', marginBottom: 'var(--space-xs)', color: 'var(--color-text-primary)' }}>Seu WhatsApp / Telefone</label>
                                    <input
                                        required
                                        type="text"
                                        value={formData.phone}
                                        onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                                        style={{
                                            width: '100%',
                                            padding: 'var(--space-md)',
                                            background: 'rgba(255, 255, 255, 0.05)',
                                            border: '1px solid rgba(255, 255, 255, 0.1)',
                                            borderRadius: 'var(--radius-md)',
                                            color: 'white',
                                            outline: 'none'
                                        }}
                                        placeholder="(DD) 99999-9999"
                                    />
                                </div>

                                <div>
                                    <label style={{ display: 'block', marginBottom: 'var(--space-xs)', color: 'var(--color-text-primary)' }}>Rede Social (Instagram/LinkedIn)</label>
                                    <input
                                        type="text"
                                        value={formData.social}
                                        onChange={(e) => setFormData({ ...formData, social: e.target.value })}
                                        style={{
                                            width: '100%',
                                            padding: 'var(--space-md)',
                                            background: 'rgba(255, 255, 255, 0.05)',
                                            border: '1px solid rgba(255, 255, 255, 0.1)',
                                            borderRadius: 'var(--radius-md)',
                                            color: 'white',
                                            outline: 'none'
                                        }}
                                        placeholder="@seu.negocio"
                                    />
                                </div>

                                <div>
                                    <label style={{ display: 'block', marginBottom: 'var(--space-xs)', color: 'var(--color-text-primary)' }}>
                                        {product === 'hardware' ? 'Contexto (Pessoal/Empresa)' :
                                            product === 'niche_sites' ? 'Qual seu Nicho/Ideia?' :
                                                product === 'meeting' ? 'Sua Empresa' : 'Sua Empresa/Negócio'}
                                    </label>
                                    <input
                                        required
                                        type="text"
                                        value={formData.company}
                                        onChange={(e) => setFormData({ ...formData, company: e.target.value })}
                                        style={{
                                            width: '100%',
                                            padding: 'var(--space-md)',
                                            background: 'rgba(255, 255, 255, 0.05)',
                                            border: '1px solid rgba(255, 255, 255, 0.1)',
                                            borderRadius: 'var(--radius-md)',
                                            color: 'white'
                                        }}
                                        placeholder={product === 'hardware' ? "Ex: Setup para escritório" : "Ex: Minha Loja"}
                                    />
                                </div>

                                {(product === 'hardware' || product === 'traffic') && (
                                    <div>
                                        <label style={{ display: 'block', marginBottom: 'var(--space-xs)', color: 'var(--color-text-primary)' }}>
                                            {product === 'hardware' ? 'Orçamento Estimado' : 'Verba Mensal para Anúncios'}
                                        </label>
                                        <select
                                            value={formData.budget}
                                            onChange={(e) => setFormData({ ...formData, budget: e.target.value })}
                                            style={{
                                                width: '100%',
                                                padding: 'var(--space-md)',
                                                background: 'rgba(255, 255, 255, 0.05)',
                                                border: '1px solid rgba(255, 255, 255, 0.1)',
                                                borderRadius: 'var(--radius-md)',
                                                color: 'white'
                                            }}
                                        >
                                            <option value="" style={{ background: '#0f172a' }}>Selecione...</option>
                                            {product === 'hardware' ? (
                                                <>
                                                    <option value="Até R$ 5.000" style={{ background: '#0f172a' }}>Até R$ 5.000</option>
                                                    <option value="R$ 5.000 - R$ 10.000" style={{ background: '#0f172a' }}>R$ 5.000 - R$ 10.000</option>
                                                    <option value="Acima de R$ 20.000" style={{ background: '#0f172a' }}>Acima de R$ 20.000</option>
                                                    <option value="Apenas Manutenção" style={{ background: '#0f172a' }}>Apenas Manutenção</option>
                                                </>
                                            ) : (
                                                <>
                                                    <option value="Até R$ 1.000/mês" style={{ background: '#0f172a' }}>Até R$ 1.000/mês</option>
                                                    <option value="R$ 1.000 - R$ 3.000/mês" style={{ background: '#0f172a' }}>R$ 1.000 - R$ 3.000/mês</option>
                                                    <option value="R$ 3.000 - R$ 10.000/mês" style={{ background: '#0f172a' }}>R$ 3.000 - R$ 10.000/mês</option>
                                                    <option value="Acima de R$ 10.000/mês" style={{ background: '#0f172a' }}>Acima de R$ 10.000/mês</option>
                                                </>
                                            )}
                                        </select>
                                    </div>
                                )}

                                {product === 'chatbot' && (
                                    <div>
                                        <label style={{ display: 'block', marginBottom: 'var(--space-xs)', color: 'var(--color-text-primary)' }}>Volume Diário de Mensagens</label>
                                        <select
                                            value={formData.volume}
                                            onChange={(e) => setFormData({ ...formData, volume: e.target.value })}
                                            style={{
                                                width: '100%',
                                                padding: 'var(--space-md)',
                                                background: 'rgba(255, 255, 255, 0.05)',
                                                border: '1px solid rgba(255, 255, 255, 0.1)',
                                                borderRadius: 'var(--radius-md)',
                                                color: 'white'
                                            }}
                                        >
                                            <option value="" style={{ background: '#0f172a' }}>Selecione...</option>
                                            <option value="Até 50" style={{ background: '#0f172a' }}>Até 50</option>
                                            <option value="50 - 200" style={{ background: '#0f172a' }}>50 - 200</option>
                                            <option value="200 - 1000" style={{ background: '#0f172a' }}>200 - 1000</option>
                                            <option value="Mais de 1000" style={{ background: '#0f172a' }}>Mais de 1000</option>
                                        </select>
                                    </div>
                                )}

                                {product === 'traffic' && (
                                    <div>
                                        <label style={{ display: 'block', marginBottom: 'var(--space-xs)', color: 'var(--color-text-primary)' }}>Objetivo Principal</label>
                                        <select
                                            value={formData.goal}
                                            onChange={(e) => setFormData({ ...formData, goal: e.target.value })}
                                            style={{
                                                width: '100%',
                                                padding: 'var(--space-md)',
                                                background: 'rgba(255, 255, 255, 0.05)',
                                                border: '1px solid rgba(255, 255, 255, 0.1)',
                                                borderRadius: 'var(--radius-md)',
                                                color: 'white'
                                            }}
                                        >
                                            <option value="" style={{ background: '#0f172a' }}>Selecione...</option>
                                            <option value="Gerar Leads (Cadastros)" style={{ background: '#0f172a' }}>Gerar Leads (Cadastros)</option>
                                            <option value="Vendas Diretas (E-commerce)" style={{ background: '#0f172a' }}>Vendas Diretas (E-commerce)</option>
                                            <option value="Seguidores/Branding" style={{ background: '#0f172a' }}>Seguidores/Branding</option>
                                            <option value="Mensagens (WhatsApp/Direct)" style={{ background: '#0f172a' }}>Mensagens (WhatsApp/Direct)</option>
                                        </select>
                                    </div>
                                )}

                                <div>
                                    <label style={{ display: 'block', marginBottom: 'var(--space-xs)', color: 'var(--color-text-primary)' }}>
                                        {product === 'hardware' ? 'Uso Principal / Detalhes' :
                                            product === 'niche_sites' ? 'Funcionalidades desejadas' :
                                                product === 'meeting' ? 'Motivo da Reunião / Pauta' : 'Outros Detalhes'}
                                    </label>
                                    <textarea
                                        required
                                        value={formData.details}
                                        onChange={(e) => setFormData({ ...formData, details: e.target.value })}
                                        style={{
                                            width: '100%',
                                            padding: 'var(--space-md)',
                                            background: 'rgba(255, 255, 255, 0.05)',
                                            border: '1px solid rgba(255, 255, 255, 0.1)',
                                            borderRadius: 'var(--radius-md)',
                                            color: 'white',
                                            minHeight: '100px',
                                            resize: 'vertical'
                                        }}
                                        placeholder="Descreva o que você precisa..."
                                    />
                                </div>

                                <button
                                    type="submit"
                                    className="btn btn-primary"
                                    style={{ width: '100%', justifyContent: 'center', marginTop: 'var(--space-sm)' }}
                                >
                                    {product === 'niche_sites' ? 'Enviar e Ver Demo' :
                                        product === 'meeting' ? 'Agendar no Calendly' : 'Continuar no WhatsApp'}
                                    <Send size={18} />
                                </button>
                            </form>
                        </div>
                    </motion.div>
                </div>
            )}
        </AnimatePresence>
    );
};

export default LeadFormModal;
