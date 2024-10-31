import { create } from "zustand";

export const ResponsiveMenulists = create((set) => ({
  active: false,
  setActived: () => set((state) => ({active: !state.active})),
}));

export const SearchModalState = create((set)=>({
  showModal:false,
  setShowModal: ()=> set((state)=>({showModal: !state.showModal}))
}))
