export interface City {
  id: number;
  name: string;
}

export interface State {
  id: number;
  name: string;
  abbreviation: string;
  cities: City[];
}

export const statesAndCities: State[] = [
  {
    id: 1,
    name: "São Paulo",
    abbreviation: "SP",
    cities: [
      { id: 1, name: "São Paulo" },
      { id: 2, name: "Campinas" },
      { id: 3, name: "Santos" },
      { id: 4, name: "São José dos Campos" },
      { id: 5, name: "Ribeirão Preto" },
      { id: 6, name: "Sorocaba" },
      { id: 7, name: "São José do Rio Preto" },
      { id: 8, name: "Osasco" },
      { id: 9, name: "Piracicaba" },
      { id: 10, name: "Bauru" }
    ]
  },
  {
    id: 2,
    name: "Rio de Janeiro",
    abbreviation: "RJ",
    cities: [
      { id: 11, name: "Rio de Janeiro" },
      { id: 12, name: "Niterói" },
      { id: 13, name: "Nova Iguaçu" },
      { id: 14, name: "Duque de Caxias" },
      { id: 15, name: "São Gonçalo" },
      { id: 16, name: "Campos dos Goytacazes" },
      { id: 17, name: "Petrópolis" },
      { id: 18, name: "Volta Redonda" },
      { id: 19, name: "Magé" },
      { id: 20, name: "Cabo Frio" }
    ]
  },
  {
    id: 3,
    name: "Minas Gerais",
    abbreviation: "MG",
    cities: [
      { id: 21, name: "Belo Horizonte" },
      { id: 22, name: "Uberlândia" },
      { id: 23, name: "Juiz de Fora" },
      { id: 24, name: "Betim" },
      { id: 25, name: "Contagem" },
      { id: 26, name: "Montes Claros" },
      { id: 27, name: "Ribeirão das Neves" },
      { id: 28, name: "Uberaba" },
      { id: 29, name: "Governador Valadares" },
      { id: 30, name: "Ipatinga" }
    ]
  },
  {
    id: 4,
    name: "Rio Grande do Sul",
    abbreviation: "RS",
    cities: [
      { id: 31, name: "Porto Alegre" },
      { id: 32, name: "Caxias do Sul" },
      { id: 33, name: "Pelotas" },
      { id: 34, name: "Canoas" },
      { id: 35, name: "Santa Maria" },
      { id: 36, name: "Gravataí" },
      { id: 37, name: "Viamão" },
      { id: 38, name: "Novo Hamburgo" },
      { id: 39, name: "São Leopoldo" },
      { id: 40, name: "Rio Grande" }
    ]
  },
  {
    id: 5,
    name: "Paraná",
    abbreviation: "PR",
    cities: [
      { id: 41, name: "Curitiba" },
      { id: 42, name: "Londrina" },
      { id: 43, name: "Maringá" },
      { id: 44, name: "Ponta Grossa" },
      { id: 45, name: "Cascavel" },
      { id: 46, name: "São José dos Pinhais" },
      { id: 47, name: "Foz do Iguaçu" },
      { id: 48, name: "Colombo" },
      { id: 49, name: "Guarapuava" },
      { id: 50, name: "Paranaguá" }
    ]
  },
  {
    id: 6,
    name: "Bahia",
    abbreviation: "BA",
    cities: [
      { id: 51, name: "Salvador" },
      { id: 52, name: "Feira de Santana" },
      { id: 53, name: "Vitória da Conquista" },
      { id: 54, name: "Camaçari" },
      { id: 55, name: "Juazeiro" },
      { id: 56, name: "Lauro de Freitas" },
      { id: 57, name: "Itabuna" },
      { id: 58, name: "Jequié" },
      { id: 59, name: "Teixeira de Freitas" },
      { id: 60, name: "Alagoinhas" }
    ]
  },
  {
    id: 7,
    name: "Santa Catarina",
    abbreviation: "SC",
    cities: [
      { id: 61, name: "Florianópolis" },
      { id: 62, name: "Joinville" },
      { id: 63, name: "Blumenau" },
      { id: 64, name: "São José" },
      { id: 65, name: "Criciúma" },
      { id: 66, name: "Chapecó" },
      { id: 67, name: "Itajaí" },
      { id: 68, name: "Jaraguá do Sul" },
      { id: 69, name: "Lages" },
      { id: 70, name: "Palhoça" }
    ]
  },
  {
    id: 8,
    name: "Goiás",
    abbreviation: "GO",
    cities: [
      { id: 71, name: "Goiânia" },
      { id: 72, name: "Aparecida de Goiânia" },
      { id: 73, name: "Anápolis" },
      { id: 74, name: "Rio Verde" },
      { id: 75, name: "Luziânia" },
      { id: 76, name: "Águas Lindas de Goiás" },
      { id: 77, name: "Valparaíso de Goiás" },
      { id: 78, name: "Trindade" },
      { id: 79, name: "Formosa" },
      { id: 80, name: "Novo Gama" }
    ]
  },
  {
    id: 9,
    name: "Maranhão",
    abbreviation: "MA",
    cities: [
      { id: 81, name: "São Luís" },
      { id: 82, name: "Imperatriz" },
      { id: 83, name: "São José de Ribamar" },
      { id: 84, name: "Timon" },
      { id: 85, name: "Caxias" },
      { id: 86, name: "Codó" },
      { id: 87, name: "Paço do Lumiar" },
      { id: 88, name: "Açailândia" },
      { id: 89, name: "Bacabal" },
      { id: 90, name: "Balsas" }
    ]
  },
  {
    id: 10,
    name: "Paraíba",
    abbreviation: "PB",
    cities: [
      { id: 91, name: "João Pessoa" },
      { id: 92, name: "Campina Grande" },
      { id: 93, name: "Santa Rita" },
      { id: 94, name: "Patos" },
      { id: 95, name: "Bayeux" },
      { id: 96, name: "Sousa" },
      { id: 97, name: "Cajazeiras" },
      { id: 98, name: "Cabedelo" },
      { id: 99, name: "Guarabira" },
      { id: 100, name: "Mamanguape" }
    ]
  },
    {
        id: 11,
        name: "Pernambuco",
        abbreviation: "PE",
        cities: [
        { id: 101, name: "Recife" },
        { id: 102, name: "Olinda" },
        { id: 103, name: "Jaboatão dos Guararapes" },
        { id: 104, name: "Caruaru" },
        { id: 105, name: "Petrolina" },
        { id: 106, name: "Paulista" },
        { id: 107, name: "Igarassu" },
        { id: 108, name: "Vitória de Santo Antão" },
        { id: 109, name: "Garanhuns" },
        { id: 110, name: "Santa Cruz do Capibaribe" }
        ]
    },
    {
        id: 12,
        name: "Ceará",
        abbreviation: "CE",
        cities: [
        { id: 111, name: "Fortaleza" },
        { id: 112, name: "Caucaia" },
        { id: 113, name: "Juazeiro do Norte" },
        { id: 114, name: "Maracanaú" },
        { id: 115, name: "Sobral" },
        { id: 116, name: "Crato" },
        { id: 117, name: "Itapipoca" },
        { id: 118, name: "Quixadá" },
        { id: 119, name: "Iguatu" },
        { id: 120, name: "Limoeiro do Norte" }
        ]
    }
];

// Função utilitária para buscar cidades por estado
export const getCitiesByState = (stateAbbreviation: string): City[] => {
  const state = statesAndCities.find(state => state.abbreviation === stateAbbreviation);
  return state ? state.cities : [];
};

// Função utilitária para buscar estados
export const getStates = (): State[] => {
  return statesAndCities;
};