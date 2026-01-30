import { useState } from 'react';
import ProductCard from './ProductCard';
import LeadFormModal from './LeadFormModal';

const ProductsSection = () => {
    const [activeModal, setActiveModal] = useState<'hardware' | 'chatbot' | 'traffic' | 'niche_sites' | null>(null);

    return (
        <section id="products" className="section">
            <div className="container">
                {/* Section Title */}
                <h2 className="section-title gradient-text">
                    Signature Products
                </h2>

                {/* Products Grid */}
                <div className="bento-grid-2">
                    {/* Tráfego Pago & Marketing */}
                    <ProductCard
                        badge="Growth & Ads"
                        title="Tráfego Pago & Marketing"
                        description="Gestão profissional de Meta Ads e Google Ads. Estratégias data-driven para escalar suas vendas e captação de leads."
                        benefits={[
                            "Escale suas vendas com ROI positivo",
                            "Captação de leads qualificados",
                            "Dashboard de performance em tempo real"
                        ]}
                        techStack={['Meta Ads', 'Google Ads', 'Analytics', 'Copywriting']}
                        linkUrl="#"
                        linkText="Solicitar Análise"
                        image="/Trafego.png"
                        onCtaClick={() => setActiveModal('traffic')}
                        delay={0.1}
                    />

                    {/* SUDO ChatBot */}
                    <ProductCard
                        badge="Automation"
                        title="SUDO ChatBot"
                        description="Atendimento humanizado 24/7 via WhatsApp. Personalidade ajustável via LLM que aprende com seu negócio."
                        benefits={[
                            "Atendimento automático 24/7",
                            "Redução drástica de custos com suporte",
                            "Integração oficial com WhatsApp Business"
                        ]}
                        techStack={['Meta API', 'Python', 'NLP', 'OpenAI']}
                        linkUrl="#"
                        linkText="Solicitar Demo"
                        image="/chatbot.png"
                        onCtaClick={() => setActiveModal('chatbot')}
                        delay={0.2}
                    />

                    {/* Sites de Nicho */}
                    <ProductCard
                        badge="Web Development"
                        title="Sites personalizados"
                        description="Desenvolvimento de sites personalizados para nichos específicos. Exemplo real: Protótipo para Lanchonete com cardápio digital."
                        benefits={[
                            "Design premium e exclusivo para sua marca",
                            "Otimização máxima de SEO (Google)",
                            "Alta taxa de conversão de visitantes"
                        ]}
                        techStack={['React', 'Tailwind', 'Vercel', 'UI/UX']}
                        linkUrl="#"
                        linkText="Ver Demo"
                        image="/site.png"
                        onCtaClick={() => setActiveModal('niche_sites')}
                        delay={0.3}
                    />

                    {/* SUDO Hardware & Infra */}
                    <ProductCard
                        badge="Hardware Lab"
                        title="SUDO Hardware & Infra"
                        description="Montagem de setups high-end, manutenção preventiva e estruturação de redes. Performance máxima para seu equipamento."
                        benefits={[
                            "Montagem profissional de alta performance",
                            "Cable management impecável",
                            "Projetos de rede estruturada para empresas"
                        ]}
                        techStack={['Hardware', 'Cable Management', 'Thermal Tuning', 'Redes']}
                        linkUrl="#"
                        linkText="Solicitar Orçamento"
                        image="/hardware.png"
                        onCtaClick={() => setActiveModal('hardware')}
                        delay={0.4}
                    />
                </div>
            </div>

            <LeadFormModal
                isOpen={!!activeModal}
                onClose={() => setActiveModal(null)}
                product={activeModal || 'hardware'}
            />
        </section>
    );
};

export default ProductsSection;
