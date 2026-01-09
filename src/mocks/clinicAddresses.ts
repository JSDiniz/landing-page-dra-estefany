
export type ClinicAddress = {
  id: number;
  street: string;
  number: string;
  neighborhood: string;
  city: string;
  state: string;
  zip: string;
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
    },
    {
      id: 2,
      street: "Rua Exemplo",
      number: "123",
      neighborhood: "Centro",
      city: "Itacoatiara",
      state: "AM",
      zip: "69100-000",
    },
  ];
  