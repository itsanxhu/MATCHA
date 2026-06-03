import { IconPlusFilled } from "@tabler/icons-react";

export const Card = () => {
  return (
    <div className="relative w-fit">
      <PathLabel />
      <div className="relative h-100 w-70 bg-neutral-100 rounded-4xl p-2 shadow-sm cursor-pointer">
        <Info>
          <TitleRow title="ICED MATCHA" price="10$" />
          <Tags tags={["Matcha", "Milk", "Mint leaves", "Vanilla"]} />
        </Info>
        <ImageArea
          img="/Iced_Matcha_Latte.png"
          note="Guess what? Delivery is free till 02/07"
        />
        <AddButton />
      </div>
    </div>
  );
};

const PathLabel = () => (
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
);
const ImageArea = ({ img, note }) => {
  return (
    <div className="relative w-full h-80 bg-lime-700/70 rounded-3xl pb-1 rounded-b-4xl overflow-hidden">
      <div className="absolute top-0 left-0 w-full h-[94%] overflow-hidden rounded-3xl rounded-b-4xl">
        <img
          className="w-full h-full scale-200 object-cover"
          src={img}
          alt="Matcha image"
        />
      </div>
      {note && (
        <p className="absolute bottom-0.5 left-0 right-0 text-center text-[10px] text-lime-100 font-light">
          {note}
        </p>
      )}
    </div>
  );
};
const AddButton = ({ onClick }) => (
  <button
    className="absolute top-4 right-4 bg-neutral-100 rounded-full p-1.5 cursor-pointer active:scale-95 transition-transform duration-200"
    onClick={onClick}
  >
    <IconPlusFilled size={18} className="text-lime-700" />
  </button>
);
const TitleRow = ({ title, price }) => {
  return (
    <div className="flex justify-between font-bold w-full">
      <p className="text-base text-neutral-800">{title}</p>
      <p className="text-base text-neutral-800">{price}</p>
    </div>
  );
};
const Info = ({ children }) => (
  <div className="absolute w-full px-6 gap-1.5 left-0 bottom-3 flex flex-col justify-between">
    {children}
  </div>
);
const Tags = ({ tags }) => {
  return (
    <div className="flex text-[9px] items-center justify-between font-medium">
      {tags.map((tag) => (
        <p
          key={tag}
          className="bg-lime-600/20 text-lime-700 py-0.5 px-1.5 rounded-sm"
        >
          {tag}
        </p>
      ))}
    </div>
  );
};
