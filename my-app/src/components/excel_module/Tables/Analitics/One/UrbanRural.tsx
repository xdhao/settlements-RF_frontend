import React, { useState, useEffect } from "react";
import Table from './TableComponent'
import { UrbanRuralInterface, GetUrbanRural } from "../../../for_api/API_excel_control";

function UrbanRural() {
  const [types, setTypes] = useState<UrbanRuralInterface>({  medium_urban:0,
    medium_rural:0});
  async function getUserInfo() {
    try {
      const response = await GetUrbanRural();
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

export default UrbanRural;
