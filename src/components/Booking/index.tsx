import { motion } from "framer-motion";

export const Booking = () => {
  return (
    <section className="bg-gradient-to-br from-purple-100 to-white">
      <div className="container mx-auto px-4 md:px-6 py-6 flex flex-col md:flex-row gap-4 justify-center items-center"
      >
        <motion.div
          initial={{ opacity: 0, x: -50 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6 }}
          className="flex flex-col items-center">
          <p className="font-bold text-2xl text-gray-900">Você gostaria de ter dentes alinhados?</p>
          <p className="text-gray-600">Tratamentos Ortodônticos Adultos ou Infantis</p>
        </motion.div>

        <motion.button
        initial={{ opacity: 0, x: 50 }}
        whileInView={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.6 }}
          className="bg-purple-600 text-white px-8 py-3 rounded-full font-semibold hover:bg-purple-700 transition-colors"
        >
          Agende uma consulta
        </motion.button>
      </div>
    </section>
  );
};
