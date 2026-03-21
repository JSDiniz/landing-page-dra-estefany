import { useState } from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";

import {
  AppointmentFormData,
  appointmentSchema,
} from "../../../schemas/appointment.schema";

import { ClinicAddress, clinicAddresses } from "../../../mocks/clinicAddresses";

type ModalType = "success" | "error" | "warning" | "info";

interface ModalState {
  message: string;
  type: ModalType;
}

export function useAppointmentForm() {
  const form = useForm<AppointmentFormData>({
    resolver: zodResolver(appointmentSchema),
    defaultValues: {
      name: "",
      email: "",
      phone: "",
      city: "",
      service: "",
      date: "",
      time: "",
      message: "",
    },
  });

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [modalMessage, setModalMessage] = useState<ModalState | null>(null);

  // 🔹 RECEBE DATA E HORA DO SchedulerCard
  const setSchedule = (date: Date, time?: string) => {
    form.setValue("date", date.toISOString().split("T")[0], {
      shouldValidate: true,
    });

    if (time) {
      form.setValue("time", time, {
        shouldValidate: true,
      });
    }
  };

  const handleSubmit = async (data: AppointmentFormData) => {
    setIsSubmitting(true);

    const selectedClinic: ClinicAddress | undefined = clinicAddresses.find(
      (clinic) => clinic.city === data.city
    );

    if (!selectedClinic) {
      setModalMessage({
        message: "Cidade não encontrada.",
        type: "error",
      });
      setIsSubmitting(false);
      return;
    }

    // eslint-disable-next-line @typescript-eslint/no-unused-vars
    const { city, ...formWithoutCity } = data;

    const payload = {
      ...formWithoutCity,
      clinic: selectedClinic,
    };

    try {
      const response = await fetch("https://api-emails-eight.vercel.app/appointments", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(payload),
      });

      const result = await response.json();

      // 🔴 SE A API RETORNAR ERRO, PARA A EXECUÇÃO AQUI
      if (!response.ok) {
        setModalMessage({
          message: result.message || "Erro ao realizar agendamento.",
          type: "error",
        });

        return; // ⛔ IMPORTANTE
      }

      setModalMessage({
        message: result.message || "Agendamento realizado com sucesso.",
        type: "success",
      });
      form.reset();
      // eslint-disable-next-line @typescript-eslint/no-unused-vars
    } catch (error) {
      setModalMessage({
        message: "Erro ao realizar agendamento.",
        type: "error",
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  const closeModal = () => setModalMessage(null);

  return {
    form,
    handleSubmit,
    setSchedule,
    isSubmitting,
    modalMessage,
    closeModal,
  };
}
