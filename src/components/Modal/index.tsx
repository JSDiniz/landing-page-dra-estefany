interface ModalProps {
    message: string;
    onClose: () => void;
  }
  
  export const Modal = ({ message, onClose }: ModalProps) => {
    return (
      <div
        className="fixed inset-0 z-50 flex items-center justify-center bg-black/50"
        onClick={onClose}
      >
        <div
          className="bg-white rounded-2xl p-8 max-w-md w-full text-center shadow-lg"
          onClick={(e) => e.stopPropagation()}
        >
          <h3 className="text-xl font-semibold mb-4">Agendamento Realizado!</h3>
          <p className="text-gray-700 whitespace-pre-line">{message}</p>
          <button
            onClick={onClose}
            className="mt-6 px-6 py-2 bg-purple-600 text-white rounded-full hover:bg-purple-700 transition"
          >
            Fechar
          </button>
        </div>
      </div>
    );
  };
  