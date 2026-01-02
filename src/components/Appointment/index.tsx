import { useState } from "react";

import { motion } from "framer-motion";
import { useForm } from "./useForm";

import Url from "/logo.svg";
import SchedulerCard from "../Scheduler/SchedulerCard";
import { SERVICES } from "../Services";
import { Modal } from "../Modal";

export interface CalendarEvent {
  id: string;
  title: string;
  start: string;
  end: string;
}

export const AppointmentForm = () => {
  const [schedulerKey, setSchedulerKey] = useState(0);
  const {
    formData,
    handleChange,
    handleSubmit,
    isSubmitting,
    setSchedule,
    modalMessage,
    closeModal,
  } = useForm();

  const handleSubmitWithReset = async (e: React.FormEvent) => {
    await handleSubmit(e);
    setSchedulerKey((prev) => prev + 1);
  };

  const sortedOptions = SERVICES.map((service) => service.title).sort((a, b) =>
    a.localeCompare(b)
  );

  return (
    <section id="contato" className="py-20 bg-white">
      <div className="container mx-auto px-4 md:px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="max-w-2xl mx-auto"
        >
          <h2 className="text-4xl font-bold text-gray-900 mb-4 text-center">
            Agende sua consulta
          </h2>

          <div className="grid grid-rows-1 grid-flow-col gap-1 mb-4 items-center justify-center">
            <span className="w-11 h-[2px] bg-fuchsia-700" />
            <img src={Url} alt="" className="w-6 h-6" />
            <span className="w-11 h-[2px] bg-fuchsia-700" />
          </div>

          <p className="text-gray-600 max-w-2xl mx-auto mb-8 text-center">
            Preencha o formulário abaixo e entraremos em contato em breve.
          </p>

          <form onSubmit={handleSubmitWithReset} className="space-y-6">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div>
                <label
                  htmlFor="name"
                  className="block text-sm font-medium text-gray-700 mb-1"
                >
                  Nome completo
                </label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-purple-500 focus:border-transparent"
                />
              </div>
              <div>
                <label
                  htmlFor="email"
                  className="block text-sm font-medium text-gray-700 mb-1"
                >
                  E-mail
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-purple-500 focus:border-transparent"
                />
              </div>
            </div>

            <div>
              <label
                htmlFor="phone"
                className="block text-sm font-medium text-gray-700 mb-1"
              >
                Telefone
              </label>
              <input
                type="tel"
                id="phone"
                name="phone"
                value={formData.phone}
                onChange={handleChange}
                required
                className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-purple-500 focus:border-transparent"
              />
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="w-full">
                <label
                  htmlFor="city"
                  className="block text-sm font-medium text-gray-700 mb-1"
                >
                  Cidade
                </label>
                <select
                  id="city"
                  name="city"
                  value={formData.city}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-purple-500 focus:border-transparent"
                >
                  <option value="">Selecione o cidade</option>
                  <option value="Av. Djalma Batista, 946 - Nossa Sra. das Graças, Manaus - AM - 69050-010">
                    Manaus
                  </option>
                  {/* <option value="Itacoatiara">Itacoatiara</option> */}
                </select>
              </div>

              <div className="w-full">
                <label
                  htmlFor="service"
                  className="block text-sm font-medium text-gray-700 mb-1"
                >
                  Serviço desejado
                </label>
                <select
                  id="service"
                  name="service"
                  value={formData.service}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-purple-500 focus:border-transparent"
                >
                  <option value="">Selecione um serviço</option>
                  <option value="primeira-consulta">Primeira Consulta</option>
                  <option value="reavaliacao">Reavaliação</option>
                  {sortedOptions.map((title) => (
                    <option
                      key={title.toLowerCase()}
                      value={title.toLowerCase()}
                    >
                      {title}
                    </option>
                  ))}
                </select>
              </div>
            </div>

            <SchedulerCard key={schedulerKey} onScheduleSelect={setSchedule} />

            <div>
              <label
                htmlFor="message"
                className="block text-sm font-medium text-gray-700 mb-1"
              >
                Mensagem (opcional)
              </label>
              <textarea
                id="message"
                name="message"
                value={formData.message}
                onChange={handleChange}
                rows={4}
                className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-purple-500 focus:border-transparent"
              ></textarea>
            </div>

            <motion.button
              type="submit"
              disabled={isSubmitting}
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
              className="w-full bg-purple-600 text-white py-3 rounded-lg font-semibold hover:bg-purple-700 transition-colors disabled:opacity-50"
            >
              {isSubmitting ? "Enviando..." : "Agendar Consulta"}
            </motion.button>
          </form>
        </motion.div>
      </div>

      {modalMessage && <Modal message={modalMessage} onClose={closeModal} />}
    </section>
  );
};
