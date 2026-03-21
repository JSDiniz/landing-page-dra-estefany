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
    title: 'Limpeza',
    cor: "#EDAFB8",
    content: {
      title: 'Proteja Seu Sorriso com uma Limpeza Profissional',
      subTitle:
        'Prevenção é o Melhor Cuidado – Mantenha Sua Saúde Bucal em Dia com a Limpeza Dental',
      paragraph_1:
        'A limpeza dental é um cuidado essencial para manter a saúde da sua boca e prevenir problemas como cáries, gengivite e doenças da gengiva. Realizada por uma profissional qualificada, ela remove placa bacteriana e tártaro que não saem apenas com a escovação diária, deixando seus dentes mais limpos, saudáveis e protegidos.',
      paragraph_2:
        'Agende sua consulta e cuide do seu sorriso com quem entende do assunto!',
      url: Prophylaxis,
      button: {
        url: "",
        title: ""
      }
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
      button: {
        url: "",
        title: ""
      }
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
      button: {
        url: "",
        title: ""
      }
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
      button: {
        url: "",
        title: ""
      }
    },
  },
  {
    id: '5',
    icon: <FaMagic />,
    title: 'Clareamento',
    cor: "#F1C8DB",
    content: {
      title: 'Realce a Beleza do Seu Sorriso',
      subTitle:
        'Dentes Mais Brancos e Radiantes – Valorize Seu Sorriso com um Clareamento Seguro e Eficaz',
      paragraph_1:
        'O clareamento dental é um dos tratamentos estéticos mais procurados, ideal para quem deseja dentes mais brancos e um sorriso mais iluminado. Com técnicas modernas e seguras, o procedimento remove manchas causadas por alimentos, bebidas, tabaco e pelo envelhecimento natural dos dentes, sem comprometer a saúde bucal.',
      paragraph_2:
        'Com resultados visíveis e duradouros, o clareamento dental melhora a autoestima e transforma o sorriso de forma rápida e confortável. Agende sua consulta e descubra como conquistar um sorriso mais branco e confiante!',
      url: DentalCrown,
      // button: {
      //   url: "/clareamento-dental-caseiro",
      //   title: "Veja o Passo a Passo"
      // }
      button: {
        url: "",
        title: ""
      }
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
      button: {
        url: "",
        title: ""
      }
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
      button: {
        url: "",
        title: ""
      }
    },
  }
];

export const servicesOptions = [
  {
    id: "1",
    label: "Primeira Consulta",
    value: "primeira-consulta",
  },
  {
    id: "2",
    label: "Reavaliação",
    value: "reavaliacao",
  },
  {
    id: "3",
    label: "Retorno",
    value: "retorno",
  },
  {
    id: "4",
    label: "Clareamento 1 Sessão",
    value: "clareamento-1-sessao",
  },
  {
    id: "5",
    label: "Aparelho Ortodôntico",
    value: "aparelho-ortodontico",
  },
  {
    id: "6",
    label: "Aparelho – Manutenção",
    value: "aparelho-manutencao",
  },
  {
    id: "7",
    label: "Aparelho – Instalação",
    value: "aparelho-instalacao",
  },
  {
    id: "8",
    label: "Limpeza",
    value: "limpeza",
  },
  {
    id: "9",
    label: "Próteses",
    value: "proteses",
  },
  {
    id: "9",
    label: "Restauração",
    value: "restauracao",
  },
  {
    id: "11",
    label: "Tratamento de Canal",
    value: "tratamento-de-canal",
  },
  {
    id: "12",
    label: "Implante – Cirurgia",
    value: "implante-cirurgia",
  },
  {
    id: "13",
    label: "Implante – Avaliação",
    value: "implante-avaliacao",
  }
];

export const servicesOptionsItacoatiara = [
  {
    id: "1",
    label: "Primeira Consulta",
    value: "primeira-consulta",
  },
  {
    id: "2",
    label: "Reavaliação",
    value: "reavaliacao",
  },
  {
    id: "3",
    label: "Retorno",
    value: "retorno",
  },
  {
    id: "6",
    label: "Aparelho – Manutenção",
    value: "aparelho-manutencao",
  },
  {
    id: "7",
    label: "Aparelho – Instalação",
    value: "aparelho-instalacao",
  },
  {
    id: "12",
    label: "Implante – Cirurgia",
    value: "implante-cirurgia",
  },
  {
    id: "13",
    label: "Implante – Avaliação",
    value: "implante-avaliacao",
  }
];

