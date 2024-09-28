export default function WhatIs({ question, response }) {
  return (
    <div className="bg-[#001F5B] text-left flex items-center justify-center">
      <div className="lg:w-3/5 w-3/4 h-auto md:py-14 py-6 border-white border-t border-opacity-15">
        <h1 className="text-white lg:text-3xl md:text-xl sm:text-lg text-base font-medium font-serif italic leading-relaxed md:leading-relaxed">
          {question}
        </h1>
        <h2 className="text-white lg:text-xl md:text-lg sm:text-md text-sm font-sans md:pt-6 pt-4 leading-relaxed">
          {response}
        </h2>
      </div>
    </div>
  );
}
