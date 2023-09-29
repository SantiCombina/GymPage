import { useSpringCarousel } from "react-spring-carousel";
import { GalleryData } from "../data/GalleryData";
import { useBreakpoint } from "../hooks/useBreakpoint";
import { SlArrowRight, SlArrowLeft } from "react-icons/Sl";

export const Gallery = ({ galleryRef }) => {
  const breakpoint = useBreakpoint();
  const { carouselFragment, slideToNextItem, slideToPrevItem } =
    useSpringCarousel({
      items: GalleryData.map((item) => ({
        id: item.id,
        renderItem: (
          <div className="flex justify-center w-full h-full">
            <img
              src={item.renderItem}
              className="transition-all duration-1000 hover:scale-105 lg:w-[400px] lg:h-[225px] w-[225px] h-[112px] object-cover"
              alt="imagen"
            />
          </div>
        ),
      })),
      gutter: breakpoint.is.sm ? 15 : breakpoint.is.md ? 15 : 20,
      itemsPerSlide: breakpoint.is.sm ? 2 : 3,
      withLoop: true,
    });

  return (
    <div
      ref={galleryRef}
      className="flex flex-col items-center justify-center h-screen text-white bg-black"
    >
      <h3 className="text-primary">MIRA COMO SE VE NUESTRO GYM</h3>
      <h2 className="text-3xl">CONOCE NUESTRO ESPACIO</h2>
      <div className="flex p-6">
        <button onClick={slideToPrevItem} className="text-6xl">
          <SlArrowLeft />
        </button>
        <div className="flex flex-col items-start justify-center w-full overflow-hidden max-w-7xl h-fit">
          {carouselFragment}
        </div>
        <button onClick={slideToNextItem} className="text-6xl">
          <SlArrowRight />
        </button>
      </div>
    </div>
  );
};
