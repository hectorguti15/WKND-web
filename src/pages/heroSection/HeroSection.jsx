import React from "react";
import HeroVideo from "../../assets/videos/heroSection.mp4";
import HeroImage from "../../assets/images/jpg/heroSectionImage.jpg";
import { FaChevronDown, FaTicketAlt, FaStar } from "react-icons/fa";

export const HeroSection = () => {
  return (
    <section className="relative min-h-screen overflow-hidden disco-dots">
      {/* Video de fondo */}
      <div className="absolute inset-0 z-0">
        <video 
          src={HeroVideo} 
          autoPlay 
          muted 
          loop 
          className="object-cover w-full h-full brightness-50"
        />
        {/* Fallback para dispositivos que no reproducen video */}
        <img 
          src={HeroImage} 
          alt="WKND Party" 
          className="hidden absolute inset-0 object-cover w-full h-full brightness-50" 
        />
        
        {/* Overlay con gradiente */}
        <div className="absolute inset-0 bg-gradient-to-b from-black/50 to-black/90"></div>
      </div>
      
      {/* Luces de neón decorativas */}
      <div className="absolute top-40 -left-20 w-60 h-60 bg-neon-pink/20 rounded-full blur-[100px] animate-pulse-slow"></div>
      <div className="absolute bottom-20 -right-20 w-80 h-80 bg-neon-blue/20 rounded-full blur-[120px] animate-pulse-slow"></div>
      
      {/* Contenido */}
      <div className="relative z-10 container mx-auto px-6 py-20 pt-32 flex flex-col items-center justify-center min-h-screen text-center">
        <div className="flex gap-2 items-center mb-4">
          <FaStar className="text-yellow-300 animate-pulse-slow" />
          <span className="text-sm md:text-base font-light tracking-widest uppercase text-white/80">La experiencia de fiesta definitiva</span>
          <FaStar className="text-yellow-300 animate-pulse-slow" />
        </div>
        
        <h1 className="text-7xl md:text-9xl font-bold mb-6 tracking-tight neon-text neon-pink">
          WKND
        </h1>
        
        <h2 className="text-xl md:text-3xl font-medium mb-4 max-w-2xl neon-text neon-blue">
          Las mejores noches empiezan con WKND
        </h2>
        
        <p className="text-base md:text-lg text-white/80 mb-10 max-w-2xl">
          Descubre, reserva y vive las fiestas más exclusivas de Lima con acceso preferencial, bebidas premium y experiencias inolvidables.
        </p>
        
        <div className="flex flex-col sm:flex-row gap-4 mb-16">
          <button className="flex items-center justify-center gap-2 bg-gradient-to-r from-neon-pink to-neon-purple hover:from-neon-pink/90 hover:to-neon-purple/90 text-white font-bold py-4 px-8 rounded-full transform transition-all duration-300 hover:scale-105 shadow-neon-pink neon-border neon-pink group">
            <FaTicketAlt className="text-lg group-hover:scale-110 transition-transform" /> 
            <span>Accede al Pre-Lanzamiento</span>
          </button>
          
          <button className="flex items-center justify-center gap-2 bg-transparent border border-white/30 hover:border-white/60 text-white py-4 px-8 rounded-full transform transition-all duration-300 hover:bg-white/5">
            <span>Descubre Más</span>
          </button>
        </div>
        
        {/* Estadísticas */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 max-w-4xl w-full mt-8">
          <div className="glass-effect rounded-lg p-4 text-center">
            <p className="text-3xl font-bold neon-text neon-pink mb-1">100+</p>
            <p className="text-xs text-white/70">Eventos anuales</p>
          </div>
          <div className="glass-effect rounded-lg p-4 text-center">
            <p className="text-3xl font-bold neon-text neon-blue mb-1">10k+</p>
            <p className="text-xs text-white/70">Fiesteros</p>
          </div>
          <div className="glass-effect rounded-lg p-4 text-center">
            <p className="text-3xl font-bold neon-text neon-purple mb-1">50+</p>
            <p className="text-xs text-white/70">Locaciones</p>
          </div>
          <div className="glass-effect rounded-lg p-4 text-center">
            <p className="text-3xl font-bold neon-text neon-green mb-1">24h</p>
            <p className="text-xs text-white/70">Diversión</p>
          </div>
        </div>
        
        {/* Flecha de desplazamiento */}
        <a 
          href="#como-funciona" 
          className="absolute bottom-10 left-1/2 transform -translate-x-1/2 text-white hover:text-neon-blue transition-colors animate-bounce"
        >
          <FaChevronDown className="text-2xl" />
        </a>
      </div>
    </section>
  );
};
