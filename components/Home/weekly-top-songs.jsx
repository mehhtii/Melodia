import axios from "axios";
import Image from "next/image";

const getTracksService = async () => {
  const res = await axios.get("http://localhost:5000/tracks");
  const tracks = await res.data;
  return tracks;
};

const WeeklyTopSongs = async () => {
  const tracks = await getTracksService();
  const SliceTracks = tracks.slice(-5);
  console.log(tracks);
  
  return (
    <div className="pb-24 px-12">
      <h1 className="text-2xl block text-white-customer ms-2">
        Weekly Top <span className="text-pink-customer ">Songs</span>
      </h1>
      <div className="w-full max-h-[288px] flex items-center gap-4 px-2  mb-24">
        {SliceTracks.map((t) => (
            <div
              key={t.id}
              className="w-[174px] h-[214px] bg-bg-songs-card rounded-xl mt-3"
            >
              <div className="w-[154px] h-[150px] mx-auto py-2">
                <Image
                  src={t.music_img}
                  width={146}
                  height={142}
                  alt="songImg"
                  className=" rounded-xl"
                  
                />
              </div>
              <h4 className="w-[144px] mx-auto block font-bold text-white-customer mt-2">
                {t.name}
              </h4>
              <small className="w-[144px] mx-auto block text-sm font-thin mt-2 text-blue-white-customer">
                {t.artis_name}
              </small>
            </div>
         ))}
      </div>
    </div>
  );
};

export default WeeklyTopSongs;
