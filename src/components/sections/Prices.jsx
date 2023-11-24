import { useContext } from "react";
import { GlobalContext } from "../../context/GlobalContext";
import { priceCardMockup } from "../../mockups/price-card-mockup";
import { PriceCard } from "../PriceCard";

export const Prices = () => {
  const { pricesRef } = useContext(GlobalContext);

  return (
    <section
      ref={pricesRef}
      className="flex flex-col items-center justify-center w-full min-h-screen gap-4 px-6 py-20 max-w-notebook"
    >
      <div className="flex flex-col items-center">
        <h3 className="text-primary">PRIMER CLASE GRATIS</h3>
        <h2 className="text-3xl">PRECIOS</h2>
      </div>
      <div className="flex">
        <div className="flex flex-col items-center justify-center w-full gap-8 md:flex-row">
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
    </section>
  );
};
