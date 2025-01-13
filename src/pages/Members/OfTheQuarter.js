import MemberCard from "@/components/MemberCard";

export default function SHPEtina() {
    return (
        <main>
            <div className=" bg-[#001F5B] flex flex-col items-center justify-center">
                <h1 className="text-white lg:text-5xl md:text-3xl text-sm border-b border-white border-opacity-50 w-3/4 p-5 items-center font-extrabold text-center font-sans">
                    Member of the Quarter
                </h1>
            </div>
            <MemberCard/>
        </main>
    );
}