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
  count_city:number
  count_pgt:number
  count_p:number
  count_selo:number
  objects:CitInterface[]
}

export const GetCitis = async (id: string) => {
const { data } = await axios.get<CitSummaryInterface>(
  `http://127.0.0.1:8000/api/excel-data/v1.0/get-local-objects/${id}`
);

return data;
};


export interface MediumTypesInterface{
  medium_city:number
  medium_pgt:number
  medium_p:number
  medium_selo:number
}

export const GetMediumTypes = async () => {
const { data } = await axios.get<MediumTypesInterface>(
  `http://127.0.0.1:8000/api/excel-data/v1.0/get-medium-value-of-subject-types`
);

return data;
};


export interface MediumPeopleInterface{
  medium_ur_man:number
  medium_ur_woman:number
  medium_ru_man:number
  medium_ru_woman:number
}

export const GetMediumPeople = async () => {
const { data } = await axios.get<MediumPeopleInterface>(
  `http://127.0.0.1:8000/api/excel-data/v1.0/get-medium-people-perc`
);

return data;
};


export interface UrbanRuralInterface{
  medium_urban:number
  medium_rural:number
}

export const GetUrbanRural = async () => {
const { data } = await axios.get<UrbanRuralInterface>(
  `http://127.0.0.1:8000/api/excel-data/v1.0/get-perc-urbal-rural`
);

return data;
};

