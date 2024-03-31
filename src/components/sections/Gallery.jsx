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

  const {
    carouselFragment,
    slideToNextItem,
    slideToPrevItem,
    useListenToCustomEvent,
  } = useSpringCarousel({
    items: GalleryData.map((item) => ({
      id: item.id,
      renderItem: (
        <div className="flex justify-center w-full h-full cursor-pointer">
          <img
            onClick={() => {
              setGalleryModal(true);
              setSelectedItem(item.id);
            }}
            src={item.renderItem}
            className="transition-all duration-1000 hover:scale-105 lg:w-[400px] lg:h-[225px] w-full select-none object-cover"
            alt="imagen"
          />
        </div>
      ),
    })),
    gutter: isMobile ? 15 : 20,
    itemsPerSlide: isMobile ? 1 : 3,
    withLoop: true,
  });

  useListenToCustomEvent((event) => {
    if (event.currentItem) {
      setActiveItem(event.currentItem.index);
    }
  });

  return (
    <section
      ref={galleryRef}
      className="flex flex-col items-center justify-center w-full min-h-screen px-6 py-20 bg-secondary"
    >
      <div className="flex flex-col items-center">
        <h3 className="text-primary">MIRA CÓMO SE VE NUESTRO GYM</h3>
        <h2 className="text-3xl text-center">CONOCE NUESTRO ESPACIO</h2>
      </div>
      <div className="flex justify-center max-w-full py-5 md:max-w-notebook">
        {!isMobile && (
          <button onClick={slideToPrevItem} className="text-5xl">
            <SlArrowLeft />
          </button>
        )}
        <div className="flex flex-col items-start justify-center w-full overflow-hidden max-w-7xl h-fit">
          {carouselFragment}
        </div>
        {!isMobile && (
          <button onClick={slideToNextItem} className="text-5xl">
            <SlArrowRight />
          </button>
        )}
      </div>
      <div className="flex items-center gap-1">
        {GalleryData.map((_, index) => (
          <span
            key={index}
            className={`${
              index === activeItem ? "bg-[#06C8D6]" : "bg-gray-500"
            } block w-2 h-2 rounded-full`}
          ></span>
        ))}
      </div>
      {galleryModal && (
        <Modal visible={galleryModal} onClose={() => setGalleryModal(false)}>
          <img src={modalItem.renderItem} alt="" />
        </Modal>
      )}
    </section>
  );
};
