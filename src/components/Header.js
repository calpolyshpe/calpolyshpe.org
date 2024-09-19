import Link from 'next/link'

export default function Header() {

    return (
        <div className="bg-[#001F5B] py-2 px-3 border-b border-white border-opacity-50 relative">
            <Link href="..">
                <img
                    src="/SHPE_Calpoly_logo.png"
                    className="w-1/5 h-auto"
                    alt="SHPE Cal Poly Logo"
                />
            </Link>
            <div className="absolute justify-between hidden md:flex right-0 transform -translate-y-1/2 top-1/2" >
                <button className="text-white hover:text-[#8f8f8f] lg:text-[14px] text-[11px] md:mr-2 mr-1"> Members</button>
                <Link href="/officers" className="text-white hover:text-[#8f8f8f] lg:text-[14px] text-[11px] md:mr-2 mr-1"> Officers</Link>
                <Link href="/sponsor" className="text-white hover:text-[#8f8f8f] lg:text-[14px] text-[11px] md:mr-2 mr-1"> Partners</Link>
                <Link href="/about" className="text-white hover:text-[#8f8f8f] lg:text-[14px] text-[11px] md:mr-2 mr-1"> About Us</Link>
                <button className="text-white bg-[#FD652F] rounded lg:text-[14px] text-[11px] md:mr-2 mr-1 px-1 md:py-0.5 py-0.25">
                    Become a Member
                </button>
            </div>
            <div className="md:hidden absolute right-0 w-5 h-5 mr-2 transform -translate-y-1/2 top-1/2">
                <svg className="text-white size-6" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" >
                    <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5" />
                </svg>
            </div>
        </div>
    );
}