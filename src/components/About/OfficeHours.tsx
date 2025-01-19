import { FaClock } from 'react-icons/fa';


interface Notebook {
  day: string;
  time: string;
}

interface OfficeHoursProps {
  location?: string;
  agenda: Notebook[];
}

export const OfficeHours = ({location, agenda }:OfficeHoursProps) => {


  return (
    <div className="bg-white p-6 rounded-lg shadow-md">
      <div className="flex items-center space-x-2 mb-4">
        <FaClock className="text-purple-600" />
        <h3 className="font-semibold text-lg">Horário de Atendimento {location? `- ${location}`: ""}</h3>
      </div>
      <div className="space-y-2">
        {agenda.map((schedule, index) => (
          <div key={index} className="flex justify-between text-gray-600">
            <span>{schedule.day}</span>
            <span className="font-medium">{schedule.time}</span>
          </div>
        ))}
      </div>
    </div>
  );
};