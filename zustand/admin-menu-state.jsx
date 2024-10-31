import { create } from "zustand";


export const ToggleSideMenu = create((set)=>({
    active:false,
    setActive:()=> set((state)=>({active: !state.active}))
}))