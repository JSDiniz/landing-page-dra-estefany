import { motion } from "framer-motion";

import { SocialLinks } from "../../Footer/SocialLinks";

import Decore from "./../../../assets/Hero/decore.svg";
import Scanner from "./../../../assets/Hero/scanner.svg";
import Dra from "./../../../assets/Hero/dra.estefany.svg";
import Calendar from "./../../../assets/Hero/calendar.svg";
import Messages from "./../../../assets/Hero/messages.svg";
import Component from "./../../../assets/Hero/component.svg";
import ToothPain from "./../../../assets/Hero/tooth_pain.svg";
import CrownAndBridge from "./../../../assets/Hero/crownAndBridge.svg";

export const Hero = () => {

  return (
    <section
      id="inicio"
      className="relative bg-gradient-to-br from-purple-50 to-white"
    >
      <div className="container mx-auto px-4 md:px-6 pt-24 pb-32 md:py-32  grid md:grid-cols-2 gap-12 md:gap-8 items-center">
        <motion.div
          initial={{ opacity: 0, x: -50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
          className="max-w-2xl order-2 md:order-1"
        >
          <h1 className="text-5xl font-bold text-gray-900 mb-6">
            Seu <span className="text-purple-600">Sorriso</span> Merece o Melhor{" "}
            <span className="relative">
              Cuidado
              <img
                src={Decore}
                alt=""
                className="w-full absolute bottom-0 -left-1/2 translate translate-x-1/2 -translate-y-1/2"
              />
            </span>
          </h1>
          <p className="text-xl text-gray-600 mb-8">
            Cuidar da sua saúde começa com prevenção. Nosso compromisso é
            transformar sorrisos com tratamentos que aliam arte e ciência,
            porque acreditamos que o melhor tratamento é aquele que você não
            precisa.
          </p>

          <motion.a
            href="#contato"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="inline-block px-8 py-3 mb-8 rounded-full bg-purple-600 text-white hover:bg-purple-700 transition-colors"
          >
            <span className="font-semibold">Agende uma consulta</span>
          </motion.a>

          <SocialLinks />
        </motion.div>

        <motion.div
          initial={{ opacity: 0, x: 50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
          className="w-full lg:block order-1 md:order-2"
        >
          <div className="relative flex items-center justify-center w-full h-full min-h-[300px] dm:w-[500px] dm:h-[600px]">
            <img
              src={Dra}
              alt="Dentista sorridente"
              className="w-full md:h-[90%]"
            />

            <motion.div
              className="h-[15%] md:h-[12%] 2xl:h-[14%] absolute left-4 xl:left-[5%] top-16 z-10"
              animate={{
                y: [-10, 10],
                transition: {
                  y: {
                    duration: 2,
                    repeat: Infinity,
                    repeatType: "reverse",
                    ease: "easeInOut",
                  },
                },
              }}
            >
              <div className="flex w-full h-full">
                <motion.span
                  className="text-2xl"
                  animate={{ rotate: [0, 10, -10, 0] }}
                  transition={{ duration: 2, repeat: Infinity }}
                >
                  <img
                    src={ToothPain}
                    alt="Dentista sorridente"
                    className="w-full h-full"
                  />
                </motion.span>
              </div>
            </motion.div>

            <motion.div
              className="h-[20%] absolute -left-[3%] md:left-0 2xl:left-[5%] bottom-0 z-10 "
              initial={{ y: 10 }}
              animate={{ y: [10, -10, 10] }}
              transition={{
                duration: 2,
                repeat: Infinity,
                repeatType: "loop",
                ease: "easeInOut",
              }}
            >
              <img
                src={Calendar}
                alt="Dentista sorridente"
                className="w-full h-full"
              />
            </motion.div>

            <motion.div
              className="w-[13%] absolute top-1/2 right-0 lg:right-[5%] z-10 "
              initial={{ y: 10 }}
              animate={{ y: [10, -10, 10] }}
              transition={{
                duration: 2,
                repeat: Infinity,
                repeatType: "loop",
                ease: "easeInOut",
              }}
            >
              <img
                src={Scanner}
                alt="Dentista sorridente"
                className="w-full h-full"
              />
            </motion.div>

            <motion.div
              initial={{ x: 10 }}
              animate={{ x: [10, -10, 10] }}
              transition={{
                duration: 2,
                repeat: Infinity,
                repeatType: "loop",
                ease: "easeInOut",
              }}
              className="w-[15%] absolute right-[15%] top-6 md:-top-5 transform -translate-y-1/2 z-10"
            >
              <img src={Messages} alt="" className="h-full" />
            </motion.div>

            <img
              src={Component}
              alt=""
              className="hidden md:flex w-[15%] lg:w-[20%] absolute md:-bottom-[45%] lg:-bottom-[30%] xl:-bottom-[25%] 2xl:-bottom-[20%] md:-left-[25%] lg:-left-[45%] xl:-left-[45%] 2xl:-left-[50%] transform scale-x-[-1] md:-rotate-[80deg]  lg:-rotate-[70deg] z-10 "
            />
          </div>

          <img
            src={CrownAndBridge}
            alt=""
            className="w-[20%] md:w-[15%] 2xl:w-[10%] absolute bottom-[5%] right-[2%] md:right-0 opacity-5 "
          />
        </motion.div>
      </div>
    </section>
  );
};
