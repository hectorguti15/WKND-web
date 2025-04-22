import React from "react";
import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
import { FaHeadphones, FaMapMarkedAlt, FaTicketAlt, FaCommentDots, FaFire, FaMusic } from "react-icons/fa";

const featuresList = [
  {
    icon: <FaHeadphones className="text-3xl md:text-4xl" />,
    titulo: "Recomendaciones personalizadas",
    descripcion: "Recibe sugerencias según tus gustos y hábitos de salida.",
    color: "neon-pink",
  },
  {
    icon: <FaMapMarkedAlt className="text-3xl md:text-4xl" />,
    titulo: "Rutas seguras en tiempo real",
    descripcion: "Explora cómo llegar y volver de forma segura a cada evento.",
    color: "neon-blue",
  },
  {
    icon: <FaTicketAlt className="text-3xl md:text-4xl" />,
    titulo: "Venta de entradas rápida",
    descripcion: "Compra tus entradas al instante y sin hacer filas.",
    color: "neon-purple",
  },
  {
    icon: <FaCommentDots className="text-3xl md:text-4xl" />,
    titulo: "Opiniones reales",
    descripcion:
      "Lee reseñas y experiencias de otros usuarios antes de decidir.",
    color: "neon-green",
  },
  {
    icon: <FaFire className="text-3xl md:text-4xl" />,
    titulo: "Eventos exclusivos",
    descripcion: "Accede a fiestas y eventos únicos para miembros WKND.",
    color: "neon-pink",
  },
  {
    icon: <FaMusic className="text-3xl md:text-4xl" />,
    titulo: "Conexión con playlists y redes",
    descripcion: "Próximamente podrás conectar tu música y compartir en redes.",
    color: "neon-blue",
  },
];

export const Features = () => {
  const { ref, inView } = useInView({
    threshold: 0.1,
    triggerOnce: false
  });

  // Animation variants
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
        delayChildren: 0.3
      }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { 
      opacity: 1, 
      y: 0,
      transition: { type: "spring", stiffness: 50, damping: 10 }
    }
  };

  return (
    <section id="que-incluye" className="relative py-20 overflow-hidden bg-dark-bg" ref={ref}>
      {/* Decorative elements */}
      <div className="absolute top-40 -right-20 w-80 h-80 bg-neon-pink/20 rounded-full blur-[120px] animate-pulse-slow"></div>
      <div className="absolute bottom-40 -left-20 w-60 h-60 bg-neon-purple/20 rounded-full blur-[100px] animate-pulse-slow"></div>
      
      {/* Fondo con patrón de puntos para efecto discoteca */}
      <div className="absolute inset-0 disco-dots opacity-10"></div>
      
      <div className="container mx-auto px-6 relative z-10">
        <motion.div 
          className="text-center mb-16"
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          transition={{ duration: 0.6 }}
        >
          <span className="inline-block text-xs bg-white/5 backdrop-blur-sm px-4 py-1 rounded-full text-white/70 mb-4">CARACTERÍSTICAS</span>
          <h2 className="text-4xl md:text-5xl font-bold mb-6 neon-text neon-purple">Todo lo que necesitas en una sola app</h2>
          <p className="max-w-2xl mx-auto text-white/70 text-lg">Tu noche, tu flow, tu WKND. Descubre todas las funciones que te harán vivir la mejor experiencia.</p>
        </motion.div>
        
        <motion.div 
          variants={containerVariants}
          initial="hidden"
          animate={inView ? "visible" : "hidden"}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8"
        >
          {featuresList.map((feature, index) => (
            <motion.div 
              key={index}
              variants={itemVariants}
              whileHover={{ scale: 1.03, transition: { duration: 0.2 } }}
              className="glass-effect rounded-xl p-6 border border-white/10 transition-all duration-300 hover:shadow-lg group"
            >
              <div className={`mb-4 text-${feature.color} neon-text ${feature.color}`}>
                {feature.icon}
              </div>
              <h3 className="text-xl font-bold mb-3 group-hover:neon-text group-hover:neon-purple transition-all duration-300">{feature.titulo}</h3>
              <p className="text-white/70 text-sm">{feature.descripcion}</p>
              
              {/* Elemento decorativo */}
              <div className={`absolute -bottom-1 -right-1 w-20 h-20 bg-${feature.color}/10 rounded-full blur-xl opacity-0 group-hover:opacity-70 transition-opacity duration-500`}></div>
            </motion.div>
          ))}
        </motion.div>
        
        {/* Bottom graphic element - wave */}
        <div className="relative h-20 mt-20 overflow-hidden">
          <motion.div 
            className="absolute bottom-0 left-0 w-full h-12 bg-gradient-radial from-neon-purple/20 to-transparent rounded-full blur-lg"
            animate={{ 
              scale: [1, 1.1, 1],
              opacity: [0.5, 0.7, 0.5] 
            }}
            transition={{ 
              duration: 4,
              repeat: Infinity,
              repeatType: "reverse" 
            }}
          ></motion.div>
        </div>
      </div>
    </section>
  );
};
