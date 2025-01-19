import { motion } from 'framer-motion';
import { OfficeHours } from './OfficeHours';

import Url from '../../../public/logo.svg';
import Dra from '../../assets/About/dra.estefany.svg';

import { FaUserMd, FaCalendarAlt, FaHospital } from 'react-icons/fa';

export const About = () => {

  const hoursManaus = [
    { day: 'Segunda a Sexta', time: '08:00 - 12:00' },
    { day: 'Sábado', time: '08:00 - 13:00' },
    { day: 'Domingo', time: 'Fechado' }
  ];

  const hoursItacoatiara = [
    { day: 'Quinta', time: '08:00 - 19:00' },
    { day: 'Sexta ', time: '08:00 - 19:00' },
    { day: 'Sábado', time: '08:00 - 19:00' },
  ];

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

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
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

            <motion.div
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="flex items-center space-x-4"
            >
              <div className="w-20 h-20 rounded-full relative overflow-hidden bg-fuchsia-50 shadow shadow-fuchsia-700/40">
                <img
                  src={Dra}
                  alt="Dra. Estefany Oliveira"
                  className="w-full h-full scale-150 object-top absolute top-5"
                />
              </div>
              <div>
                <h3 className="font-semibold text-gray-800">Dra. Estefany Gomes Oliveira</h3>
                <p className="text-gray-600">Especializando em Ortodontia.</p>
              </div>
            </motion.div>

            {/* <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
              <div className="flex items-center space-x-3">
                <FaUserMd className="text-purple-600 text-2xl" />
                <div>
                  <p className="font-semibold">Equipe</p>
                  <p className="text-sm text-gray-600">Especializada</p>
                </div>
              </div>
              <div className="flex items-center space-x-3">
                <FaCalendarAlt className="text-purple-600 text-2xl" />
                <div>
                  <p className="font-semibold">Horários</p>
                  <p className="text-sm text-gray-600">Flexíveis</p>
                </div>
              </div>
              <div className="flex items-center space-x-3">
                <FaHospital className="text-purple-600 text-2xl" />
                <div>
                  <p className="font-semibold">Estrutura</p>
                  <p className="text-sm text-gray-600">Moderna</p>
                </div>
              </div>
            </div> */}

          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            className="relative flex flex-col gap-8"
          >
            {/* <img
              src="https://images.unsplash.com/photo-1629909613654-28e377c37b09?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=800&q=80"
              alt="Consultório odontológico"
              className="rounded-lg shadow-xl"
            />
            <div className="absolute -bottom-6 -right-6 bg-purple-600 text-white p-6 rounded-lg shadow-lg">
              <p className="text-2xl font-bold">15+</p>
              <p>Anos de Experiência</p>
            </div> */}

            <OfficeHours agenda={hoursManaus} location='Manaus' />

            <OfficeHours agenda={hoursItacoatiara} location='Itacoatiara' />
          </motion.div>
        </div>
      </div>
    </section>
  );
};