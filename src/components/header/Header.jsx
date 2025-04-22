import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import WKND from "../../assets/images/png/WKND.png";
import { FaMusic, FaTicketAlt, FaCamera, FaCalendarAlt, FaMap, FaUserPlus, FaQuestion, FaCocktail } from "react-icons/fa";

export const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [activeSection, setActiveSection] = useState('');
  const [hoverButton, setHoverButton] = useState(null);

  // Función para manejar el scroll suave
  const scrollToSection = (id) => {
    const element = document.getElementById(id);
    if (element) {
      // Primero cerramos el menú móvil
      setIsMenuOpen(false);
      
      // Pequeño retraso para que se cierre el menú antes de desplazarse
      setTimeout(() => {
        // Obtener la posición del elemento
        const rect = element.getBoundingClientRect();
        // Calcular la posición de desplazamiento
        const scrollTop = window.pageYOffset || document.documentElement.scrollTop;
        const elementTop = rect.top + scrollTop;
        
        // Desplazamiento con una compensación para el header fijo
        window.scrollTo({
          top: elementTop - 80, // Ajusta este valor según la altura de tu header
          behavior: 'smooth'
        });
      }, 100);
    }
  };

  useEffect(() => {
    const handleScroll = () => {
      // Detectar cuando ha hecho scroll
      if (window.scrollY > 20) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }

      // Detectar qué sección está en la vista
      const sections = ['que-es', 'como-funciona', 'galeria', 'eventos', 'que-incluye', 'ruta', 'registro'];
      
      for (const id of sections) {
        const element = document.getElementById(id);
        if (element) {
          const rect = element.getBoundingClientRect();
          // Si la sección está visible en la pantalla (con un margen)
          if (rect.top <= 150 && rect.bottom >= 150) {
            setActiveSection(id);
            break;
          }
        }
      }
    };
    
    window.addEventListener('scroll', handleScroll);
    // Ejecutar una vez al inicio para establecer la sección activa
    handleScroll();
    
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  // Mapeo de secciones a colores e iconos para mayor coherencia
  const navItems = [
    { id: 'que-es', icon: <FaQuestion />, text: '¿Qué es WKND?', color: 'text-purple-300' },
    { id: 'como-funciona', icon: <FaMusic />, text: '¿Cómo funciona?', color: 'text-blue-300' },
    { id: 'galeria', icon: <FaCamera />, text: 'Galería', color: 'text-pink-300' },
    { id: 'eventos', icon: <FaCalendarAlt />, text: 'Eventos', color: 'text-green-300' },
    { id: 'que-incluye', icon: <FaCocktail />, text: '¿Qué incluye?', color: 'text-purple-300' },
    { id: 'ruta', icon: <FaMap />, text: 'Ruta', color: 'text-blue-300' },
    { id: 'registro', icon: <FaUserPlus />, text: 'Registro', color: 'text-pink-300' },
  ];

  // Función para manejar clic en opciones del menú móvil
  const handleMobileNavClick = (id) => {
    // Cerrar el menú móvil
    setIsMenuOpen(false);
    
    // Pequeño retraso para permitir que el menú se cierre
    setTimeout(() => {
      scrollToSection(id);
    }, 150);
  };

  return (
    <header className={`sticky top-0 z-50 backdrop-blur-md bg-dark-bg/80 ${scrolled ? 'border-b border-white/10 shadow-lg' : ''} transition-all duration-300`}>
      {/* Decorative bar with rainbow gradient */}
      <motion.div 
        initial={{ scaleX: 0 }}
        animate={{ scaleX: 1 }}
        transition={{ duration: 0.6, ease: "easeOut" }}
        className="h-1 bg-gradient-to-r from-purple-500 via-blue-500 to-pink-500"
      />
      
      <div className="mx-auto py-3 px-6 lg:px-8">
        <div className="flex items-center justify-between relative z-10">
          <div className="flex-shrink-0">
            <motion.img 
              className="h-14 w-auto cursor-pointer" 
              src={WKND} 
              alt="WKND Logo"
              onClick={() => scrollToSection('que-es')}
              whileHover={{ scale: 1.05, rotate: -2 }}
              whileTap={{ scale: 0.95 }}
              transition={{ type: "spring", stiffness: 300, damping: 15 }} 
            />
          </div>
          
          {/* Mobile menu button with animated transitions */}
          <div className="md:hidden">
            <motion.button 
              type="button" 
              onClick={toggleMenu}
              className="inline-flex items-center justify-center p-2 rounded-md text-white hover:text-purple-300 focus:outline-none"
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.9 }}
              aria-expanded={isMenuOpen}
              aria-label="Main menu"
            >
              <span className="sr-only">{isMenuOpen ? 'Cerrar menú' : 'Abrir menú'}</span>
              <motion.div
                initial={false}
                animate={isMenuOpen ? "open" : "closed"}
                variants={{
                  open: { rotate: 90 },
                  closed: { rotate: 0 }
                }}
                transition={{ duration: 0.2 }}
              >
                {/* Icon when menu is closed */}
                <svg 
                  className={`${isMenuOpen ? 'hidden' : 'block'} h-6 w-6`} 
                  xmlns="http://www.w3.org/2000/svg" 
                  fill="none" 
                  viewBox="0 0 24 24" 
                  stroke="currentColor" 
                  aria-hidden="true"
                >
                  <motion.path 
                    strokeLinecap="round" 
                    strokeLinejoin="round" 
                    strokeWidth="2" 
                    variants={{
                      open: { d: "M6 18L18 6M6 6l12 12" },
                      closed: { d: "M4 6h16M4 12h16M4 18h16" }
                    }}
                    d="M4 6h16M4 12h16M4 18h16" 
                  />
                </svg>
                {/* Icon when menu is open */}
                <svg 
                  className={`${isMenuOpen ? 'block' : 'hidden'} h-6 w-6`} 
                  xmlns="http://www.w3.org/2000/svg" 
                  fill="none" 
                  viewBox="0 0 24 24" 
                  stroke="currentColor" 
                  aria-hidden="true"
                >
                  <motion.path 
                    strokeLinecap="round" 
                    strokeLinejoin="round" 
                    strokeWidth="2" 
                    d="M6 18L18 6M6 6l12 12" 
                  />
                </svg>
              </motion.div>
            </motion.button>
          </div>
          
          {/* Desktop navigation with animated effects */}
          <nav className="hidden md:block">
            <ul className="flex space-x-2 text-white">
              {navItems.map((item) => (
                <motion.li 
                  key={item.id}
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  onHoverStart={() => setHoverButton(item.id)}
                  onHoverEnd={() => setHoverButton(null)}
                  transition={{ type: "spring", stiffness: 300, damping: 15 }}
                >
                  <button 
                    onClick={() => scrollToSection(item.id)}
                    className={`flex items-center gap-1 px-3 py-2 rounded-lg hover:bg-white/10 transition-all duration-300 relative overflow-hidden group ${
                      activeSection === item.id ? 'font-medium text-white bg-white/10 shadow-sm' : ''
                    }`}
                  >
                    {/* Animated glow effect on hover */}
                    {hoverButton === item.id && (
                      <motion.div
                        layoutId="glow"
                        className={`absolute inset-0 opacity-20 bg-gradient-to-r from-purple-500 to-blue-500 blur-sm`}
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 0.2 }}
                        exit={{ opacity: 0 }}
                        transition={{ duration: 0.2 }}
                      />
                    )}
                    
                    <span className={`${item.color} transition-all duration-300 group-hover:scale-110`}>
                      {item.icon}
                    </span> 
                    <span>{item.text}</span>
                    
                    {/* Underline animation for active section */}
                    {activeSection === item.id && (
                      <motion.div 
                        layoutId="underline"
                        className="absolute bottom-0 left-0 right-0 h-0.5 bg-gradient-to-r from-purple-400 to-blue-400"
                        initial={{ width: 0 }}
                        animate={{ width: '100%' }}
                        transition={{ duration: 0.3 }}
                      />
                    )}
                  </button>
                </motion.li>
              ))}
            </ul>
          </nav>
          
          {/* CTA Button with enhanced animation */}
          <div className="hidden md:block">
            <motion.button 
              className="relative flex items-center gap-2 bg-gradient-to-r from-purple-500/90 to-blue-500/90 hover:from-purple-500 hover:to-blue-500 text-white font-bold py-2 px-6 rounded-lg transition-all duration-300 shadow-lg overflow-hidden group"
              onClick={() => scrollToSection('registro')}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              {/* Glow effect inside button */}
              <motion.div 
                className="absolute inset-0 w-full h-full bg-white opacity-0 group-hover:opacity-20 blur-md transition-opacity duration-300"
                animate={{ 
                  x: [0, 100, 0], 
                  opacity: [0, 0.2, 0] 
                }}
                transition={{ 
                  duration: 2,
                  repeat: Infinity,
                  repeatType: "loop"
                }}
              />
              <FaTicketAlt className="text-lg relative z-10" /> 
              <span className="relative z-10">¡Únete ahora mismo!</span>
            </motion.button>
          </div>
        </div>
        
        {/* Mobile menu with improved animations */}
        <AnimatePresence>
          {isMenuOpen && (
            <motion.div 
              initial={{ height: 0, opacity: 0 }}
              animate={{ height: 'auto', opacity: 1 }}
              exit={{ height: 0, opacity: 0 }}
              transition={{ duration: 0.3, ease: "easeInOut" }}
              className="md:hidden bg-dark-bg/95 backdrop-blur-md rounded-lg mt-2 border border-white/10 shadow-lg overflow-hidden"
            >
              <nav className="py-4 px-4 grid gap-y-3">
                {navItems.map((item) => (
                  <motion.button 
                    key={item.id}
                    onClick={() => handleMobileNavClick(item.id)}
                    className={`flex items-center gap-2 p-2 rounded-md text-sm hover:bg-white/10 text-white/80 hover:text-white ${
                      activeSection === item.id ? 'font-medium bg-white/10 text-white' : ''
                    }`}
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.2, delay: navItems.indexOf(item) * 0.05 }}
                    whileHover={{ x: 4 }}
                    whileTap={{ scale: 0.95 }}
                  >
                    <span className={`text-lg ${item.color}`}>{item.icon}</span> {item.text}
                    
                    {/* Indicator for active section */}
                    {activeSection === item.id && (
                      <motion.div 
                        layoutId="mobileIndicator"
                        className="ml-auto h-2 w-2 rounded-full bg-gradient-to-r from-purple-400 to-blue-400"
                      />
                    )}
                  </motion.button>
                ))}
                
                {/* Mobile CTA Button */}
                <motion.button 
                  className="relative flex items-center justify-center gap-2 bg-gradient-to-r from-purple-500/90 to-blue-500/90 hover:from-purple-500 hover:to-blue-500 text-white font-bold py-3 px-4 rounded-lg w-full mt-4 shadow-sm transition-all duration-300 overflow-hidden"
                  onClick={() => handleMobileNavClick('registro')}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.3, delay: navItems.length * 0.05 }}
                  whileTap={{ scale: 0.95 }}
                >
                  {/* Glow effect */}
                  <motion.div 
                    className="absolute inset-0 w-full h-full bg-white opacity-0 blur-md"
                    animate={{ 
                      x: [0, 100, 0], 
                      opacity: [0, 0.2, 0] 
                    }}
                    transition={{ 
                      duration: 2,
                      repeat: Infinity,
                      repeatType: "loop"
                    }}
                  />
                  <FaTicketAlt className="relative z-10" /> 
                  <span className="relative z-10">¡Únete ahora mismo!</span>
                </motion.button>
              </nav>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </header>
  );
};
