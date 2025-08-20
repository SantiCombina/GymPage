export function PriceCard({
  plan,
  price,
  first_item_list,
  second_item_list,
  third_item_list,
}) {
  return (
    <div className="sm:w-[350px] w-[320px] rounded-lg h-[500px] p-6 flex bg-secondary items-center flex-col justify-center gap-4 border border-gray-700 hover:border-primary transition-all duration-300 hover:shadow-lg hover:shadow-primary/20 hover:scale-105 group">
      <div className="text-xl font-bold text-primary group-hover:text-[#F0160F] transition-colors">
        {plan}
      </div>
      <span className="mb-2 text-4xl font-bold text-white">{price}</span>
      <div className="w-12 h-0.5 bg-[#F0160F] mb-4"></div>
      <ul className="flex flex-col items-center gap-3 pt-4 space-y-2">
        <li className="flex items-center gap-2 text-gray-300">
          <span className="w-2 h-2 rounded-full bg-[#F0160F]"></span>
          {first_item_list}
        </li>
        <li className="flex items-center gap-2 text-gray-300">
          <span className="w-2 h-2 rounded-full bg-[#F0160F]"></span>
          {second_item_list}
        </li>
        <li className="flex items-center gap-2 text-gray-300">
          <span className="w-2 h-2 rounded-full bg-[#F0160F]"></span>
          {third_item_list}
        </li>
      </ul>
      <button className="px-8 py-3 mt-8 text-lg font-semibold transition-all duration-300 bg-transparent border-2 rounded-lg cursor-pointer border-primary/60 hover:bg-primary/20 hover:border-primary hover:text-primary group-hover:shadow-md">
        COMPRAR AHORA
      </button>
    </div>
  );
}
