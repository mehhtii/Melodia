"use server"
import { getDataService } from "@/services/tracks-api";
import Image from "next/image";
import { CgMoreVertical } from "react-icons/cg";

const tracksTableTitle = [
  { field: "id", title: "#" },
  { field: "tracks", title: "tracks" },
  { field: "genre", title: "genre" },
  { field: "publication_date", title: "publication Date" },
  { field: "more", title: "more..." },
];

const TracksTable = async () => {
  const data = await getDataService("tracks");
  const tracks = data;
  return (
    <>
      <table className="w-full min-w-[640px] table-auto text-white-customer">
        <thead>
          <tr>
            {tracksTableTitle.map((i, index) => (
              <th
                className="border-b border-gray-customer py-3 px-5 text-left"
                key={i.field || `notFiled${index}`}
              >
                {i.title}
              </th>
            ))}
          </tr>
        </thead>
        <tbody>
          {tracks ? (
            tracks.map((t) => (
              <tr key={t.id}>
                <td className="py-3 px-5 border-b border-blue-gray-50">
                    {t.id}
                </td>
                <td className="py-3 px-5 border-b border-blue-gray-50">
                  <div className="flex items-center gap-4">
                    <Image
                      src={t.music_img}
                      width={50}
                      height={50}
                      className="inline-block relative object-cover object-center w-9 h-9 rounded-md"
                      alt="imgdata"
                    />
                    <div>
                      <p className="block antialiased font-sans text-sm leading-normal text-blue-gray-900 font-semibold">
                        {t.name}
                      </p>
                      <p className="block antialiased font-sans text-sm leading-normal text-gray-customer font-semibold">
                        {t.artis_name}
                      </p>
                    </div>
                  </div>
                </td>
                <td className="py-3 px-5 border-b border-blue-gray-50">
                  <p className="block antialiased font-sans text-xs font-semibold text-blue-gray-600">
                    {t.snog_style}
                  </p>
                </td>
                <td className="py-3 px-5 ps-10 border-b border-blue-gray-50">
                  <p className="block antialiased font-sans text-xs font-semibold text-blue-gray-600">
                    {t.pblication_date}
                  </p>
                </td>
                <td className="py-3 px-5 ps-8 border-b border-blue-gray-50">
                  <CgMoreVertical className="cursor-pointer" />
                </td>
              </tr>
            ))
          ) : (
            <h1>There is no track</h1>
          )}
        </tbody>
      </table>
      
    </>
  );
};

export default TracksTable;
