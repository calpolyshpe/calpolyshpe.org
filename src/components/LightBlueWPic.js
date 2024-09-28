export default function LightBlueWPic({ imgURL, title, content }) {
  return (
    <div className="bg-[#001F5B] relative md:pt-14">
      <div className="bg-[#72A9BE] hidden w-full h-[450px] md:flex items-center justify-center">
        <div className="flex justify-center items-center w-[850px] h-auto md:my-14 my-6">
          <div className="w-80 h-auto flex flex-col justify-center items-center mr-6">
            <h1 className="text-white lg:text-2xl md:text-xl font-medium font-sans">
              {title}
            </h1>
            <h2 className="text-white lg:text-xl md:text-lg sm:text-md text-sm font-sans md:py-6 py-3 md:px-2 whitespace-pre-line">
              {content}
            </h2>
          </div>
          <img
            src={imgURL}
            className="right-14 top-[-50px] w-[450px] h-[500px] object-cover ml-6"
            alt="Outreach"
          />
        </div>
      </div>
      <div className="md:hidden flex flex-col justify-center items-center px-4 py-6">
        <img
          src={imgURL}
          className="w-3/4 h-auto object-cover mb-4"
          alt="Outreach"
        />
        <div className="bg-[#72A9BE] flex flex-col justify-center items-center w-full h-auto p-6 mt-6">
          <div className="w-full h-auto text-center">
            <h1 className="text-white text-base font-medium font-sans mb-4">
              {title}
            </h1>
            <h2 className="text-white text-sm font-sans">{content}</h2>
          </div>
        </div>
      </div>
    </div>
  );
}
