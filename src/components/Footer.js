import Link from 'next/link'
import { FaInstagram } from "react-icons/fa";
import { FaDiscord } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa";

export default function Footer() {

    return (
        <div className="bg-[#001F5B] flex flex-row justify-between items-center py-2 px-3 border-t border-white border-opacity-50 relative">
            <img
                src="/SHPE_Calpoly_logo.png"
                className="w-1/5 h-auto"
                alt="SHPE Cal Poly Logo"
            />
            <Link href="/officers" className="text-white hover:text-[#8f8f8f] lg:text-[14px] text-[11px]"> Become a Member</Link>
            <Link href="/officers" className="text-white hover:text-[#8f8f8f] lg:text-[14px] text-[11px]"> Officers</Link>
            <Link href="/sponsor" className="text-white hover:text-[#8f8f8f] lg:text-[14px] text-[11px]"> Partners</Link>
            <Link href="/about" className="text-white hover:text-[#8f8f8f] lg:text-[14px] text-[11px]"> About Us</Link>
            <FaDiscord className='text-white w-7 h-auto'/>
            <FaInstagram className='text-white w-7 h-auto'/>
            <FaLinkedin className='text-white w-7 h-auto'/>

        </div>
    )
}