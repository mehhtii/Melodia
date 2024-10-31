import Image from "next/image";
import bgHomePicture from "@/public/images/homeImg-melodyweb.png";

const HomeHeader = () => {
  return (
    <>
      <div className="w-11/12 h-[595px]  relative mx-auto mt-7 home_img_box hidden md:block">
        <Image
          priority={true}
          src={bgHomePicture}
          alt="homePicture"
          className=" rounded-3xl home_img_box md:h-4/5 lg:h-5/6"
        />
        <div className="w-full bg-[#1717176b] h-[545px] rounded-l-3xl  top-0 absolute">
          <h1 className="text-blue-white-customer lg:w-2/6 md:w-4/6 text-3xl left-5 absolute md:top-1/4 lg:top-1/3 text-wrap lg:my-1">
            All the
            <span className="text-3xl text-pink-customer left-1">
              Best Songs
            </span>
            in One Place
          </h1>
          <p className="w-3/6 text-wrap text-blue-white-customer md:top-1/3 lg:top-2/4  absolute left-5 md:mt-7 lg:mt-2">
            On our website, you can access an amazing collection of popular and
            new songs. Stream your favorite tracks in high quality and enjoy
            without interruptions. Whatever your taste in music, we have it all
            for you!
          </p>
          <div className="w-[352px] h-10 absolute md:top-2/3 md:mt-14 lg:top-3/4 flex gap-5 justify-center lg:-mt-1 left-5">
            <button className="bg-pink-customer rounded transition duration-300 text-blue-white-customer h-10 w-40 hover:bg-transparent hover:text-pink-customer hover:border hover:border-pink-customer">
              Discover Now
            </button>
            <button className="bg-transparent border rounded transition duration-300 border-blue-customer text-blue-customer h-10 w-40 hover:bg-blue-customer hover:text-blue-white-customer hover:border-blue-white-customer">
              Create Playlist
            </button>
          </div>
        </div>
      </div>
    </>
  );
};

export default HomeHeader;
