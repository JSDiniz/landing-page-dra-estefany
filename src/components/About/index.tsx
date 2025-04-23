import { motion } from 'framer-motion';

import Url from '/logo.svg';
import Dra from '../../assets/About/dra.estefany-1.svg';

export const About = () => {

  return (
    <section id="sobre" className="py-20 bg-purple-50">
      <div className="container mx-auto px-4 md:px-6">

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="grid grid-cols-1 gap-4 text-center mb-16">

          <h2 className="text-4xl font-bold text-gray-900">
            Sobre
          </h2>

          <div className="grid grid-rows-1 grid-flow-col gap-1 items-center justify-center">
            <span className="w-11 h-[2px] bg-fuchsia-700" />
            <img src={Url} alt="" className="w-6 h-6" />
            <span className="w-11 h-[2px] bg-fuchsia-700" />
          </div>

          <p className="text-gray-600 max-w-2xl mx-auto">
            Como dentista a três anos de experiencia meu trabalho é dedicado ao
            tratamento ortodôntico e ortopédico das mas oclusões dos maxilares.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 items-center">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="text-4xl font-bold text-gray-900 mb-6">
              Excelência em Odontologia
            </h2>

            <p className="text-gray-600 mb-5">
              Oferecemos cuidados odontológicos especializados, proporcionando tratamentos personalizados com foco na saúde e bem-estar dos nossos pacientes.
            </p>

            <p className="text-gray-600 mb-5">
              A ortodontia envolve o diagnostico, prevenção e correção de dentes na ortopedia visa corrigir problemas relacionados ao crescimento e desenvolvimento dos maxilares, que podem impactar a oclusão e a funcionalidade da boca.

            </p>

            <p className="text-gray-600 mb-8">
              Esse tipo de abordagem e fundamental para proporcionar uma base solida para os dentes permanentes e para garantir que os maxilares se desenvolvem de maneira harmoniosa.
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            className='flex items-center justify-center h-[399px]'
          >

            <div className='group h-full relative top-8 '>
              <img
                src={Dra}
                alt="Dra. Estefany Oliveira"
                className="h-full object-cover"
              />
              <span className="absolute bottom-10 left-1/2 transform -translate-x-1/2  opacity-0 group-hover:opacity-100 transition-opacity duration-300 text-lg font-bold italic text-fuchsia-500">
                Dra. Estefany
              </span>
            </div>

          </motion.div>
        </div>
      </div>
    </section>
  );
};