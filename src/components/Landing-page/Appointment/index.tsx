import { useState } from "react";
import { motion } from "framer-motion";

import Url from "/logo.svg";
import SchedulerCard from "../../Scheduler/SchedulerCard";
import { Modal } from "../../Modal";

import { servicesOptions, servicesOptionsItacoatiara } from "../../../mocks/services";
import { clinicAddresses } from "../../../mocks/clinicAddresses";
import { useAppointmentForm } from "../../../hooks/useAppointmentForm";
import { phoneMask } from "../../../utils/phoneMask";

export const AppointmentForm = () => {
  const [schedulerKey, setSchedulerKey] = useState(0);

  const {
    form,
    handleSubmit,
    setSchedule,
    isSubmitting,
    modalMessage,
    closeModal,
  } = useAppointmentForm();

  const selectedCity = form.watch("city");

  const handleCityChange = (city: string) => {
    form.setValue("city", city);

    // limpa dependências
    form.setValue("service", "");
    form.setValue("date", "");
    form.setValue("time", "");

    // força reset visual do SchedulerCard
    setSchedulerKey((prev) => prev + 1);
  };

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

          <form
            onSubmit={form.handleSubmit(async (data) => {
              await handleSubmit(data);
              setSchedulerKey((prev) => prev + 1);
            })}
            className="space-y-6"
          >
            {/* Nome / Email */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">
                  Nome completo
                </label>
                <input
                  {...form.register("name")}
                  placeholder="Digite seu nome completo"
                  className="w-full px-4 py-2 border rounded-lg"
                />
                {form.formState.errors.name && (
                  <span className="text-red-500 text-sm">
                    {form.formState.errors.name.message}
                  </span>
                )}
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">
                  E-mail
                </label>
                <input
                  {...form.register("email")}
                  placeholder="seuemail@email.com"
                  className="w-full px-4 py-2 border rounded-lg"
                />
              </div>
            </div>

            {/* Telefone */}
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">
                Telefone
              </label>
              <input
                {...form.register("phone")}
                placeholder="(92) 9 9999-9999"
                value={form.watch("phone") || ""}
                onChange={(e) => {
                  const masked = phoneMask(e.target.value);
                  form.setValue("phone", masked, { shouldValidate: true });
                }}
                className="w-full px-4 py-2 border rounded-lg"
              />
              {form.formState.errors.phone && (
                <span className="text-red-500 text-sm">
                  {form.formState.errors.phone.message}
                </span>
              )}
            </div>

            {/* Cidade / Serviço */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">
                  Cidade
                </label>
                <select
                  value={selectedCity}
                  onChange={(e) => handleCityChange(e.target.value)}
                  className="w-full px-4 py-2 border rounded-lg"
                >
                  <option value="">Selecione a cidade</option>
                  {clinicAddresses.map((clinic) => (
                    <option key={clinic.id} value={clinic.city}>
                      {clinic.city}
                    </option>
                  ))}
                </select>
                {form.formState.errors.city && (
                  <span className="text-sm text-red-500">
                    {form.formState.errors.city.message}
                  </span>
                )}
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">
                  Serviço desejado
                </label>
                <select
                  {...form.register("service")}
                  className="w-full px-4 py-2 border rounded-lg"
                >
                  <option value="">Selecione um serviço</option>

                  {(selectedCity === "Itacoatiara"
                    ? servicesOptionsItacoatiara
                    : servicesOptions
                  ).map((service) => (
                    <option key={service.id} value={service.value}>
                      {service.label}
                    </option>
                  ))}
                </select>
                {form.formState.errors.service && (
                  <span className="text-sm text-red-500">
                    {form.formState.errors.service.message}
                  </span>
                )}
              </div>
            </div>

            {/* Scheduler */}
            <SchedulerCard
              key={schedulerKey}
              selectedCity={form.watch("city")}
              onScheduleSelect={setSchedule}
              dateError={form.formState.errors.date?.message}
              timeError={form.formState.errors.time?.message}
            />

            {/* Mensagem */}
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">
                Mensagem (opcional)
              </label>
              <textarea
                {...form.register("message")}
                rows={4}
                onInput={(e) => {
                  const target = e.currentTarget;

                  target.style.height = "auto";
                  target.style.height = `${Math.min(target.scrollHeight, 250)}px`;
                }}
                placeholder="Escreva uma mensagem (opcional)"
                className="w-full px-4 py-2 border rounded-lg"
              />
            </div>

            {/* Botão */}
            <motion.button
              type="submit"
              disabled={isSubmitting}
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
              className="w-full bg-purple-600 text-white py-3 rounded-lg font-semibold disabled:opacity-50"
            >
              {isSubmitting ? "Enviando..." : "Agendar Consulta"}
            </motion.button>
          </form>
        </motion.div>
      </div>

      {modalMessage && <Modal message={modalMessage.message} type={modalMessage.type} onClose={closeModal} />}
    </section>
  );
};
