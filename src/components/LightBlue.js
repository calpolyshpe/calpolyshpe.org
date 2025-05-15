export default function LightBlue({ title, content }) {
    return (
        <div className="bg-[#72A9BE] w-full h-auto flex flex-col text-left items-center justify-center">
        <h1 className="text-white lg:text-3xl md:text-xl sm:text-lg text-base font-medium font-serif md:pb-7 pb-3 md:pt-14 pt-6 italic leading-relaxed md:leading-relaxed">
            {title}
            </h1>
        <h1 className="text-white lg:w-3/5 w-3/4 h-auto lg:text-xl text-sm  font-sans md:pb-14 pb-6 border-b border-white border-opacity-15">
          {content}
        </h1>
      </div>
    );
  }
  