import { useState, ChangeEvent, FormEvent } from "react";
import { ClinicAddress, clinicAddresses } from "../../mocks/clinicAddresses";

interface FormData {
  name: string;
  email: string;
  phone: string;
  city: string;
  service: string;
  date: string; // ✅
  time: string; // ✅
  message: string;
}

export const useForm = () => {
  const [formData, setFormData] = useState<FormData>({
    name: "",
    email: "",
    phone: "",
    city: "",
    service: "",
    date: "",
    time: "",
    message: "",
  });

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [modalMessage, setModalMessage] = useState<string | null>(null); // ✅ nova state

  const handleChange = (
    e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const setSchedule = (date: Date, time: string) => {
    setFormData((prev) => ({
      ...prev,
      date: date.toISOString().slice(0, 10), // YYYY-MM-DD
      time,
    }));
  };

  const handleSubmit = async (e: FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    // ✅ pega o objeto completo do endereço baseado na cidade
    const selectedClinic: ClinicAddress | undefined = clinicAddresses.find(
      (clinic) => clinic.city === formData.city
    );

    if (!selectedClinic) {
      console.error("Cidade não encontrada no clinicAddresses");
      setIsSubmitting(false);
      return;
    }

      // monta o payload sem a city do formData
  const { city, ...formWithoutCity } = formData;

    // monta o payload para enviar na rota
    const payload = {
      ...formWithoutCity,
      clinic: selectedClinic, // adiciona o objeto completo do endereço
    };
    // "https://api-emails-eight.vercel.app/appointments",

    const response = await fetch(
      "http://localhost:3333/appointments",
      {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ ...payload }),
      }
    );

    const data = await response.json();

    setIsSubmitting(false);
    setFormData({
      name: "",
      email: "",
      phone: "",
      city: "",
      service: "",
      date: "",
      time: "",
      message: "",
    });

    // mostra modal em vez de alert
    setModalMessage(data.message);
  };

  const closeModal = () => setModalMessage(null);

  return {
    formData,
    handleChange,
    handleSubmit,
    isSubmitting,
    setSchedule,
    modalMessage,
    closeModal,
  };
};
