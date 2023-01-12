import React, { useState, useEffect } from "react";
import Table from './TableComponent'
import { CountryInterface, GetCountry } from "../../for_api/API_excel_control";

function CountryExcel() {
  const [country, setDistricts] = useState<CountryInterface[]>([]);
  async function getUserInfo() {
    try {
      const response = await GetCountry();
      setDistricts(response);
      console.log(response);
    } catch (e) {
      console.log(e);
    }
  }
  useEffect(() => {
    getUserInfo();
    console.log("regions_web");
  }, []);
  return (
    <div>
    <Table country={country} getUserInfo={ getUserInfo}/>
    </div>
  );
}

export default CountryExcel;
