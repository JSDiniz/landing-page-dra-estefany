import { PiToothFill } from 'react-icons/pi';
import { RiToothFill } from 'react-icons/ri';
import { GiTooth, GiToothbrush } from 'react-icons/gi';
import { FaTooth, FaTeeth, FaMagic } from 'react-icons/fa';

import Implants from '../assets/Services/implants.svg';
import Prostheses from '../assets/Services/prostheses.svg';
import Prophylaxis from '../assets/Services/prophylaxis.svg';
import DentalCrown from '../assets/Services/dental-crown.svg';
import Restoration from '../assets/Services/restoration.svg';
import RootCanalTreatment from '../assets/Services/root-canal-treatment.svg';
import OrthodonticAppliance from '../assets/Services/orthodontic-appliance.svg';

export const SERVICES = [
    {
      id: '1',
      icon: <FaTooth />,
      title: 'Profilaxia',
      cor: "#EDAFB8",
      content: {
        title: 'Proteja Seu Sorriso com Cuidados Especiais',
        subTitle:
          'Prevenção é o Melhor Tratamento – Mantenha Sua Saúde Bucal em Dia com a Profilaxia Profunda',
        paragraph_1:
          'A profilaxia é um tratamento essencial para a prevenção de problemas bucais como cáries, gengivite e outras doenças periodontais. Realizada por uma profissional especializada, essa limpeza profunda remove placa bacteriana e tártaro, promovendo uma saúde bucal ideal e prevenindo o surgimento de complicações futuras. Com técnicas modernas e eficientes, nossa abordagem de profilaxia vai além da higiene básica, garantindo que seu sorriso fique saudável, fresco e livre de bactérias prejudiciais.',
        paragraph_2:
          'Agende sua consulta e invista em um sorriso saudável e duradouro!',
        url: Prophylaxis,
      },
    },
    {
      id: '2',
      icon: <PiToothFill />,
      title: 'Restauração',
      cor: "#e879f9",
      content: {
        title: 'Recuperando Seu Sorriso com Precisão e Cuidado',
        subTitle:
          'Soluções Eficientes para Dentes Danificados ou Fraturados – Restaure a Função e a Estética do Seu Sorriso',
        paragraph_1:
          'A restauração dentária é o tratamento ideal para reparar dentes danificados por cáries, fraturas ou desgastes. Utilizamos materiais de alta qualidade e técnicas avançadas para restaurar a estrutura original do dente, devolvendo sua forma, função e estética. Seja com resinas compostas, porcelanas ou outros materiais, garantimos resultados naturais e duradouros. O procedimento é rápido, minimamente invasivo e pode ser personalizado de acordo com as necessidades de cada paciente.',
        paragraph_2:
          'Não deixe que dentes danificados prejudiquem sua confiança ou saúde bucal. Agende uma avaliação e descubra como a restauração pode devolver a harmonia ao seu sorriso!',
        url: Restoration,
      },
    },
    {
      id: '3',
      icon: <GiTooth />,
      title: 'Aparelho ortodôntico',
      cor: "#A6E1FA",
      content: {
        title: 'Transforme Seu Sorriso com Conforto e Eficácia',
        subTitle:
          'Alinhe Seus Dentes e Melhore Sua Saúde Bucal com Tratamentos Ortodônticos Personalizados',
        paragraph_1:
          'O aparelho ortodôntico é a solução ideal para quem deseja corrigir dentes desalinhados e melhorar a funcionalidade do sorriso. Além de proporcionar um sorriso mais estético e harmônico, o tratamento ortodôntico ajuda na prevenção de problemas bucais como cáries, gengivite e dificuldades na mastigação.',
        paragraph_2:
          'Invista no seu sorriso e na sua saúde bucal com um tratamento ortodôntico de qualidade. Agende sua consulta e descubra a solução ideal para o seu caso!',
        url: OrthodonticAppliance,
      },
    },
    {
      id: '4',
      icon: <RiToothFill />,
      title: 'Tratamento de Canal',
      cor: "#E1F0C4",
      content: {
        title: 'Alívio e Recuperação para Dentes Comprometidos',
        subTitle:
          'Recupere a Saúde do Seu Dente e Evite Extrações com um Tratamento Eficaz e Seguro',
        paragraph_1:
          'O tratamento de canal é uma solução eficaz para dentes severamente danificados ou infectados, que precisam ser salvos. Quando a polpa dentária (parte interna do dente) sofre infecção, o tratamento de canal é a maneira mais segura de eliminar a infecção e preservar o dente. Durante o procedimento, removemos a polpa danificada, desinfetamos o interior do dente e o preenchemos com material especial, evitando que a infecção volte a ocorrer.',
        paragraph_2:
          'Se você está com dor de dente ou suspeita de infecção, agende uma consulta e evite complicações futuras com o tratamento de canal. Sua saúde bucal merece o melhor cuidado',
        url: RootCanalTreatment,
      },
    },
    {
      id: '5',
      icon: <FaMagic />,
      title: 'Coroa Dentária',
      cor: "#F1C8DB",
      content: {
        title: 'Restaure a Função e Estética do Seu Dente',
        subTitle:
          'Solução Duradoura para Dentes Danificados ou Fraturados – Recupere Seu Sorriso com Qualidade',
        paragraph_1:
          'A coroa dentária é uma capa protetora que recobre um dente danificado, proporcionando mais força, resistência e uma aparência natural. Quando um dente está muito desgastado ou comprometido por cáries, fraturas ou tratamentos anteriores, a coroa é a solução ideal para restaurar sua forma, função e estética.',
        paragraph_2:
          'Com um processo rápido e confortável, as coroas dentárias devolvem a confiança ao seu sorriso, restaurando tanto a funcionalidade quanto a beleza dos seus dentes. Agende uma consulta e descubra como a coroa dentária pode ser a solução ideal para você!',
        url: DentalCrown,
      },
    },
    {
      id: '6',
      icon: <FaTeeth />,
      title: 'Proteses',
      cor: "#F4A261",
      content: {
        title: 'Recupere Seu Sorriso e Sua Qualidade de Vida',
        subTitle:
          'Soluções Personalizadas para Substituição de Dentes Faltantes – Conforto, Estética e Função',
        paragraph_1:
          'As próteses dentárias são a solução ideal para quem perdeu dentes devido a cáries, doenças gengivais ou outros problemas bucais. Elas oferecem a possibilidade de restaurar a aparência do seu sorriso e a funcionalidade da sua boca, permitindo que você volte a mastigar, falar e sorrir com confiança.',
        paragraph_2:
          'Com um processo preciso e personalizado, você pode recuperar a estética do seu sorriso e melhorar sua saúde bucal de forma prática e eficaz. Agende sua consulta e descubra como as próteses dentárias podem transformar sua vida!',
        url: Prostheses,
      },
    },
    {
      id: '7',
      icon: <GiToothbrush />,
      title: 'Implantes',
      cor: "#F2E94E",
      content: {
        title: 'A Solução Permanente para Dentes Perdidos',
        subTitle:
          'Recupere a Função e Estética do Seu Sorriso com Implantes de Alta Qualidade',
        paragraph_1:
          'Os implantes dentários são a forma mais moderna e eficaz de substituir dentes perdidos, oferecendo uma solução permanente e natural. Ao contrário das próteses removíveis ou pontes, os implantes são fixados diretamente no osso, proporcionando estabilidade, conforto e aparência natural, como se fosse um dente verdadeiro.',
        paragraph_2:
          'Agende uma consulta e descubra como os implantes dentários podem transformar seu sorriso, devolvendo-lhe a segurança e a qualidade de vida que você merece!',
        url: Implants,
      },
    }
  ];
  