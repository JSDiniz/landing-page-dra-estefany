export type ClinicAddress = {
  id: number;
  street: string;
  number: string;
  neighborhood: string;
  city: string;
  state: string;
  zip: string;
  googleMapsUrl?: string;
};

export const clinicAddresses: ClinicAddress[] = [
  {
    id: 1,
    street: "Av. Djalma Batista",
    number: "946",
    neighborhood: "Nossa Sra. das Graças",
    city: "Manaus",
    state: "AM",
    zip: "69050-010",
    googleMapsUrl: "https://maps.app.goo.gl/mX9RKRBSkXcnZbPX9",
  },
  {
    id: 2,
    street: "R. Dr. Luzardo Ferreira de Melo",
    number: "2615",
    neighborhood: "Centro",
    city: "Itacoatiara",
    state: "AM",
    zip: "69100-033",
    googleMapsUrl: "https://maps.app.goo.gl/S6ivR7pNoj4y3aqK9",
  },
];
