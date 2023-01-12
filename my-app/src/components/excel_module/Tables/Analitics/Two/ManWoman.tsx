import React, { useState, useEffect } from "react";
import Table from './TableComponent'
import { MediumPeopleInterface, GetMediumPeople } from "../../../for_api/API_excel_control";

function ManWoman() {
  const [types, setTypes] = useState<MediumPeopleInterface>({    medium_ur_man:0,
    medium_ur_woman:0,
    medium_ru_man:0,
    medium_ru_woman:0});
  async function getUserInfo() {
    try {
      const response = await GetMediumPeople();
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

export default ManWoman;
