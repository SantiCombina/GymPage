import { useSpringCarousel } from "react-spring-carousel";
import { GalleryData } from "../../data/GalleryData";
import { useBreakpoint } from "../../hooks/useBreakpoint";
import { SlArrowRight, SlArrowLeft } from "react-icons/sl";
import { GlobalContext } from "../../context/GlobalContext";
import { useContext, useMemo, useState } from "react";
import { Modal } from "../ui/Modal";

export const Gallery = () => {
  const [galleryModal, setGalleryModal] = useState(false);
  const [selectedItem, setSelectedItem] = useState(null);
  const [activeItem, setActiveItem] = useState(0);

  const modalItem = useMemo(() => {
    return GalleryData.find((item) => item.id === selectedItem);
  }, [selectedItem]);

  const { galleryRef } = useContext(GlobalContext);

  const breakpoint = useBreakpoint();
  const isMobile = breakpoint.is.sm || breakpoint.is.md;

  const handleImageClick = (itemId) => {
    console.log("Imagen clickeada:", itemId); // Debug
    setSelectedItem(itemId);
    setGalleryModal(true);
  };

  const handleCloseModal = () => {
    setGalleryModal(false);
    setSelectedItem(null);
  };

  const {
    carouselFragment,
    slideToNextItem,
    slideToPrevItem,
    slideToItem,
    useListenToCustomEvent,
  } = useSpringCarousel({
    items: GalleryData.map((item) => ({
      id: item.id,
      renderItem: (
        <div 
          className="flex justify-center w-full h-full cursor-pointer group"
          onClick={() => handleImageClick(item.id)}
        >
          <div className="relative overflow-hidden rounded-lg">
            <img
              src={item.renderItem}
              className="transition-all duration-500 group-hover:scale-110 lg:w-[400px] lg:h-[225px] w-full select-none object-cover"
              alt={`Galería imagen ${item.id}`}
            />
            <div className="absolute inset-0 flex items-center justify-center transition-all duration-300 opacity-0 pointer-events-none bg-black/40 group-hover:opacity-100">
              <span className="px-4 py-2 font-semibold text-white rounded-lg bg-primary/80">
                Ver imagen
              </span>
            </div>
          </div>
        </div>
      ),
    })),
    gutter: isMobile ? 15 : 20,
    itemsPerSlide: isMobile ? 1 : 3,
    withLoop: true,
  });

  const handleDotClick = (index) => {
    slideToItem(GalleryData[index].id);
    setActiveItem(index);
  };

  useListenToCustomEvent((event) => {
    if (event.currentItem) {
      setActiveItem(event.currentItem.index);
    }
  });

  return (
    <section
      ref={galleryRef}
      className="w-full flex justify-center items-center min-h-[100dvh] px-6 py-20 bg-secondary"
    >
      <div className="flex flex-col items-center justify-center w-full max-w-notebook">
        <div className="flex flex-col items-center mb-12">
          <h2 className="mb-2 text-lg tracking-widest text-primary">MIRA CÓMO SE VE NUESTRO GYM</h2>
          <h3 className="mb-4 text-4xl font-bold text-center">CONOCE NUESTRO ESPACIO</h3>
          <p className="max-w-md text-center text-gray-400">
            Descubre nuestras modernas instalaciones y el ambiente que hemos creado para tu entrenamiento
          </p>
        </div>
      
      <div className="flex justify-center max-w-full py-8">
        {!isMobile && (
          <button 
            onClick={slideToPrevItem} 
            className="mx-4 text-4xl text-gray-400 transition-colors duration-300 transform hover:text-primary hover:scale-110"
            aria-label="Imagen anterior"
          >
            <SlArrowLeft />
          </button>
        )}
        <div className="flex flex-col items-start justify-center w-full overflow-hidden max-w-7xl h-fit">
          {carouselFragment}
        </div>
        {!isMobile && (
          <button 
            onClick={slideToNextItem} 
            className="mx-4 text-4xl text-gray-400 transition-colors duration-300 transform hover:text-primary hover:scale-110"
            aria-label="Siguiente imagen"
          >
            <SlArrowRight />
          </button>
        )}
      </div>
      
      <div className="flex items-center gap-2 mt-6">
        {GalleryData.map((_, index) => (
          <span
            key={index}
            className={`${
              index === activeItem 
                ? "bg-[#F0160F] w-8 h-2" 
                : "bg-gray-500 w-2 h-2 hover:bg-gray-400"
            } block rounded-full transition-all duration-300 cursor-pointer`}
            onClick={() => handleDotClick(index)}
          ></span>
        ))}
      </div>
      
      {galleryModal && modalItem && (
        <Modal visible={galleryModal} onClose={handleCloseModal}>
          <img 
            src={modalItem.renderItem} 
            alt={`Galería imagen ${modalItem.id}`}
            className="w-full h-full object-contain rounded-lg min-w-[800px] min-h-[500px]"
            style={{ maxWidth: '90vw', maxHeight: '90vh' }}
          />
        </Modal>
      )}
      </div>
    </section>
  );
};
