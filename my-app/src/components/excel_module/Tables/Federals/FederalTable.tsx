import React, { useState, useEffect } from "react";
import Table from './TableComponent'
import { FederalInterface, GetFederals } from "../../for_api/API_excel_control";

function FederalExcel() {
  const [federals, setDistricts] = useState<FederalInterface[]>([]);
  async function getUserInfo() {
    try {
      const response = await GetFederals();
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
    <Table federals={federals} getUserInfo={ getUserInfo}/>
    </div>
  );
}

export default FederalExcel;
