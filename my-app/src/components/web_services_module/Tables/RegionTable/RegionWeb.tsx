import React, { useState, useEffect } from "react";
import Table from './TableComponent'
import { RegionInterface, GetRegions } from "../../for_api/API_webservice_control";

function RegionsWeb() {
  const [regions, setDistricts] = useState<RegionInterface[]>([]);
  async function getUserInfo() {
    try {
      const response = await GetRegions();
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
    <Table regions={regions} getUserInfo={ getUserInfo}/>
    </div>
  );
}

export default RegionsWeb;
