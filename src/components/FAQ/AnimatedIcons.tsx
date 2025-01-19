import { categoryIcons } from './categoryIcons';

export const AnimatedIcons = () => {
  return (
    <div className="w-full h-full min-h-72  overflow-hidden relative">
      {Object.entries(categoryIcons).map(([category, { icon: Icon, top, left, right, bottom }]) => {
        
        // Construindo a string de classes dinamicamente
        let positionClasses = 'absolute';
        
        if (top) positionClasses += ` top-${top}`;
        if (left) positionClasses += ` left-${left}`;
        if (right) positionClasses += ` right-${right}`;
        if (bottom) positionClasses += ` bottom-${bottom}`;

        return (
          <div key={category} className={`${positionClasses}`} >
            <div className={`flex flex-col items-center`}>
              <div className="p-4 rounded-full bg-white shadow-lg flex items-center justify-center text-purple-600">
                <Icon size={24} />
              </div>
            </div>
          </div>
        );
      })}
    </div>
  );
};
