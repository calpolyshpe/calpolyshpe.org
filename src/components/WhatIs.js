export default function WhatIs({ question, response }) {
    return (
        <div className="bg-[#001F5B] text-left">
            <h1 className="text-white lg:text-2xl md:text-xl text-[13px] font-medium font-serif italic lg:mx-40 md:mx-20 mx-5 md:pt-10 pt-5"> {question} </h1>
            <h2 className="text-white lg:text-base md:text-sm text-[9px] font-sans lg:mx-40 md:mx-20 mx-5 md:pb-10 pb-5 md:pt-6 pt-3"> {response} </h2>
        </div>

    );
}
