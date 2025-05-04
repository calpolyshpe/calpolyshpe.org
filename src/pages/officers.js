import OfficerCard from "@/components/OfficerCard";
import HeroBanner from "@/components/HeroBanner";

export default function Officers() {
  return (
    <main>
      <HeroBanner
              imgUrl={"/officer_pics/2024-25/GroupOfficers.jpg"}
              title={"Cal Poly SHPE Officers"}
              subtitle={"2024-2025"}
            />
      <OfficerCard />
    </main>
  );
}
