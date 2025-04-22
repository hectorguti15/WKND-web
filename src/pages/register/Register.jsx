import React, { useState } from 'react';
import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
import { FaUser, FaEnvelope, FaBirthdayCake, FaMusic, FaArrowRight, FaCheckCircle } from 'react-icons/fa';

const Register = () => {
  // Estado para almacenar los datos del formulario
  const [formData, setFormData] = useState({
    nombre: '',
    correo: '',
    edad: '',
    preferenciasMusicales: '',
  });

  // Estados para manejo de errores y éxito
  const [errors, setErrors] = useState({});
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitSuccess, setSubmitSuccess] = useState(false);

  const { ref, inView } = useInView({
    threshold: 0.1,
    triggerOnce: false
  });

  // Manejo del cambio de los inputs
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
    
    // Limpia el error para el campo que se está editando
    if (errors[name]) {
      setErrors({
        ...errors,
        [name]: null,
      });
    }
  };

  // Validación del formulario
  const validateForm = () => {
    const newErrors = {};

    if (!formData.nombre.trim()) {
      newErrors.nombre = 'El nombre es requerido';
    }

    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!formData.correo.trim() || !emailRegex.test(formData.correo)) {
      newErrors.correo = 'Ingresa un correo electrónico válido';
    }

    if (formData.edad && (parseInt(formData.edad) < 18 || parseInt(formData.edad) > 100)) {
      newErrors.edad = 'La edad debe ser entre 18 y 100 años';
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  // Manejo del envío del formulario
  const handleSubmit = (e) => {
    e.preventDefault();
    
    if (validateForm()) {
      setIsSubmitting(true);
      
      // Simulación de envío a un servidor
      setTimeout(() => {
        console.log('Datos de registro:', formData);
        setIsSubmitting(false);
        setSubmitSuccess(true);
        
        // Reset al formulario después de un tiempo
        setTimeout(() => {
          setSubmitSuccess(false);
          setFormData({
            nombre: '',
            correo: '',
            edad: '',
            preferenciasMusicales: '',
          });
        }, 5000);
      }, 1500);
    }
  };

  // Variantes para animaciones
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
    <section id="registro" className="relative py-20 overflow-hidden bg-dark-bg" ref={ref}>
      {/* Decorative elements */}
      <div className="absolute top-0 left-0 w-full h-72 bg-gradient-to-b from-neon-purple/10 to-transparent"></div>
      <div className="absolute -bottom-20 -left-20 w-80 h-80 bg-neon-pink/10 rounded-full blur-[100px] animate-pulse-slow"></div>
      <div className="absolute -top-20 -right-20 w-72 h-72 bg-neon-blue/10 rounded-full blur-[100px] animate-pulse-slow"></div>
      
      <div className="container mx-auto px-6 relative z-10">
        <motion.div 
          className="text-center mb-16"
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          transition={{ duration: 0.6 }}
        >
          <span className="inline-block text-xs bg-white/5 backdrop-blur-sm px-4 py-1 rounded-full text-white/70 mb-4">ÚNETE A NOSOTROS</span>
          <h2 className="text-4xl md:text-5xl font-bold mb-6 neon-text neon-pink">Regístrate para unirte a WKND</h2>
          <p className="max-w-2xl mx-auto text-white/70">Sé parte de la comunidad y vive experiencias únicas</p>
        </motion.div>
        
        <div className="max-w-3xl mx-auto">
          {submitSuccess ? (
            <motion.div 
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.5 }}
              className="glass-effect rounded-2xl p-8 text-center"
            >
              <div className="text-5xl text-green-500 mb-4 flex justify-center">
                <FaCheckCircle />
              </div>
              <h3 className="text-2xl font-bold mb-4 neon-text neon-green">¡Registro exitoso!</h3>
              <p className="text-white/80 mb-6">Gracias por unirte a WKND. Pronto recibirás un correo con más información.</p>
              <p className="text-white/60 text-sm">Participando automáticamente en el próximo sorteo de entradas VIP...</p>
            </motion.div>
          ) : (
            <motion.form 
              onSubmit={handleSubmit}
              variants={containerVariants}
              initial="hidden"
              animate={inView ? "visible" : "hidden"}
              className="glass-effect rounded-2xl p-8 border border-white/10"
            >
              <motion.div 
                variants={itemVariants}
                className="mb-6"
              >
                <label htmlFor="nombre" className="block text-white/70 mb-2 text-sm">
                  <FaUser className="inline-block mr-2" /> Nombre
                </label>
                <div className="relative">
                  <input
                    type="text"
                    id="nombre"
                    name="nombre"
                    value={formData.nombre}
                    onChange={handleChange}
                    required
                    className={`w-full bg-black/30 border ${errors.nombre ? 'border-red-500' : 'border-white/20'} rounded-lg px-4 py-3 text-white focus:outline-none focus:border-neon-pink transition-colors`}
                    placeholder="Tu nombre completo"
                  />
                  {errors.nombre && (
                    <p className="text-red-500 text-xs mt-1">{errors.nombre}</p>
                  )}
                </div>
              </motion.div>

              <motion.div 
                variants={itemVariants}
                className="mb-6"
              >
                <label htmlFor="correo" className="block text-white/70 mb-2 text-sm">
                  <FaEnvelope className="inline-block mr-2" /> Correo electrónico
                </label>
                <div className="relative">
                  <input
                    type="email"
                    id="correo"
                    name="correo"
                    value={formData.correo}
                    onChange={handleChange}
                    required
                    className={`w-full bg-black/30 border ${errors.correo ? 'border-red-500' : 'border-white/20'} rounded-lg px-4 py-3 text-white focus:outline-none focus:border-neon-pink transition-colors`}
                    placeholder="email@ejemplo.com"
                  />
                  {errors.correo && (
                    <p className="text-red-500 text-xs mt-1">{errors.correo}</p>
                  )}
                </div>
              </motion.div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
                <motion.div 
                  variants={itemVariants}
                >
                  <label htmlFor="edad" className="block text-white/70 mb-2 text-sm">
                    <FaBirthdayCake className="inline-block mr-2" /> Edad (opcional)
                  </label>
                  <div className="relative">
                    <input
                      type="number"
                      id="edad"
                      name="edad"
                      value={formData.edad}
                      onChange={handleChange}
                      className={`w-full bg-black/30 border ${errors.edad ? 'border-red-500' : 'border-white/20'} rounded-lg px-4 py-3 text-white focus:outline-none focus:border-neon-blue transition-colors`}
                      placeholder="Tu edad"
                    />
                    {errors.edad && (
                      <p className="text-red-500 text-xs mt-1">{errors.edad}</p>
                    )}
                  </div>
                </motion.div>

                <motion.div 
                  variants={itemVariants}
                >
                  <label htmlFor="preferenciasMusicales" className="block text-white/70 mb-2 text-sm">
                    <FaMusic className="inline-block mr-2" /> Gustos musicales (opcional)
                  </label>
                  <input
                    type="text"
                    id="preferenciasMusicales"
                    name="preferenciasMusicales"
                    value={formData.preferenciasMusicales}
                    onChange={handleChange}
                    className="w-full bg-black/30 border border-white/20 rounded-lg px-4 py-3 text-white focus:outline-none focus:border-neon-green transition-colors"
                    placeholder="Rock, Electrónica, Reggaetón..."
                  />
                </motion.div>
              </div>

              <motion.div
                variants={itemVariants}
                className="mb-6"
              >
                <label className="flex items-center text-white/70 text-sm cursor-pointer">
                  <input
                    type="checkbox"
                    className="mr-2 w-4 h-4"
                    required
                  />
                  Acepto los <a href="#" className="text-neon-pink mx-1 hover:underline">términos y condiciones</a> y la <a href="#" className="text-neon-pink mx-1 hover:underline">política de privacidad</a>
                </label>
              </motion.div>

              <motion.div 
                variants={itemVariants}
                className="text-center"
              >
                <button 
                  type="submit"
                  disabled={isSubmitting}
                  className="bg-gradient-to-r from-neon-pink to-neon-purple hover:from-neon-pink/90 hover:to-neon-purple/90 text-white font-bold py-3 px-8 rounded-full transform transition-all duration-300 hover:scale-105 shadow-neon-pink flex items-center justify-center gap-2 mx-auto disabled:opacity-70 disabled:cursor-not-allowed"
                >
                  {isSubmitting ? (
                    <>
                      <svg className="animate-spin -ml-1 mr-2 h-4 w-4 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                        <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                        <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                      </svg>
                      Procesando...
                    </>
                  ) : (
                    <>
                      Registrarse <FaArrowRight />
                    </>
                  )}
                </button>
              </motion.div>
            </motion.form>
          )}
          
          <motion.div 
            className="text-center mt-8"
            initial={{ opacity: 0, y: 20 }}
            animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
            transition={{ delay: 0.8 }}
          >
            <p className="text-white/60 text-sm">
              <span className="neon-text neon-green font-medium">Bonus:</span> Regístrate y participa en sorteos semanales de entradas VIP para los mejores eventos.
            </p>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Register;
