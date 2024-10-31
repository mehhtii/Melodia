import AddTrack from "./addTrack";
import TracksTable from "./tracksTable";
import { PiMusicNotesPlusFill } from "react-icons/pi";

const Tracks = () => {
    return ( 
        <>
        <div className="mt-12 mb-8 flex flex-col gap-12">
          <div className="relative flex flex-col bg-clip-border rounded-xl bg-white text-gray-700 shadow-md">
            <div className="relative bg-clip-border mx-4 rounded-xl overflow-hidden bg-gradient-to-tl from-blue-customer to-blue-active-customer text-white shadow-[#24334a] shadow-lg -mt-6 mb-8 p-6">
              <h6 className="block antialiased tracking-normal font-sans text-base font-semibold leading-relaxed text-white-customer">
                all tracks
              </h6>
            </div>
          </div>
          <div>
            <button className="px-3 py-2 flex items-center gap-2 border peer-last:text-blue-customer transition-all duration-200 peer-last:hover:text-white-customer border-blue-customer bg-transparent text-blue-customer  rounded-md hover:text-white-customer hover:bg-blue-customer hover:border-white-customer">
              <span>Add Track</span>
              <PiMusicNotesPlusFill className="  text-lg font-bold"/>
            </button>
          </div>
          <div className="p-6 px-0 pt-0 pb-2">
            <TracksTable />
          </div>
        </div>
        <AddTrack/>
      </>
     );
}
 
export default Tracks;