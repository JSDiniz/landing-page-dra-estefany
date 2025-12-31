import { useState } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";

interface CalendarPickerProps {
  selectedDate: Date | null;
  availableDates: string[]; // YYYY-MM-DD
  onSelectDate: (date: Date) => void;
}

export default function CalendarPicker({
  selectedDate,
  availableDates,
  onSelectDate,
}: CalendarPickerProps) {
  const [currentMonth, setCurrentMonth] = useState(new Date());

  const monthNames = [
    "Janeiro",
    "Fevereiro",
    "Março",
    "Abril",
    "Maio",
    "Junho",
    "Julho",
    "Agosto",
    "Setembro",
    "Outubro",
    "Novembro",
    "Dezembro",
  ];

  const daysOfWeek = ["Dom", "Seg", "Ter", "Qua", "Qui", "Sex", "Sáb"];

  const getDaysInMonth = (date: Date) => {
    const year = date.getFullYear();
    const month = date.getMonth();
    const firstDay = new Date(year, month, 1);
    const lastDay = new Date(year, month + 1, 0);
    const daysInMonth = lastDay.getDate();
    const startingDayOfWeek = firstDay.getDay();

    return { daysInMonth, startingDayOfWeek };
  };

  const isAvailableDay = (date: Date) => {
    const key = date.toISOString().split("T")[0];
    return availableDates.includes(key);
  };

  const isSameDay = (date1: Date | null, date2: Date) => {
    if (!date1) return false;
    return (
      date1.getDate() === date2.getDate() &&
      date1.getMonth() === date2.getMonth() &&
      date1.getFullYear() === date2.getFullYear()
    );
  };

  const handlePrevMonth = () => {
    setCurrentMonth(
      new Date(currentMonth.getFullYear(), currentMonth.getMonth() - 1)
    );
  };

  const handleNextMonth = () => {
    setCurrentMonth(
      new Date(currentMonth.getFullYear(), currentMonth.getMonth() + 1)
    );
  };

  const { daysInMonth, startingDayOfWeek } = getDaysInMonth(currentMonth);
  const days = [];

  for (let i = 0; i < startingDayOfWeek; i++) {
    days.push(<div key={`empty-${i}`} className="h-12"></div>);
  }

  for (let day = 1; day <= daysInMonth; day++) {
    const date = new Date(
      currentMonth.getFullYear(),
      currentMonth.getMonth(),
      day
    );
    const available = isAvailableDay(date);
    const selected = isSameDay(selectedDate, date);

    days.push(
      <button
        type="button"
        key={day}
        onClick={() => available && onSelectDate(date)}
        disabled={!available}
        className={`h-12 rounded-lg font-medium transition-all ${
          selected
            ? "bg-teal-600 text-white shadow-lg scale-105"
            : available
            ? "bg-white hover:bg-teal-50 text-gray-800 hover:text-teal-600 border border-gray-200 hover:border-teal-300"
            : "bg-gray-100 text-gray-400 cursor-not-allowed"
        }`}
      >
        {day}
      </button>
    );
  }

  return (
    <div className="bg-white rounded-xl shadow-lg p-6">
      <div className="flex justify-between items-center mb-6">
        <button
          type="button"
          onClick={handlePrevMonth}
          className="p-2 hover:bg-gray-100 rounded-lg transition"
        >
          <ChevronLeft className="w-5 h-5 text-gray-600" />
        </button>
        <h3 className="text-lg font-bold text-gray-800">
          {monthNames[currentMonth.getMonth()]} {currentMonth.getFullYear()}
        </h3>
        <button
          type="button"
          onClick={handleNextMonth}
          className="p-2 hover:bg-gray-100 rounded-lg transition"
        >
          <ChevronRight className="w-5 h-5 text-gray-600" />
        </button>
      </div>

      <div className="grid grid-cols-7 gap-2 mb-2">
        {daysOfWeek.map((day) => (
          <div
            key={day}
            className="text-center text-sm font-semibold text-gray-600"
          >
            {day}
          </div>
        ))}
      </div>

      <div className="grid grid-cols-7 gap-2">{days}</div>

      <div className="mt-6 pt-6 border-t border-gray-200">
        <p className="text-sm text-gray-600 mb-2">Dias disponíveis:</p>
        <div className="flex gap-2 text-xs">
          <span className="bg-teal-100 text-teal-700 px-3 py-1 rounded-full font-medium">
            Terças
          </span>
          <span className="bg-teal-100 text-teal-700 px-3 py-1 rounded-full font-medium">
            Quintas
          </span>
          <span className="bg-teal-100 text-teal-700 px-3 py-1 rounded-full font-medium">
            Sábados
          </span>
        </div>
      </div>
    </div>
  );
}
