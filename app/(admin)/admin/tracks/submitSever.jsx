"use server";

import { postDataService } from "@/services/tracks-api";

export async function AddTrackData(formData) {
    const trackFormData = {
        name: formData.get('name'),
        artis_name: formData.get('artis_name'),
        pblication_date: formData.get('pblication_date'),
        new_release_songs: formData.get('new_release_songs'),
        weekly_top_song: formData.get('weekly_top_song'),
        trending_songs: formData.get('trending_songs'),
        music: formData.get('music'),
        music_img: formData.get('music_img'),
      }
   

  const response = await postDataService("tracks",{...trackFormData});
}
