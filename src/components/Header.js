import { useState, useEffect, button, pressable} from "react";

export default function Header() {

    return(
        <div className="bg-[#001F5B] min-w-screen items-center py-2 px-3 border-b border-white border-opacity-50">
            <img
                src="/SHPE_Calpoly_logo.png"
                className="w-1/4 h-auto"
                alt="SHPE Cal Poly Logo"
            />
            <div className="absolute inset-y-4 right-0 px-3" >
                <button className="text-white lg:ml-4 md:ml-1 sm:ml-1"> Members</button>
                <button className="text-white lg:ml-4 md:ml-1 sm:ml-1"> Officers</button>
                <button className="text-white lg:ml-4 md:ml-1 sm:ml-1"> Partners</button>
                <button className="text-white lg:ml-4 md:ml-1 sm:ml-1"> About Us</button>
                <button className="lg:ml-4 md:ml-1 text-white bg-[#FD652F] rounded px-4 py-0.5">
                Become a Member 
                </button> 
            </div>
        </div>
    );
}