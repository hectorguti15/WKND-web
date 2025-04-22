import React, { useState } from "react";
import Slider from "react-slick";
import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
import { FaMapMarkerAlt, FaCalendarAlt, FaClock, FaMusic, FaArrowRight, FaTicketAlt, FaChevronLeft, FaChevronRight } from "react-icons/fa";

// Placeholder img URLs (idealmente deberías tener imágenes locales en tu proyecto)
import EventImg1 from "../../assets/images/jpg/discoteca1.jpg";
import EventImg2 from "../../assets/images/jpg/discoteca2.jpg";
import EventImg3 from "../../assets/images/jpg/discoteca3.jpg";

const eventsInfo = [
  {
    nombre: "Ultra Perú 2025",
    fecha: "2025-04-18",
    hora: "18:00",
    descripcion:
      "El festival de música electrónica más importante del país regresa con dos días de beats intensos y visuales impactantes.",
    ubicacion: "Multiespacio Costa 21, San Miguel",
    musica: "Electrónica, EDM, Techno",
    estado: "Muy sonado 🔥",
    color: "neon-pink",
    imagen: EventImg1,
  },
  {
    nombre: "Shawn Mendes en Lima",
    fecha: "2025-04-01",
    hora: "20:00",
    descripcion:
      "El artista canadiense regresa a Lima con su gira mundial, prometiendo una noche inolvidable para sus fans.",
    ubicacion: "Costa 21, San Miguel",
    musica: "Pop",
    estado: "Pocas entradas",
    color: "neon-blue",
    imagen: EventImg2,
  },
  {
    nombre: "DGTL Lima 2025",
    fecha: "2025-05-09",
    hora: "18:00",
    descripcion:
      "Festival de música electrónica y arte que combina innovación y sostenibilidad en un entorno industrial único.",
    ubicacion: "Club Cultural Lima, Chorrillos",
    musica: "Electrónica, House, Techno",
    estado: "Entradas disponibles",
    color: "neon-purple",
    imagen: EventImg3,
  },
  {
    nombre: "Gloria Trevi en Lima",
    fecha: "2025-05-24",
    hora: "21:00",
    descripcion:
      "La reina del pop latino llega con su energía arrolladora y un espectáculo que promete ser inolvidable.",
    ubicacion: "Multiespacio Costa 21, San Miguel",
    musica: "Pop latino",
    estado: "Muy sonado 🔥",
    color: "neon-green",
    imagen: EventImg1,
  },
  {
    nombre: "Living Flow Fest 2025",
    fecha: "2025-04-30",
    hora: "16:00",
    descripcion:
      "Festival urbano con artistas como Makano, J King & Maximan, y más, para cerrar abril con flow.",
    ubicacion: "Jardines de Lawn Tennis, Jesús María",
    musica: "Reggaetón, Urbano",
    estado: "Pocas entradas",
    color: "neon-pink",
    imagen: EventImg2,
  },
];

// Formatear fecha para mostrarla más amigable
const formatDate = (dateString) => {
  const options = { year: 'numeric', month: 'long', day: 'numeric' };
  return new Date(dateString).toLocaleDateString('es-ES', options);
};

// Componente para la flecha siguiente del slider
const NextArrow = ({ onClick }) => {
  return (
    <div
      className="absolute right-0 top-1/2 -translate-y-1/2 z-10 cursor-pointer bg-gradient-to-l from-black/80 to-transparent pr-4 pl-12 py-20"
      onClick={onClick}
    >
      <div className="w-10 h-10 rounded-full bg-white/10 hover:bg-white/20 flex items-center justify-center text-white transition-all duration-300 hover:scale-110">
        <FaChevronRight />
      </div>
    </div>
  );
};

// Componente para la flecha anterior del slider
const PrevArrow = ({ onClick }) => {
  return (
    <div
      className="absolute left-0 top-1/2 -translate-y-1/2 z-10 cursor-pointer bg-gradient-to-r from-black/80 to-transparent pl-4 pr-12 py-20"
      onClick={onClick}
    >
      <div className="w-10 h-10 rounded-full bg-white/10 hover:bg-white/20 flex items-center justify-center text-white transition-all duration-300 hover:scale-110">
        <FaChevronLeft />
      </div>
    </div>
  );
};

