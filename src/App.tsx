import Header from './components/Header';
import Hero from './components/Hero';
import ProductsSection from './components/ProductsSection';
import WhyChooseSection from './components/WhyChooseSection';
import Testimonials from './components/Testimonials';
import AboutMe from './components/AboutMe';
import FAQ from './components/FAQ';
import Newsletter from './components/Newsletter';
import TechStack from './components/TechStack';
import Footer from './components/Footer';
import FloatingWhatsApp from './components/FloatingWhatsApp';
import TrustStrip from './components/TrustStrip';
import './index.css';

function App() {
  return (
    <div style={{ position: 'relative' }}>
      <Header />
      <div id="home"><Hero /></div>
      <TrustStrip />
      <div id="products"><ProductsSection /></div>
      <div id="differential"><WhyChooseSection /></div>
      <div id="testimonials"><Testimonials /></div>
      <div id="about"><AboutMe /></div>
      <div id="faq"><FAQ /></div>
      <div id="newsletter"><Newsletter /></div>
      <TechStack />
      <Footer />
      <FloatingWhatsApp />
    </div>
  );
}

export default App;
