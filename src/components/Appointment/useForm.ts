import { useState, ChangeEvent, FormEvent } from "react";

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
    setFormData(prev => ({
      ...prev,
      date: date.toISOString().slice(0, 10), // YYYY-MM-DD
      time,
    }));
  };

  const handleSubmit = async (e: FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    const response = await fetch("http://localhost:3000/appointments", {
      method: "POST",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify({ ...formData })
    });
  
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

    alert(data.message);
  };

  return {
    formData,
    handleChange,
    handleSubmit,
    isSubmitting,
    setSchedule,
  };
};