export const Events = () => {
  const [activeSlide, setActiveSlide] = useState(0);
  const { ref, inView } = useInView({
    threshold: 0.1,
    triggerOnce: false
  });

  // Configuración mejorada del slider
  const settings = {
    infinite: true,
    speed: 600,
    slidesToShow: 3,
    slidesToScroll: 1,
    swipeToSlide: true,
    swipe: true,
    centerMode: true,
    centerPadding: '10%',
    beforeChange: (current, next) => setActiveSlide(next),
    nextArrow: <NextArrow />,
    prevArrow: <PrevArrow />,
    autoplay: true,
    autoplaySpeed: 5000,
    pauseOnHover: true,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 2,
          centerPadding: '5%',
        }
      },
      {
        breakpoint: 640,
        settings: {
          slidesToShow: 1,
          centerPadding: '10%',
        }
      }
    ]
  };

  return (
    <section id="eventos" className="relative py-20 overflow-hidden bg-dark-bg" ref={ref}>
      {/* Decorative elements */}
      <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNjAiIGhlaWdodD0iNjAiIHZpZXdCb3g9IjAgMCA2MCA2MCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48ZyBmaWxsPSJub25lIiBmaWxsLXJ1bGU9ImV2ZW5vZGQiPjxnIGZpbGw9IiMyMjIiIGZpbGwtb3BhY2l0eT0iLjA1Ij48cGF0aCBkPSJNMzYgMzRoLTJ2LTRoMnY0em0tMiAyaDJ2NmgtMnYtNnoiLz48L2c+PC9nPjwvc3ZnPg==')] opacity-10"></div>
      
      <div className="absolute top-40 -left-20 w-60 h-60 bg-neon-blue/10 rounded-full blur-[100px] animate-pulse-slow"></div>
      <div className="absolute bottom-20 -right-20 w-80 h-80 bg-neon-green/10 rounded-full blur-[120px] animate-pulse-slow"></div>
      
      <div className="container mx-auto px-6 mb-10">
        <motion.div 
          className="text-center mb-16"
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          transition={{ duration: 0.6 }}
        >
          <span className="inline-block text-xs bg-white/5 backdrop-blur-sm px-4 py-1 rounded-full text-white/70 mb-4">PRÓXIMOS EVENTOS</span>
          <h2 className="text-4xl md:text-5xl font-bold mb-6 neon-text neon-green">Lo mejor que se viene</h2>
          <p className="max-w-2xl mx-auto text-white/70">Descubre y reserva los eventos más esperados para vivir noches inolvidables</p>
        </motion.div>
      </div>
      
      <div className="relative -mx-4">
        <Slider {...settings} className="events-slider">
          {eventsInfo.map((event, index) => {
            const isActive = activeSlide === index;
            
            return (
              <div key={index} className="px-2 py-4">
                <motion.div 
                  className={`relative rounded-xl overflow-hidden transition-all duration-500 h-[500px] ${isActive ? 'scale-100 opacity-100' : 'scale-95 opacity-80'}`}
                  whileHover={{ scale: isActive ? 1.02 : 0.97 }}
                >
                  {/* Imagen de fondo */}
                  <div className="absolute inset-0 w-full h-full">
                    <img 
                      src={event.imagen} 
                      alt={event.nombre} 
                      className="w-full h-full object-cover brightness-75"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black via-black/70 to-transparent"></div>
                  </div>
                  
                  {/* Badge de estado */}
                  <div className={`absolute top-4 right-4 px-3 py-1 rounded-full text-xs font-medium bg-${event.color} text-white`}>
                    {event.estado}
                  </div>
                  
                  {/* Contenido */}
                  <div className="absolute bottom-0 left-0 w-full p-6">
                    <h4 className={`text-xl md:text-2xl font-bold mb-3 neon-text ${event.color}`}>{event.nombre}</h4>
                    <p className="text-white/90 text-sm md:text-base mb-4 line-clamp-3">{event.descripcion}</p>
                    
                    <div className="grid grid-cols-2 gap-3 mb-6">
                      <div className="flex items-center gap-2 text-white/80 text-sm">
                        <FaCalendarAlt className={`text-${event.color}`} />
                        <span>{formatDate(event.fecha)}</span>
                      </div>
                      <div className="flex items-center gap-2 text-white/80 text-sm">
                        <FaClock className={`text-${event.color}`} />
                        <span>{event.hora} hrs</span>
                      </div>
                      <div className="flex items-center gap-2 text-white/80 text-sm">
                        <FaMapMarkerAlt className={`text-${event.color}`} />
                        <span className="truncate">{event.ubicacion}</span>
                      </div>
                      <div className="flex items-center gap-2 text-white/80 text-sm">
                        <FaMusic className={`text-${event.color}`} />
                        <span className="truncate">{event.musica}</span>
                      </div>
                    </div>
                    
                    <div className="flex space-x-3">
                      <a 
                        href="#" 
                        className={`flex items-center gap-2 px-4 py-2 rounded-full text-sm font-medium bg-${event.color} text-white hover:bg-opacity-90 transition-colors`}
                      >
                        <FaTicketAlt />
                        <span>Comprar</span>
                      </a>
                      <a 
                        href="#" 
                        className="flex items-center gap-2 px-4 py-2 rounded-full text-sm font-medium bg-white/10 text-white hover:bg-white/20 transition-colors"
                      >
                        <span>Más info</span>
                        <FaArrowRight className="text-xs" />
                      </a>
                    </div>
                  </div>
                </motion.div>
              </div>
            );
          })}
        </Slider>
      </div>
      
      <div className="container mx-auto px-6 mt-12 text-center">
        <a 
          href="#" 
          className="inline-flex items-center gap-2 text-white hover:text-neon-green transition-all duration-300"
        >
          <span>Ver todos los eventos</span>
          <FaArrowRight className="text-sm" />
        </a>
      </div>
    </section>
  );
};
