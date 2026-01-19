type ModalType = "success" | "error" | "warning" | "info";

const modalConfig = {
  success: {
    title: "Agendamento realizado!",
    bg: "bg-purple-700",
    hover: "hover:bg-purple-600",
  },
  error: {
    title: "Erro no agendamento",
    bg: "bg-red-600",
    hover: "hover:bg-red-700",
  },
  warning: {
    title: "Atenção",
    bg: "bg-yellow-500",
    hover: "hover:bg-yellow-600",
  },
  info: {
    title: "Informação",
    bg: "bg-blue-600",
    hover: "hover:bg-blue-700",
  },
};

interface ModalProps {
  message: string;
  type: ModalType;
  onClose: () => void;
}

export const Modal = ({ message, type, onClose }: ModalProps) => {
  const config = modalConfig[type];

  return (
    <div
      className="fixed inset-0 z-50 flex items-center justify-center bg-black/50"
      onClick={onClose}
    >
      <div
        className="bg-white rounded-2xl p-8 max-w-md w-full text-center shadow-lg"
        onClick={(e) => e.stopPropagation()}
      >
        <h3 className="text-xl font-semibold mb-4">
          {config.title}
        </h3>

        <p className="text-gray-700 whitespace-pre-line">
          {message}
        </p>

        <button
          onClick={onClose}
          className={`mt-6 px-6 py-2 text-white rounded-full transition ${config.bg} ${config.hover}`}
        >
          Fechar
        </button>
      </div>
    </div>
  );
};
