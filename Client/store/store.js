import { create } from "zustand";
import { AuthSlice } from "./slice/AuthSlice";

export const useBoundedStore = create((...a) => ({
  ...AuthSlice(...a),
}));
