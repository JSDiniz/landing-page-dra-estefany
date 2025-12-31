import { Clock } from "lucide-react";

interface TimeSlot {
  time: string;
  isBooked: boolean;
}

interface TimeSlotsProps {
  times: TimeSlot[];
  selectedTime: string | null;
  onSelectTime: (time: string) => void;
}

export default function TimeSlots({
  times,
  selectedTime,
  onSelectTime,
}: TimeSlotsProps) {
  if (times.length === 0) {
    return (
      <div className="bg-white rounded-xl shadow-lg p-8">
        <div className="text-center text-gray-400">
          <Clock className="w-12 h-12 mx-auto mb-4 opacity-50" />
          <p className="text-lg font-medium">Nenhum horário disponível</p>
          <p className="text-sm mt-2">
            Esta data não possui horários de atendimento
          </p>
        </div>
      </div>
    );
  }

  return (
    <div className="bg-white rounded-xl shadow-lg p-6">
      <div className="flex items-center gap-2 mb-6">
        <Clock className="w-5 h-5 text-teal-600" />
        <h3 className="text-lg font-bold text-gray-800">
          Horários Disponíveis
        </h3>
      </div>

      <div className="grid grid-cols-3 sm:grid-cols-4 gap-3">
        {times.map(({ time, isBooked }) => {
          const isSelected = selectedTime === time;

          return (
            <button
              type="button"
              key={time}
              onClick={() => !isBooked && onSelectTime(time)}
              disabled={isBooked}
              className={`py-3 px-4 rounded-lg font-semibold text-sm transition-all ${
                isSelected
                  ? "bg-teal-600 text-white shadow-lg scale-105"
                  : isBooked
                  ? "bg-gray-100 text-gray-400 cursor-not-allowed"
                  : "bg-white text-teal-600 border-2 border-teal-200 hover:bg-teal-50 hover:border-teal-400"
              }`}
            >
              {time}
            </button>
          );
        })}
      </div>

      <div className="mt-6 pt-6 border-t border-gray-200">
        <div className="flex flex-wrap gap-4 text-xs">
          <div className="flex items-center gap-2">
            <div className="w-4 h-4 bg-teal-600 rounded"></div>
            <span className="text-gray-600">Selecionado</span>
          </div>
          <div className="flex items-center gap-2">
            <div className="w-4 h-4 bg-white border-2 border-teal-200 rounded"></div>
            <span className="text-gray-600">Disponível</span>
          </div>
          <div className="flex items-center gap-2">
            <div className="w-4 h-4 bg-gray-100 rounded"></div>
            <span className="text-gray-600">Indisponível</span>
          </div>
        </div>
      </div>
    </div>
  );
}
