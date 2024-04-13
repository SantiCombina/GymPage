export function PriceCard({
  plan,
  price,
  first_item_list,
  second_item_list,
  third_item_list,
}) {
  return (
    <div className="sm:w-[350px] w-[320px] rounded-lg h-[500px] p-6 flex bg-[#191919] items-center flex-col justify-center gap-4 shadow-[inset_0_0_2px_0_rgb(209,213,219)] hover:border-2 hover:border-[#00C8FA]">
      {plan}
      <span className="text-3xl font-bold">{price}</span>
      <ul className="flex flex-col items-center gap-1 pt-8">
        <li>{first_item_list}</li>
        <li>{second_item_list}</li>
        <li>{third_item_list}</li>
      </ul>
      <button className="border-2 text-lg mt-16 rounded-md cursor-pointer border-[#00C8FA]/60 py-2 px-10 bg-transparent hover:bg-gray-700/50">
        COMPRAR AHORA
      </button>
    </div>
  );
}
