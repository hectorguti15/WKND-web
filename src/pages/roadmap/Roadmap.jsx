import React from "react";
import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
import { FaCheckCircle, FaClock, FaLock, FaChevronDown } from "react-icons/fa";

const roadmapList = [
  {
    fase: "Fase 1",
    estado: "completado",
    icon: <FaCheckCircle className="text-2xl" />,
    titulo: "Lanzamiento oficial",
    fecha: "Q2 2025",
    descripcion: "La app ya está disponible para iOS y Android.",
    color: "neon-green",
  },
  {
    fase: "Fase 2",
    estado: "en_progreso",
    icon: <FaClock className="text-2xl" />,
    titulo: "Venta de entradas y afiliaciones",
    fecha: "Q3 2025",
    descripcion:
      "Estamos desarrollando la venta directa de entradas y programas de membresía WKND.",
    color: "neon-blue",
  },
  {
    fase: "Fase 3",
    estado: "futuro",
    icon: <FaLock className="text-2xl" />,
    titulo: "Eventos exclusivos + puntos canjeables",
    fecha: "Q4 2025",
    descripcion:
      "Lanzaremos beneficios como puntos WKND y fiestas solo para miembros.",
    color: "neon-purple",
  },
  {
    fase: "Fase 4",
    estado: "futuro",
    icon: <FaLock className="text-2xl" />,
    titulo: "Expansión a otras ciudades del Perú",
    fecha: "2026",
    descripcion:
      "Llegamos a nuevas ciudades como Arequipa, Cusco, Trujillo y más.",
    color: "neon-pink",
  },
];

export const Roadmap = () => {
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
        staggerChildren: 0.3,
        delayChildren: 0.2
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
    <section id="ruta" className="relative py-20 overflow-hidden bg-dark-bg" ref={ref}>
      {/* Decorative elements */}
      <div className="absolute top-0 -right-20 w-72 h-72 bg-neon-blue/10 rounded-full blur-[120px] animate-pulse-slow"></div>
      <div className="absolute bottom-0 -left-20 w-72 h-72 bg-neon-pink/10 rounded-full blur-[120px] animate-pulse-slow"></div>
      
      <div className="container mx-auto px-6">
        <motion.div 
          className="text-center mb-16"
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          transition={{ duration: 0.6 }}
        >
          <span className="inline-block text-xs bg-white/5 backdrop-blur-sm px-4 py-1 rounded-full text-white/70 mb-4">ROADMAP</span>
          <h2 className="text-4xl md:text-5xl font-bold mb-6 neon-text neon-blue">Nuestro plan para revolucionar tus noches</h2>
          <p className="max-w-2xl mx-auto text-white/70">Paso a paso, estamos construyendo la experiencia de fiesta definitiva</p>
        </motion.div>
        
        {/* Timeline */}
        <div className="relative max-w-4xl mx-auto">
          {/* Línea central vertical */}
          <div className="absolute left-1/2 transform -translate-x-1/2 h-full w-1 bg-gradient-to-b from-neon-green via-neon-blue to-neon-pink opacity-30"></div>
          
          <motion.div
            variants={containerVariants}
            initial="hidden"
            animate={inView ? "visible" : "hidden"}
            className="relative z-10"
          >
            {roadmapList.map((fase, index) => (
              <motion.div 
                key={index} 
                variants={itemVariants}
                className={`relative mb-16 md:mb-24 flex flex-col ${index % 2 === 0 ? 'md:flex-row' : 'md:flex-row-reverse'} items-center`}
              >
                {/* Círculo central en la línea del tiempo */}
                <div className={`absolute left-1/2 transform -translate-x-1/2 z-20 w-10 h-10 rounded-full glass-effect border-2 border-${fase.color} shadow-${fase.color} flex items-center justify-center neon-text ${fase.color}`}>
                  {fase.icon}
                </div>
                
                {/* Contenido de la fase - alternando lados en desktop */}
                <div className={`w-full md:w-[calc(50%-2rem)] ${index % 2 === 0 ? 'md:text-right md:pr-8' : 'md:text-left md:pl-8'}`}>
                  <div 
                    className={`glass-effect rounded-xl p-6 border border-white/10 transition-all duration-300 hover:border-${fase.color}/30 group relative overflow-hidden`}
                  >
                    {/* Badge de estado */}
                    <div className={`absolute top-4 ${index % 2 === 0 ? 'right-4' : 'left-4'} px-3 py-1 rounded-full text-xs font-medium ${
                      fase.estado === "completado" 
                        ? "bg-green-500/20 text-green-400"
                        : fase.estado === "en_progreso" 
                          ? "bg-blue-500/20 text-blue-400 animate-pulse"
                          : "bg-gray-500/20 text-gray-400"
                    }`}>
                      {fase.estado === "completado" 
                        ? "Completado" 
                        : fase.estado === "en_progreso" 
                          ? "En progreso" 
                          : "Próximamente"}
                    </div>
                    
                    <span className={`text-sm font-medium text-${fase.color}`}>{fase.fase}</span>
                    <h3 className={`text-xl font-bold mt-2 mb-1 group-hover:neon-text group-hover:${fase.color} transition-all duration-300`}>
                      {fase.titulo}
                    </h3>
                    <p className="text-white/60 text-sm mb-4">{fase.descripcion}</p>
                    <div className="flex items-center gap-2">
                      <div className={`w-3 h-3 rounded-full bg-${fase.color}`}></div>
                      <span className="text-white/70 text-sm">{fase.fecha}</span>
                    </div>
                    
                    {/* Efecto decorativo */}
                    <div className={`absolute -bottom-10 -right-10 w-32 h-32 bg-${fase.color}/5 rounded-full blur-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-500`}></div>
                  </div>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>
        
        {/* Call to action */}
        <motion.div 
          className="text-center mt-10"
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          transition={{ delay: 0.8 }}
        >
          <a 
            href="#registro" 
            className="inline-flex items-center gap-2 text-white hover:text-neon-blue transition-all duration-300"
          >
            <span>Únete ahora y sé parte de nuestra evolución</span>
            <FaChevronDown className="animate-bounce" />
          </a>
        </motion.div>
      </div>
    </section>
  );
};
