import { IconPlusFilled } from "@tabler/icons-react";

export const Card = () => {
  return (
    <div className="relative w-fit active:scale-95 transition-transform duration-200">
      <svg
        className="absolute -inset-8 w-87 h-125 pointer-events-none font-semibold"
        viewBox="0 0 340 500"
      >
        <defs>
          <path
            id="cardPath"
            d="
              M 50 20
              H 290
              A 30 30 0 0 1 320 50
              V 450
              A 30 30 0 0 1 290 480
              H 50
              A 30 30 0 0 1 20 450
              V 50
              A 30 30 0 0 1 50 20
            "
          />
        </defs>

        <text fontSize="14" fill="#7DA24A" letterSpacing="2">
          <textPath href="#cardPath">
            COLORS: E5E5E5, ECFCCA, D7E5C4, 497D00
            <tspan dx="90">FONT - INTER</tspan>
          </textPath>
        </text>
      </svg>
      <div className="relative h-100 w-70 bg-neutral-100 rounded-4xl p-2 shadow-sm cursor-pointer">
        <div className="absolute w-full left-0 bottom-3 flex flex-col justify-between">
          <div className="px-6 flex flex-col gap-1.5">
            <div className="flex justify-between font-bold">
              <div className="text-base">ICED MATCHA</div>
              <div className="text-base">10$</div>
            </div>
            <div className="flex text-[9px] items-center justify-between font-medium">
              <p className="bg-lime-600/20 text-lime-700 py-0.5 px-1.5 rounded-sm">
                Matcha
              </p>
              <p className="bg-lime-600/20 text-lime-700 py-0.5 px-1.5 rounded-sm">
                Milk
              </p>
              <p className="bg-lime-600/20 text-lime-700 py-0.5 px-1.5 rounded-sm">
                Mint leaves
              </p>
              <p className="bg-lime-600/20 text-lime-700 py-0.5 px-1.5 rounded-sm">
                Vanilla
              </p>
            </div>
          </div>
        </div>
        <div className="relative w-full h-80 bg-lime-700/70 rounded-3xl pb-1 rounded-b-4xl flex items-end justify-center">
          <p className="text-[10px] text-lime-100 font-light">
            Guess what? Delivery is free till 02/07
          </p>
          <div className="absolute top-0 left-0 overflow-hidden rounded-3xl rounded-b-4xl">
            <img
              className="w-70 scale-200 object-cover h-74"
              src="/Iced_Matcha_Latte.png"
              alt="Matcha image"
            />
            sss
            <div className="absolute top-4 right-4 bg-neutral-100 rounded-full p-1.5 cursor-pointer active:scale-95 transition-transform duration-200">
              <div className="text-lime-700">
                <IconPlusFilled size={18} />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
