import { Card } from "./components/Card";

export const App = () => {
  return (
    <div className="border-x py-32 min-h-screen border-neutral-300 mx-auto max-w-4xl">
      <div className="flex flex-col divide-y divide-neutral-300 border-y border-neutral-300">
        <div className="grid grid-cols-2 divide-x divide-neutral-300">
          <div className=" flex justify-center  py-16 hover:bg-neutral-300/40 transition-colors duration-200">
            <Card />
          </div>
          <div className="flex justify-center py-16 hover:bg-neutral-300/40 transition-colors duration-200">
            <Card />
          </div>
        </div>
        <div className="grid grid-cols-2 divide-x divide-neutral-300">
          <div className="flex justify-center py-16 hover:bg-neutral-300/40 transition-colors duration-200">
            <Card />
          </div>
          <div className="flex justify-center py-16 hover:bg-neutral-300/40 transition-colors duration-200">
            <Card />
          </div>
        </div>
      </div>
    </div>
  );
};
