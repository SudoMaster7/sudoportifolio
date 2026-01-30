import { Layout, TrendingUp, Cpu, Server } from 'lucide-react';
import ServiceCard from './ServiceCard';

const ServicesSection = () => {
    return (
        <section className="section" style={{ background: 'var(--color-bg-secondary)' }}>
            <div className="container">
                {/* Section Title */}
                <h2 className="section-title gradient-text">
                    Engineering & Growth Services
                </h2>

                {/* Services Grid */}
                <div className="bento-grid-4">
                    {/* Web & Lead Gen Systems */}
                    <ServiceCard
                        icon={Layout}
                        title="Web & Lead Gen Systems"
                        description="Sites personalizados focados em conversão. Captação de leads e integração com CRM para organizar sua base de clientes."
                        delay={0.1}
                    />

                    {/* Mobile App Development */}
                    <ServiceCard
                        icon={TrendingUp}
                        title="Mobile App Development"
                        description="Apps nativos para iOS e Android com React Native. Performance nativa e UX de ponta para seu produto digital."
                        delay={0.2}
                    />

                    {/* MVP Launchpad */}
                    <ServiceCard
                        icon={Cpu}
                        title="MVP Launchpad"
                        description="Sua ideia no ar em até 30 dias. Desenvolvimento focado no essencial para validar seu negócio rápido e com baixo custo."
                        delay={0.3}
                    />

                    {/* Fleet & System Management */}
                    <ServiceCard
                        icon={Server}
                        title="Fleet & System Management"
                        description="Sistemas corporativos sob medida, como gestão de frotas e controle patrimonial."
                        delay={0.4}
                    />
                </div>
            </div>
        </section>
    );
};

export default ServicesSection;
