import HomeHeader from "@/components/Home/header";
import WeeklyTopSongs from "@/components/Home/weekly-top-songs";

export default function Home() {
  return (
    <>
      <div className="w-full h-screen ">
        <HomeHeader/>
        <WeeklyTopSongs/>
      </div>
    </>
  );
}
