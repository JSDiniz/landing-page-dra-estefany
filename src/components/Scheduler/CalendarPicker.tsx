import { useState, type ReactNode } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";

interface CalendarPickerProps {
  selectedDate: Date | null;
  availableDates: string[]; // YYYY-MM-DD
  onSelectDate: (date: Date) => void;
}

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

function getDaysInMonth(date: Date) {
  const year = date.getFullYear();
  const month = date.getMonth();
  const firstDay = new Date(year, month, 1);
  const lastDay = new Date(year, month + 1, 0);
  const daysInMonth = lastDay.getDate();
  const startingDayOfWeek = firstDay.getDay();

  return { daysInMonth, startingDayOfWeek };
}

function isAvailableDay(date: Date, availableDates: string[]) {
  const key = date.toISOString().split("T")[0];
  return availableDates.includes(key);
}

function isSameDay(date1: Date | null, date2: Date) {
  if (!date1) return false;
  return (
    date1.getDate() === date2.getDate() &&
    date1.getMonth() === date2.getMonth() &&
    date1.getFullYear() === date2.getFullYear()
  );
}

function renderCalendarDays(
  currentMonth: Date,
  selectedDate: Date | null,
  availableDates: string[],
  onSelectDate: (date: Date) => void
): ReactNode[] {
  const { daysInMonth, startingDayOfWeek } = getDaysInMonth(currentMonth);
  const cells: ReactNode[] = [];

  for (let i = 0; i < startingDayOfWeek; i++) {
    cells.push(<div key={`empty-${i}`} className="h-12"></div>);
  }

  for (let day = 1; day <= daysInMonth; day++) {
    const date = new Date(
      currentMonth.getFullYear(),
      currentMonth.getMonth(),
      day
    );
    const available = isAvailableDay(date, availableDates);
    const selected = isSameDay(selectedDate, date);

    cells.push(
      <button
        type="button"
        key={day}
        onClick={() => available && onSelectDate(date)}
        disabled={!available}
        className={`h-12 rounded-lg font-medium transition-all ${selected
          ? "bg-purple-600 text-white shadow-lg scale-105"
          : available
            ? "bg-white hover:bg-purple-50 text-fuchsia-800 hover:text-purple-600 border border-purple-200 hover:border-purple-300"
            : "bg-gray-100 text-gray-400 cursor-not-allowed"
          }`}
      >
        {day}
      </button>
    );
  }

  return cells;
}

export default function CalendarPicker({
  selectedDate,
  availableDates,
  onSelectDate,
}: CalendarPickerProps) {
  const [currentMonth, setCurrentMonth] = useState(() => new Date());

  /* Dias da semana disponíveis */
  const availableWeekDays = [
    ...new Set(
      availableDates
        .filter((dateString) => {
          const date = new Date(`${dateString}T00:00:00`);

          return (
            date.getMonth() === currentMonth.getMonth() &&
            date.getFullYear() === currentMonth.getFullYear()
          );
        })
        .map((dateString) => {
          const date = new Date(`${dateString}T00:00:00`);

          return date.toLocaleDateString("pt-BR", {
            weekday: "long",
          });
        })
    ),
  ];

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

  const dayCells = renderCalendarDays(
    currentMonth,
    selectedDate,
    availableDates,
    onSelectDate
  );

  return (
    <div className="bg-white rounded-xl shadow-lg p-6">
      <div className="flex justify-between items-center mb-6">
        <button
          type="button"
          onClick={handlePrevMonth}
          className="p-2 hover:bg-fuchsia-100 rounded-lg transition"
        >
          <ChevronLeft className="w-5 h-5 text-fuchsia-600" />
        </button>
        <h3 className="text-lg font-bold text-fuchsia-800">
          {monthNames[currentMonth.getMonth()]} {currentMonth.getFullYear()}
        </h3>
        <button
          type="button"
          onClick={handleNextMonth}
          className="p-2 hover:bg-fuchsia-100 rounded-lg transition"
        >
          <ChevronRight className="w-5 h-5 text-fuchsia-600" />
        </button>
      </div>

      <div className="grid grid-cols-7 gap-2 mb-2">
        {daysOfWeek.map((day) => (
          <div
            key={day}
            className="text-center text-sm font-semibold text-fuchsia-600"
          >
            {day}
          </div>
        ))}
      </div>

      <div className="grid grid-cols-7 gap-2">{dayCells}</div>

      {availableWeekDays.length > 0 && (
        <div className="mt-6 pt-6 border-t border-fuchsia-200">
          <p className="text-sm text-fuchsia-600 mb-2">
            Dias disponíveis:
          </p>

          <div className="flex flex-wrap gap-2">
            {availableWeekDays.map((day) => (
              <span
                key={day}
                className="bg-purple-100 text-purple-700 px-3 py-1 text-[10px] rounded-full font-medium capitalize"
              >
                {day}
              </span>
            ))}
          </div>
        </div>
      )}
    </div>
  );
}
