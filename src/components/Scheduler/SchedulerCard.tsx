import { useState, useMemo, useRef, useEffect } from "react";
import { Calendar, Clock } from "lucide-react";
import CalendarPicker from "./CalendarPicker";
import TimeSlots from "./TimeSlots";

import { useAvailabilityStore } from "../../stores/useAvailabilityStore";
import { API_URL } from "../../config/api";

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
  selectedCity: string;
  onScheduleSelect: (date: Date, time?: string) => void;
  dateError?: string;
  timeError?: string;
}

export default function SchedulerCard({
  selectedCity,
  onScheduleSelect,
  dateError,
  timeError,
}: SchedulerCardProps) {

  /* Intervalo por cidade */
  const slotInterval = selectedCity === "Itacoatiara" ? 40 : 30;

  const doctorAvailability = useAvailabilityStore(
    (state) => state.doctorAvailability
  );

  console.log("doctorAvailability -> ", doctorAvailability)

  const timeRef = useRef<HTMLDivElement>(null);

  const calendarRef = useRef<HTMLDivElement>(null);

  const [showTimes, setShowTimes] = useState(false);
  const [showCalendar, setShowCalendar] = useState(false);

  const [events, setEvents] = useState<GoogleEvent[]>([]);

  const [selectedDate, setSelectedDate] = useState<Date | null>(null);
  const [selectedTime, setSelectedTime] = useState<string | null>(null);

  /* Busca eventos do Google Calendar */
  useEffect(() => {
    fetch(`${API_URL}/appointments?calendarId=dra.estefanyoliveira@gmail.com`)
      .then((res) => res.json())
      .then(setEvents);
  }, []);

  /* Fecha dropdown ao clicar fora */
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

  /* Função utilitária para gerar slots */
  const generateSlots = (
    start: string,
    end: string,
    interval: number
  ) => {
    const slots: string[] = [];

    const [startH, startM] = start.split(":").map(Number);
    const [endH, endM] = end.split(":").map(Number);

    let currentMinutes = startH * 60 + startM;
    const endMinutes = endH * 60 + endM;

    while (currentMinutes < endMinutes) {
      const h = Math.floor(currentMinutes / 60);
      const m = currentMinutes % 60;

      slots.push(
        `${String(h).padStart(2, "0")}:${String(m).padStart(2, "0")}`
      );

      currentMinutes += interval;
    }

    return slots;
  };

  /* Mapa de horários ocupados */
  const busyMap = useMemo(() => {
    const map: Record<string, string[]> = {};

    events.forEach((event) => {
      const start = new Date(event.start);
      const end = new Date(event.end);

      const dateKey = start.toLocaleDateString("en-CA");
      const current = new Date(start);

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

        current.setMinutes(current.getMinutes() + slotInterval);
      }
    });

    return map;
  }, [events, slotInterval]);

  /* Datas disponíveis */
  const availableDates = useMemo(() => {
    if (!selectedCity) return [];

    const today = new Date();
    today.setHours(0, 0, 0, 0);

    const cityAvailability = doctorAvailability.find(
      (d) => d.city === selectedCity
    );

    if (!cityAvailability) return [];

    return cityAvailability.availability
      .filter((day) => {
        const dayDate = new Date(`${day.date}T00:00:00`);

        if (dayDate < today) return false;

        const allSlots: string[] = [];

        day.periods.forEach((p) => {
          if (!p?.start || !p?.end) {
            console.log("PERIOD INVALIDO -> ", p);
            return;
          }

          const slots = generateSlots(p.start, p.end, slotInterval);

          allSlots.push(...slots);
        });

        /* 🔹 Remove horários passados se for hoje */
        if (dayDate.getTime() === today.getTime()) {
          const now = new Date();

          const currentTime = `${String(now.getHours()).padStart(
            2,
            "0"
          )}:${String(now.getMinutes()).padStart(2, "0")}`;

          return allSlots.some((slot) => slot > currentTime);
        }

        return allSlots.length > 0;
      })
      .map((day) => day.date);
  }, [selectedCity, doctorAvailability, slotInterval]);

  /* Horários (DISPONÍVEL + INDISPONÍVEL) */
  const availableTimes = useMemo<TimeSlot[]>(() => {
    if (!selectedDate || !selectedCity) return [];

    const cityAvailability = doctorAvailability.find(
      (d) => d.city === selectedCity
    );
    if (!cityAvailability) return [];

    const day = cityAvailability.availability.find(
      (d) => d.date === selectedDate.toISOString().split("T")[0]
    );
    if (!day) return [];

    const busy = busyMap[selectedDate.toISOString().split("T")[0]] || [];
    const slots: TimeSlot[] = [];

    const today = new Date();
    const isToday =
      selectedDate.getDate() === today.getDate() &&
      selectedDate.getMonth() === today.getMonth() &&
      selectedDate.getFullYear() === today.getFullYear();

    const currentTime = `${String(today.getHours()).padStart(2, "0")}:${String(
      today.getMinutes()
    ).padStart(2, "0")}`;

    day.periods.forEach((period) => {
      if (!period?.start || !period?.end) {
        console.log("PERIODO INVALIDO -> ", period);
        return;
      }

      const generated = generateSlots(period.start, period.end, slotInterval);

      generated.forEach((time) => {
        const isPastTime = isToday && time < currentTime;

        slots.push({
          time,
          isBooked: busy.includes(time) || isPastTime,
        });
      });
    });

    return slots;
  }, [selectedDate, selectedCity, busyMap, doctorAvailability, slotInterval]);

  const handleDateSelect = (date: Date) => {
    setSelectedDate(date);
    setSelectedTime(null);
    setShowCalendar(false);

    // AVISA O FORM QUE A DATA FOI ESCOLHIDA
    onScheduleSelect(date);
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

        {dateError && <p className="text-sm text-red-500 mt-1">{dateError}</p>}

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

        {timeError && <p className="text-sm text-red-500 mt-1">{timeError}</p>}

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
