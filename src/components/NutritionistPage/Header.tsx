/**
 * This code was generated by Builder.io
 */
import React from "react";

const Header: React.FC = () => {
  return (
    <header className="flex flex-col self-stretch w-full">
      <div className="flex relative flex-col items-start px-4 pt-10 pb-3.5 w-full text-sm font-medium text-white border-b border-solid bg-zinc-800 border-b-green-900">
        <div
          className="flex absolute left-0 top-2/4 z-0 w-36 max-w-full -translate-y-2/4 h-[74px] min-h-[74px] translate-x-[0%]"
          aria-hidden="true"
        />
        <div
          className="flex absolute right-0 top-2/4 z-0 w-36 max-w-full -translate-y-2/4 h-[74px] min-h-[98px] translate-x-[0%]"
          aria-hidden="true"
        />
        <div className="flex overflow-hidden z-0 gap-3.5 justify-center items-center self-stretch py-2.5 pr-5 pl-2.5 w-full bg-green-900 rounded-md border border-gray-700 border-solid">
          <div className="gap-1.5 self-stretch my-auto min-w-[240px]">
            Join Our Personalized Nutrition Demo For Free
          </div>
        </div>
      </div>
      <nav className="flex justify-between items-center px-4 py-5 w-full border-b border-solid bg-zinc-800 border-b-lime-100">
        <img
          loading="lazy"
          src="https://cdn.builder.io/api/v1/image/assets/TEMP/8d5230dd37ac2c7bdab711b4988b7a132b01318be7afc9b8cf47f712992ac646?placeholderIfAbsent=true&apiKey=a54b75d57d8041fca68d2ad49ee3043b"
          alt="Nutritionist Logo"
          className="object-contain self-stretch my-auto aspect-[4.33] w-[147px]"
        />
      </nav>
    </header>
  );
};

export default Header;
