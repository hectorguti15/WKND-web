import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { FaInstagram, FaTiktok, FaTwitter, FaYoutube, FaEnvelope, FaPhone, FaMapMarkerAlt, FaArrowUp, FaCheck, FaTimes } from 'react-icons/fa';
import WKND from "../../assets/images/png/WKND.png";

const Footer = () => {
  const [email, setEmail] = useState('');
  const [emailError, setEmailError] = useState('');
  const [subscribed, setSubscribed] = useState(false);
  const [currentYear, setCurrentYear] = useState(new Date().getFullYear());
  
  // Update year automatically
  useEffect(() => {
    setCurrentYear(new Date().getFullYear());
  }, []);
  
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    });
  };
  
  const validateEmail = (email) => {
    const re = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    return re.test(String(email).toLowerCase());
  };
  
  const handleSubscribe = (e) => {
    e.preventDefault();
    
    if (!email) {
      setEmailError('Por favor ingresa tu email');
      return;
    }
    
    if (!validateEmail(email)) {
      setEmailError('Por favor ingresa un email válido');
      return;
    }
    
    // Simulate subscription
    setEmailError('');
    setSubscribed(true);
    
    // Reset after 3 seconds
    setTimeout(() => {
      setSubscribed(false);
      setEmail('');
    }, 3000);
  };
  
  return (
    <footer className="relative bg-dark-bg pt-16 overflow-hidden">
      {/* Decorative elements */}
      <div className="absolute inset-0 disco-dots opacity-5"></div>
      <motion.div 
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1.5 }}
        className="absolute top-0 left-0 w-full h-20 bg-gradient-to-b from-black to-transparent"
      ></motion.div>
      <motion.div 
        animate={{ 
          scale: [1, 1.2, 1],
          opacity: [0.1, 0.15, 0.1] 
        }}
        transition={{ 
          duration: 8,
          repeat: Infinity,
          repeatType: "reverse"
        }}
        className="absolute -top-40 -right-40 w-80 h-80 bg-neon-purple/10 rounded-full blur-[100px]"
      ></motion.div>
      <motion.div 
        animate={{ 
          scale: [1, 1.1, 1],
          opacity: [0.1, 0.2, 0.1] 
        }}
        transition={{ 
          duration: 6,
          repeat: Infinity,
          repeatType: "reverse",
          delay: 1
        }}
        className="absolute -bottom-40 -left-40 w-80 h-80 bg-neon-pink/10 rounded-full blur-[100px]"
      ></motion.div>
      
      <div className="container mx-auto px-6 relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-10 mb-12">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            <div className="flex items-center gap-3 mb-6">
              <motion.img 
                src={WKND} 
                alt="WKND Logo" 
                className="h-10"
                whileHover={{ rotate: 10, scale: 1.05 }}
                transition={{ type: "spring", stiffness: 300 }}
              />
              <motion.h3 
                className="text-2xl font-bold neon-text neon-pink"
                animate={{ 
                  textShadow: [
                    "0 0 7px rgba(255,73,202,0.3), 0 0 10px rgba(255,73,202,0.3)",
                    "0 0 10px rgba(255,73,202,0.6), 0 0 15px rgba(255,73,202,0.4)",
                    "0 0 7px rgba(255,73,202,0.3), 0 0 10px rgba(255,73,202,0.3)"
                  ]
                }}
                transition={{ duration: 3, repeat: Infinity }}
              >
                WKND
              </motion.h3>
            </div>
            <p className="text-white/70 mb-6">Tu copiloto para las mejores noches de Lima. ¡Descubre, reserva y vive la fiesta!</p>
            
            <div className="space-y-3">
              <motion.div 
                className="flex items-center gap-3 text-white/60 hover:text-white transition-colors"
                whileHover={{ x: 3 }}
              >
                <FaEnvelope className="text-neon-blue" />
                <a href="mailto:info@wknd.app">info@wknd.app</a>
              </motion.div>
              <motion.div 
                className="flex items-center gap-3 text-white/60 hover:text-white transition-colors"
                whileHover={{ x: 3 }}
              >
                <FaPhone className="text-neon-green" />
                <a href="tel:+51123456789">+51 123 456 789</a>
              </motion.div>
              <motion.div 
                className="flex items-start gap-3 text-white/60 hover:text-white transition-colors"
                whileHover={{ x: 3 }}
              >
                <FaMapMarkerAlt className="text-neon-purple mt-1" />
                <p>Av. Primavera 123, Surco<br />Lima, Perú</p>
              </motion.div>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            <h4 className="text-lg font-bold mb-6 relative inline-block after:content-[''] after:absolute after:bottom-[-8px] after:left-0 after:w-12 after:h-[2px] after:bg-neon-blue">Enlaces rápidos</h4>
            <ul className="space-y-3">
              {[
                { href: "/terms", text: "Términos y condiciones", color: "text-neon-pink" },
                { href: "/privacy", text: "Políticas de privacidad", color: "text-neon-blue" },
                { href: "/faq", text: "Preguntas frecuentes", color: "text-neon-purple" },
                { href: "/contact", text: "Contacto", color: "text-neon-green" },
                { href: "/about", text: "Sobre nosotros", color: "text-neon-pink" }
              ].map((link, index) => (
                <motion.li key={index}
                  initial={{ opacity: 0, x: -10 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.3, delay: 0.1 * index }}
                >
                  <motion.a 
                    href={link.href} 
                    className="text-white/70 hover:text-white transition-colors hover:pl-2 duration-200 flex items-center gap-1"
                    whileHover={{ x: 5, color: "#ffffff" }}
                  >
                    <motion.span 
                      className={`text-xs ${link.color}`}
                      animate={{ scale: [1, 1.2, 1] }}
                      transition={{ duration: 2, repeat: Infinity, delay: index * 0.2 }}
                    >●</motion.span> 
                    {link.text}
                  </motion.a>
                </motion.li>
              ))}
            </ul>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.4 }}
          >
            <h4 className="text-lg font-bold mb-6 relative inline-block after:content-[''] after:absolute after:bottom-[-8px] after:left-0 after:w-12 after:h-[2px] after:bg-neon-purple">Síguenos</h4>
            <div className="grid grid-cols-2 gap-3">
              {[
                { href: "https://www.instagram.com", icon: FaInstagram, text: "Instagram", color: "text-neon-pink" },
                { href: "https://www.tiktok.com", icon: FaTiktok, text: "TikTok", color: "text-neon-blue" },
                { href: "https://twitter.com", icon: FaTwitter, text: "Twitter", color: "text-neon-purple" },
                { href: "https://www.youtube.com", icon: FaYoutube, text: "YouTube", color: "text-neon-green" }
              ].map((social, index) => (
                <motion.a 
                  key={index}
                  href={social.href} 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="flex items-center gap-3 text-white/70 hover:text-white hover:bg-white/5 p-2 rounded-lg transition-colors"
                  whileHover={{ x: 5, backgroundColor: "rgba(255, 255, 255, 0.1)" }}
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.3, delay: 0.5 + (index * 0.1) }}
                >
                  <social.icon className={`text-2xl ${social.color}`} /> {social.text}
                </motion.a>
              ))}
            </div>
            
            <motion.div 
              className="mt-8"
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.3, delay: 0.9 }}
            >
              <h5 className="text-sm font-medium mb-3">Suscríbete a nuestro newsletter</h5>
              <form onSubmit={handleSubscribe} className="flex flex-col">
                <div className="flex">
                  <input 
                    type="email" 
                    placeholder="Tu email" 
                    className={`bg-black/30 border ${
                      emailError ? 'border-red-500' : 'border-white/10'
                    } rounded-l-lg px-4 py-2 text-white focus:outline-none focus:border-neon-pink transition-colors w-full`}
                    value={email}
                    onChange={(e) => {
                      setEmail(e.target.value);
                      if (emailError) setEmailError('');
                    }}
                    disabled={subscribed}
                  />
                  <motion.button 
                    type="submit"
                    className="bg-gradient-to-r from-neon-pink to-neon-purple hover:from-neon-pink/90 hover:to-neon-purple/90 px-4 rounded-r-lg text-white overflow-hidden"
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    disabled={subscribed}
                  >
                    <AnimatePresence mode="wait">
                      {subscribed ? (
                        <motion.div
                          key="success"
                          initial={{ y: 20, opacity: 0 }}
                          animate={{ y: 0, opacity: 1 }}
                          exit={{ y: -20, opacity: 0 }}
                          transition={{ duration: 0.2 }}
                        >
                          <FaCheck />
                        </motion.div>
                      ) : (
                        <motion.div
                          key="submit"
                          initial={{ y: -20, opacity: 0 }}
                          animate={{ y: 0, opacity: 1 }}
                          exit={{ y: 20, opacity: 0 }}
                          transition={{ duration: 0.2 }}
                        >
                          <FaEnvelope />
                        </motion.div>
                      )}
                    </AnimatePresence>
                  </motion.button>
                </div>
                
                <AnimatePresence>
                  {emailError && (
                    <motion.p
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: "auto", opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      className="text-red-500 text-sm mt-1 flex items-center"
                    >
                      <FaTimes className="mr-1" /> {emailError}
                    </motion.p>
                  )}
                  
                  {subscribed && (
                    <motion.p
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: "auto", opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      className="text-green-500 text-sm mt-1 flex items-center"
                    >
                      <FaCheck className="mr-1" /> ¡Gracias por suscribirte!
                    </motion.p>
                  )}
                </AnimatePresence>
              </form>
            </motion.div>
          </motion.div>
        </div>
        
        <motion.hr 
          className="border-white/10 mb-6"
          initial={{ opacity: 0, scaleX: 0 }}
          animate={{ opacity: 1, scaleX: 1 }}
          transition={{ duration: 1, delay: 0.5 }}
        />
        
        <div className="flex flex-col md:flex-row justify-between items-center pb-8">
          <motion.p 
            className="text-white/60 text-sm"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.5, delay: 0.8 }}
          >
            &copy; {currentYear} WKND. Todos los derechos reservados.
          </motion.p>
          <div className="flex items-center gap-2 mt-4 md:mt-0">
            <motion.button 
              onClick={scrollToTop}
              className="w-10 h-10 rounded-full flex items-center justify-center bg-white/5 hover:bg-white/10 text-white transition-colors"
              whileHover={{ y: -5, backgroundColor: "rgba(255, 255, 255, 0.15)" }}
              animate={{ y: [0, -5, 0] }}
              transition={{ 
                duration: 2, 
                repeat: Infinity, 
                repeatType: "loop",
                ease: "easeInOut" 
              }}
            >
              <FaArrowUp />
            </motion.button>
          </div>
        </div>
      </div>
      
      {/* Gradient bar at bottom */}
      <motion.div 
        className="h-1 w-full bg-gradient-to-r from-neon-pink via-neon-blue to-neon-purple"
        initial={{ scaleX: 0 }}
        animate={{ scaleX: 1 }}
        transition={{ duration: 0.8, delay: 1 }}
      ></motion.div>
    </footer>
  );
};

export default Footer;
