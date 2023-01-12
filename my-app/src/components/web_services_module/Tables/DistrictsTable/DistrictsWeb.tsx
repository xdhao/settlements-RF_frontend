import React, { useState, useEffect } from "react";
import Table from './TableComponent'
import { DistrctsInterface, GetDistricts } from "../../for_api/API_webservice_control";

export interface CitiesTableInterface{
  reg_id:number
}
const DistrictsWeb: React.FC<CitiesTableInterface> = ({ reg_id}) => {
  const [districts, setDistricts] = useState<DistrctsInterface[]>([]);
  async function getUserInfo() {
    try {
      const response = await GetDistricts(reg_id);
      setDistricts(response);
      console.log(response);
    } catch (e) {
      console.log(e);
    }
  }
  useEffect(() => {
    getUserInfo();
    console.log("districts_web");
  }, []);
  return (
    <div>
    <Table districts={districts} getUserInfo={ getUserInfo}/>
    </div>
  );
}

export default DistrictsWeb;
