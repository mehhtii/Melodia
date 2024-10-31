"use client";
import FormCotrol from "@/components/forms/FormControl";
import ModalContainer from "@/components/modalContainer";
import { useState } from "react";
import { IoMusicalNotes } from "react-icons/io5";
import { MdOutlineExposurePlus1 } from "react-icons/md";
import {
  NewReleaseSongs,
  selectOptions,
  TrendingSongs,
  weeklyTopSong,
} from "./formsAdditional";
import { AddTrackData, postOneTrack } from "./submitSever";

const AddTrack = () => {
  const [selectChangeTopSong, setSelectChangeTopSong] = useState("");
  const handleSelectTopSong = (event) => {
    setSelectChangeTopSong(event.target.value);
  };
  const [selectChange, setSelectChange] = useState("");
  const handleSelectChange = (event) => {
    setSelectChange(event.target.value);
  };

  const [selectChangeNewRelease, setSelectChangeNewRelease] = useState("");
  const handleSelectChangeNewRelease = (event) => {
    setSelectChangeNewRelease(event.target.value);
  };

  const [selectChangeTrendingSongs, setselectChangeTrendingSongs] =
    useState("");
  const handleSelectChangeTrendingSongs = (event) => {
    setselectChangeTrendingSongs(event.target.value);
  };
  console.log(postOneTrack);
  

  return (
    <>
      <ModalContainer
        modalTitle={"Add track"}
        modalTitleIcon={<MdOutlineExposurePlus1 />}
        btnText={"Add"}
        Icon={<IoMusicalNotes />}
        title={"You can add a song"}
      >
        <form action={AddTrackData}>
          <div className="flex justify-around">
            <FormCotrol
              control="input"
              label="Add Name"
              placeholder="Enter the name of the song"
              type="text"
              name="name"
            />
            <FormCotrol
              control="input"
              label="Add Artis Name"
              placeholder="Enter the name of the artist"
              type="text"
              name="artis_name"
            />
          </div>
          <div className="flex justify-around mt-10">
            <FormCotrol
              control="select"
              label="Add Genre"
              name="snog_style"
              options={selectOptions}
              onchange={handleSelectChange}
            />
            <FormCotrol
              control="input"
              label="Add Publication Date"
              type="date"
              name="pblication_date"
            />
          </div>
          <div className="flex justify-around mt-10">
            <FormCotrol
              control="select"
              label="Add New Release Songs"
              name="new_release_songs"
              options={NewReleaseSongs}
              onchange={handleSelectChangeNewRelease}
            />
            <FormCotrol
              control="select"
              label="Add Weekly Top Song"
              name="weekly_top_song"
              options={weeklyTopSong}
              onchange={handleSelectTopSong}
            />
            <FormCotrol
              control="select"
              label="Add Trending Songs"
              name="trending_songs"
              options={TrendingSongs}
              onchange={handleSelectChangeTrendingSongs}
            />
          </div>
          <div className="flex gap-3 justify-center mt-10">
            <FormCotrol
              control="input"
              type="file"
              name="music"
              label="Add Muisc file"
              className="w-64 text-dark-customer"
            />
            <FormCotrol
              control="input"
              type="file"
              label="Add Image Song"
              name="music_img"
              className="w-64 text-dark-customer"
            />
          </div>
          <button type="submit">add</button>
        </form>
      </ModalContainer>
    </>
  );
};

export default AddTrack;
