import Link from "next/link";
import { useState } from "react";

export default function Header() {
  const [showMenu, setShowMenu] = useState(false);

  return (
    <div className="bg-[#001F5B] w-full h-20 sticky">
      <div className="flex w-full h-full">
        <div className="md:w-1/4 w-3/4 h-full">
          <Link href="..">
            <img
              src="/shpe_calpoly_logo.png"
              className="h-full py-5 md:pl-10 pl-4"
              alt="SHPE Cal Poly Logo"
            />
          </Link>
        </div>
        <div className="hidden md:flex justify-end items-center md:w-3/4 h-full">
          <button className="text-white hover:text-[#8f8f8f] lg:text-[14px] text-[11px] md:mr-3 mr-1">
            <Link href="">Members</Link>
          </button>
          <button className="text-white hover:text-[#8f8f8f] lg:text-[14px] text-[11px] md:mr-3 mr-1">
            <Link href="/officers">Officers</Link>
          </button>
          <button className="text-white hover:text-[#8f8f8f] lg:text-[14px] text-[11px] md:mr-3 mr-1">
            <Link href="/sponsor">Partners</Link>
          </button>
          <button className="text-white hover:text-[#8f8f8f] lg:text-[14px] text-[11px] md:mr-3 mr-1">
            <Link href="/about">About SHPE</Link>
          </button>
          <button className="text-white bg-[#FD652F] hover:bg-[#FEA483] rounded lg:text-[14px] text-[11px] md:mr-3 mr-1 px-1 md:py-0.5 py-0.25">
            <Link href="/members/become_a_member">Become a Member</Link>
          </button>
        </div>
        <div className="flex w-1/4 md:hidden justify-center items-center h-full">
          <button
            className="h-full w-20"
            onClick={() => setShowMenu(!showMenu)}
          >
            {showMenu ? (
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth={1.5}
                stroke="currentColor"
                className="size-64 text-white"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M6 18L18 6M6 6l12 12"
                />
              </svg>
            ) : (
              <svg
                className="text-white size-6"
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth="1.5"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5"
                />
              </svg>
            )}
          </button>
        </div>
      </div>
      {showMenu && (
        <div className="bg-[#001F5B] md:hidden flex flex-col items-center h-40 gap-y-2">
          <button className="text-white hover:text-[#8f8f8f] text-lg">
            <Link href="/officers">Officers</Link>
          </button>
          <button className="text-white hover:text-[#8f8f8f] text-lg">
            <Link href="/sponsor">Partners</Link>
          </button>
          <button className="text-white hover:text-[#8f8f8f] text-lg">
            <Link href="/about">About SHPE</Link>
          </button>
          <button className="w-48 text-white bg-[#FD652F] hover:bg-[#FEA483] rounded text-lg px-1 md:py-0.5 py-0.25">
            <Link href="/members/become_a_member">Become a Member</Link>
          </button>
        </div>
      )}
    </div>
  );
}
