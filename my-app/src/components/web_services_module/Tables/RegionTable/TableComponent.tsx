import React, { useState, useEffect } from "react";
import "../table.css";
import TrTable from "./TableElements";
import {RegionInterface, GetRegions} from "../../for_api/API_webservice_control"
import CitiesWeb from "../CitiesTable/CitiesWeb";
import DistrictsWeb from "../DistrictsTable/DistrictsWeb";


  interface TableInteface {
    regions: RegionInterface[];
    getUserInfo:()=>void
  }
  
  const Table: React.FC<TableInteface> = ({ regions, getUserInfo }) => {
  const [checkRegion, setCheckRegion] = useState(false);
  const [regId, setRegId] = useState(0)

  useEffect(() => {
    //localStorage.removeItem("accessToken")

  }, []);

  return (
    <div
      style={{
        display: "flex",
        justifyContent: "start",
        alignItems: "center",
        textAlign: "center"
      }}
    >
      {!checkRegion? <table style={{ width: "90%", marginTop:"20px" }} className="table">
        <thead>
          <tr>
            <th>
              <span>наименование</span>
            </th>
            <th>
              <span>тип</span>
            </th>
          </tr>
        </thead>
        <tbody>
            {regions.map((tr)=><TrTable tr={tr} getUserInfo={getUserInfo} setCheckRegion={setCheckRegion} setRegId={setRegId}></TrTable>)}
          
        </tbody>
      </table>:<><div><h2>Населенные пункты</h2><CitiesWeb reg_id={regId}></CitiesWeb></div>
      <div><h2>Локальные районы/округа</h2><DistrictsWeb reg_id={regId}></DistrictsWeb></div></>}
      <div>{checkRegion&& <button onClick={()=>setCheckRegion(false)}>Назад</button>}</div>
    </div>
  );
}

export default Table;