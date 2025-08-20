import { FaWhatsapp, FaInstagram, FaFacebook } from "react-icons/fa";

export const Footer = () => {
  const currentYear = new Date().getFullYear();
  
  return (
    <footer className="flex items-center justify-center w-full border-t border-gray-800 bg-primary">
      <div className="py-12 max-w-notebook">
        <div className="grid grid-cols-1 gap-8 md:grid-cols-3">
          <div className="flex flex-col">
            <div className="flex items-center gap-3 mb-4">
              <div className="w-10 h-10 bg-gradient-to-br from-[#F0160F] to-[#C01409] rounded-lg flex items-center justify-center">
                <img src="/gym-logo.png" alt="gym logo" className="w-6 h-6" />
              </div>
              <span className="text-xl font-bold text-white">
                GIMNASIO CEMER
              </span>
            </div>
            <p className="leading-relaxed text-gray-400">
              Tu gimnasio de confianza para alcanzar tus objetivos fitness. 
              Más de 3 años transformando vidas.
            </p>
          </div>

          <div className="flex flex-col">
            <h4 className="text-lg font-semibold text-[#F0160F] mb-4">
              Enlaces Rápidos
            </h4>
            <ul className="space-y-2">
              <li>
                <a href="#" className="text-gray-400 transition-colors hover:text-white">
                  Sobre Nosotros
                </a>
              </li>
              <li>
                <a href="#" className="text-gray-400 transition-colors hover:text-white">
                  Horarios
                </a>
              </li>
              <li>
                <a href="#" className="text-gray-400 transition-colors hover:text-white">
                  Precios
                </a>
              </li>
              <li>
                <a href="#" className="text-gray-400 transition-colors hover:text-white">
                  Contacto
                </a>
              </li>
            </ul>
          </div>

          <div className="flex flex-col">
            <h4 className="text-lg font-semibold text-[#F0160F] mb-4">
              Síguenos
            </h4>
            <div className="flex gap-4 mb-4">
              <a 
                href="#" 
                className="w-10 h-10 bg-secondary rounded-lg flex items-center justify-center hover:bg-[#F0160F] transition-colors"
              >
                <FaWhatsapp className="text-xl" />
              </a>
              <a 
                href="#" 
                className="w-10 h-10 bg-secondary rounded-lg flex items-center justify-center hover:bg-[#F0160F] transition-colors"
              >
                <FaInstagram className="text-xl" />
              </a>
              <a 
                href="#" 
                className="w-10 h-10 bg-secondary rounded-lg flex items-center justify-center hover:bg-[#F0160F] transition-colors"
              >
                <FaFacebook className="text-xl" />
              </a>
            </div>
            <p className="text-sm text-gray-400">
              WhatsApp: +54 3564 575274
            </p>
            <p className="text-sm text-gray-400">
              Lun - Vie: 6:00 - 22:00
            </p>
          </div>
        </div>

        <div className="pt-8 mt-8 text-center border-t border-gray-800">
          <p className="text-sm text-gray-400">
            © {currentYear} Gimnasio CEMER. Todos los derechos reservados.
          </p>
        </div>
      </div>
    </footer>
  );
};
