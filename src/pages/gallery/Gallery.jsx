import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import Discoteca1 from "../../assets/images/jpg/discoteca1.jpg";
import Discoteca2 from "../../assets/images/jpg/discoteca2.jpg";
import Discoteca3 from "../../assets/images/jpg/discoteca3.jpg";
import { FaInstagram, FaTimes, FaChevronLeft, FaChevronRight, FaHashtag, FaArrowRight } from 'react-icons/fa';

// Gallery images with additional metadata
const galleryImages = [
  { id: 1, img: Discoteca1, alt: "Fiesta WKND", likes: 243, location: "Lima Nightclub" },
  { id: 2, img: Discoteca3, alt: "DJ Session", likes: 178, location: "Electronic Festival" },
  { id: 3, img: Discoteca1, alt: "Dance Floor", likes: 315, location: "Club Disco" },
  { id: 4, img: Discoteca1, alt: "VIP Experience", likes: 192, location: "Premium Lounge" },
  { id: 5, img: Discoteca2, alt: "Luces de neón", likes: 267, location: "Neon Party" },
  { id: 6, img: Discoteca3, alt: "Night Vibes", likes: 149, location: "Rooftop Bar" },
  { id: 7, img: Discoteca2, alt: "Weekend Party", likes: 205, location: "Beach Club" },
  { id: 8, img: Discoteca2, alt: "Friends Night", likes: 176, location: "Cocktail Bar" },
  { id: 9, img: Discoteca3, alt: "Club Night", likes: 298, location: "Downtown Club" }
];

export const Gallery = () => {
  const [lightboxOpen, setLightboxOpen] = useState(false);
  const [currentImage, setCurrentImage] = useState(0);
  const { ref, inView } = useInView({
    threshold: 0.1,
    triggerOnce: false
  });

  const openLightbox = (index) => {
    setCurrentImage(index);
    setLightboxOpen(true);
    document.body.style.overflow = 'hidden'; // Prevent scrolling when lightbox is open
  };

  const closeLightbox = () => {
    setLightboxOpen(false);
    document.body.style.overflow = 'auto'; // Re-enable scrolling
  };

  const nextImage = (e) => {
    e.stopPropagation();
    setCurrentImage((prev) => (prev + 1) % galleryImages.length);
  };

  const prevImage = (e) => {
    e.stopPropagation();
    setCurrentImage((prev) => (prev - 1 + galleryImages.length) % galleryImages.length);
  };

  // Animation variants
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
        delayChildren: 0.2
      }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, scale: 0.8 },
    visible: { 
      opacity: 1, 
      scale: 1,
      transition: { type: "spring", stiffness: 100, damping: 15 }
    }
  };

  return (
    <section id="galeria" className="relative py-20 overflow-hidden bg-dark-bg">
      {/* Decorative elements */}
      <div className="absolute top-0 left-0 w-full h-96 bg-gradient-to-b from-black to-transparent opacity-70 pointer-events-none"></div>
      <div className="absolute bottom-0 left-0 w-full h-96 bg-gradient-to-t from-black to-transparent opacity-70 pointer-events-none"></div>
      
      <div className="absolute top-40 -right-20 w-60 h-60 bg-neon-purple/20 rounded-full blur-[100px] animate-pulse-slow"></div>
      <div className="absolute bottom-20 -left-20 w-80 h-80 bg-neon-green/20 rounded-full blur-[120px] animate-pulse-slow"></div>
      
      <div className="container mx-auto px-6">
        <motion.div 
          className="text-center mb-16"
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          transition={{ duration: 0.6 }}
        >
          <span className="inline-block text-xs bg-white/5 backdrop-blur-sm px-4 py-1 rounded-full text-white/70 mb-4">#MODOWKND</span>
          <h2 className="text-4xl md:text-5xl font-bold mb-6 neon-text neon-purple">Nuestras mejores noches</h2>
          <p className="max-w-2xl mx-auto text-white/70">Revive los momentos más épicos de nuestras fiestas y eventos</p>
        </motion.div>
        
        <motion.div 
          ref={ref}
          variants={containerVariants}
          initial="hidden"
          animate={inView ? "visible" : "hidden"}
          className="grid grid-cols-2 md:grid-cols-3 gap-4 md:gap-6"
        >
          {galleryImages.map((image, index) => (
            <motion.div 
              key={image.id}
              variants={itemVariants}
              whileHover={{ scale: 1.02 }}
              className="group relative overflow-hidden rounded-xl cursor-pointer"
              onClick={() => openLightbox(index)}
            >
              <div className="relative aspect-square overflow-hidden">
                <img 
                  src={image.img} 
                  alt={image.alt}
                  className="object-cover w-full h-full transition-transform duration-500 group-hover:scale-110"
                />
                
                {/* Overlay on hover */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/30 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex flex-col justify-end p-4">
                  <div className="transform translate-y-4 group-hover:translate-y-0 transition-transform duration-300">
                    <h3 className="text-white font-medium">{image.alt}</h3>
                    <p className="text-white/60 text-sm">{image.location}</p>
                    <div className="flex items-center mt-2">
                      <FaInstagram className="text-white mr-2" />
                      <span className="text-white/80 text-xs">{image.likes} likes</span>
                    </div>
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>
        
        <motion.div 
          className="mt-16 text-center"
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          transition={{ delay: 0.6 }}
        >
          <div className="glass-effect inline-flex items-center gap-3 px-6 py-4 rounded-full mb-6">
            <FaHashtag className="text-neon-pink" />
            <h3 className="text-xl font-medium">Sube tus fotos con #ModoWKND y sé parte de nuestra galería</h3>
          </div>
          
          <a href="https://www.instagram.com" target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-2 text-white hover:text-neon-purple transition-colors mt-4">
            <span>Ver más en Instagram</span>
            <FaArrowRight className="text-sm" />
          </a>
        </motion.div>
      </div>
      
      {/* Lightbox */}
      {lightboxOpen && (
        <motion.div 
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          className="fixed inset-0 z-50 flex items-center justify-center bg-black/95"
          onClick={closeLightbox}
        >
          <button 
            className="absolute top-6 right-6 text-white hover:text-neon-pink transition-colors z-10 text-2xl"
            onClick={closeLightbox}
          >
            <FaTimes />
          </button>
          
          <button 
            className="absolute top-1/2 -translate-y-1/2 left-6 md:left-10 bg-white/10 hover:bg-white/20 w-10 h-10 rounded-full flex items-center justify-center text-white transition-colors"
            onClick={prevImage}
          >
            <FaChevronLeft />
          </button>
          
          <div className="relative max-w-4xl max-h-[80vh] w-full h-full flex items-center justify-center p-4" onClick={(e) => e.stopPropagation()}>
            <img 
              src={galleryImages[currentImage].img} 
              alt={galleryImages[currentImage].alt}
              className="max-w-full max-h-full object-contain rounded-lg"
            />
            
            <div className="absolute bottom-4 left-0 right-0 text-center text-white">
              <h3 className="font-bold">{galleryImages[currentImage].alt}</h3>
              <p className="text-white/70">{galleryImages[currentImage].location}</p>
            </div>
          </div>
          
          <button 
            className="absolute top-1/2 -translate-y-1/2 right-6 md:right-10 bg-white/10 hover:bg-white/20 w-10 h-10 rounded-full flex items-center justify-center text-white transition-colors"
            onClick={nextImage}
          >
            <FaChevronRight />
          </button>
        </motion.div>
      )}
    </section>
  );
};
