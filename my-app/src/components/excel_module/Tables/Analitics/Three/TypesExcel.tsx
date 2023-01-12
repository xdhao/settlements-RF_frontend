import React, { useState, useEffect } from "react";
import Table from './TableComponent'
import { MediumTypesInterface, GetMediumTypes } from "../../../for_api/API_excel_control";

function TypesExcel() {
  const [types, setTypes] = useState<MediumTypesInterface>({    medium_city:0,
    medium_pgt:0,
    medium_p:0,
    medium_selo:0});
    
  async function getUserInfo() {
    try {
      const response = await GetMediumTypes();
      setTypes(response);
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
    <Table types={types} getUserInfo={ getUserInfo}/>
    </div>
  );
}

export default TypesExcel;
