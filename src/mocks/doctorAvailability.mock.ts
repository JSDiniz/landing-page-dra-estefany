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
    { date: "2026-02-03", periods: [{ start: "08:00", end: "12:00" }] },
    { date: "2026-02-05", periods: [{ start: "08:00", end: "12:00" }] },
    { date: "2026-02-07", periods: [{ start: "13:00", end: "17:00" }] },
  
    { date: "2026-02-10", periods: [{ start: "08:00", end: "12:00" }] },
    { date: "2026-02-12", periods: [{ start: "08:00", end: "12:00" }] },
    { date: "2026-02-14", periods: [{ start: "13:00", end: "17:00" }] },
  
    { date: "2026-02-17", periods: [{ start: "08:00", end: "12:00" }] },
    { date: "2026-02-19", periods: [{ start: "08:00", end: "12:00" }] },
    { date: "2026-02-21", periods: [{ start: "13:00", end: "17:00" }] },
  
    { date: "2026-02-24", periods: [{ start: "08:00", end: "12:00" }] },
    { date: "2026-02-26", periods: [{ start: "08:00", end: "12:00" }] },
    { date: "2026-02-28", periods: [{ start: "13:00", end: "17:00" }] },
  
    // ===== MARÇO 2026 =====
    { date: "2026-03-03", periods: [{ start: "08:00", end: "12:00" }] },
    { date: "2026-03-05", periods: [{ start: "08:00", end: "12:00" }] },
    { date: "2026-03-07", periods: [{ start: "13:00", end: "17:00" }] },
  
    { date: "2026-03-10", periods: [{ start: "08:00", end: "12:00" }] },
    { date: "2026-03-12", periods: [{ start: "08:00", end: "12:00" }] },
    { date: "2026-03-14", periods: [{ start: "13:00", end: "17:00" }] },
  
    { date: "2026-03-17", periods: [{ start: "08:00", end: "12:00" }] },
    { date: "2026-03-19", periods: [{ start: "08:00", end: "12:00" }] },
    { date: "2026-03-21", periods: [{ start: "13:00", end: "17:00" }] },
  
    { date: "2026-03-24", periods: [{ start: "08:00", end: "12:00" }] },
    { date: "2026-03-26", periods: [{ start: "08:00", end: "12:00" }] },
    { date: "2026-03-28", periods: [{ start: "13:00", end: "17:00" }] },
  
    { date: "2026-03-31", periods: [{ start: "08:00", end: "12:00" }] },
  ];
  