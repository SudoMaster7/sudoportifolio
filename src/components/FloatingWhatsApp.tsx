import { motion } from 'framer-motion';
import { MessageCircle } from 'lucide-react';

const FloatingWhatsApp = () => {
    return (
        <motion.a
            href="https://wa.me/5521983388872"
            target="_blank"
            rel="noopener noreferrer"
            initial={{ scale: 0, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            transition={{ delay: 1, duration: 0.3 }}
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.95 }}
            style={{
                position: 'fixed',
                bottom: '20px',
                right: '20px',
                backgroundColor: '#25D366',
                color: 'white',
                width: '60px',
                height: '60px',
                borderRadius: '50%',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                boxShadow: '0 4px 10px rgba(0, 0, 0, 0.3)',
                zIndex: 100,
                textDecoration: 'none'
            }}
        >
            <MessageCircle size={32} />
        </motion.a>
    );
};

export default FloatingWhatsApp;
