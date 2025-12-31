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
        <div className="text-center text-fuchsia-400">
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
        <Clock className="w-5 h-5 text-purple-600" />
        <h3 className="text-lg font-bold text-fuchsia-800">
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
                  ? "bg-purple-600 text-white shadow-lg scale-105"
                  : isBooked
                  ? "bg-fuchsia-100 text-fuchsia-400 cursor-not-allowed"
                  : "bg-white text-purple-600 border-2 border-purple-200 hover:bg-purple-50 hover:border-purple-400"
              }`}
            >
              {time}
            </button>
          );
        })}
      </div>

      <div className="mt-6 pt-6 border-t border-fuchsia-200">
        <div className="flex flex-wrap gap-4 text-xs">
          <div className="flex items-center gap-2">
            <div className="w-4 h-4 bg-purple-600 rounded"></div>
            <span className="text-fuchsia-600">Selecionado</span>
          </div>
          <div className="flex items-center gap-2">
            <div className="w-4 h-4 bg-white border-2 border-purple-200 rounded"></div>
            <span className="text-fuchsia-600">Disponível</span>
          </div>
          <div className="flex items-center gap-2">
            <div className="w-4 h-4 bg-fuchsia-100 rounded"></div>
            <span className="text-fuchsia-600">Indisponível</span>
          </div>
        </div>
      </div>
    </div>
  );
}
