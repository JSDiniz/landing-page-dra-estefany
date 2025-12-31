export type DoctorAvailability = {
    date: string; // YYYY-MM-DD
    periods: {
      start: string;
      end: string;
    }[];
  };
  
  export const doctorAvailabilityMock: DoctorAvailability[] = [

    // ===== JANEIRO 2026 =====
    { date: "2026-01-03", periods: [{ start: "13:00", end: "17:00" }] },
    { date: "2026-01-13", periods: [{ start: "08:00", end: "12:00" }] },
    { date: "2026-01-20", periods: [{ start: "08:00", end: "12:00" }] }, 
    { date: "2026-01-24", periods: [{ start: "13:00", end: "17:00" }] }, 
    { date: "2026-01-31", periods: [{ start: "13:00", end: "17:00" }] },
  
    // ===== FEVEREIRO 2026 =====
    { date: "2026-02-17", periods: [{ start: "08:00", end: "12:00" }] },
    { date: "2026-02-21", periods: [{ start: "13:00", end: "17:00" }] }, 
    { date: "2026-02-24", periods: [{ start: "08:00", end: "12:00" }] },
    { date: "2026-02-28", periods: [{ start: "13:00", end: "17:00" }] },

  
    // ===== MARÇO 2026 =====
  ];
  