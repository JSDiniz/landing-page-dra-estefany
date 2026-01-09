import { create } from "zustand";

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

    const res = await fetch("http://localhost:3333/availability");
    const doctorAvailability = await res.json();

    set({ doctorAvailability, isLoading: false });
  },
}));
