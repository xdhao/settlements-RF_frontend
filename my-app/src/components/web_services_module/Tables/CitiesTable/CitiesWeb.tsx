import React, { useState, useEffect } from "react";
import Table from './TableComponent'
import { CityInterface, GetCities } from "../../for_api/API_webservice_control";


export interface CitiesTableInterface{
  reg_id:number
}

const CitiesWeb: React.FC<CitiesTableInterface> = ({ reg_id}) => {
  const [cities, setCities] = useState<CityInterface[]>([]);
  async function getUserInfo() {
    try {
      if (reg_id!=undefined){
        const response = await GetCities(reg_id);
        setCities(response);
        console.log(response);
      }
    } catch (e) {
      console.log(e);
    }
  }
  useEffect(() => {
    getUserInfo();
    console.log("cities_web");
  }, []);
  return (
    <div>
    <Table cities={cities} getUserInfo={ getUserInfo}/>
    </div>
  );
}

export default CitiesWeb;
