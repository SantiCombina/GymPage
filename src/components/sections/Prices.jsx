import { useContext } from "react";
import { GlobalContext } from "../../context/GlobalContext";
import { priceCardMockup } from "../../mockups/price-card-mockup";
import { PriceCard } from "../ui/PriceCard";

export const Prices = () => {
  const { pricesRef } = useContext(GlobalContext);

  return (
    <section
      ref={pricesRef}
      className="w-full flex justify-center items-center min-h-[100dvh] px-6 py-20"
    >
      <div className="flex flex-col items-center justify-center w-full gap-4 max-w-notebook">
      <div className="flex flex-col items-center mb-12">
        <h2 className="mb-2 text-lg tracking-widest text-primary">PRIMER CLASE GRATIS</h2>
        <h3 className="mb-4 text-4xl font-bold">PRECIOS</h3>
        <p className="max-w-md text-center text-gray-400">
          Elige el plan que mejor se adapte a tus objetivos y estilo de vida
        </p>
      </div>
      
      <div className="flex justify-center w-full">
        <div className="grid items-center justify-center w-full grid-cols-1 gap-8 lg:grid-cols-3">
          {priceCardMockup.map((price) => (
            <PriceCard
              key={price.id}
              plan={price.plan}
              price={price.price}
              first_item_list={price.first_item_list}
              second_item_list={price.second_item_list}
              third_item_list={price.third_item_list}
            />
          ))}
        </div>
      </div>
      </div>
    </section>
  );
};
