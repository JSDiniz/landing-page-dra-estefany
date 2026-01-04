import { useState, useMemo, useRef, useEffect } from "react";
import { Calendar, Clock } from "lucide-react";
import CalendarPicker from "./CalendarPicker";
import TimeSlots from "./TimeSlots";
import { doctorAvailabilityMock } from "../../mocks/doctorAvailability.mock";

interface GoogleEvent {
  id: string;
  start: string;
  end: string;
}

interface TimeSlot {
  time: string;
  isBooked: boolean;
}

interface SchedulerCardProps {
  onScheduleSelect: (date: Date, time: string) => void;
}

export default function SchedulerCard({
  onScheduleSelect,
}: SchedulerCardProps) {
  const [selectedDate, setSelectedDate] = useState<Date | null>(null);
  const [selectedTime, setSelectedTime] = useState<string | null>(null);
  const [showCalendar, setShowCalendar] = useState(false);
  const [showTimes, setShowTimes] = useState(false);
  const [events, setEvents] = useState<GoogleEvent[]>([]);

  const calendarRef = useRef<HTMLDivElement>(null);
  const timeRef = useRef<HTMLDivElement>(null);

  /* 🔹 Busca eventos do Google Calendar */
  useEffect(() => {
    fetch(
      "https://api-emails-eight.vercel.app/appointments?calendarId=dra.estefanyoliveira@gmail.com"
    )
      .then((res) => res.json())
      .then(setEvents);
  }, []);

  /* 🔹 Fecha dropdown ao clicar fora */
  useEffect(() => {
    function handleClickOutside(e: MouseEvent) {
      if (
        calendarRef.current &&
        !calendarRef.current.contains(e.target as Node)
      ) {
        setShowCalendar(false);
      }
      if (timeRef.current && !timeRef.current.contains(e.target as Node)) {
        setShowTimes(false);
      }
    }

    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  /* 🔹 Mapa de horários ocupados (timezone corrigido) */
  const busyMap = useMemo(() => {
    const map: Record<string, string[]> = {};

    events.forEach((event) => {
      const start = new Date(event.start);
      const end = new Date(event.end);

      const dateKey = start.toLocaleDateString("en-CA"); // YYYY-MM-DD
      let current = new Date(start);

      while (current < end) {
        const h = current.getHours();
        const m = current.getMinutes();

        const time = `${String(h).padStart(2, "0")}:${String(m).padStart(
          2,
          "0"
        )}`;

        map[dateKey] = map[dateKey] || [];
        if (!map[dateKey].includes(time)) {
          map[dateKey].push(time);
        }

        current.setMinutes(current.getMinutes() + 30);
      }
    });

    return map;
  }, [events]);

  /* 🔹 Datas disponíveis */
  const availableDates = useMemo(() => {
    return doctorAvailabilityMock
      .filter((day) => {
        const busy = busyMap[day.date] || [];

        const allSlots: string[] = [];
        day.periods.forEach((p) => {
          let [h, m] = p.start.split(":").map(Number);
          const [endH, endM] = p.end.split(":").map(Number);

          while (h < endH || (h === endH && m < endM)) {
            allSlots.push(
              `${String(h).padStart(2, "0")}:${String(m).padStart(2, "0")}`
            );
            m += 30;
            if (m === 60) {
              m = 0;
              h++;
            }
          }
        });

        return allSlots.some((slot) => !busy.includes(slot));
      })
      .map((day) => day.date);
  }, [busyMap]);

  /* 🔹 Horários (DISPONÍVEL + INDISPONÍVEL) */
  const availableTimes = useMemo<TimeSlot[]>(() => {
    if (!selectedDate) return [];

    const dateKey = selectedDate.toLocaleDateString("en-CA");
    const day = doctorAvailabilityMock.find((d) => d.date === dateKey);
    if (!day) return [];

    const busy = busyMap[dateKey] || [];
    const slots: TimeSlot[] = [];

    // Verifica se a data selecionada é hoje
    const today = new Date();
    const isToday =
      selectedDate.getDate() === today.getDate() &&
      selectedDate.getMonth() === today.getMonth() &&
      selectedDate.getFullYear() === today.getFullYear();

    // Hora atual em formato HH:MM
    const currentTime = `${String(today.getHours()).padStart(2, "0")}:${String(
      today.getMinutes()
    ).padStart(2, "0")}`;

    day.periods.forEach((period) => {
      let [h, m] = period.start.split(":").map(Number);
      const [endH, endM] = period.end.split(":").map(Number);

      while (h < endH || (h === endH && m < endM)) {
        const time = `${String(h).padStart(2, "0")}:${String(m).padStart(
          2,
          "0"
        )}`;

        // Verifica se o horário já passou (se for hoje)
        const isPastTime = isToday && time <= currentTime;

        slots.push({
          time,
          isBooked: busy.includes(time) || isPastTime,
        });

        m += 30;
        if (m === 60) {
          m = 0;
          h++;
        }
      }
    });

    return slots;
  }, [selectedDate, busyMap]);

  const handleDateSelect = (date: Date) => {
    setSelectedDate(date);
    setSelectedTime(null);
    setShowCalendar(false);
  };

  const handleTimeSelect = (time: string) => {
    setSelectedTime(time);
    setShowTimes(false);

    if (selectedDate) {
      onScheduleSelect(selectedDate, time);
    }
  };

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
      {/* DATA */}
      <div className="relative" ref={calendarRef}>
        <label className="block text-sm font-medium mb-1">
          Data da consulta
        </label>

        <button
          type="button"
          onClick={() => {
            setShowCalendar((prev) => !prev);
            setShowTimes(false);
          }}
          className="w-full flex justify-between px-4 py-3 border rounded-lg bg-white"
        >
          {selectedDate
            ? selectedDate.toLocaleDateString("pt-BR")
            : "Selecione uma data"}
          <Calendar className="w-5 h-5 text-gray-400" />
        </button>

        {showCalendar && (
          <div className="absolute z-20 mt-3 w-full">
            <CalendarPicker
              selectedDate={selectedDate}
              availableDates={availableDates}
              onSelectDate={handleDateSelect}
            />
          </div>
        )}
      </div>

      {/* HORÁRIO */}
      <div className="relative" ref={timeRef}>
        <label className="block text-sm font-medium mb-1">Horário</label>

        <button
          type="button"
          disabled={!selectedDate}
          onClick={() => {
            if (selectedDate) {
              setShowTimes((prev) => !prev);
              setShowCalendar(false);
            }
          }}
          className="w-full flex justify-between px-4 py-3 border rounded-lg bg-white disabled:bg-gray-100"
        >
          {selectedTime || "Selecione um horário"}
          <Clock className="w-5 h-5 text-gray-400" />
        </button>

        {showTimes && (
          <div className="absolute z-20 mt-3 w-full">
            <TimeSlots
              times={availableTimes}
              selectedTime={selectedTime}
              onSelectTime={handleTimeSelect}
            />
          </div>
        )}
      </div>
    </div>
  );
}
