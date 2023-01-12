import axios from "axios";

export interface PeopleInterface{
  all:number,
  man:number,
  woman:number,
  man_perc:number,
  woman_perc:number
}

export interface PopulationInterface{
  urban_people:PeopleInterface,
  rural_people:PeopleInterface,
}


export interface CountryInterface{
    guid:string,
    name: string,
    population: PopulationInterface,
}

export const GetCountry = async () => {
  const { data } = await axios.get<CountryInterface[]>(
    `http://127.0.0.1:8000/api/excel-data/v1.0/get-counties`
  );

  return data;
};


export interface FederalInterface{
  guid:string,
  name: string,
  country:string
  population: PopulationInterface,
}

export const GetFederals = async () => {
const { data } = await axios.get<FederalInterface[]>(
  `http://127.0.0.1:8000/api/excel-data/v1.0/get-federal-districts`
);

return data;
};


export interface AutInterface{
  guid:string,
  name: string,
  region:string
  population: PopulationInterface,
}

export const GetAutos = async () => {
const { data } = await axios.get<AutInterface[]>(
  `http://127.0.0.1:8000/api/excel-data/v1.0/get-autonomic-districts`
);

return data;
};

export interface RegInterface{
  guid:string,
  name: string,
  district:string
  population: PopulationInterface,
}

export const GetRegions = async (id: string) => {
const { data } = await axios.get<RegInterface[]>(
  `http://127.0.0.1:8000/api/excel-data/v1.0/get-regions/${id}`
);

return data;
};

export interface CitInterface{
  guid:string,
  name: string,
  region:string
  type:string
  people:PeopleInterface
}

export interface CitSummaryInterface{
  sum_woman:string,
  sum_man: string,
  sum_all:string
  count_city:string
  count_pgt:PeopleInterface
  count_p:PeopleInterface
  count_selo:PeopleInterface
  objects:CitInterface[]
}

export const GetCitis = async (id: string) => {
const { data } = await axios.get<CitSummaryInterface>(
  `http://127.0.0.1:8000/api/excel-data/v1.0/get-local-objects/${id}`
);

return data;
};