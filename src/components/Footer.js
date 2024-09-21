import Link from 'next/link'
import { useRouter } from 'next/router';
import { FaInstagram, FaDiscord, FaLinkedin } from "react-icons/fa";

export default function Footer() {


    return (
        <div className="bg-[#001F5B] flex flex-row justify-between items-center py-2 px-3 border-t border-white border-opacity-50 relative">
            <img
                src="/SHPE_Calpoly_logo.png"
                className="w-1/5 h-auto"
                alt="SHPE Cal Poly Logo"
            />
            <Link href="/Members/BecomeAMember" className={`text-white hover:text-[#8f8f8f] lg:text-[14px] text-[11px]`}> Become a Member</Link>
            <Link href="/officers" className="text-white hover:text-[#8f8f8f] lg:text-[14px] text-[11px] onPage"> Officers</Link>
            <Link href="/sponsor" className="text-white hover:text-[#8f8f8f] lg:text-[14px] text-[11px]"> Partners</Link>
            <Link href="/about" className="text-white hover:text-[#8f8f8f] lg:text-[14px] text-[11px]"> About Us</Link>
            <a href='https://discord.gg/vTtAc29KkR'>
                <FaDiscord className='text-white w-7 h-auto' />
            </a>
            <a href='https://www.instagram.com/shpecalpoly/?hl=en'>
                <FaInstagram className='text-white w-7 h-auto' />
            </a>
            <a href='https://www.linkedin.com/company/shpe-cal-poly/posts/?feedView=all'>
                <FaLinkedin className='text-white w-7 h-auto' />
            </a>
        </div>
    )
}