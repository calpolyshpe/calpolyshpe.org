
import HeroBanner from "@/components/HeroBanner";

export default function Home() {
  return (
    <main>
      <HeroBanner imgUrl={'/Mainpage_GroupPhoto.jpg'} title={'Society of Hispanic Professional Engineers'} subtitle={"California Polytechnic State University - San Luis Obispo"} bg={'bg-shpe-officers'}/>
    </main>
  );
}
