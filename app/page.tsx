import Card from "@/components/Card";
import Theaters from "@/mock/theaters.json";
import EventProps from "@/app/model/dataTypes";

export default function Home() {
  return (
    <main>
      <Card theaters={Theaters.results}/>
    </main>
  );
}
