import axios from "axios";

const url_local = '127.0.0.1:8000';
const url_docker = 'localhost:4110';

export interface CityInterface{
    id:number,
    region:string,
    district:string,
    name: string,
    people: number,
    area: number,
    head: number,
    type: string
}

export const GetCities = async (id: number) => {
  const { data } = await axios.get<CityInterface[]>(
    `http://${url_docker}/api/webservices-data/v1.0/get-cities-by-region/${id}`
  );

  return data;
};

export interface DistrctsInterface{
  id:number,
  region:string,
  name: string,
  type: string
}

export const GetDistricts = async (id: number) => {
  const { data } = await axios.get<DistrctsInterface[]>(
    `http://${url_docker}/api/webservices-data/v1.0/get-districts-by-region/${id}`
  );

  return data;
};


export interface RegionInterface{
  id:number,
  name: string,
  type: string
}

export const GetRegions = async () => {
  const { data } = await axios.get<RegionInterface[]>(
    `http://${url_docker}/api/webservices-data/v1.0/get-regions-without-childs`
  );

  return data;
};


export interface LastAppealDateInterface{
  date: Date,
}

export const GetLastAppealDate = async () => {
  const { data } = await axios.get<LastAppealDateInterface>(
    `http://${url_docker}/api/webservices-data/v1.0/get-last-appeal-date`
  );

  return data;
};
