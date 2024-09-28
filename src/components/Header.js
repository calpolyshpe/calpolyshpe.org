import Link from "next/link";

export default function Header() {
  return (
    <div className="bg-[#001F5B] md:h-20 md:py-0 md:px-0 py-2.5 px-2.5 border-b border-white border-opacity-50">
      <div className="flex flex-col md:flex-row md:justify-between md:items-center">
        <div className="w-full md:w-auto mb-4 md:mb-0 flex justify-center md:justify-start">
          <Link href="/">
            <img
              src="/SHPE_Calpoly_logo.png"
              className="w-1/2 md:w-2/3 lg:w-1/3 h-auto md:m-0 m-auto"
              alt="SHPE Cal Poly Logo"
            />
          </Link>
        </div>
        <div className="hidden md:flex flex-col md:flex-row md:items-center md:space-x-6">
          <div className="relative group h-20">
            <button
              className="text-white hover:text-[#8f8f8f] lg:text-[14px] text-[11px] focus:outline-none w-16 h-20"
            >
              Members
            </button>
            <div className="hidden absolute mb-5 bg-white shadow-lg rounded-md text-black p-2 w-40 z-10 group-hover:block">
              <Link href="/Members/calendar">
                <button className="block text-left px-4 py-1 text-black hover:bg-[#FD652F] w-full">
                  Calendar
                </button>
              </Link>
              <Link href="/Members/SHPEtina">
                <button className="block text-left px-4 py-1 text-black hover:bg-[#FD652F] w-full">
                  SHPEtina
                </button>
              </Link>
              <Link href="/Members/SHPEJr">
                <button className="block text-left px-4 py-1 text-black hover:bg-[#FD652F] w-full">
                  SHPE Jr.
                </button>
              </Link>
            </div>
          </div>
          <Link href="/officers">
            <button className="text-white hover:text-[#8f8f8f] lg:text-[14px] text-[11px] mt-2 md:mt-0 w-16">
              Officers
            </button>
          </Link>
          <Link href="/sponsor">
            <button className="text-white hover:text-[#8f8f8f] lg:text-[14px] text-[11px] mt-2 md:mt-0 w-16">
              Partners
            </button>
          </Link>
          <Link href="/about">
            <button className="text-white hover:text-[#8f8f8f] lg:text-[14px] text-[11px] mt-2 md:mt-0 w-16">
              About Us
            </button>
          </Link>
          <Link href="/Members/BecomeAMember">
            <button className="text-white bg-[#FD652F] rounded lg:text-[14px] text-[11px] px-3 py-1 hover:bg-white hover:text-[#001F5B] mt-2 md:mt-0 w-40">
              Become a Member
            </button>
          </Link>
        </div>
      </div>
      <div className="md:hidden flex flex-row justify-between">
        <div className="relative group">
          <button className="text-white hover:text-[#8f8f8f] lg:text-[14px] text-[11px] w-full text-center px-1.5 py-2 focus:outline-none">
            Members
          </button>
          <div className="hidden absolute mt-1 bg-white shadow-lg rounded-md text-black p-2 w-40 z-10 group-hover:block">
            <Link href="/Members/calendar">
              <button className="block text-left px-4 py-1 text-black hover:bg-[#FD652F] w-full">
                Calendar
              </button>
            </Link>
            <Link href="/Members/SHPEtina">
              <button className="block text-left px-4 py-1 text-black hover:bg-[#FD652F] w-full">
                SHPEtina
              </button>
            </Link>
            <Link href="/Members/SHPEJr">
              <button className="block text-left px-4 py-1 text-black hover:bg-[#FD652F] w-full">
                SHPE Jr.
              </button>
            </Link>
          </div>
        </div>
        <Link href="/officers">
          <button className="text-white hover:text-[#8f8f8f] lg:text-[14px] text-[11px] w-full text-center px-1.5 py-2 focus:outline-none">
            Officers
          </button>
        </Link>
        <Link href="/sponsor">
          <button className="text-white hover:text-[#8f8f8f] lg:text-[14px] text-[11px] w-full text-center px-1.5 py-2 focus:outline-none">
            Partners
          </button>
        </Link>
        <Link href="/about">
          <button className="text-white hover:text-[#8f8f8f] lg:text-[14px] text-[11px] w-full text-center px-1.5 py-2 focus:outline-none">
            About Us
          </button>
        </Link>
        <Link href="/Members/BecomeAMember">
          <button className="text-white bg-[#FD652F] rounded lg:text-[14px] text-[11px] w-full text-center px-1.5 py-2 hover:bg-white hover:text-[#001F5B]">
            Become a Member
          </button>
        </Link>
      </div>
    </div>
  );
}
