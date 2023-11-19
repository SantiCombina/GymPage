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

  const modalItem = useMemo(() => {
    return GalleryData.find((item) => item.id === selectedItem);
  }, [selectedItem]);

  const { galleryRef } = useContext(GlobalContext);
  const breakpoint = useBreakpoint();
  const { carouselFragment, slideToNextItem, slideToPrevItem } =
    useSpringCarousel({
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
              className="transition-all duration-1000 hover:scale-105 lg:w-[400px] lg:h-[225px] w-[225px] h-[112px] select-none object-cover"
              alt="imagen"
            />
          </div>
        ),
      })),
      gutter: breakpoint.is.sm ? 15 : breakpoint.is.md ? 15 : 20,
      itemsPerSlide: breakpoint.is.sm ? 1 : 3,
      withLoop: true,
    });

  return (
    <section
      ref={galleryRef}
      className="flex flex-col items-center justify-center w-full min-h-screen py-20 px-6 bg-secondary"
    >
      <div className="flex flex-col items-center">
        <h3 className="text-primary">MIRA COMO SE VE NUESTRO GYM</h3>
        <h2 className="text-3xl">CONOCE NUESTRO ESPACIO</h2>
      </div>
      <div className="flex justify-center py-5 max-w-notebook">
        <button onClick={slideToPrevItem} className="text-5xl">
          <SlArrowLeft />
        </button>
        <div className="flex flex-col items-start justify-center w-full overflow-hidden max-w-7xl h-fit">
          {carouselFragment}
        </div>
        <button onClick={slideToNextItem} className="text-5xl">
          <SlArrowRight />
        </button>
      </div>
      {galleryModal && (
        <Modal visible={galleryModal} onClose={() => setGalleryModal(false)}>
          <img src={modalItem.renderItem} alt="" />
        </Modal>
      )}
    </section>
  );
};
