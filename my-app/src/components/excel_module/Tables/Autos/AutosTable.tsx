import React, { useState, useEffect } from "react";
import Table from './TableComponent'
import { AutInterface, GetAutos } from "../../for_api/API_excel_control";

function AutosExcel() {
  const [country, setDistricts] = useState<AutInterface[]>([]);
  async function getUserInfo() {
    try {
      const response = await GetAutos();
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

export default AutosExcel;
