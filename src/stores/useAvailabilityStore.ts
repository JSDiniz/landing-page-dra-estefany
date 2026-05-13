import { create } from "zustand";
import { API_URL } from "../config/api";

export type DoctorAvailability = {
  city: string;
  availability: {
    date: string;
    periods: {
      start: string;
      end: string;
    }[];
  }[];
};

interface AvailabilityState {
  doctorAvailability: DoctorAvailability[];
  isLoading: boolean;
  fetchAvailability: () => Promise<void>;
}

export const useAvailabilityStore = create<AvailabilityState>((set) => ({
  doctorAvailability: [],
  isLoading: false,

  fetchAvailability: async () => {
    set({ isLoading: true });

    const res = await fetch(`${API_URL}/availability`);
    const doctorAvailability = await res.json();

    set({ doctorAvailability, isLoading: false });
  },
}));
