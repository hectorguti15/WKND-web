import React, { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { FaSearch, FaCamera, FaTicketAlt, FaMapMarkedAlt, FaArrowRight, FaChevronDown } from "react-icons/fa";
import { useInView } from "react-intersection-observer";

// Datos de los pasos
const HowItWorksSteps = [
  {
    step: 1,
    title: "Explora lo mejor del fin de semana",
    icon: <FaSearch className="text-2xl" />,
    description:
      "Abre la app y descubre una selección curada de fiestas, eventos y discotecas que están sonando fuerte en Lima.",
    color: "pink-400"
  },
  {
    step: 2,
    title: "Conoce el lugar antes de ir",
    icon: <FaCamera className="text-2xl" />,
    description:
      "Revisa fotos, reseñas reales, tipos de música, dress code, y más. Todo lo que necesitas para tomar la mejor decisión.",
    color: "blue-400"
  },
  {
    step: 3,
    title: "Compra tu entrada en segundos",
    icon: <FaTicketAlt className="text-2xl" />,
    description:
      "Evita las colas y asegúrate tu lugar. Compra entradas directamente desde la app con métodos seguros y rápidos.",
    tag: "coming soon",
    color: "purple-400"
  },
  {
    step: 4,
    title: "Disfruta tu noche sin preocupaciones",
    icon: <FaMapMarkedAlt className="text-2xl" />,
    description:
      "Sigue rutas seguras hasta tu destino, recibe recomendaciones en tiempo real y vive la experiencia WKND al máximo.",
    color: "green-400"
  },
];

export const HowItWorks = () => {
  const [activeStep, setActiveStep] = useState(0);
  const { ref, inView } = useInView({
    threshold: 0.2,
    triggerOnce: false
  });

  // Función para manejar el scroll suave
  const scrollToSection = (id) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  // Auto-rotate through steps
  useEffect(() => {
    const interval = setInterval(() => {
      setActiveStep((prev) => (prev + 1) % HowItWorksSteps.length);
    }, 5000);
    return () => clearInterval(interval);
  }, []);

  // Animation variants
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.15,
        delayChildren: 0.1
      }
    }
  };

  const stepVariants = {
    hidden: { opacity: 0, y: 15 },
    visible: { 
      opacity: 1, 
      y: 0,
      transition: { 
        type: "spring",
        stiffness: 70,
        damping: 12
      }
    }
  };

  const fadeInVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { 
      opacity: 1, 
      y: 0,
      transition: { 
        duration: 0.5,
        ease: "easeOut"
      }
    }
  };

  return (
    <section 
      id="como-funciona" 
      ref={ref}
      className="relative py-20 overflow-hidden bg-dark-bg"
    >
      {/* Sutiles patrones de fondo */}
      <div className="absolute inset-0 bg-grid-pattern opacity-5"></div>
      
      {/* Efectos de luz sutiles */}
      <div className="absolute top-40 -left-40 w-80 h-80 bg-pink-400/5 rounded-full blur-[120px]"></div>
      <div className="absolute bottom-40 -right-40 w-80 h-80 bg-blue-400/5 rounded-full blur-[120px]"></div>
      
      <div className="container mx-auto px-4 sm:px-6 relative z-10">
        {/* Encabezado de la sección */}
        <motion.div 
          variants={fadeInVariants}
          initial="hidden"
          animate={inView ? "visible" : "hidden"}
          className="text-center mb-12 md:mb-16"
        >
          <span className="inline-block text-xs bg-white/5 px-4 py-1 rounded-full text-white/70 mb-3">DESCUBRE EL PROCESO</span>
          <h2 className="text-3xl md:text-5xl font-bold mb-4 bg-clip-text text-transparent bg-gradient-to-r from-white via-blue-100 to-white">Cómo funciona WKND</h2>
          <p className="max-w-2xl mx-auto text-white/70 text-base md:text-lg">Diseñamos un proceso simple para que disfrutes la noche sin complicaciones</p>
        </motion.div>
        
        <div className="grid md:grid-cols-12 gap-8 items-start">
          {/* Visualización principal - 5 columnas en desktop */}
          <div className="md:col-span-5 order-2 md:order-1">
            <motion.div 
              variants={fadeInVariants}
              initial="hidden"
              animate={inView ? "visible" : "hidden"}
              className="relative bg-gradient-to-br from-black/40 to-black/60 rounded-2xl overflow-hidden border border-white/10 shadow-lg"
            >
              {/* Panel principal con la información del paso activo */}
              <div className="h-[400px] md:h-[480px] relative">
                {/* Efecto de luz de fondo sutil según el color del paso */}
                <div className={`absolute bottom-0 left-1/2 -translate-x-1/2 w-2/3 h-40 bg-${HowItWorksSteps[activeStep].color}/20 blur-[60px] rounded-full`}></div>
                
                {/* Contenido del paso activo */}
                <div className="absolute inset-0 flex flex-col items-center justify-center p-8 text-center z-10">
                  <div className={`text-6xl md:text-7xl text-${HowItWorksSteps[activeStep].color} mb-6 transform transition-all duration-500`}>
                    {HowItWorksSteps[activeStep].icon}
                  </div>
                  
                  <h3 className="text-xl md:text-2xl font-bold mb-4 text-white">
                    {HowItWorksSteps[activeStep].title}
                  </h3>
                  
                  <p className="text-white/80 max-w-md text-base">
                    {HowItWorksSteps[activeStep].description}
                  </p>
                  
                  {/* Etiqueta "coming soon" si aplica */}
                  {HowItWorksSteps[activeStep].tag && (
                    <div className="mt-6 bg-purple-500/70 backdrop-blur-sm text-white text-xs px-4 py-1.5 rounded-full font-medium">
                      {HowItWorksSteps[activeStep].tag}
                    </div>
                  )}

                  {/* Número del paso actual (decorativo) */}
                  <div className="absolute bottom-6 right-6 text-8xl font-bold text-white/5">
                    {HowItWorksSteps[activeStep].step}
                  </div>
                </div>
                
                {/* Indicador de pasos */}
                <div className="absolute bottom-8 left-0 right-0 flex justify-center gap-2">
                  {HowItWorksSteps.map((_, index) => (
                    <button 
                      key={`indicator-${index}`}
                      onClick={() => setActiveStep(index)}
                      className={`h-1.5 rounded-full transition-all duration-300 ${
                        activeStep === index 
                          ? `bg-${HowItWorksSteps[index].color} w-8`
                          : 'bg-white/20 w-3'
                      }`}
                      aria-label={`Ir al paso ${index + 1}`}
                    />
                  ))}
                </div>
              </div>
            </motion.div>

            {/* Navegación de pasos en móvil */}
            <div className="mt-6 flex justify-between px-2 md:hidden">
              {HowItWorksSteps.map((step, i) => (
                <button
                  key={`step-nav-${i}`}
                  onClick={() => setActiveStep(i)}
                  className={`w-12 h-12 rounded-full flex items-center justify-center transition-all duration-300 ${
                    activeStep === i 
                      ? `bg-${step.color}/20 text-${step.color} border border-${step.color}/40`
                      : 'bg-white/5 text-white/40'
                  }`}
                >
                  {step.step}
                </button>
              ))}
            </div>
          </div>
          
          {/* Lista de pasos - 7 columnas en desktop */}
          <div className="md:col-span-7 order-1 md:order-2 md:pl-4">
            <motion.div
              variants={containerVariants}
              initial="hidden"
              animate={inView ? "visible" : "hidden"}
              className="space-y-4"
            >
              {HowItWorksSteps.map((step, index) => (
                <motion.div
                  key={index}
                  variants={stepVariants}
                  className={`relative pl-8 pr-4 py-5 rounded-xl transition-all duration-300 cursor-pointer ${
                    activeStep === index 
                      ? `bg-gradient-to-r from-${step.color}/10 to-transparent border-l-4 border-${step.color}` 
                      : 'border-l-4 border-transparent hover:bg-white/5'
                  }`}
                  onClick={() => setActiveStep(index)}
                  whileHover={{ x: 3 }}
                  whileTap={{ scale: 0.99 }}
                >
                  {/* Círculo con número del paso */}
                  <span className={`absolute left-[-12px] top-1/2 -translate-y-1/2 flex items-center justify-center w-6 h-6 rounded-full text-xs font-bold ${
                    activeStep === index 
                      ? `bg-${step.color} text-white shadow-sm shadow-${step.color}/30` 
                      : 'bg-white/10 text-white/50'
                  }`}>
                    {step.step}
                  </span>
                  
                  {/* Título del paso */}
                  <h3 className={`text-base md:text-lg font-semibold mb-1.5 flex items-center gap-2 ${
                    activeStep === index ? `text-${step.color}` : 'text-white'
                  }`}>
                    {step.title}
                    {activeStep === index && (
                      <FaArrowRight className="text-xs opacity-70" />
                    )}
                  </h3>
                  
                  {/* Descripción del paso */}
                  <p className={`text-sm ${
                    activeStep === index ? 'text-white/90' : 'text-white/50'
                  }`}>
                    {step.description}
                  </p>

                  {/* Badge "coming soon" si aplica */}
                  {step.tag && (
                    <span className="absolute top-3 right-3 text-xs bg-purple-500/30 text-purple-200 px-2 py-0.5 rounded-full">
                      {step.tag}
                    </span>
                  )}
                </motion.div>
              ))}
            </motion.div>
            
            {/* Call to action */}
            <motion.div 
              className="mt-10 md:mt-12"
              initial={{ opacity: 0, y: 20 }}
              animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
              transition={{ delay: 0.5 }}
            >
              <div className="flex flex-col sm:flex-row items-center gap-6">
                <motion.button 
                  onClick={() => scrollToSection('registro')}
                  className="bg-gradient-to-r from-blue-500 to-purple-600 hover:from-blue-600 hover:to-purple-700 text-white font-bold py-3 px-8 rounded-lg transition-all duration-300 shadow-md flex-shrink-0"
                  whileHover={{ scale: 1.03 }}
                  whileTap={{ scale: 0.97 }}
                >
                  Comenzar ahora
                </motion.button>
                
                <button
                  onClick={() => scrollToSection('que-incluye')}
                  className="text-white/60 hover:text-white flex items-center gap-2 group transition-colors"
                >
                  <span>Aprende más sobre las funciones premium</span>
                  <FaChevronDown className="text-xs group-hover:translate-y-1 transition-transform"/>
                </button>
              </div>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
};
